---
title: Stripe Complete Import
sidebar_label: Stripe Complete Import
sidebar_position: 3
---
This is a command that has been created to be useful for cronjobs. This handles the stripe import. It should be ran every minute.

## How it works

It checks to see if there has been a stripe import process created that hasn't been processed and updated within the last 2 minutes and then handles the stripe importation process.

## How to run

The following command can be used to execute the command.

`bin/console billabear:stripe:import`

## Options

Currently, there are none.