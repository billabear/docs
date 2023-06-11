---
title: Generate Demo Data
sidebar_label: Generate Demo Data
sidebar_position: 1
---
While this command is not helpful for end users. It may be useful for developers who want to further develop BillaBear or those who wish to generate demo data so they can evaluate BillaBear.

## How it works

Demo data is generated in that it creates subscriptions that starting from the original start date. It does not create all the subscriptions at the original start date but instead it creates a percentage of the total count each month until it reaches the current date. The percentage it creates has a 25% increase each month to simulate growth.

It creates products, features, prices, and subscription plans that are to be used for the subscriptions. It creates prices in `USD`, `CAD`, `EUR`, and `GBP` with billing schedules of month and yearly.

When a subscription is created it randomises which subscription plan it's for and which price is used and which billing schedule. For each subscription there is a payment created for each billing period that would be valid. This payment is created in payment provider with the real time, however in the system the date is marked as the date of the billing period to simulate a history of payments.


:::caution

When running with the default values expect it to take 24 hours to complete.

:::

## How to run

The following command can be used to execute the command.

`bin/console billabear:dev:demo-data`

## Options

| Name | Default Value | Description |
| --- | --- | --- |
| date | -18 months | A php DateTime valid date format. That is used to define the starting date for the new subscriptions |
| count | 3000 | The number of subscribers to be created |
| products | true | To generate products, features, subscription plans, etc. If you're creating data from scratch this is this needed. If you're topping up date to keep it realistic this should be `false`. |

