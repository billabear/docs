---
title: Background Generic Tasks
sidebar_label: Background Generic Tasks
sidebar_position: 11
---
This is a command that was created to be used as a cronjob. There are generic background tasks.


## How it works

It checks the database to see if there are currently any generic background tasks waiting to be ran. When it finds some it runs them throught a checker to find out which background task it is and then executes that task.

## How to run

The following command can be used to execute the command.

`bin/console billabear:background-generic`

## Frequency

Every minute

## Options

Currently, there are none.