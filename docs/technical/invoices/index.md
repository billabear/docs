---
title: Invoices
sidebar_label: Invoices
sidebar_position: 12
---

# Invoice System in BillaBear

BillaBear provides a comprehensive invoice management system that handles the creation, formatting, and delivery of invoices. This documentation section covers the technical aspects of working with invoices in BillaBear.

## Overview

The invoice system in BillaBear consists of several key components:

1. **Invoice Entity** - The core data structure that represents an invoice
2. **Invoice Formatters** - Components that generate invoices in different formats (PDF, ZUGFeRD, etc.)
3. **Invoice Delivery** - System for delivering invoices to customers via various methods (Email, SFTP, Webhook)

## Invoice Entity

The `Invoice` entity in BillaBear contains all the information needed to represent an invoice, including:

- Basic invoice information (invoice number, creation date, due date)
- Financial information (currency, amount due, total, subtotal, tax total)
- Customer information
- Line items
- Payment status
- Addresses (biller and payee)
- Related subscriptions and payments

The entity also provides methods for accessing monetary values in a formatted way and tracking the payment status of the invoice.

## Key Features

### Multiple Format Support

BillaBear supports generating invoices in multiple formats:

- PDF (default)
- ZUGFeRD (German electronic invoice format)
- ZUGFeRD V2 (Updated version of the German electronic invoice format)
- Custom formats (via the formatter interface)

See [Invoice Formatters](./formatters.md) for more details on how to work with and extend the formatting system.

### Flexible Delivery Options

Invoices can be delivered to customers through various channels:

- Email (with the invoice attached)
- SFTP (Secure File Transfer Protocol)
- Webhook (Posted to a URL the customer provides)

Each delivery method can be configured per customer and supports different invoice formats.

See [Invoice Delivery](./delivery.md) for more details on the delivery system.

### Integration with Payment Processing

The invoice system integrates with BillaBear's payment processing system, allowing:

- Automatic payment collection for invoices
- Manual payment recording
- Tracking of payment status
- Generation of payment links for customers

### Customization Options

BillaBear provides several ways to customize the invoice system:

- Custom invoice templates
- Brand-specific settings
- Customer-specific delivery preferences
- Custom formatters for specialized invoice formats

## Working with Invoices

To work with invoices in BillaBear, you'll typically interact with:

- The `Invoice` entity and related repositories
- The `InvoiceFormatterInterface` and its implementations
- The `DeliveryHandlerInterface` and its implementations

For specific implementation details, refer to the following sections:

- [Invoice Formatters](./formatters.md) - How to create and use invoice formatters
- [Invoice Delivery](./delivery.md) - How to configure and extend the invoice delivery system