---
title: Manage Stripe Webhooks
sidebar_label: Webhooks
sidebar_position: 3
---

# Manage Stripe Webhooks

Webhooks are a critical component of the integration between BillaBear and Stripe. They allow Stripe to automatically notify BillaBear about events such as successful payments, subscription updates, or failed charges. This guide explains how webhooks work and how to set them up properly.

## What Are Webhooks?

Webhooks are automated messages sent from Stripe to BillaBear when an event occurs in your Stripe account. Think of them as real-time notifications that keep BillaBear updated about what's happening in Stripe.

For example, when a customer's payment succeeds in Stripe, a webhook notifies BillaBear so it can update the customer's payment status automatically.

## Why Webhooks Are Important

Without webhooks, BillaBear would need to constantly check Stripe for updates, which would be inefficient. Webhooks ensure:

- **Real-time data synchronization** between Stripe and BillaBear
- **Automatic handling** of payment events
- **Immediate updates** to subscription statuses
- **Reliable tracking** of refunds and disputes

## Prerequisites

Before setting up webhooks, ensure you have:

- An active Stripe account
- Your Stripe API keys configured in BillaBear
- Administrator access to BillaBear
- A publicly accessible BillaBear installation (webhooks cannot be sent to localhost)

## Required Permissions

To manage webhooks in BillaBear, you need to have an **Admin** role or higher.

[Learn more about user roles here](../user_roles/)

## Registering a Webhook

BillaBear makes it easy to set up webhooks with Stripe:

1. Log in to your BillaBear account
2. Navigate to **Settings** > **Stripe**
3. In the Webhook Configuration section, click **Register Webhook**
4. BillaBear will automatically create the webhook in your Stripe account
5. Once registered, you'll see the webhook URL and signing secret

![Register Webhook Button](./import_screenshots/1_click_settings.png)

## How BillaBear Uses Webhooks

BillaBear listens for the following Stripe events:

- **Payment events**: successful charges, failed payments
- **Subscription events**: creations, updates, cancellations
- **Customer events**: updates, deletions
- **Refund events**: processed refunds
- **Dispute events**: new disputes, dispute updates

When these events occur, Stripe sends a webhook to BillaBear, which then updates its database accordingly.

## Verifying Webhook Configuration

To ensure your webhooks are working correctly:

1. In your BillaBear dashboard, go to **Settings** > **Stripe**
2. Check the **Webhook Status** indicator
3. If it shows "Active," your webhooks are configured correctly
4. If it shows "Inactive" or "Error," see the troubleshooting section below

You can also test webhooks by:

1. Making a test payment in Stripe's test mode
2. Checking that the payment appears in BillaBear
3. Updating a subscription in Stripe and verifying the change in BillaBear

## Deregistering a Webhook

If you need to remove a webhook:

1. Navigate to **Settings** > **Stripe**
2. In the Webhook Configuration section, click **Deregister Webhook**
3. Confirm the action when prompted
4. BillaBear will remove the webhook from your Stripe account

## Troubleshooting Webhook Issues

Common webhook issues and their solutions:

### Webhook Not Receiving Events

If BillaBear isn't receiving webhook events:

1. Check that the webhook is registered in your Stripe dashboard
2. Verify that the webhook URL is correct and publicly accessible
3. Ensure your BillaBear installation is running and accessible from the internet
4. Check your server's firewall settings to ensure it allows incoming connections from Stripe

### Webhook Signature Verification Failed

If you see signature verification errors:

1. Verify that the webhook signing secret in BillaBear matches the one in Stripe
2. Check that your server's clock is synchronized (time drift can cause signature failures)
3. Ensure no proxies or load balancers are modifying the webhook requests

### Missing Events

If some events aren't being processed:

1. Check that you've selected all the necessary event types in your Stripe webhook configuration
2. Verify that your webhook is pointing to the correct BillaBear environment (test/live)
3. Check your BillaBear logs for any errors processing specific event types

For more comprehensive troubleshooting guidance, see the [Troubleshooting documentation](./troubleshooting).

## Best Practices for Webhooks

- **Use HTTPS**: Always use HTTPS for webhook URLs to ensure secure transmission
- **Monitor webhook activity**: Regularly check Stripe's webhook logs to ensure events are being delivered
- **Set up alerts**: Configure alerts for webhook failures in Stripe
- **Test thoroughly**: Test your webhook setup in Stripe's test mode before going live
- **Keep environments separate**: Use different webhook endpoints for test and live environments

## Advanced Configuration

For advanced users, BillaBear supports custom webhook configurations:

- **Custom event filtering**: Configure which events BillaBear should process
- **Webhook retries**: Set up automatic retries for failed webhook deliveries
- **Multiple webhooks**: Register multiple webhooks for different purposes

Contact your system administrator or BillaBear support for assistance with advanced webhook configurations.