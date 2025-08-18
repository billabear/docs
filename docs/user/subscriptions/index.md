---
title: Subscriptions
sidebar_label: Subscriptions
sidebar_position: 1
---

# Subscriptions

Subscriptions are the core of BillaBear's billing system. They represent an ongoing financial relationship between your business and your customers, allowing you to charge customers on a recurring basis for your products or services.

## What is a Subscription?

A subscription is an agreement between your business and a customer where the customer pays regularly (weekly, monthly, or yearly) for continued access to your products or services. In BillaBear, a subscription connects a customer to a specific subscription plan and price.

## Key Subscription Concepts

### Subscription Plans

Subscription plans define what products or services your customers receive. Each plan can have multiple prices associated with it, allowing you to offer the same plan at different price points based on billing frequency, currency, or other factors.

### Prices

Prices determine how much and how often your customers pay. BillaBear supports various pricing models, including:
- Fixed price (flat fee)
- Per unit/seat pricing
- Package pricing
- Tiered volume pricing
- Tiered graduated pricing

For more information on pricing models, see the [Pricing Models documentation](../pricing/).

### Billing Cycles

Subscriptions can be billed on different schedules:
- Weekly
- Monthly
- Yearly

All subscriptions for a customer must use the same billing cycle and currency.

### Subscription Status

Subscriptions can have different statuses:
- **Active**: The subscription is currently active and billing
- **Cancelled**: The subscription has been cancelled but may still be active until the end of the current billing period
- **Expired**: The subscription has ended and is no longer active

## Managing Subscriptions

BillaBear provides a comprehensive set of tools for managing subscriptions throughout their lifecycle:

### Creating Subscriptions

You can create new subscriptions for customers, selecting the appropriate plan, price, and payment method. For detailed instructions, see [Create Subscription](./create_subscription.md).

### Viewing Subscriptions

You can view all details of a customer's subscription, including billing history, upcoming payments, and subscription status. For detailed instructions, see [View Subscription](./view_subscription.md).

### Changing Subscriptions

BillaBear allows you to make various changes to active subscriptions:

- **Change Plan**: Move a customer to a different subscription plan. See [Change Plan](./change_plan.md).
- **Change Price**: Adjust the price of a customer's subscription. See [Change Price](./change_price.md).
- **Change Payment Details**: Update the payment method used for a subscription. See [Change Payment Details](./change_payment_details.md).
- **Mass Change**: Make the same change to multiple subscriptions at once. See [Mass Change](./mass_change.md).

### Cancelling Subscriptions

When a customer no longer wishes to continue their subscription, you can cancel it with various options for timing and refunds. For detailed instructions, see [Cancel Subscription](./cancellation.md).

## Subscription Billing

Subscriptions generate invoices automatically according to their billing cycle. The system handles:

- Creating invoices at the appropriate time
- Attempting payment using the customer's payment method
- Handling successful and failed payments
- Managing subscription status based on payment outcomes

## Reporting and Analytics

BillaBear provides reporting tools to help you understand your subscription business:

- Monthly Recurring Revenue (MRR) tracking
- Subscription growth and churn metrics
- Revenue forecasting
- Customer lifetime value analysis

These reports help you make informed decisions about your subscription business.

## Common Subscription Tasks

Here are some common tasks you might need to perform with subscriptions:

- [Creating a subscription for a new customer](./create_subscription.md)
- [Upgrading a customer to a higher-tier plan](./change_plan.md)
- [Updating a customer's payment method](./change_payment_details.md)
- [Cancelling a subscription at the end of the billing period](./cancellation.md)
- [Changing prices for multiple subscriptions](./mass_change.md)

For detailed instructions on each task, click the corresponding link.