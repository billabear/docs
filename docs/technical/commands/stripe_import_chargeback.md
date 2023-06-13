---
title: Stripe ChargeBack Import
sidebar_label: Stripe ChargeBack Import
sidebar_position: 4
---
This is a dev command to deal with the import of just the stripe charge backs.

:::caution

If you're using this command, you probably should email support@billabear.com.

:::

## How it works

It reads all the charge backs in Stripe and syncs them to the database.

## How to run

The following command can be used to execute the command.

`bin/console billabear:stripe:import-charge-back`

## Options

Currently, there are none.