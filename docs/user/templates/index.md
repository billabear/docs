---
title: Templates
sidebar_label: Templates
sidebar_position: 3
---

# Templates in BillaBear

BillaBear provides powerful customisation options through templates for your invoices, receipts, and emails. This allows you to maintain consistent branding, meet legal requirements, and communicate effectively with your customers.

## What Are Templates?

Templates are pre-designed documents that can be customised with your branding, content, and specific information. In BillaBear, templates are used for:

- **Email Communications**: Notifications sent to customers about subscriptions, payments, and invoices
- **Invoices**: Legal billing documents sent to customers
- **Receipts**: Confirmation documents for completed payments

## How Templates Work

BillaBear's templates are powered by [Twig](https://twig.symfony.com), a flexible and secure template engine. Templates work by:

1. **Using Variables**: Special placeholders that are replaced with actual data (customer name, invoice amount, etc.)
2. **Supporting Localisation**: Different templates for different languages
3. **Brand Customisation**: Separate templates for each brand you manage

## Template Types

BillaBear supports two main categories of templates:

### Email Templates

Email templates control the content and appearance of emails sent to your customers. You can create templates for various notification types, such as:
- Subscription created
- Subscription cancelled
- Payment received
- Invoice created
- Payment card expiring

### PDF Templates

PDF templates control the appearance and content of documents generated as PDFs, including:
- Invoices
- Receipts

## Getting Started with Templates

To work with templates in BillaBear, you'll need to:

1. Understand the available variables for each template type
2. Create templates for your specific needs
3. Assign templates to the appropriate brands and locales

The following sections provide detailed information about template variables and how to create and manage templates in BillaBear.