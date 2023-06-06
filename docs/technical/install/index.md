---
title: Install
sidebar_label: Install
sidebar_position: 1
---
BillaBear makes installation as easy as possible. It comes with multiple ways to originally install it and avoids the complex and annoying database creation and handles the creation of the database and first user with a simple form that you see when you first go to the application.

To make getting up and running with BillaBear as easy as possible we've 

## DigitalOcean

One of the easiest ways to deploy BillaBear is to the DigitalOcean's App Platform where they handle all the infrastucture things for you.

It's as easy as:

* clicking the button below. 
* Click next on resources
* Click edit on global environment variables
* Enter your stripe API credentials into fields - Fetch from [Stripe's dashboard](https://dashboard.stripe.com/apikeys).
* Create a secret key and copy that into `STRIPE_PRIVATE_API_KEY`
* Copy publishable key and copy that into `STRIPE_PUBLIC_API_KEY`
* Click save
* Click next on enviroment variables
* click next on Info
* click create resources


[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/billabear/billabear/tree/main)



You can watch a video of demostrating how easy