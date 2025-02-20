---
title: Slack Notification Variables
sidebar_label: Slack Variables
sidebar_position: 1
---
Here you can find the template variables for slack notitifactions.

The format in the templates to use a variable is ``{{variable.name}}``.

## Customer Created

| Name | Description | Example |
| --- | --- | --- |   
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |

## Payment Processed

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| payment.amount | The amount that we attempted to collect as an int | `1000` |
| payment.currency | The currency that we attempted to collect | `USD` |
| payment.formatted_amount | The amount formatted | `USD 10.00` |


## Payment Failed

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| payment_attempt.amount | The amount that we attempted to collect as an int | `1000` |
| payment_attempt.currency | The currency that we attempted to collect | `USD` |
| payment_attempt.formatted_amount | The amount formatted | `USD 10.00` |


## Subscription Created

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscrtipion.start_date | The start date of the subscription |  |
| subscrtipion.valid_until | The end date of the subscription |  |


## Subscription Cancelled

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscrtipion.start_date | The start date of the subscription |  |
| subscrtipion.valid_until | The end date of the subscription |  |

## Trial Started

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscrtipion.start_date | The start date of the subscription |  |
| subscrtipion.valid_until | The end date of the subscription |  |

## Trial Ended

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscrtipion.start_date | The start date of the subscription |  |
| subscrtipion.valid_until | The end date of the subscription |  |

## Trial Extended

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole indivual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscrtipion.start_date | The start date of the subscription |  |
| subscrtipion.valid_until | The end date of the subscription |  |

## Country Tax Threshold Reached

| Name | Description | Example |
| --- | --- | --- |  
| country.name | The name of the country | United Kingdom |
| country.code | The ISO code for the country | GB     |
| country.threshold_amount | The Threshold amount for country | 90,000.00 |

## State Tax Threshold Reached

| Name | Description | Example |
| --- | --- | --- |  
| country.name | The name of the country | United States Of America |
| country.code | The ISO code for the country | US     |
| state.name | The name of the country | Texas |
| state.threshold_amount | The Threshold amount for state | 90,000.00 |