---
title: Deploy To DigitalOcean
sidebar_label: Deploy To DigitalOcean
sidebar_position: 2
---
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



You can watch a video of demostrating how easy it here - [ insert link later ]