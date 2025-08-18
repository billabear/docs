---
sidebar_position: 1
slug: /
---

# Introduction to BillaBear

BillaBear is a comprehensive standalone subscription management and billing system designed to help businesses efficiently manage their subscription-based services. It provides a user-friendly interface and powerful tools to handle all aspects of the subscription lifecycle, from customer management to invoice generation and payment processing.

## What is BillaBear?

BillaBear is a complete solution for businesses that need to:

- Manage customer subscriptions and billing
- Generate and deliver professional invoices
- Process payments and handle financial transactions
- Track subscription metrics and analytics
- Customize billing workflows to match business needs

Whether you're a small business just starting with subscription services or a large enterprise with complex billing requirements, BillaBear provides the tools you need to streamline your subscription management processes.

## Key Features

### Subscription Management

BillaBear offers comprehensive subscription management capabilities:

- **Subscription Plans**: Create and manage different subscription plans with various pricing options
- **Flexible Billing Cycles**: Support for different payment schedules (monthly, quarterly, annual, etc.)
- **Trial Periods**: Configure free trial periods for subscription plans
- **Seat-Based Subscriptions**: Manage subscriptions based on the number of seats or users
- **Usage-Based Billing**: Charge customers based on their actual usage of your services
- **Subscription Modifications**: Easily change plans, prices, or payment methods
- **Cancellation Management**: Handle subscription cancellations with customizable workflows

### Invoice Management

BillaBear provides a robust invoice system:

- **Multiple Formats**: Generate invoices in various formats (PDF, ZUGFeRD, etc.)
- **Customizable Templates**: Create branded invoice templates
- **Flexible Delivery**: Deliver invoices via email, SFTP, or webhooks
- **Payment Tracking**: Monitor invoice payment status
- **Automatic Generation**: Schedule automatic invoice generation for recurring subscriptions

### Payment Processing

BillaBear integrates with Stripe for payment processing:

- **Stripe Integration**: Seamless integration with Stripe Billing
- **Payment Collection**: Automatically collect payments for invoices
- **Refund Management**: Process refunds when needed
- **Chargeback Handling**: Manage chargebacks from customers
- **Payment Method Management**: Store and manage customer payment methods securely

### Customer Management

BillaBear helps you manage your customer relationships:

- **Customer Profiles**: Store and manage customer information
- **Multiple Payment Methods**: Support for multiple payment methods per customer
- **Customer Portal**: Provide customers with access to their subscription information
- **Communication Tools**: Send notifications and updates to customers

### Customization and Branding

BillaBear allows you to customize the system to match your brand:

- **Email Templates**: Create custom email templates for various notifications
- **Brand Settings**: Configure brand-specific settings
- **Notification Preferences**: Set up notification preferences for different events

### Data Import and Migration

BillaBear makes it easy to migrate from existing systems:

- **Stripe Data Import**: Import customers, products, prices, subscriptions, payments, refunds, and chargebacks from Stripe
- **Data Mapping**: Map existing data to BillaBear's data structure

### Technical Features

BillaBear includes several technical features for developers and administrators:

- **API Access**: Integrate with other systems using the BillaBear API
- **Webhook Support**: Send and receive webhooks for event-driven integrations
- **User Roles**: Configure different access levels for staff members
- **Audit Logging**: Track changes to important data
- **Analytics and Reporting**: Generate reports on subscription metrics, revenue, and other key indicators

## Stripe Integration

BillaBear integrates with Stripe Billing, allowing you to leverage Stripe's payment processing capabilities while gaining more control over your billing processes. The integration enables you to:

- Import existing Stripe data into BillaBear
- Use Stripe for payment processing while managing subscriptions in BillaBear
- Customize invoices, receipts, and email templates beyond what Stripe offers
- Maintain synchronization between BillaBear and Stripe

## Documentation Structure

The BillaBear documentation is organized into several sections:

### Technical Documentation

The [Technical Documentation](./technical/) covers aspects relevant to developers, system administrators, and technical staff:

- API usage and configuration
- Installation and deployment options
- Environment variables and configuration
- Command-line tools
- Webhook integration
- System architecture

### User Documentation

The [User Documentation](./user/) explains how to use BillaBear's web interface for day-to-day operations:

- Managing subscriptions
- Working with customers
- Configuring templates
- Setting up brand preferences
- Importing data from Stripe
- User roles and permissions

### API Documentation

Detailed API documentation is available as a separate Swagger documentation site at [swagger.billabear.com](https://swagger.billabear.com).

## Getting Started

To get started with BillaBear:

1. Review the [Installation Guide](./technical/install) for deployment options
2. Set up your [Brand Settings](./user/brand_settings/notification_settings)
3. Import your existing data or [Create Customers](./user/customers/create)
4. Configure your [Subscription Plans](./user/subscriptions/create_subscription)
5. Start managing your subscriptions and billing

Whether you're migrating from another system or setting up subscription billing for the first time, BillaBear provides the tools and flexibility you need to create an efficient, customized billing workflow for your business.