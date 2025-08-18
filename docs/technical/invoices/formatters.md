---
title: Invoice Formatters
sidebar_label: Formatters
sidebar_position: 1
---

# Invoice Formatters

BillaBear allows you to create your own Invoice Formatters to be used with the invoice delivery system. This feature enables you to generate invoices in various formats such as PDF, XML, or custom formats to meet specific requirements.

## How Invoice Formatters Work

Invoice formatters in BillaBear:

1. Implement the `InvoiceFormatterInterface`
2. Are automatically registered in the system via Symfony's autoconfiguration
3. Can be selected based on customer preferences or specific format requirements
4. Generate invoice content in the desired format (PDF, XML, etc.)
5. Provide appropriate filenames for the generated invoices

BillaBear includes several built-in formatters:
- PDF Generator (default)
- ZUGFeRD (German electronic invoice format)
- ZUGFeRD V2 (Updated version of the German electronic invoice format)

## Creating a Custom Formatter

To create a new invoice formatter, you need to create a class that implements the `BillaBear\Invoice\Formatter\InvoiceFormatterInterface`. Once created, it will be automatically tagged as an invoice formatter and added to the list of available invoice formats.

The interface requires implementing the following methods:

- `generate(Invoice $invoice): mixed` - Generates the formatted invoice content
- `filename(Invoice $invoice): string` - Determines the filename for the generated invoice
- `name(): string` - Returns the unique identifier for the formatter
- `supports(string $type): bool` - Checks if the formatter supports a specific format type

### Example Implementation

```php
<?php

namespace Custom\Invoice;

use BillaBear\Entity\Invoice;
use BillaBear\Invoice\Formatter\InvoiceFormatterInterface;

class CustomFormatter implements InvoiceFormatterInterface
{
    public const string FORMAT_NAME = 'custom.invoice.formatter';

    public function generate(Invoice $invoice): mixed
    {
        $xml = '';
        // Your custom logic to generate the invoice in your desired format
        // This could involve using templates, generating XML, JSON, or any other format

        return $xml;
    }

    public function filename(Invoice $invoice): string
    {
        return sprintf('invoice-%s.xml', $invoice->getInvoiceNumber());
    }

    public function supports(string $type): bool
    {
        return self::FORMAT_NAME === $type;
    }

    public function name(): string
    {
        return self::FORMAT_NAME;
    }
}
```

## How Formatters Are Selected

BillaBear uses the `InvoiceFormatterProvider` to select the appropriate formatter:

1. By default, the PDF formatter is used if no specific format is requested
2. Customers can have a preferred invoice format set in their profile
3. Specific formats can be requested when generating invoices programmatically
4. The system selects a formatter by checking which one supports the requested format

The selection process works as follows:

```php
// Get formatter based on customer preferences
$formatter = $formatterProvider->getFormatter($customer);

// Or get formatter by specific format
$formatter = $formatterProvider->getFormatterByType('pdf');

// Generate the invoice
$invoiceContent = $formatter->generate($invoice);
```

## Best Practices

When creating custom invoice formatters:

1. Use a unique and descriptive format name to avoid conflicts
2. Implement proper error handling in the `generate` method
3. Return appropriate file extensions in the `filename` method
4. Consider internationalisation requirements for different customers
5. Test your formatter with various invoice scenarios (different currencies, tax settings, etc.)
6. Ensure your formatter handles all invoice line types correctly
7. Consider performance implications for large invoices

## Integration with Invoice Delivery

Custom formatters integrate seamlessly with BillaBear's invoice delivery system, allowing invoices to be:

1. Generated in your custom format
2. Delivered via email, SFTP, or webhook
3. Made available for download in the customer portal
4. Stored in the system for future reference

When a delivery is requested, the system:
1. Determines the appropriate formatter based on delivery settings
2. Generates the invoice using the formatter
3. Delivers the generated content via the specified delivery method

This modular approach allows for great flexibility in how invoices are formatted and delivered to customers.