---
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---
Getting started with BillaBear is meant to be easy.

## Support

Firstly, if you're struggling at all please reach out and we'll help you.

You can get support from:

* support@billabear.com
* [GitHub Discussions](https://github.com/billabear/billabear/discussions/categories/q-a)

## Setting Up Application

We've documented various ways of setting up the application. You can read how to in the [Install Docs](../install/).

## API 

There are many features you will want to use if you're building a SaaS where the subscriptions are managed by BillaBear.

The API is available in the routes `/api/v1`.

### Create Customer

You want to need to register a customer with BillBear. This should probably be done on registration - however this is up to you.

To do this is you use the [POST /api/v1/customer](https://swagger.billabear.com/#tag/Customers/operation/createCustomer) endpoint.

### Add Payment Card - Stripe.JS

To add the a payment card via the Stripe.js library. You fetch the token required for it via the API and then send the response you get from Stripe to the API.

To get the token you use [GET /api/v1/customer/{customerId}/payment-details/frontend-payment-token](https://swagger.billabear.com/#tag/PaymentDetails/operation/startFrontendPaymentDetails)

To save the payment details you use [POST /api/v1/customer/{customerId}/payment-details/frontend-payment-token](https://swagger.billabear.com/#tag/PaymentDetails/operation/completeFrontendPaymentDetails)

### Fetch Customer limits

You can fetch limits based on the plans [GET /api/v1/customer/{customerId}/limits](https://swagger.billabear.com/#tag/Customers/operation/showCustomerLimitsById)

### Fetch Prices

To show prices that are managed by BillaBear [GET /api/v1/product/{productId}/price](https://swagger.billabear.com/#tag/Prices/operation/listPrice)

### To List Products

To show products that are managed by BillaBear [GET /api/v1/product](https://swagger.billabear.com/#tag/Products/operation/listProduct)

### Create Subscription

To create a subscription you can use [GET /api/v1/customer/{customerId}/subscription/start](https://swagger.billabear.com/#tag/Subscriptions/operation/customerStartSubscription)

### Rest of the functionality

Check out https://swagger.billabear.com.

### Request functionality

You can request a feature via https://github.com/billabear/billabear/discussions/categories/ideas