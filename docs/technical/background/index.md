---
title: Background Tasks
sidebar_label: Background Tasks
sidebar_position: 2
---
BillaBear has several background tasks that need to be ran in order for BillaBear to operate successfully.

There are multiple ways to run these tasks. One way is to use the scheduler command and the other is to have cronjobs.

## Run Scheduler Command

When using the scheduler command all the tasks will run at the schedule defined by BillaBear. You won't need to worry about anything other than keeping the scheduler command running.

The command to run is:  

```
bin/console messenger:consume scheduler_main
```

## Tasks

You can find the background tasks here, each one has it's freqency defined in the documentation.

| Task | Description |
| --- | --- |
| [Background Generic Tasks](./background_generic) |  handle background generic tasks. |
| [Stripe Complete Import](./stripe_complete_import) | A command to be used for cronjobs to handle the stripe import. |
| [Expiring Cards First Day](./expiring_cards_first_day) | Sends notifications on first day their card is about to expire |
| [Expiring Cards Day Before](./expiring_cards_day_before) | Sends notifications the day before a subscription is to be charged warning of expring cards |
| [Generate Invoices](./generate_invoices) | Generates for invoices that will expire in the next 5 minutes. |
| [Exchange Rates Refresh](./exchange_rates_refresh) | Refreshes the exchange rates. |
| [Update Check](./update_check) | Checks for updates. |
| [Payment Retry](./payment_retries) | Retries payments. |