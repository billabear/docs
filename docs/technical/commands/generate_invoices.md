---
title: Generate Invoices
sidebar_label: Generate Invoices
sidebar_position: 14
---

# Generate Invoices Command

This command is designed to be run as a cronjob to automatically generate invoices for subscriptions that are due for renewal.

## How it works

The command identifies subscriptions that need a new invoice generated within the next 5 minutes and creates those invoices. This ensures that customers receive their invoices in a timely manner before their subscription renewal date.

## How to run

Execute the command using the Symfony console:

```bash
bin/console billabear:invoices:generate-new
```

## Recommended frequency

This command should be run every 5 minutes to ensure timely invoice generation.

## Options

Currently, there are no additional options for this command.

## Example output

When the command runs successfully, you'll see output similar to:

```
[INFO] Checking for subscriptions needing invoices in the next 5 minutes
[INFO] Found 3 subscriptions requiring new invoices
[INFO] Generated invoice for subscription SUB-12345
[INFO] Generated invoice for subscription SUB-67890
[INFO] Generated invoice for subscription SUB-24680
[INFO] Invoice generation complete
```

## Troubleshooting

If no invoices are generated when you expect them to be, check:

1. That subscriptions exist with renewal dates in the next 5 minutes
2. That the subscriptions are in an active state
3. That the system date and time are correctly configured

## Related commands

- [Payment Retry](./payment_retries.md) - Used to retry payments for generated invoices
- [Exchange Rates Refresh](./exchange_rates_refresh.md) - Ensures currency exchange rates are up-to-date for invoice generation