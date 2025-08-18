---
title: Subscription Creation
sidebar_label: Creation
sidebar_position: 1
---

# Subscription Creation

Subscriptions in BillaBear can be created in multiple ways:

- Programmatically via the API
- Manually through the web dashboard
- Automatically through checkout processes

## Creating Subscriptions via API

The API endpoint for creating a subscription can be found in the [API documentation](https://swagger.billabear.com/#tag/Subscriptions/operation/customerStartSubscription).

The API allows you to create a subscription using either specific IDs or generic inputs, providing flexibility for different integration scenarios.

### Using Specific IDs

Creating a subscription with specific IDs gives you complete control over which subscription plan and price are used.

**Advantages:**
- Precise control over the subscription configuration
- Guaranteed consistency in subscription setup

**Disadvantages:**
- Requires fetching information from the API or copying it from the BillaBear UI
- Less adaptable to changes in your subscription offerings

### Using Generic Inputs

Creating a subscription with generic inputs allows you to define what you want in your code while decoupling it from specific implementation details.

**Subscription Plan Code Name:**
This feature allows you to define a code name for the plan that is used for API calls. This decouples your API calls from a specific plan, enabling you to reassign the code name to a different subscription plan without updating your code.

**Currency and Schedule:**
By specifying the currency and payment schedule, BillaBear will search for a public price for the subscription plan that matches these inputs. This approach allows you to change prices without modifying the code or configuration used in your integration, and eliminates the need to fetch prices when creating a subscription.

## Available SDKs

The following SDKs are available for creating subscriptions in BillaBear:

* [PHP SDK](https://github.com/billabear/php-sdk#start-subscription)

## Subscription Creation Flow

When a subscription is created, BillaBear follows a defined workflow process:

### 1. Create Subscription Record

The first step is to create a record of the subscription in the database. This includes storing all relevant information such as the customer, subscription plan, price, and any additional metadata.

### 2. Notify Payment Provider

BillaBear notifies the payment provider (e.g., Stripe) to either:
- Take the first payment immediately
- Register the subscription for future billing

**Note:** If Stripe Billing is disabled and the subscription includes a free trial, the payment provider is not notified until the trial period ends.

### 3. Update Statistics

After the subscription is created, BillaBear updates various statistical data in the system. This is done to ensure that report pages remain performant and can quickly display subscription information without having to calculate metrics in real-time.

### 4. Send Customer Notifications

Depending on the settings configured in BillaBear, the system sends notifications to the customer about their new subscription. These notifications can include:
- Welcome emails
- Receipt for the initial payment
- Information about the subscription terms
- Instructions for accessing the service

### 5. Send Internal Notifications

BillaBear can also send internal notifications to your team about the new subscription. These notifications can be configured in the system settings and may include:
- Slack messages
- Email notifications to specific team members
- Webhook calls to internal systems

## Subscription Creation with Trials

BillaBear supports creating subscriptions with trial periods. There are two types of trials:

1. **Standard Trials:** Require payment information upfront but don't charge until the trial period ends
2. **Standalone Trials:** Can be started without requiring payment details

When creating a subscription with a trial:

1. The subscription is created with a trial status
2. No payment is taken during the trial period
3. When the trial ends, the subscription is automatically converted to a paid subscription
4. If payment fails at the end of the trial, the subscription is cancelled

## Metadata Support

When creating a subscription, you can include custom metadata that will be stored with the subscription record. This metadata can be used for:

- Tracking referral sources
- Storing integration-specific identifiers
- Including custom attributes relevant to your business

Metadata is stored as key-value pairs and can be retrieved when viewing subscription details.