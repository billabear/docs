---
title: Webhooks
sidebar_label: Webhooks
sidebar_position: 6
---
BillaBear supports sending internal notification to internal services via webhooks.

## Payment Received

```json
{
    type: "payment_received",
    id: "uuid-for-payment",
    amount: 1000,
    customer: {
        id: "uuid-for-customer",
        email: "iain.cambridge@example.org",
        brand: "default",
        is_disabled: false
    }
}
```

## Customer Enabled

```json
{
    type: "customer_enabled",
    customer: {
        id: "uuid-for-customer",
        email: "iain.cambridge@example.org",
        brand: "default",
        is_disabled: false
    }
}
```

## Customer Disable

```json
{
    type: "customer_disabled",
    customer: {
        id: "uuid-for-customer",
        email: "iain.cambridge@example.org",
        brand: "default",
        is_disabled: false
    }
}
```

## Start Subscription

```json
{
    type: "subscription_created",
    customer: {
        id: "uuid-for-customer",
        email: "iain.cambridge@example.org",
        brand: "default",
        is_disabled: false
    },
    subscription: {
        id: "uuid-for-subscription",
        plan_name: "Plan Name",
        status: "active"
    }
}
```