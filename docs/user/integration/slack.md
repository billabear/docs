---
title: Slack Integration
sidebar_label: Slack Integration
sidebar_position: 1
---

# Slack Integration

BillaBear integrates with Slack to send real-time notifications about important events in your billing system. This integration helps your team stay informed about customer activities, payment statuses, subscription changes, and more without having to constantly check the BillaBear dashboard.

## Setting Up Slack Integration

### Accessing Slack Integration

1. Log in to your BillaBear admin account
2. Navigate to the main menu
3. Select "Integrations"
4. Choose "Notifications"
5. Select "Slack" from the available notification channels

### Configuring Slack Webhooks

To connect BillaBear with Slack, you'll need to create a webhook in your Slack workspace:

1. Go to your Slack workspace
2. Visit the [Slack API Apps page](https://api.slack.com/apps)
3. Click "Create New App"
4. Choose "From scratch"
5. Give your app a name (e.g., "BillaBear Notifications") and select your workspace
6. Click "Create App"
7. In the left sidebar, click on "Incoming Webhooks"
8. Toggle "Activate Incoming Webhooks" to On
9. Click "Add New Webhook to Workspace"
10. Select the channel where you want to receive notifications
11. Click "Allow"
12. Copy the Webhook URL that is generated
13. Return to BillaBear and paste the Webhook URL in the Slack integration settings
14. Click "Save" to establish the connection

### Customizing Notification Templates

BillaBear allows you to customize the content of each notification type. For each event:

1. Select the event type from the dropdown menu
2. Customize the message template using the available variables
3. Click "Save" to apply your changes

You can use the preview function to see how your notifications will appear in Slack before saving.

## Notification Types

BillaBear can send Slack notifications for the following events:

* Customer Created
* Payment Processed
* Payment Failed
* Subscription Created
* Subscription Cancelled
* Trial Started
* Trial Ended
* Trial Extended
* Country Tax Threshold Reached
* State Tax Threshold Reached

## Template Variables

You can customize notification messages using template variables. The format to use a variable is `{{variable.name}}`.

### Customer Created

| Name | Description | Example |
| --- | --- | --- |   
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |

### Payment Processed

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| payment.amount | The amount that we attempted to collect as an int | `1000` |
| payment.currency | The currency that we attempted to collect | `USD` |
| payment.formatted_amount | The amount formatted | `USD 10.00` |

### Payment Failed

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| payment_attempt.amount | The amount that we attempted to collect as an int | `1000` |
| payment_attempt.currency | The currency that we attempted to collect | `USD` |
| payment_attempt.formatted_amount | The amount formatted | `USD 10.00` |

### Subscription Created

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscription.start_date | The start date of the subscription | `2025-08-18` |
| subscription.valid_until | The end date of the subscription | `2026-08-18` |

### Subscription Cancelled

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscription.start_date | The start date of the subscription | `2025-08-18` |
| subscription.valid_until | The end date of the subscription | `2026-08-18` |

### Trial Started

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscription.start_date | The start date of the subscription | `2025-08-18` |
| subscription.valid_until | The end date of the subscription | `2025-09-18` |

### Trial Ended

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscription.start_date | The start date of the subscription | `2025-08-18` |
| subscription.valid_until | The end date of the subscription | `2025-09-18` |

### Trial Extended

| Name | Description | Example |
| --- | --- | --- |  
| customer.id | The ID of the customer | `6edfd773-6772-4607-b869-4f10622c948b` |
| customer.email | The email of the customer | `invoices@example.org` |
| customer.brand | The brand of the customer | `default` |
| customer.billing_type | How the customer is billed | `invoice` or `card` |
| customer.customer_type | If the customer is a business or a sole individual | `business` |
| subscription.id | The ID of the subscription | `c15fe43c-94af-4cd2-baa2-1eefc724a03c` |
| subscription.plan_name | The name of the plan | `cool_plan` |
| subscription.seats_number | The number of seats for the plan | 4 |
| subscription.start_date | The start date of the subscription | `2025-08-18` |
| subscription.valid_until | The end date of the subscription | `2025-10-18` |

### Country Tax Threshold Reached

| Name | Description | Example |
| --- | --- | --- |  
| country.name | The name of the country | United Kingdom |
| country.code | The ISO code for the country | GB |
| country.threshold_amount | The threshold amount for country | 90,000.00 |

### State Tax Threshold Reached

| Name | Description | Example |
| --- | --- | --- |  
| country.name | The name of the country | United States Of America |
| country.code | The ISO code for the country | US |
| state.name | The name of the state | Texas |
| state.threshold_amount | The threshold amount for state | 90,000.00 |

## Example Templates

Here are some example templates you can use as a starting point:

### Customer Created
```
:wave: New customer created!
*Email:* {{customer.email}}
*Billing Type:* {{customer.billing_type}}
*Customer Type:* {{customer.customer_type}}
```

### Payment Processed
```
:white_check_mark: Payment processed successfully!
*Customer:* {{customer.email}}
*Amount:* {{payment.formatted_amount}}
```

### Payment Failed
```
:x: Payment failed!
*Customer:* {{customer.email}}
*Amount:* {{payment_attempt.formatted_amount}}
```

## Troubleshooting

If you encounter issues with your Slack integration:

* Verify that your Webhook URL is correct
* Ensure your Slack workspace and channel still exist
* Check that the Slack app has the necessary permissions
* Test the webhook using a tool like cURL or Postman

For persistent issues, contact BillaBear support with details of the problem you're experiencing.