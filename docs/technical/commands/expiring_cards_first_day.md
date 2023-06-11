---
title: Expired Cards First Day
sidebar_label: Expired Cards First Day
sidebar_position: 12
---
This is a command that was created to be used as a cronjob. 


## How it works

It looks through all payment cards that are attached to active subscriptions and emails them saying they should update their payment details

## How to run

The following command can be used to execute the command.

`bin/console billabear:expiring-cards:first-day`

## Frequency

First day of the month.

## Options

Currently, there are none.