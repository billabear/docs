---
title: Changelog
sidebar_label: Changelog
sidebar_position: 1
---
This log was starting

## Version 1.1.2 - 11.09.2023

* Add the ability to create a hosted checkout via the application
* Add hosted checkout to the portal
* Add create customer
* Add per seat subscription

## Version 1.1.1 - 03.09.2023

* Fix that subscription stats weren't changed when a quote was accepted
* Fix VAT report page
* Fix stripe webhook for payments when subscription started
* Create a time-limited quote
* Add due date to invoices
* Send warning when invoice is not paid by the due date
* Disable customer when invoice is not paid 30 days after the due date

## Version 1.1 - 24.08.2023

### Features

* Added customer type - business or individual.
* Added list payment details for customer
* Add customer subscription list endpoint
* Add a list of invited users
* Add ability to get the invite URL for a user.
* Add ability to give a subscription plan a code name
* Add the ability to attach a customerless payment to a customer
* Add the ability to choose between random invoice number and subseqential invoice number
* Add Create a single invoice - one off items and/or subscription creation
* Add ability to assign customer specific tax rate
* Add ability to create a quote for a customer
* Add ability to assign a product a specific tax rate.
* Add ability to mark invoice as paid.
* Add ability to follow EU business tax rules or not
* Add ability to assign default tax rate to brand
* Add ability to assign default country during install
* Add Webhook management
* Add send webhook event for payment received
* Add send webhook event for customer enabled
* Add send webhook event for customer disabled
* Add send webhook event for subscription start


### Improvements

* [APP] Improve UI consistency for customer view
* [API] Make it possible to create subscriptions without subscription plan and price ids.

### Migration Notes

Only important if you're not doing standard deployments.

* Database change to subscription plan to add code name column
* Database change to customer to add tax number, tax exempt, physical tax rate, and digital tax rate. 
* Database change to invoice line to change column type to percentage, add columns tax_type

## Version 1.0.3 - 15.07.2023

## Bug Fixes

* Fix invoice line vat percentage being boolean type instead of float

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
