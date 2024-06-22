
---
title: Day Before Charge Warnings
sidebar_label: Before Charge Warnings
sidebar_position: 23
---

This is a command that was created to be used as a cronjob. 


## How it works

It looks through all subscriptions that are active and sends them an email the day before their next charge. Depending on the brand settings.

## How to run

The following command can be used to execute the command.

`bin/console billabear:notification:day-before-charge-warnings`

## Frequency

Daily

## Options

Currently, there are none.

