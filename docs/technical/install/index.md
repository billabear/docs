---
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started with BillaBear

BillaBear is a comprehensive billing and subscription management system designed to simplify your billing operations. It integrates with Stripe for payment processing and provides tools for managing customers, subscriptions, and invoices.

## Support

If you encounter any difficulties while setting up or using BillaBear, please reach out for assistance.

You can get support from:

* Email: support@billabear.com
* [GitHub Discussions](https://github.com/billabear/billabear/discussions/categories/q-a)

## Installation Options

BillaBear offers multiple installation methods to suit your environment. Choose the option that best fits your needs:

### Docker Compose (Recommended for Local Development)

1. Ensure you have Docker Compose installed on your system
2. Clone the hosting repository:
   ```bash
   git clone https://github.com/billabear/hosting-docker-compose.git billabear
   ```
3. Navigate to the directory:
   ```bash
   cd billabear
   ```
4. Edit the `.env` file to configure your environment:
   ```bash
   nano .env
   ```
5. Start the containers:
   ```bash
   docker compose up -d
   ```

### DigitalOcean App Platform (Recommended for Production)

1. Click the "Deploy to DigitalOcean" button in the [installation documentation](../install/deploy_digitalocean)
2. Click "Next" on the Resources screen
3. Click "Edit" on Global Environment Variables
4. Enter your Stripe API credentials (see "Connecting to Stripe" section below)
5. Click "Save"
6. Click "Next" on Environment Variables
7. Click "Next" on Info
8. Click "Create Resources"

For a visual guide, watch the [deployment demonstration video](https://youtu.be/cbInyGtqLCs).

## Initial Setup

After installation, BillaBear automatically handles database creation. When you first access the application, you'll be presented with a setup form to create your initial administrator account:

1. Access the BillaBear application in your browser
2. Complete the setup form with your administrator details:
   - Name
   - Email
   - Password
3. Submit the form to create your account and complete the initial setup

## Connecting to Stripe

BillaBear requires Stripe for payment processing. Follow these steps to connect your Stripe account:

### Setting Up Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Create a new secret key or use an existing one
3. Copy the secret key and add it to your environment as `STRIPE_PRIVATE_API_KEY`
4. Copy the publishable key and add it to your environment as `STRIPE_PUBLIC_API_KEY`

### Importing Existing Stripe Data

If you're migrating from Stripe to BillaBear, you can import your existing data:

1. Log in to BillaBear as an administrator
2. Click "Settings" in the navigation menu
3. Click "Stripe" in the settings menu
4. Click "Start" to begin the import process
5. Click "View" to monitor the import progress

The import process follows this order:
1. Customers
2. Products
3. Prices
4. Subscriptions
5. Payments
6. Refunds
7. Charge Backs

## Configuring Email

BillaBear uses Symfony Mailer for sending emails. Configure your email settings using the `MAILER_DSN` environment variable:

```
MAILER_DSN=smtp://user:pass@smtp.example.com:port
```

Common email providers:
- Gmail: `smtp://username:password@gmail`
- Mailgun: `mailgun://KEY:DOMAIN@default`
- SendGrid: `sendgrid://KEY@default`

For more information on Symfony Mailer DSN formats, refer to the [Symfony documentation](https://symfony.com/doc/current/mailer.html#transport-setup).

## Additional Configuration

BillaBear can be further configured using environment variables:

| Variable | Description |
| --- | --- |
| APP_SECRET | A unique string for security (required) |
| DATABASE_URL | Database connection string |
| MESSENGER_TRANSPORT_DSN | Background processing configuration |
| ROLLBAR_ENABLED | Enable/disable Rollbar error logging |
| ROLLBAR_API_KEY | Rollbar API key |
| ROLLBAR_ENV | Environment name for Rollbar |

For a complete list of environment variables, see the [Environment Variables documentation](../install/env_variables).

## Setting Up Integrations

BillaBear supports integration with various third-party services:

### Xero (Accounting)

Configure Xero integration using these environment variables:
- `XERO_CLIENT_ID`: Your Xero App's client ID
- `XERO_CLIENT_SECRET`: Your Xero App's client secret
- `XERO_CLIENT_REDIRECT_URI`: The redirect URL for OAuth

### HubSpot (CRM)

Configure HubSpot integration using these environment variables:
- `HUBSPOT_APP_ID`: Your HubSpot App ID
- `HUBSPOT_CLIENT_ID`: Your HubSpot App's client ID
- `HUBSPOT_CLIENT_SECRET`: Your HubSpot App's client secret
- `HUBSPOT_REDIRECT_URI`: The redirect URL for OAuth

## Next Steps

After completing the initial setup, you can:

1. Create products and pricing plans
2. Set up subscription schedules
3. Configure invoice templates
4. Add customers and subscriptions

For detailed information on using BillaBear's features, refer to the [User Documentation](../../user/).

## Request New Features

If you need functionality that isn't currently available in BillaBear, you can request new features via:

[GitHub Discussions - Ideas](https://github.com/billabear/billabear/discussions/categories/ideas)