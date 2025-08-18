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