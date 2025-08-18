---
title: Commands
sidebar_label: Commands
sidebar_position: 10
---

# Command Line Tools

BillaBear provides several commands that can be run to help operate and administer the application. These commands can be used for background processing, data management, and administrative tasks.

## Available Commands

| Command | Description |
| --- | --- |
| [Background Generic Tasks](./background_generic.md) | A command to be used for cronjobs to handle background generic tasks. |
| [Generate Demo Data](./demo_data.md) | A development command to generate data that can be used to demo BillaBear. It's useful for development purposes. |
| [Fix Stats](./fix_stats.md) | A command to fix statistics in case they became broken or inconsistent. |
| [Stripe Complete Import](./stripe_complete_import.md) | A command to be used for cronjobs to handle the Stripe import process. |
| [Stripe Charge Back Import](./stripe_import_chargeback.md) | A development command for handling synchronization of Stripe chargebacks. |
| [Stripe Customer Import](./stripe_import_customer.md) | A development command for handling synchronization of Stripe customers. |
| [Stripe Payment Import](./stripe_import_payment.md) | A development command for handling synchronization of Stripe payments. |
| [Stripe Price Import](./stripe_import_price.md) | A development command for handling synchronization of Stripe prices. |
| [Stripe Product Import](./stripe_import_product.md) | A development command for handling synchronization of Stripe products. |
| [Stripe Refund Import](./stripe_import_refund.md) | A development command for handling synchronization of Stripe refunds. |
| [Stripe Subscription Import](./stripe_import_subscription.md) | A development command for handling synchronization of Stripe subscriptions. |
| [Expiring Cards First Day](./expiring_cards_first_day.md) | A command to be used for cronjobs. Sends notifications on the first day a customer's card is about to expire. |
| [Expiring Cards Day Before](./expiring_cards_day_before.md) | A command to be used for cronjobs. Sends notifications the day before a subscription is to be charged, warning of expiring cards. |
| [Generate Invoices](./generate_invoices.md) | A command to be used for cronjobs. Generates invoices for subscriptions that will renew in the next 5 minutes. |
| [Exchange Rates Refresh](./exchange_rates_refresh.md) | A command to be used for cronjobs. Refreshes the currency exchange rates. |
| [Update Check](./update_check.md) | A command to be used for cronjobs. Checks for BillaBear updates. |
| [Payment Retry](./payment_retries.md) | A command to be used for cronjobs. Retries failed payments. |
| [Change User Password](./change_password.md) | An administration helper command to change a user's password. |
| [Give User Role](./user_give_role.md) | An administration helper command to give a role to a user. |
| [Remove User Role](./user_remove_role.md) | An administration helper command to remove a role from a user. |
| [Create New User](./user_create.md) | An administration helper command to create a new user. |

## Command Categories

### Background and Maintenance Commands
- Background Generic Tasks
- Fix Stats
- Exchange Rates Refresh
- Update Check

### Stripe Import Commands
- Stripe Complete Import
- Stripe Customer Import
- Stripe Product Import
- Stripe Price Import
- Stripe Subscription Import
- Stripe Payment Import
- Stripe Refund Import
- Stripe Charge Back Import

### Invoice and Payment Commands
- Generate Invoices
- Payment Retry
- Expiring Cards First Day
- Expiring Cards Day Before

### User Management Commands
- Create New User
- Change User Password
- Give User Role
- Remove User Role

### Development Commands
- Generate Demo Data

## Running Commands

All commands can be run using the Symfony console:

```bash
bin/console [command-name]
```

For example, to generate invoices:

```bash
bin/console billabear:invoices:generate-new
```

## Scheduling Commands with Cron

Many commands are designed to be run as cronjobs. Here's a recommended cron schedule:

```
# Run every 5 minutes
*/5 * * * * cd /path/to/billabear && bin/console billabear:invoices:generate-new

# Run daily at midnight
0 0 * * * cd /path/to/billabear && bin/console billabear:exchange-rates:refresh

# Run daily at 1 AM
0 1 * * * cd /path/to/billabear && bin/console billabear:update:check

# Run every hour
0 * * * * cd /path/to/billabear && bin/console billabear:payment:retries

# Run daily at 9 AM
0 9 * * * cd /path/to/billabear && bin/console billabear:expiring-cards:first-day

# Run daily at 9 AM
0 9 * * * cd /path/to/billabear && bin/console billabear:expiring-cards:day-before
```

Adjust the paths and timing according to your specific requirements.