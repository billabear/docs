---
title: Changelog
sidebar_label: Changelog
sidebar_position: 1
---
This log was starting

## Version 1.1 - TBD

### Features

* [API] added list payment details for customer
* [API] Add customer subscription list endpoint
* [APP] Add a list of invited users
* [APP] Add ability to get the invite URL for a user.
* [APP] Add ability to give a subscription plan a code name
* [APP] Add the ability to attach a customerless payment to a customer
* [APP] Add the ability to choose between random invoice number and subseqential invoice number
* [APP] Create a single invoice - one off items and/or subscription creation

### Improvements

* [APP] Improve UI consistency for customer view
* [API] Make it possible to create subscriptions without subscription plan and price ids.

### Migration Notes

Only important if you're not doing standard deployments.

* Database change to subscription plan to add code name column

## Version 1.0.2 - 10.07.2023

### Improvements

* Disable signups without invite code (frontend code already removed)
* Add favicons
* Improve logging for production to write all logs to file

### Bug Fixes

* Fix user invite form not using the role provided
* Fix 500 when no customer address is sent via API on customer create
* Fix 409 being sent when a customer with the same email exists

## Version 1.0.1 - 02.07.2023

### Improvements
* Improve subscription creation not display payment type when customer billing type is invoice
* Improve PDF variables naming to be consistent with email
* Improve update check

### Bug Fixes

* Fix product Price API endpoint returning prices not related to the product
* Fix install error pages not displaying
* Fix post code not being saved on customer create in APP
* Add email template for user invite
* Fix error with logged in users when undefined saved to localStorage
* Fix creating a subscription with a one-off payment
* Fix subscription creation UI on failure
* Fix subscription count stats not being correct on start of new month

## Version 1.0

* First release
