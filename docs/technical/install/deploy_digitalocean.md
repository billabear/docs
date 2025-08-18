---
title: Deploy To DigitalOcean
sidebar_label: Deploy To DigitalOcean
sidebar_position: 2
---

# Deploy BillaBear to DigitalOcean

One of the easiest ways to deploy BillaBear is to DigitalOcean's App Platform, where they handle all the infrastructure management for you.

## Deployment Steps

1. Click the "Deploy to DigitalOcean" button below
2. Click "Next" on the Resources screen
3. Click "Edit" on Global Environment Variables
4. Enter your Stripe API credentials:
   - Fetch your API keys from [Stripe's dashboard](https://dashboard.stripe.com/apikeys)
   - Create a secret key and copy it into `STRIPE_PRIVATE_API_KEY`
   - Copy the publishable key into `STRIPE_PUBLIC_API_KEY`
5. Click "Save"
6. Click "Next" on Environment Variables
7. Click "Next" on Info
8. Click "Create Resources"

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/billabear/billabear/tree/main)

## Video Tutorial

You can watch a video demonstrating the deployment process here: [BillaBear DigitalOcean Deployment Tutorial](https://youtu.be/cbInyGtqLCs)

## Post-Deployment Setup

After deployment is complete:

1. Access your BillaBear instance using the URL provided by DigitalOcean
2. Complete the initial setup form to create your administrator account
3. Configure additional settings as needed (email, integrations, etc.)

## Troubleshooting

If you encounter any issues during deployment:

- Check that your Stripe API keys are entered correctly
- Ensure all required environment variables are set
- Review the DigitalOcean App Platform logs for any error messages

For additional assistance, please contact [support@billabear.com](mailto:support@billabear.com) or visit our [GitHub Discussions](https://github.com/billabear/billabear/discussions/categories/q-a).