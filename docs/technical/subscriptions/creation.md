---
title: Subscription Creation Flow
sidebar_label: Creation Flow
sidebar_position: 1
---
The creation of a subscription can be done programattically via the API. Or it can be done manually via the web dashboard.

## Via API

The way to create a subscription via the API is done can bve found at https://swagger.billabear.com/#tag/Subscriptions/operation/customerStartSubscription

It allows you to create a subscription programmatically either using IDs gained via the API or by using generic inputs.

### With IDS

The purpose for creating a subscription with specific ids is that it allows you to be in complete control over what subscription plan and price is used.

The downside is that either you need to fetch the information from the API or you have to copy it from the BillaBear UI.

### Generic Inputs

The purpose for creating a subscription with generic inputs is that it allows you to set in the code what you want to do. While decoupling it from the specific details.

**Subscription Plan Code Name** - This allows you to define a code name for the plan that is to be used for API calls. This decouples the API calls with a specific plan and you could reassign the code name to a different subscription plan and not have to update your code.

**Currency and Schedule** - This allows you to define the currency you want to create the subscription for and the payment schedule. BillaBear searches for a price that is public for that subscription plan that matches those inputs and uses that price. This allows you to change the price for a subscription without having to change the id used within your code/config and not have to fetch the prices when creating a subscription.


## Flow

When a subscription is created there is a process that it will go through.

### 1. Create Record

The first step is to create a record of the subscription being created

### 2. Notify Payment Provider

The payment provider is notified to either take the first payment or to know that there is a subscription payment. 

If Stripe Billing is disabled and there is a free trial then the payment provider is not notified.

### 3. Update Stats

At this point the various stats that the system has are updated. This is done here so that the report pages are performant and don't take minutes to return basic informtaion.

### 4. Send customer notifications

Depending on the settings defined within BillaBear the customer notifications are sent.

### 5. Send Internal notifications

Depending on the settings defined within BillaBear the internal notifications are sent.