---
title: Subscription Cancellation Flow
sidebar_label: Cancellation Flow
sidebar_position: 2
---

# Subscription Cancellation

Subscriptions in BillaBear can be cancelled in multiple ways:

- Programmatically via the API
- Manually through the web dashboard
- Automatically through system processes (e.g., failed payments)

## Cancellation Methods

### API Cancellation

To cancel a subscription via the API, you can use the cancellation endpoint documented in the [API documentation](https://swagger.billabear.com/#tag/Subscriptions/operation/cancelSubscription).

The API allows you to specify cancellation options such as:

- When the cancellation should take effect (immediately or at the end of the current billing period)
- Whether a refund should be issued
- Reason for cancellation (for reporting purposes)

### Dashboard Cancellation

Administrators can cancel subscriptions through the BillaBear web dashboard. The dashboard provides a user-friendly interface for:

- Selecting the subscription to cancel
- Choosing cancellation timing
- Processing refunds if necessary
- Recording cancellation reasons

## Cancellation Flow

When a subscription is cancelled, BillaBear follows a defined workflow process:

### 1. Initiate Cancellation

The first step is creating a cancellation request. This request includes:
- The subscription to be cancelled
- Cancellation timing (immediate or end of period)
- Refund instructions
- Cancellation reason

### 2. Process Refund (If Required)

If the cancellation settings specify that a refund should be issued, BillaBear will:
- Calculate the appropriate refund amount
- Process the refund through the payment provider
- Generate a credit note or refund receipt
- Update financial records

Refunds can be:
- Full refunds of the most recent payment
- Partial refunds based on unused time
- No refund (when cancelling at the end of the billing period)

### 3. Send Customer Notification

BillaBear sends a notification to the customer confirming that their subscription has been cancelled. This notification typically includes:
- Confirmation of the cancellation
- Details about when access will end
- Information about any refunds processed
- Instructions for reactivating the subscription (if applicable)

### 4. Send Internal Notification

BillaBear also sends internal notifications about the cancellation. These notifications help your team track cancellations and may include:
- Slack messages
- Email notifications to specific team members
- Webhook calls to internal systems

## Cancellation Timing Options

BillaBear supports two main cancellation timing options:

### Immediate Cancellation

When a subscription is cancelled immediately:
- Access is revoked right away
- A prorated refund may be issued for unused time
- The subscription status changes to "cancelled" immediately

### End of Period Cancellation

When a subscription is cancelled at the end of the current billing period:
- Access continues until the end of the paid period
- No refund is issued as the service will be provided for the paid period
- The subscription status changes to "pending cancellation"
- At the end of the period, the status changes to "cancelled"

## Cancellation Reporting

BillaBear tracks cancellation data for reporting purposes, including:

- Cancellation rates over time
- Common cancellation reasons
- Revenue impact of cancellations
- Subscription retention metrics

This data can be accessed through the reporting section of the BillaBear dashboard.

## Reactivating Cancelled Subscriptions

In some cases, customers may wish to reactivate a cancelled subscription. BillaBear supports reactivation:

- For subscriptions in "pending cancellation" status, cancellation can be undone
- For fully cancelled subscriptions, a new subscription must be created
- Customer data and history are preserved even after cancellation

## Webhooks for Cancellation Events

BillaBear can send webhook notifications for subscription cancellation events, allowing you to:
- Update external systems when subscriptions are cancelled
- Trigger automated workflows based on cancellations
- Maintain data consistency across your technology stack

Configure webhooks in the BillaBear settings to receive these notifications.