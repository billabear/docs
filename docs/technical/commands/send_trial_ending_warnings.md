
---
title: Trial Ending Warnings
sidebar_label: Trial Ending Warnings
sidebar_position: 23
---

This is a command that was created to be used as a cronjob. 


## How it works

It looks through all subscriptions that are active trials that are going to end in the expire in 7 days and sends them a warning email if the setting is enabled.

## How to run

The following command can be used to execute the command.

`bin/console billabear:notification:trial-ending-warnings`

## Frequency

Daily

## Options

Currently, there are none.

