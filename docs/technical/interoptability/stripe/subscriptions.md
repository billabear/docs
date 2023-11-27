---
title: Stripe Subscriptions Interoptability
sidebar_label: Subscriptions
sidebar_position: 1
---
The Stripe Subscription Interopability layer is to allow you to continue using the same code you're using to create subscriptions using Stripe Billing.

## List

### Parameters

| Name | Supported | Description |
| --- | --- | --- |
| customer | yes | The ID of the customer whose subscriptions will be retrieved. |
| price | yes | Filter for subscriptions that contain this recurring price ID. |
| status | no | The status of the subscriptions to retrieve. Passing in a value of canceled will return all canceled subscriptions, including those belonging to deleted customers. Pass ended to find subscriptions that are canceled and subscriptions that are expired due to incomplete payment. Passing in a value of all will return subscriptions of all statuses. If no value is supplied, all subscriptions that have not been canceled are returned. |
| automatic_tax | no | Filter subscriptions by their automatic tax settings. |
| collection_method | no | The collection method of the subscriptions to retrieve. Either charge_automatically or send_invoice. |
| created | yes | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: |
| current_period_end | no | A filter on the list based on the object current_period_end field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: |
| current_period_start | no | A filter on the list based on the object current_period_start field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: |
| ending_before | yes | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| limit | yes | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| starting_after | yes | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |
| test_clock | no | Filter for subscriptions that are associated with the specified test clock. The response will not include subscriptions with test clocks if this and the customer parameter is not set. |