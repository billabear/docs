---
title: Generate Invoices
sidebar_label: Generate Invoices
sidebar_position: 14
---
This is a command that was created to be used as a cronjob. 


## How it works

It looks for subscriptions that need a new invoice generated within the next 5 minutes and generates them.

## How to run

The following command can be used to execute the command.

`bin/console billabear:invoices:generate-new`

## Frequency

Every 5 mintues

## Options

Currently, there are none.