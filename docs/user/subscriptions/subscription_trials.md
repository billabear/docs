---
title: Subscription Trials
sidebar_label: Subscription Trials
sidebar_position: 8
---

# Subscription Trials

Subscription trials allow your customers to try your products or services before committing to a paid subscription. BillaBear provides flexible trial options to help you acquire and convert customers effectively.

## What are Subscription Trials?

A subscription trial is a period during which a customer can access your subscription-based products or services without being charged. Trials help customers evaluate your offering before making a financial commitment, potentially increasing conversion rates and reducing churn.

## Types of Trials in BillaBear

BillaBear supports two main types of subscription trials:

### Standalone Trials

Standalone trials are designed to expire automatically at the end of the trial period without converting to a paid subscription. These are ideal for:

- Free trial promotions that require explicit opt-in for conversion
- Evaluation periods that should not automatically convert to paid subscriptions
- Marketing campaigns where you want to control the conversion process manually

When a standalone trial ends, the subscription status changes to "trial ended" and the customer is not charged.

### Regular Trials

Regular trials (non-standalone) automatically convert to paid subscriptions when the trial period ends. These are suitable for:

- Freemium models with automatic conversion to paid plans
- Trials where you want a seamless transition to paid service
- Situations where you want to minimize friction in the customer journey

When a regular trial ends, the subscription is automatically converted to a paid subscription, and the customer is charged according to the subscription plan's pricing.

## Setting Up Subscription Plans with Trials

To offer trials, you need to configure your subscription plans appropriately:

1. **Enable Standalone Trial**: For subscription plans that should offer standalone trials, enable the "Standalone Trial" option when creating or editing the plan.

2. **Trial Length**: Define the default trial length for the subscription plan. This determines how long the trial period will last if not overridden during subscription creation.

## Creating Trial Subscriptions

When creating a subscription for a customer, you have several options for configuring trials:

1. **Use Default Trial Period**: Apply the default trial period defined in the subscription plan.

2. **Custom Trial Period**: Override the default and set a custom trial period length.

3. **No Trial**: Choose not to offer a trial, creating a regular paid subscription immediately.

During the trial period, the customer has access to the subscription but isn't charged until the trial ends (for regular trials) or not at all (for standalone trials).

## Trial Subscription Status

Trial subscriptions have specific statuses that help you track their state:

- **Trial Active**: The subscription is currently in its trial period.
- **Trial Ended**: The trial has ended without converting to a paid subscription (for standalone trials).
- **Active**: The trial has been converted to a paid subscription.

## Managing Trial Subscriptions

### Extending Trials

You can extend a trial subscription before it ends by:

1. Navigating to the customer's subscription details
2. Selecting the option to extend the trial
3. Specifying the pricing details for the paid subscription
4. Confirming the extension

When you extend a trial, it immediately converts to a paid subscription with the specified pricing.

### Monitoring Trial Metrics

BillaBear tracks various metrics related to trials to help you understand their effectiveness:

- **Trial Started**: Count of trials that have started
- **Trial Ended**: Count of standalone trials that have ended without conversion
- **Trial Extended/Converted**: Count of trials that have been converted to paid subscriptions

These metrics are available in daily, monthly, and yearly views to help you analyze trial performance over time.

## Trial Lifecycle Events

BillaBear generates events at key points in the trial lifecycle:

1. **Trial Started**: When a trial subscription is created
2. **Trial Ended**: When a standalone trial expires without conversion
3. **Trial Converted**: When a trial is converted to a paid subscription

These events can trigger workflows and notifications, allowing you to automate processes like sending reminder emails before trial expiration.

## Best Practices for Subscription Trials

### Trial Length

- **Short Trials (7-14 days)**: Best for simple products with quick time-to-value
- **Medium Trials (30 days)**: Suitable for most B2B and B2C subscription products
- **Long Trials (60+ days)**: Appropriate for complex products with longer implementation times

### Conversion Optimization

- Send reminder emails before trial expiration
- Offer incentives for early conversion
- Provide clear value demonstration during the trial period
- Make the conversion process as frictionless as possible

### Trial Limitations

Consider whether to:
- Offer full product access during trials
- Limit certain premium features
- Cap usage during the trial period
- Require payment information upfront

## Common Trial Scenarios

### Free Trial with Automatic Conversion

1. Create a subscription plan without the "Standalone Trial" flag
2. Set an appropriate trial period (e.g., 14 days)
3. When creating subscriptions with this plan, customers get a 14-day trial
4. After 14 days, the subscription automatically converts to paid

### Free Trial with Manual Conversion

1. Create a subscription plan with the "Standalone Trial" flag enabled
2. Set an appropriate trial period (e.g., 30 days)
3. When creating subscriptions with this plan, customers get a 30-day trial
4. After 30 days, the trial ends without charging the customer
5. To convert, you must manually extend the trial or create a new paid subscription

## Troubleshooting

### Common Issues

- **Trial Not Starting**: Ensure the subscription plan has trials enabled and the trial length is properly configured.
- **Unexpected Trial Conversion**: Check if the subscription plan has the "Standalone Trial" flag set correctly.
- **Trial Length Discrepancy**: Verify if a custom trial length was specified during subscription creation.

### Need Help?

If you encounter any issues with subscription trials, please contact your system administrator or refer to the [BillaBear documentation](../) for more information.