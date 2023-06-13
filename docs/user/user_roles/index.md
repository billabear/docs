---
title: User Roles
sidebar_label: User Roles
sidebar_position: 5
---
In order to allow BillaBear operators manage permissions correctly, BillaBear has a permission system. 

The role system is hierarchical in which a role inheirts all the permissions for another role.

:::note

These roles are only for the web application. The API has no access control list other than an API key.

:::

## Admin

Can do everything

* Manage Users
* Manage Stripe Settings
* And everything a Developer can do.

## Developer

* API Keys
* System Settings
* Notification Settings

## Account Manager

* Create Customer
* Email Templates
* PDF Templates
* Product Management
* Add Features
* Create subscription
* Create Vouchers

## Customer Support

* Issue refunds
* Generate new receipts
* Cancel subscriptions
* Attempt Payment For Unpaid Invoice
* Change subscription price
* Update payment details for subscription
* Add payment details
* Make payment details default
* Delete payment details


## Standard User

* Read only access