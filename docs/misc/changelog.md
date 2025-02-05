---
title: Changelog
sidebar_label: Changelog
sidebar_position: 1
---
This log was starting

## Version 2025.02.01 - xx.07.2025

### Functionality

* Added slack notification for workflow failure
* Worflows stop if a workflow webhook transition fails
* Added metadata to customer

### Integrations

* Added Hubspot integration

## Version 2025.01.03 - 02.02.2025

* Fixed oauth for xero 

## Version 2025.01.02 - 31.01.2025

* Fixed outputs for customer marketing opt in and invoice format

## Version 2025.01.01 - 27.01.2025

### UI

* Change layout
* Added latest customer list to dashboard
* Added company name to customer list view
* Added Portuguese translations
* Added subscription events (activate, churn, reactivate, upgrade) to customer view
* Added latest subscription events to dashboard
* Added latest payments to dashboard
* Added payment stats to dashboard
* Added collecting tax filter to country list
* Re-added warning bar that Stripe must be configured to use BillaBear
* Improved currency display on Payment Details page
* Improved currency input on refund creation from Payment Details page
* Improved currency input on credit creation
* Improved user edit page

### Functionality

* Added invoice delivery methods to include SFTP and Webhooks alongside email
* Added Invoice formating to include ZUGFeRDv1 and ZUGFeRDv2
* Added the package pricing
* Added tiered volume pricing
* Added tiered graduated pricing
* Added usaged based pricing
* Removed creating products and prices into Stripe's catalog - Causes problems with demo/test data and no one has ever asked for it.
* Added usage limits to customers - disable and warn
* Added company name to customer filter on app list view
* Added company name to customer filter on api
* Added support contact details to brand
* Added functionality to validate if stripe is configured when creating a customer via API
* Added functionality to validate if stripe is configured when creating a customer via APP
* Added workflow step for payments to sync with accounting integration
* Added workflow step for invoice creation to sync with accounting integration
* Added marketing opt in flag to customer
* Save if tax is being collected for country/state when threshold is being checked
* Added slack notifications for tax threshold being reached.
* Added payment amounts converted to system amounts
* Added tax transaction count thresholds

### Integrations

* Added VAT Sense tax integration 
* Added Easybill accounting integration
* Added Xero accounting integration
* Added Zendesk customer support integration
* Added Freshdesk customer support integration
* Added EmailOctopus newsletter integration
* Added Mailchimp newsletter integration

### Developer

* Change from Postgres to TimescaleDB
* Dropped support for PHP 8.2
* Added support for PHP 8.4
* Added link from payment to payment card
* Added a Symfony event for Customer Created
* Added a Symfony event for Customer Enabled
* Added a Symfony event for Customer Disabled
* Upgraded to Symfony 7.2
* Added Webhook events for integration failures
* Added webhook event for usage warning triggered
* Added webhook events for tax threshold being reached.
* Improve performance of demo data generator
* Added amounts converted into the reporting currency to Payment, Receipt, and Invoice.
* Added links to Subscription to ReceiptLine and InvoiceLine.
* Changed license from FSL to FCL

## Version 2024.01.03 - 24.07.2024

* Fixed subscription view when viewing a standalone trial
* Fixed forgot password email recovery failing due to missing template

## Version 2024.01.02 - 23.07.2024

* Filter sensitive info from logs
* Fix invoice generation for products that have a tax rate instead of tax type
* Fix trial started slack notification not being sent
* Fix trial converted slack notification to being created

## Version 2024.01.01 - 21.07.2024

* Fix broken link on payment creation workflow page
* Add create checkout API endpoint
* Add tax report page
* Add country managment and tax data
* Add workflow pages and edit workflows
* Add Slack Integration

## Version 2023.04.02 - 13.11.2023

* Add PDF generation settings
* Add download pdf to invoice view
* Add Lifetime Value report 
* Add change back creation workflow management

## Version 2023.04.01 - 09.10.2023

* Change design
* Change dashboard
* Change subscription reports to pie charts
* Add mass subscription change
* Add churn stats chart
* Add Cancellation Requests workflow management
* Add Subscription Creation workflow management
* Add Payment creation workflow management
* Add Refund Creation Workflow management
* Only show undeleted prices in subscription plan management
* Add loading page to errors
* Add subscription seat API endpoint
* Add changing subscription seats to change subscription UI


## Version 1.1.3 - 12.09.2023

* Fix create checkout for subscriptions

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
