---
title: Subscription Creation Flow
sidebar_label: Creation Flow
sidebar_position: 1
---
The creation of a subscription can be done programattically via the API. Or it can be done manually via the web dashboard.


# Flow

When a subscription is created there is a process that it will go through.

## 1. Create Record

The first step is to create a record of the subscription being created

## 2. Notify Payment Provider

The payment provider is notified to either take the first payment or to know that there is a subscription payment. 

If Stripe Billing is disabled and there is a free trial then the payment provider is not notified.

## 3. Update Stats

At this point the various stats that the system has are updated. This is done here so that the report pages are performant and don't take minutes to return basic informtaion.

## 4. Send customer notifications

Depending on the settings defined within BillaBear the customer notifications are sent.

## 5. Send Internal notifications

Depending on the settings defined within BillaBear the internal notifications are sent.