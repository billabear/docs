---
title: Change Subscription Price
sidebar_label: Change Price
sidebar_position: 4
---

# Changing a Subscription Price

Adjusting the price of a customer's subscription is a common task in subscription management. BillaBear makes it easy to change prices while maintaining the same subscription plan.

## Understanding Price Changes

A price change allows you to adjust how much a customer pays for their subscription without changing the plan itself. This is useful when:

- You want to offer a special rate to a loyal customer
- You need to adjust pricing for a specific customer due to contractual agreements
- You're implementing a price increase or decrease for certain customers

## Required Permissions

To change a subscription price in BillaBear, you need to have the role of **Customer Support** or higher.

For more information about user roles and permissions, see the [User Roles documentation](../user_roles/).

## How Price Changes Work

When you change a subscription price:

- The new price will be used starting at the next billing cycle
- The current billing cycle continues with the old price
- The subscription plan remains the same
- The billing schedule (weekly, monthly, yearly) remains the same
- The currency remains the same

BillaBear does not automatically issue refunds when changing prices. If you want to issue a refund for the difference between the old and new prices for the current billing period, you'll need to do that separately.

## Step-by-Step Guide to Changing a Subscription Price

### Step 1: Navigate to the Subscription View Page

First, you need to access the subscription for which you want to change the price. See [View Subscription](./view_subscription.md) for detailed instructions on how to find and view a subscription.

### Step 2: Click "Change Price"

On the subscription view page, locate and click the "Change Price" button.

![Click the Change Price button on the subscription view page](./change_price_screenshots/1_click_change.png)

### Step 3: Select the New Price

Choose the new price from the available options. The available prices will be limited to those that:
- Are associated with the current subscription plan
- Match the customer's existing billing cycle
- Use the same currency as the current subscription

![Select the new price from the available options](./change_price_screenshots/2_select_price.png)

### Step 4: Click "Update"

Review your selection and click the "Update" button to confirm the price change.

![Click the Update button to confirm the price change](./change_price_screenshots/3_click_update.png)

## What Happens After Changing a Price

After you change a subscription price:

1. **Current Billing Period**: The customer continues to pay the old price for the remainder of the current billing period.

2. **Next Billing Period**: When the next billing cycle begins, the customer will be charged the new price.

3. **Notification**: The customer typically receives an email notification about the price change (depending on your notification settings).

4. **Record Keeping**: The change is recorded in the subscription's history for audit purposes.

## Common Scenarios

### Price Increase

When you need to increase the price for a customer:

1. Navigate to the subscription
2. Change to a higher-priced option
3. Consider communicating with the customer in advance to explain the increase

### Price Discount

When you want to offer a discount to a customer:

1. Navigate to the subscription
2. Change to a lower-priced option
3. Consider adding a note to the customer's account explaining the reason for the discount and its duration

## Immediate Price Changes

If you need to change a price immediately (rather than waiting for the next billing cycle):

1. Change the price as described above
2. If necessary, issue a partial refund for the current billing period
3. If necessary, create a one-time invoice for the difference if the new price is higher

## Troubleshooting

### Common Issues

- **Price Not Available**: If you don't see the expected price in the list, check that it's active, associated with the current plan, and matches the customer's billing cycle and currency.

- **Price Change Not Applied**: If the price change doesn't seem to take effect, remember that it only applies to future billing cycles, not the current one.

### Need Help?

If you encounter any issues while changing a subscription price, please contact your system administrator or refer to the [BillaBear documentation](../) for more information.