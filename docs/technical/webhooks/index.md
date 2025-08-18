---
title: Webhooks
sidebar_label: Webhooks
sidebar_position: 6
---

# Webhooks

BillaBear supports sending notifications to external services via webhooks. This allows you to integrate BillaBear with your own systems and react to events that occur within BillaBear.

## Setting Up Webhooks

### Creating Webhook Endpoints

To receive webhook events from BillaBear, you need to create webhook endpoints. A webhook endpoint is a URL where BillaBear will send HTTP POST requests when events occur.

You can create and manage webhook endpoints in the BillaBear admin interface:

1. Navigate to **Developer** > **Webhooks**
2. Click on **Create Webhook Endpoint**
3. Enter a name for the webhook endpoint
4. Enter the URL where BillaBear should send webhook events
5. Click **Save**

Once created, the webhook endpoint will be active and will receive all webhook events.

### Webhook Delivery

When an event occurs in BillaBear, the system will:

1. Create a webhook event with the event type and payload
2. Send the payload to all active webhook endpoints
3. Record the response from each endpoint

Webhook events are sent as HTTP POST requests with a JSON payload. The payload includes a `type` field that indicates the type of event, and additional fields specific to the event type.

### Handling Webhook Events

Your webhook endpoint should:

1. Accept HTTP POST requests
2. Parse the JSON payload
3. Verify the event type
4. Process the event data
5. Return a 2xx HTTP status code to acknowledge receipt

If your endpoint returns a non-2xx status code, BillaBear will consider the delivery a failure and record the error.

## Webhook Event Types

BillaBear sends webhook events for various actions and state changes in the system. Below is a list of all event types with their payload structures.

### Customer Events

#### Customer Created

Sent when a new customer is created in BillaBear.

```json
{
    "type": "customer_created",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    }
}
```

#### Customer Enabled

Sent when a previously disabled customer is enabled.

```json
{
    "type": "customer_enabled",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    }
}
```

#### Customer Updated

Sent when a customer's information is updated.

```json
{
    "type": "customer_updated",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    }
}
```

#### Customer Disabled

Sent when a customer is disabled.

```json
{
    "type": "customer_disabled",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": true
    }
}
```

### Subscription Events

#### Subscription Created

Sent when a new subscription is created.

```json
{
    "type": "subscription_created",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "active"
    }
}
```

#### Subscription Updated

Sent when a subscription is updated (e.g., changing the number of seats).

```json
{
    "type": "subscription_updated",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "active"
    }
}
```

#### Subscription Paused

Sent when a subscription is paused.

```json
{
    "type": "subscription_paused",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "paused"
    }
}
```

#### Subscription Cancelled

Sent when a subscription is cancelled.

```json
{
    "type": "subscription_cancelled",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "cancelled"
    }
}
```

### Trial Events

#### Trial Started

Sent when a trial period begins for a subscription.

```json
{
    "type": "trial_started",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "active"
    }
}
```

#### Trial Ended

Sent when a trial period ends for a subscription.

```json
{
    "type": "trial_ended",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "active"
    }
}
```

#### Trial Extended

Sent when a trial period is extended for a subscription.

```json
{
    "type": "trial_extended",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "subscription": {
        "id": "uuid-for-subscription",
        "plan_name": "Plan Name",
        "status": "active"
    }
}
```

### Plan Events

#### Plan Created

Sent when a new plan is created.

```json
{
    "type": "plan_created",
    "plan": {
        "id": "uuid-for-plan",
        "name": "Name Of Plan",
        "code": "code_for_plan",
        "has_trial": false,
        "trial_length_in_days": null,
        "standalone_trial": false
    }
}
```

#### Plan Updated

Sent when a plan is updated.

```json
{
    "type": "plan_updated",
    "plan": {
        "id": "uuid-for-plan",
        "name": "Name Of Plan",
        "code": "code_for_plan",
        "has_trial": false,
        "trial_length_in_days": null,
        "standalone_trial": false
    }
}
```

#### Plan Deleted

Sent when a plan is deleted.

```json
{
    "type": "plan_deleted",
    "plan": {
        "id": "uuid-for-plan",
        "name": "Name Of Plan",
        "code": "code_for_plan",
        "has_trial": false,
        "trial_length_in_days": null,
        "standalone_trial": false
    }
}
```

### Payment Events

#### Payment Received

Sent when a payment is received.

```json
{
    "type": "payment_received",
    "id": "uuid-for-payment",
    "amount": 1000,
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    }
}
```

### Payment Method Events

#### Payment Method Added

Sent when a payment method is added to a customer.

