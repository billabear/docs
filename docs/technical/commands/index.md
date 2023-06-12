---
title: Commands
sidebar_label: Commands
sidebar_position: 1
---
There are several command that can be run to help run and administrate the application. 

| Command | Description |
| --- | --- |
| [Background Generic Tasks](./background_generic) | A command to be used for cronjobs to handle background generic tasks. |
| [Generate Demo Data](./demo_data) | A development command to generate data that can be used to demo BillaBear. It's useful for development purposes. |
| [Fix Stats](./fix_stats) | A command to fix stats incase they got broken somehow. |
| [Stripe Complete Import](./stripe_complete_import) | A command to be used for cronjobs to handle the stripe import. |
| [Stripe Charge Back Import](./stripe_chargeback_import) | A dev command for handling syncing stripe charge backs.  |
| [Stripe Customer Import](./stripe_customer_import) | A dev command for handling syncing stripe customer.  |
| [Stripe Payment Import](./stripe_payments_import) | A dev command for handling syncing stripe payments.  |
| [Stripe Price Import](./stripe_price_import) | A dev command for handling syncing stripe price.  |
| [Stripe Product Import](./stripe_product_import) | A dev command for handling syncing stripe product.  |
| [Stripe Refund Import](./stripe_refund_import) | A dev command for handling syncing stripe refund.  |
| [Stripe Subscription Import](./stripe_subscription_import) | A dev command for handling syncing stripe subscription.  |
| [Expiring Cards First Day](./expiring_cards_first_day) | A command to be used for cronjobs. Sends notifications on first day their card is about to expire |
| [Expiring Cards Day Before](./expiring_cards_day_before) | A command to be used for cronjobs. Sends notifications the day before a subscription is to be charged warning of expring cards |
| [Generate Invoices](./generate_invoices) | A command to be used for cronjobs. Generates for invoices that will expire in the next 5 minutes. |
| [Exchange Rates Refresh](./exchange_rates_refresh) | A command to be used for cronjobs. Refreshes the exchange rates. |
| [Update Check](./update_check) | A command to be used for cronjobs. Checks for updates. |
| [Payment Retry](./payment_retries) | A command to be used for cronjobs. Retries payments. |
| [Change User Password](./change_password) | A administration helper command to change a user's password. |
| [Give User Role](./user_give_role) | A administration helper command to give a role to a user. |
| [Remove User role](./user_remove_role) | A administration helper command to remove a role from a user. |