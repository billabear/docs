---
title: Invoice Delivery
sidebar_label: Delivery
sidebar_position: 2
---

# Invoice Delivery System

BillaBear provides a flexible invoice delivery system that allows invoices to be delivered to customers through various channels. This document explains how the delivery system works and how to extend it with custom delivery handlers.

## Overview

The invoice delivery system in BillaBear:

1. Supports multiple delivery methods (Email, SFTP, Webhook)
2. Integrates with the invoice formatter system
3. Uses a handler-based architecture for extensibility
4. Provides status tracking for deliveries
5. Supports asynchronous delivery via Symfony Messenger

## Delivery Methods

BillaBear supports the following delivery methods:

### Email Delivery

Email delivery sends the invoice as an attachment to the customer's email address. Key features:

- Supports all invoice formats (PDF, ZUGFeRD, etc.)
- Can use a custom email address instead of the customer's default
- Includes a payment link in the email
- Uses templates for email content

### SFTP Delivery

SFTP (Secure File Transfer Protocol) delivery uploads the invoice to a remote server. Key features:

- Secure transfer using SSH
- Configurable server, username, password, and path
- Supports all invoice formats
- Useful for integration with accounting systems

### Webhook Delivery

Webhook delivery posts the invoice to a URL provided by the customer. Key features:

- HTTP POST request with the invoice as the payload
- Configurable URL and headers
- Supports all invoice formats
- Useful for integration with external systems

## Delivery Settings

Invoice delivery is configured through the `InvoiceDeliverySettings` entity, which contains:

- The delivery method (Email, SFTP, Webhook)
- Method-specific settings (email address, SFTP credentials, webhook URL)
- The invoice format to use (PDF, ZUGFeRD, etc.)
- Customer association

Each customer can have multiple delivery settings, allowing invoices to be delivered through multiple channels or in multiple formats.

## Delivery Architecture

### DeliveryHandlerInterface

The core of the delivery system is the `DeliveryHandlerInterface`:

```php
interface DeliveryHandlerInterface
{
    public function deliver(Invoice $invoice, InvoiceDeliverySettings $invoiceDelivery): void;
}
```

Each delivery method implements this interface to handle its specific delivery logic.

### Delivery Status Tracking

BillaBear tracks the status of each delivery attempt using the `InvoiceDeliveryStatus` enum:

- `SUCCESS` - The delivery was successful
- `FAILED` - The delivery failed

This status is stored in the `InvoiceDelivery` entity, which links an invoice to its delivery settings and records the delivery status.

### Asynchronous Delivery

BillaBear uses Symfony Messenger for asynchronous invoice delivery, which:

1. Improves performance by not blocking the request
2. Provides retry capabilities for failed deliveries
3. Allows for better error handling and logging

The delivery process is initiated by dispatching an `InvoiceDeliveryRequest` message, which is then handled by the `InvoiceDeliveryRequestHandler`.

## Implementing a Custom Delivery Handler

To create a custom delivery method, you need to:

1. Create a new delivery type in the `InvoiceDeliveryType` enum
2. Implement the `DeliveryHandlerInterface`
3. Register your handler as a service

### Example Implementation

Here's an example of a custom delivery handler for a cloud storage service:

```php
<?php

namespace Custom\Invoice\Delivery;

use BillaBear\Entity\Invoice;
use BillaBear\Entity\InvoiceDeliverySettings;
use BillaBear\Invoice\Delivery\DeliveryHandlerInterface;
use BillaBear\Invoice\Formatter\InvoiceFormatterProvider;
use Parthenon\Common\LoggerAwareTrait;

class CloudStorageDeliveryHandler implements DeliveryHandlerInterface
{
    use LoggerAwareTrait;

    public function __construct(
        private InvoiceFormatterProvider $invoiceFormatterProvider,
        private CloudStorageClient $cloudStorageClient,
    ) {
    }

    public function deliver(Invoice $invoice, InvoiceDeliverySettings $invoiceDelivery): void
    {
        // Get the formatter based on delivery settings
        $formatter = $this->invoiceFormatterProvider->getFormatterByType($invoiceDelivery->getInvoiceFormat());
        
        // Generate the invoice content
        $content = $formatter->generate($invoice);
        $filename = $formatter->filename($invoice);
        
        // Get cloud storage settings from delivery settings
        $bucketName = $invoiceDelivery->getCloudStorageBucket();
        $path = $invoiceDelivery->getCloudStoragePath();
        
        try {
            // Upload to cloud storage
            $this->cloudStorageClient->upload(
                $bucketName,
                $path . '/' . $filename,
                $content
            );
            
            $this->getLogger()->info('Invoice uploaded to cloud storage', [
                'invoice_number' => $invoice->getInvoiceNumber(),
                'bucket' => $bucketName,
                'path' => $path,
            ]);
        } catch (\Exception $e) {
            $this->getLogger()->error('Failed to upload invoice to cloud storage', [
                'invoice_number' => $invoice->getInvoiceNumber(),
                'bucket' => $bucketName,
                'path' => $path,
                'error' => $e->getMessage(),
            ]);
            
            throw $e;
        }
    }
}
```

### Service Registration

Register your delivery handler in `config/services.yaml`:

```yaml
services:
    Custom\Invoice\Delivery\CloudStorageDeliveryHandler:
        arguments:
            $invoiceFormatterProvider: '@BillaBear\Invoice\Formatter\InvoiceFormatterProvider'
            $cloudStorageClient: '@Custom\CloudStorage\CloudStorageClient'
        tags:
            - { name: 'monolog.logger', channel: 'invoice_delivery' }
```

## Best Practices

When working with the invoice delivery system:

1. Always handle errors gracefully and log appropriate information
2. Consider security implications, especially for external delivery methods
3. Test delivery handlers with various invoice formats and sizes
4. Implement proper validation for delivery settings
5. Consider rate limiting for external API calls (e.g., webhooks)
6. Use the asynchronous delivery system for better performance
7. Implement proper retry logic for failed deliveries

## Integration with Formatters

The delivery system integrates closely with the invoice formatter system:

1. Each delivery setting specifies which formatter to use
2. The delivery handler uses the formatter to generate the invoice content
3. The formatter determines the filename and format of the delivered invoice

This modular approach allows for great flexibility in how invoices are formatted and delivered to customers.