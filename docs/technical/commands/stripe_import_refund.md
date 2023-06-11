---
title: Stripe Refund Import
sidebar_label: Stripe Refund Import
sidebar_position: 9
---
This is a dev command to deal with the import of just the stripe refund.

:::caution

If you're needing to use this command, you probably should email support@billabear.com.

:::

## How it works

It reads all the refunds in Stripe and syncs them to the database.

## How to run

The following command can be used to execute the command.

`bin/console billabear:stripe:import-refund`

## Options

Currently, there are none.