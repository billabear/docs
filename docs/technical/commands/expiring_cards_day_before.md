---
title: Expired Cards Day Before
sidebar_label: Expired Cards Day Before
sidebar_position: 13
---
This is a command that was created to be used as a cronjob. 


## How it works

It looks through all subscriptions that are scheduled to be charged for within the next day and sends them a warning message that their card is about to expire and maybe they need to update their payment methods.

## How to run

The following command can be used to execute the command.

`bin/console billabear:expiring-cards:day-before`

## Frequency

Daily

## Options

Currently, there are none.