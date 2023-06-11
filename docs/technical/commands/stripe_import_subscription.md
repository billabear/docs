---
title: Stripe Subscription Import
sidebar_label: Stripe Subscription Import
sidebar_position: 10
---
This is a dev command to deal with the import of just the stripe subscription.

:::caution

If you're needing to use this command, you probably should email support@billabear.com.

:::

## How it works

It reads all the subscriptions in Stripe and syncs them to the database.

## How to run

The following command can be used to execute the command.

`bin/console billabear:stripe:import-subscription`

## Options

Currently, there are none.