---
title: Email Templates
sidebar_label: Email Templates
sidebar_position: 1
---
Sending custom emails are an essential part of running a software business. Customers expect emails in their language and with the correct branding. BillaBear allows you to do this by allowing you to define email templates for a brand and locale. 

## Template Types

BillaBear integrates with SendGrid, Mailgun, and Postmark email service providers and allows you to use their template system. When using this you must give the template id given by the email service provider. 

If you use BillaBear's template system instead, it's powered by the template language Twig.

## Fallback Order

BillaBear has a fallback order for email templates, so if there is no specific template for a locale and brand then it'll look for a fallback.

1. It looks for Locale and Brand.
2. Then it looks for Default Locale and Brand.
3. Then it looks for  Default Locale and Default Brand
4. Then it throws an error

## Template Variables

In the templates the following variables are defined.


### General

Variables that are available in all emails templates.

| Name | Description | Example |
| --- | --- | --- |  
| brand.name | Name of the brand | BilaBear |
| brand.address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| brand.address.street_line_one | The first line of the address | 1 Example Way |
| brand.address.street_line_two | The second line of the address |  |
| brand.address.city | The city for the address | Exampleville |
| brand.address.region | The region/state for the address | Renfrewshire |
| brand.address.country | The country code for the address | GB |
| brand.address.postcode | The post code for the address | PA5 1ND |
| customer.name | The name of the customer | Example User |
| customer.email | The email for the customer | iain.cambridge@example.org |

### Subscription Created

All variables described in general are available as well as the ones described below.

| Name | Description | Example |
| --- | --- | --- |  
| subscription.plan_name | The plan name for the subscription | Intro |
| subscription.has_trial | A boolean, true or false, value for if the subscription has a trial | true |
| subscription.trial_length | The number of days the trial lasts | 7 |
| subscription.payment_schedule | The payment schedule for the subscription - `week`, `month`, `year` | month | 
| subscription.amount | The amount that the subscription costs per payment schedule | 10.00 EUR |
| subscription.next_payment_due | The due date for the next payment | 2021-01-03T02:30:00+01:00 |

### Subscription Cancelled

All variables described in general are available as well as the ones described below.

| Name | Description | Example |
| --- | --- | --- |  
| subscription.plan_name | The plan name for the subscription | Intro |
| subscription.finsihes_at | The date when the plan finishes | 2021-01-03T02:30:00+01:00 |

### Payment Created

All variables described in general are available as well as the ones described below.


| Name | Description | Example |
| --- | --- | --- |  
| payment.amount | The amount for the payment | 10.00 EUR |
| payment.currency | The currency for the payment | EUR |
| payment.description | The description for the payment | Subscription Payment |
| receipt.total | The total amount for the receipt | 10.00 EUR |
| receipt.vat_total | The VAT total amount for the receipt | 2.00 EUR |
| receipt.sub_total | The sub total amount for the receipt | 8.00 EUR |

### Payment Card Expiring

All variables described in general are available as well as the ones described below.


| Name | Description | Example |
| --- | --- | --- |  
| payment_card.last_four | The last four numbers of the card so the customer can identify the card | 42424 |
| payment_card.expiry_month | The month the card will expire in.  | 10 |
| payment_card.expiry_year | The year the card will expire in. | 2023 |
| voucher.has_voucher | If there is a voucher for adding a card during the expiry process | true |
| voucher.type | If it's a percentage voucher or a fixed amount of credit voucher | percentage |
| voucher.percentage | The percentage. Null if fixed amount | 10 |
| voucher.amount | The amount if fixed credit | 1000 |
| voucher.currency | The currency for the voucher | USD |

### Payment Card Expiring - Day Before next payment attempt and card is still valid

All variables described in general are available as well as the ones described below.


| Name | Description | Example |
| --- | --- | --- |  
| payment_card.last_four | The last four numbers of the card so the customer can identify the card | 42424 |
| payment_card.expiry_month | The month the card will expire in.  | 10 |
| payment_card.expiry_year | The year the card will expire in. | 2023 |
| subscription.plan_name | The plan name for the subscription | Intro |
| subscription.has_trial | A boolean, true or false, value for if the subscription has a trial | true |
| subscription.trial_length | The number of days the trial lasts | 7 |
| subscription.payment_schedule | The payment schedule for the subscription - `week`, `month`, `year` | month | 
| subscription.amount | The amount that the subscription costs per payment schedule | 10.00 EUR |
| subscription.next_payment_due | The due date for the next payment | 2021-01-03T02:30:00+01:00 |
| voucher.has_voucher | If there is a voucher for adding a card during the expiry process | true |
| voucher.type | If it's a percentage voucher or a fixed amount of credit voucher | percentage |
| voucher.percentage | The percentage. Null if fixed amount | 10 |
| voucher.amount | The amount if fixed credit | 1000 |
| voucher.currency | The currency for the voucher | USD |

### Payment Card Expiring - Day Before next payment attempt and has already card expired

All variables described in general are available as well as the ones described below.


| Name | Description | Example |
| --- | --- | --- |  
| payment_card.last_four | The last four numbers of the card so the customer can identify the card | 42424 |
| payment_card.expiry_month | The month the card will expire in.  | 10 |
| payment_card.expiry_year | The year the card will expire in. | 2023 |
| subscription.plan_name | The plan name for the subscription | Intro |
| subscription.has_trial | A boolean, true or false, value for if the subscription has a trial | true |
| subscription.trial_length | The number of days the trial lasts | 7 |
| subscription.payment_schedule | The payment schedule for the subscription - `week`, `month`, `year` | month | 
| subscription.amount | The amount that the subscription costs per payment schedule | 10.00 EUR |
| subscription.next_payment_due | The due date for the next payment | 2021-01-03T02:30:00+01:00 |
| voucher.has_voucher | If there is a voucher for adding a card during the expiry process | true |
| voucher.type | If it's a percentage voucher or a fixed amount of credit voucher | percentage |
| voucher.percentage | The percentage. Null if fixed amount | 10 |
| voucher.amount | The amount if fixed credit | 1000 |
| voucher.currency | The currency for the voucher | USD |