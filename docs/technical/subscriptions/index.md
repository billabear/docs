---
title: Subscription Management
sidebar_label: Subscription
sidebar_position: 1
---

# Subscription Management in BillaBear

BillaBear provides a comprehensive subscription management system that allows you to create, manage, and track subscriptions for your customers. This section covers the technical details of how subscriptions work in BillaBear and how to integrate with the subscription system.

## Key Concepts

### Subscription

A subscription represents a recurring billing relationship between a customer and your business. Each subscription is associated with:

- A customer
- A subscription plan
- A price (which defines the amount, currency, and billing schedule)
- A status (active, cancelled, expired, etc.)
- Optional metadata

### Subscription Plan

A subscription plan defines the product or service being offered. Plans can include:

- Features and limits
- Trial periods
- Standalone trials (trials that can be started without requiring payment details)
- Multiple pricing options (different currencies, billing schedules, etc.)

### Subscription Lifecycle

Subscriptions in BillaBear follow a defined lifecycle:

1. **Creation**: A subscription is created either through the API or the web dashboard
2. **Active**: The subscription is active and billing occurs according to the schedule
3. **Trial** (optional): If the subscription includes a trial period, it will be in trial status until the trial ends
4. **Cancellation**: When a subscription is cancelled, it may end immediately or at the end of the current billing period
5. **Expiration**: After cancellation, the subscription eventually expires

## Integration Options

BillaBear offers multiple ways to integrate with the subscription system:

- **API**: Create and manage subscriptions programmatically
- **Web Dashboard**: Manage subscriptions through the user interface
- **Webhooks**: Receive notifications about subscription events
- **SDKs**: Use pre-built libraries to integrate with BillaBear (currently PHP SDK available)

## Advanced Features

BillaBear's subscription system includes several advanced features:

- **Seat Management**: Add or remove seats from subscriptions
- **Plan Changes**: Upgrade or downgrade subscriptions
- **Price Changes**: Change the price of a subscription
- **Trial Extensions**: Extend trial periods
- **Payment Method Updates**: Update the payment method for a subscription
- **Metadata**: Store custom data with subscriptions

For detailed information about specific subscription operations, see the following pages:

- [Subscription Creation](./creation.md)
- [Subscription Cancellation](./cancellation.md)