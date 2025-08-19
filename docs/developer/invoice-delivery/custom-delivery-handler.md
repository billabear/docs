---
title: Creating a Custom Invoice Delivery Handler
sidebar_label: Custom Delivery Handler
sidebar_position: 1
---

# Creating a Custom Invoice Delivery Handler

This guide explains how to create a custom invoice delivery handler for BillaBear. Custom delivery handlers allow you to extend BillaBear's invoice delivery capabilities to support additional delivery methods beyond the built-in options.

## Requirements

Before creating a custom delivery handler, ensure you have:

- A working BillaBear installation
- Understanding of PHP and Symfony framework concepts
- Familiarity with Dependency Injection and Service Tags

## Implementation Steps

### 1. Create a Delivery Handler Class

Create a new PHP class that implements the `DeliveryHandlerInterface`. This interface requires two methods:

- `getName()`: Returns a unique identifier for your delivery handler
- `deliver()`: Contains the logic to deliver an invoice

Here's the basic structure of a delivery handler:

```php
<?php

namespace YourNamespace\Invoice\Delivery;

use BillaBear\Entity\Invoice;
use BillaBear\Entity\InvoiceDeliverySettings;
use BillaBear\Invoice\Delivery\DeliveryHandlerInterface;
use BillaBear\Invoice\Formatter\InvoiceFormatterProvider;
use Parthenon\Common\LoggerAwareTrait;

class YourCustomDeliveryHandler implements DeliveryHandlerInterface
{
    use LoggerAwareTrait;

    public const NAME = 'your_custom_handler';

    public function __construct(
        private InvoiceFormatterProvider $invoiceFormatterProvider,
        // Add any other dependencies your handler needs
    ) {
    }

    public function getName(): string
    {
        return self::NAME;
    }

    public function deliver(Invoice $invoice, InvoiceDeliverySettings $invoiceDelivery): void
    {
        // Your delivery logic here
    }
}
```

### 2. Implement the Delivery Logic

The `deliver()` method is where you implement the actual logic to deliver the invoice. This method receives:

- `$invoice`: The invoice to be delivered
- `$invoiceDelivery`: The delivery settings for this invoice

Here's an example implementation for a custom API-based delivery handler:

```php
public function deliver(Invoice $invoice, InvoiceDeliverySettings $invoiceDelivery): void
{
    $this->getLogger()->info('Delivering invoice via custom API', [
        'invoice_id' => (string) $invoice->getId(),
        'invoice_delivery_id' => (string) $invoiceDelivery->getId()
    ]);

    // Get the invoice in the requested format
    $formatter = $this->invoiceFormatterProvider->getFormatterByType($invoiceDelivery->getInvoiceFormat());
    $invoiceContent = $formatter->generate($invoice);
    $filename = $formatter->filename($invoice);

    try {
        // Your custom delivery logic here
        // For example, sending to a third-party API:
        $response = $this->apiClient->sendInvoice(
            $invoiceContent,
            $filename,
            $invoice->getCustomer()->getExternalCustomerReference(),
            $invoiceDelivery->getApiKey()
        );

        if (!$response->isSuccessful()) {
            $this->getLogger()->error('Failed to deliver invoice via custom API', [
                'invoice_id' => (string) $invoice->getId(),
                'error' => $response->getErrorMessage()
            ]);
            throw new \RuntimeException('Failed to deliver invoice: ' . $response->getErrorMessage());
        }
    } catch (\Exception $e) {
        $this->getLogger()->error('Exception while delivering invoice via custom API', [
            'invoice_id' => (string) $invoice->getId(),
            'exception' => $e->getMessage()
        ]);
        throw $e;
    }
}
```

### 3. Automatic Discovery of Delivery Handlers

One of the key features of BillaBear's invoice delivery system is the automatic discovery of delivery handlers. When you create a class that implements the `DeliveryHandlerInterface`, it will be automatically discovered and registered as a delivery handler in the system.

This automatic discovery is made possible by the `AutoconfigureTag` attribute on the `DeliveryHandlerInterface`:

```php
#[AutoconfigureTag('billabear.invoice.delivery_handler')]
interface DeliveryHandlerInterface
{
    public function getName(): string;
    
    public function deliver(Invoice $invoice, InvoiceDeliverySettings $invoiceDelivery): void;
}
```

The `AutoconfigureTag` attribute automatically tags any class that implements this interface with the `billabear.invoice.delivery_handler` tag. The `DeliveryHandlerProvider` then uses the `AutowireIterator` attribute to collect all services tagged with this tag:

```php
public function __construct(
    #[AutowireIterator('billabear.invoice.delivery_handler')]
    private readonly iterable $handlers,
) {
}
```

This means that you don't need to manually register your delivery handler in any configuration files or service containers. Simply implementing the `DeliveryHandlerInterface` is enough for your handler to be discovered and used by the system.

## Best Practices

When creating a custom delivery handler:

1. **Error Handling**: Always handle errors and exceptions properly
2. **Logging**: Use the LoggerAwareTrait to log important events and errors
3. **Configuration**: Make your handler configurable to support different use cases
4. **Testing**: Write comprehensive tests for your handler
5. **Documentation**: Document your handler's configuration options and behavior

## Conclusion

By creating a custom delivery handler, you can extend BillaBear's invoice delivery capabilities to support your specific requirements. The flexible architecture allows for easy integration with any delivery method or third-party service.