---
title: Fix Stats
sidebar_label: Fix Stats
sidebar_position: 2
---
This is a command that shouldn't really need to be ran. But it's been created for just incase purposes as well as being useful for development purposes. This fixes the stats.

## How it works

It looks through the subscription data and finds the active subscriptions for a date range and sets that in the stat for that day, month, year.

## How to run

The following command can be used to execute the command.

`bin/console billabear:stats:fix`

## Options

Currently, there are none.
