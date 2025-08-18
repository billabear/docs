---
title: Create Subscription
sidebar_label: Create Subscription
sidebar_position: 7
---

# Creating a Subscription

Creating a subscription is a common task when onboarding new customers or adding services for existing customers. BillaBear makes this process straightforward and efficient.

## What is a Subscription?

A subscription allows a customer to pay regularly (weekly, monthly, or yearly) for continued access to your products or services. When you create a subscription, you're establishing an ongoing billing relationship between your business and the customer.

## Required Permissions

To create a subscription in BillaBear, you need to have the role of **Account Manager** or higher.

For more information about user roles and permissions, see the [User Roles documentation](../user_roles/).

## How Subscription Creation Works

When creating a subscription, you'll need to select:

1. **The customer** who will own the subscription
2. **A subscription plan** that defines what products or services they'll receive
3. **A price** that determines how much and how often they'll pay
4. **Payment details** that specify how they'll be charged

### Subscription Rules

BillaBear enforces certain rules when creating subscriptions:

- **For new subscribers**: You can create a subscription with any plan, price, and payment schedule.
- **For existing subscribers**: New subscriptions must match the existing subscription's payment schedule and currency. BillaBear will automatically show only eligible pricing options.

### Free Trials

When creating a subscription, you can:
- Use the default free trial period defined in the subscription plan
- Override the default and set a custom free trial period
- Choose not to offer a free trial

During a free trial period, the customer has access to the subscription but isn't charged until the trial ends.

## Step-by-Step Guide to Creating a Subscription

### 1. Navigate to the Customer's Page

First, find the customer for whom you want to create a subscription. You can search for customers by name, email, or other identifiers.

### 2. Click "Add Subscription"

On the customer's page, locate and click the "Add Subscription" button.

![Click Add Subscription button on the customer page](./create_screenshots/1_click_add_subscription.png)

### 3. Select a Subscription Plan

Choose the appropriate subscription plan from the dropdown menu. This determines what products or services the customer will receive.

![Select a subscription plan from the dropdown menu](./create_screenshots/2_select_subscription_plan.png)

### 4. Select a Price

Choose the appropriate price for the subscription. The available prices will depend on the selected plan and any existing subscriptions the customer may have.

![Select a price from the available options](./create_screenshots/3_select_price.png)

### 5. Select Payment Details

Choose the payment method that will be used for this subscription. This could be a credit card, bank account, or other payment method that the customer has on file.

![Select the payment details to use for the subscription](./create_screenshots/4_payment_details.png)

### 6. Configure Free Trial (Optional)

Decide whether to offer a free trial and, if so, for how long. You can:
- Use the default trial period from the plan
- Set a custom trial period
- Choose not to offer a trial

![Configure free trial options for the subscription](./create_screenshots/5_decide_trial.png)

### 7. Click "Create"

Review all the information and click the "Create" button to create the subscription.

![Click the Create button to finalize the subscription](./create_screenshots/6_click_create.png)

## What Happens Next

After creating a subscription:

1. **Immediate Access**: The customer immediately gains access to the subscribed products or services.

2. **Trial Period (If Applicable)**: If a free trial was selected, the customer won't be charged until the trial period ends.

3. **First Invoice**: 
   - Without a trial: An invoice is generated immediately and payment is attempted.
   - With a trial: An invoice will be generated when the trial period ends.

4. **Recurring Billing**: The customer will be billed automatically according to the selected price's billing cycle (weekly, monthly, or yearly).

5. **Notification**: The customer typically receives an email confirmation of their new subscription (depending on your notification settings).

## Troubleshooting

### Common Issues

- **Payment Method Declined**: If the customer's payment method is declined, you may need to update their payment information and retry.

- **Currency Mismatch**: If you're trying to create a subscription with a different currency than the customer's existing subscriptions, you'll need to either change the currency of the new subscription or cancel the existing subscriptions first.

- **Billing Cycle Mismatch**: If you're trying to create a subscription with a different billing cycle than the customer's existing subscriptions, you'll need to either change the billing cycle of the new subscription or cancel the existing subscriptions first.

### Need Help?

If you encounter any issues while creating a subscription, please contact your system administrator or refer to the [BillaBear documentation](../) for more information.