```json
{
    "type": "payment_method_added",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "payment_method": {
        "id": "uuid-for-payment-method",
        "type": "card",
        "last_four": "4242",
        "expiry_month": 12,
        "expiry_year": 2025
    }
}
```

#### Payment Method Deleted

Sent when a payment method is deleted from a customer.

```json
{
    "type": "payment_method_deleted",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "payment_method": {
        "id": "uuid-for-payment-method",
        "type": "card",
        "last_four": "4242",
        "expiry_month": 12,
        "expiry_year": 2025
    }
}
```

#### Payment Method Expired

Sent when a payment method has expired.

```json
{
    "type": "payment_method_expired",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "payment_method": {
        "id": "uuid-for-payment-method",
        "type": "card",
        "last_four": "4242",
        "expiry_month": 12,
        "expiry_year": 2025
    }
}
```

### Integration Failure Events

#### Accounting Integration Failure

Sent when an integration with an accounting system fails.

```json
{
    "type": "integration_accounting_failure",
    "exception": {
        "message": "Something bad happened",
        "code": 32,
        "request": {
            "method": "GET",
            "uri": "https://www.example.org",
            "body": "request body"
        },
        "response": {
            "status": 404,
            "body": "the return body"
        }
    }
}
```

#### Customer Support Integration Failure

Sent when an integration with a customer support system fails.

```json
{
    "type": "integration_customer_support_failure",
    "exception": {
        "message": "Something bad happened",
        "code": 32,
        "request": {
            "method": "GET",
            "uri": "https://www.example.org",
            "body": "request body"
        },
        "response": {
            "status": 404,
            "body": "the return body"
        }
    }
}
```

#### Newsletter Integration Failure

Sent when an integration with a newsletter system fails.

```json
{
    "type": "integration_newsletter_failure",
    "exception": {
        "message": "Something bad happened",
        "code": 32,
        "request": {
            "method": "GET",
            "uri": "https://www.example.org",
            "body": "request body"
        },
        "response": {
            "status": 404,
            "body": "the return body"
        }
    }
}
```

#### CRM Integration Failure

Sent when an integration with a CRM system fails.

```json
{
    "type": "integration_crm_failure",
    "exception": {
        "message": "Something bad happened",
        "code": 32,
        "request": {
            "method": "GET",
            "uri": "https://www.example.org",
            "body": "request body"
        },
        "response": {
            "status": 404,
            "body": "the return body"
        }
    }
}
```

Note: The `request` and `response` fields are only available for some failures, specifically when the exception is related to an HTTP request.

### Usage and Threshold Events

#### Usage Warning Triggered

Sent when a usage warning threshold is reached.

```json
{
    "type": "usage_warning_triggered",
    "customer": {
        "id": "uuid-for-customer",
        "email": "iain.cambridge@example.org",
        "brand": "default",
        "is_disabled": false
    },
    "limit": {
        "warning_level": "WARNING",
        "amount": 1000
    }, 
    "start_of_period": "2025-01-08T01:17:23+00:00",
    "end_of_period": "2025-01-31T01:17:23+00:00"
}
```

#### Tax Country Threshold Reached

Sent when a tax threshold for a country is reached.

```json
{
    "type": "tax_country_threshold_reached",
    "country": {
        "name": "United Kingdom",
        "code": "GB",
        "threshold": "92,000.00"
    }
}
```

#### Tax State Threshold Reached

Sent when a tax threshold for a state is reached.

```json
{
    "type": "tax_state_threshold_reached",
    "country": {
        "name": "United States",
        "code": "US"
    },
    "state": {
        "name": "New York",
        "threshold": "39,000.00"
    }
}
```

## Webhook Security

To ensure the security of your webhook endpoints, consider implementing the following measures:

1. **Use HTTPS**: Always use HTTPS for your webhook endpoints to encrypt the data in transit.
2. **Validate the payload**: Verify that the payload structure matches what you expect for the event type.
3. **Implement IP filtering**: Configure your server to only accept webhook requests from BillaBear's IP addresses.
4. **Implement request timeouts**: Set reasonable timeouts for webhook processing to prevent long-running requests.

## Troubleshooting

If you're experiencing issues with webhooks, you can check the webhook event logs in the BillaBear admin interface:

1. Navigate to **Developer** > **Webhooks**
2. Click on the **Events** tab to view recent webhook events
3. Click on an event to view its details, including the payload and responses from endpoints

Common issues include:

- **Endpoint not responding**: Ensure your endpoint is accessible from the internet and responding to HTTP POST requests.
- **Endpoint returning errors**: Check your endpoint's logs for errors when processing webhook events.
- **Missing events**: Verify that your webhook endpoint is active in the BillaBear admin interface.