---
title: Technical Documentation
sidebar_label: Technical
sidebar_position: 2
---

# BillaBear Technical Documentation

Welcome to the BillaBear technical documentation. This section provides comprehensive information for developers, system administrators, and technical users who need to install, configure, integrate with, or extend BillaBear.

## System Overview

BillaBear is a comprehensive billing and subscription management system built with Symfony (PHP) and Vue.js. It integrates with Stripe for payment processing and provides tools for managing customers, subscriptions, invoices, and related operations.

### Key Technical Features

- **Subscription Management**: Create, update, and manage recurring billing subscriptions
- **Payment Processing**: Process payments via Stripe integration
- **Invoice Generation**: Automatically generate and deliver invoices
- **API Access**: Programmatically interact with all BillaBear functionality
- **Webhook Support**: Receive notifications for important events
- **Background Processing**: Handle time-consuming tasks asynchronously
- **Multi-currency Support**: Manage billing in multiple currencies
- **Tax Management**: Configure and apply tax rules automatically
- **Usage-based Billing**: Track and bill based on customer usage metrics

## Installation

BillaBear can be deployed in various environments. Choose the installation method that best suits your needs:

- [Installation Overview](./install/index.md) - General installation information and requirements
- [Docker Compose Deployment](./install/deploy_docker.md) - Deploy using Docker Compose (recommended for development)
- [DigitalOcean Deployment](./install/deploy_digitalocean.md) - Deploy to DigitalOcean App Platform (recommended for production)
- [Environment Variables](./install/env_variables.md) - Configure BillaBear using environment variables
- [HTTP Routing](./install/routing.md) - Understand BillaBear's routing structure for proper configuration

## API Documentation

BillaBear provides a comprehensive REST API that allows you to programmatically interact with all aspects of the system:

- [API Overview](./api/index.md) - Introduction to the BillaBear API
- [Authentication](./api/authentication.md) - How to authenticate with the API
- [Create API Key](./api/create_api_key.md) - How to create an API key for API access
- [Disable API Key](./api/disable.md) - How to disable an API key when no longer needed

### API Endpoints

- [Customers API](./api/endpoints/customers.md) - Manage customer data
- [Subscriptions API](./api/endpoints/subscriptions.md) - Create and manage subscriptions
- [Invoices API](./api/endpoints/invoices.md) - Generate and retrieve invoices
- [Payments API](./api/endpoints/payments.md) - Process and manage payments
- [Products API](./api/endpoints/products.md) - Manage products and pricing
- [Usage API](./api/endpoints/usage.md) - Track and query usage data

## Webhooks

BillaBear can send webhook notifications for important events:

- [Webhook Overview](./webhooks/index.md) - Introduction to BillaBear webhooks
- [Webhook Events](./webhooks/events.md) - List of available webhook events
- [Webhook Security](./webhooks/security.md) - How to verify webhook authenticity

## Command Line Tools

BillaBear includes several command-line tools to help with administration and automation:

- [Commands Overview](./commands/index.md) - List of available commands

### Background and Maintenance Commands

- [Background Generic Tasks](./commands/background_generic.md) - Handle background generic tasks
- [Fix Stats](./commands/fix_stats.md) - Fix statistics if they become inconsistent
- [Exchange Rates Refresh](./commands/exchange_rates_refresh.md) - Refresh currency exchange rates
- [Update Check](./commands/update_check.md) - Check for BillaBear updates

### Invoice and Payment Commands

- [Generate Invoices](./commands/generate_invoices.md) - Generate invoices for subscriptions
- [Payment Retry](./commands/payment_retries.md) - Retry failed payments
- [Expiring Cards First Day](./commands/expiring_cards_first_day.md) - Send notifications for expiring cards
- [Expiring Cards Day Before](./commands/expiring_cards_day_before.md) - Send notifications before subscription renewal

### Stripe Import Commands

- [Stripe Complete Import](./commands/stripe_complete_import.md) - Handle Stripe import process
- [Stripe Customer Import](./commands/stripe_import_customer.md) - Import customers from Stripe
- [Stripe Product Import](./commands/stripe_import_product.md) - Import products from Stripe
- [Stripe Price Import](./commands/stripe_import_price.md) - Import prices from Stripe
- [Stripe Subscription Import](./commands/stripe_import_subscription.md) - Import subscriptions from Stripe
- [Stripe Payment Import](./commands/stripe_import_payment.md) - Import payments from Stripe
- [Stripe Refund Import](./commands/stripe_import_refund.md) - Import refunds from Stripe
- [Stripe Charge Back Import](./commands/stripe_import_chargeback.md) - Import chargebacks from Stripe

### User Management Commands

- [Create New User](./commands/user_create.md) - Create a new user account
- [Change User Password](./commands/change_password.md) - Change a user's password
- [Give User Role](./commands/user_give_role.md) - Assign a role to a user
- [Remove User Role](./commands/user_remove_role.md) - Remove a role from a user

### Development Commands

- [Generate Demo Data](./commands/demo_data.md) - Generate demo data for development purposes

## Integration Development

BillaBear supports integration with various third-party services:

- [Integration Overview](./integration/index.md) - Introduction to BillaBear integrations
- [CRM Integration](./integration/crm.md) - Integrate with Customer Relationship Management systems
- [Accounting Integration](./integration/accounting.md) - Integrate with accounting systems
- [Customer Support Integration](./integration/customer_support.md) - Integrate with customer support systems
- [Newsletter Integration](./integration/newsletter.md) - Integrate with newsletter services
- [Slack Integration](./integration/slack.md) - Integrate with Slack for notifications

## Development Guidelines

For developers who want to extend or contribute to BillaBear:

- [Development Setup](./development/setup.md) - Setting up a development environment
- [Coding Standards](./development/coding_standards.md) - BillaBear coding standards and best practices
- [Testing](./development/testing.md) - How to write and run tests
- [Contributing](./development/contributing.md) - Guidelines for contributing to BillaBear

## Troubleshooting

Common issues and their solutions:

- [Installation Issues](./troubleshooting/installation.md) - Troubleshoot installation problems
- [API Issues](./troubleshooting/api.md) - Troubleshoot API-related problems
- [Stripe Integration Issues](./troubleshooting/stripe.md) - Troubleshoot Stripe integration problems
- [Performance Issues](./troubleshooting/performance.md) - Troubleshoot performance problems

## Support

If you encounter any difficulties while setting up or using BillaBear, please reach out for assistance:

- Email: support@billabear.com
- [GitHub Discussions](https://github.com/billabear/billabear/discussions/categories/q-a)