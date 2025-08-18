---
title: Troubleshooting Stripe Integration
sidebar_label: Troubleshooting
sidebar_position: 4
---

# Troubleshooting Stripe Integration

Even with a well-designed integration, you may occasionally encounter issues with the connection between BillaBear and Stripe. This guide will help you identify and resolve common problems.

## General Troubleshooting Approach

When troubleshooting Stripe integration issues, follow these general steps:

1. **Check the basics**: Verify API keys, internet connectivity, and account status
2. **Review logs**: Check BillaBear logs for error messages
3. **Test in isolation**: Test specific features individually to isolate the problem
4. **Verify Stripe status**: Check if Stripe is experiencing service disruptions
5. **Check for updates**: Ensure you're using the latest version of BillaBear

## Common Issues and Solutions

### Connection Problems

#### Issue: BillaBear Cannot Connect to Stripe

**Symptoms:**
- Error messages about connection failures
- "Unable to connect to Stripe API" notifications
- Features requiring Stripe don't work

**Solutions:**
1. Verify your internet connection
2. Check that your Stripe API keys are entered correctly
3. Ensure your Stripe account is active and in good standing
4. Check if your server can reach api.stripe.com
5. Verify that your firewall allows outbound connections to Stripe

#### Issue: Invalid API Key

**Symptoms:**
- "Invalid API key" error messages
- Authentication failures when connecting to Stripe

**Solutions:**
1. Double-check your API keys in **Settings** > **Stripe**
2. Ensure you're using the correct keys for your environment (test/live)
3. Generate new API keys in your Stripe dashboard if necessary
4. Verify that you're using the secret key, not the restricted key

### Webhook Issues

#### Issue: Webhooks Not Being Received

**Symptoms:**
- Changes in Stripe aren't reflected in BillaBear
- Webhook status shows as inactive

**Solutions:**
1. Verify the webhook is registered in Stripe (check your Stripe dashboard)
2. Ensure your BillaBear installation is publicly accessible
3. Check that the webhook URL is correct
4. Review Stripe's webhook logs for delivery attempts
5. Verify your server allows incoming connections from Stripe's IP addresses

#### Issue: Webhook Signature Verification Failures

**Symptoms:**
- Webhook events are received but not processed
- Error logs mention signature verification failures

**Solutions:**
1. Verify the webhook signing secret matches between BillaBear and Stripe
2. Check your server's clock synchronization
3. Ensure no proxies or load balancers are modifying the webhook requests

For more detailed webhook troubleshooting, see the [Webhooks documentation](./webhooks).

### Import Issues

#### Issue: Import Process Stalls

**Symptoms:**
- Import progress stops updating
- Import appears stuck at a specific percentage

**Solutions:**
1. Refresh the import status page
2. Check BillaBear logs for import errors
3. For large accounts, be patient as imports can take several hours
4. If the import is genuinely stuck, you can dismiss it and start a new one

#### Issue: Missing Data After Import

**Symptoms:**
- Some customers, products, or subscriptions are missing after import
- Incomplete data for imported entities

**Solutions:**
1. Verify the import completed successfully
2. Check for any error messages during the import process
3. Ensure you have the necessary permissions in Stripe to access all data
4. For very old data (>2 years), some limitations may apply

For more detailed import troubleshooting, see the [Import Data documentation](./import).

### Billing Issues

#### Issue: Payments Not Being Processed

**Symptoms:**
- Customers aren't being charged
- Subscriptions show as active but no payments are recorded

**Solutions:**
1. Verify Stripe billing is enabled in BillaBear
2. Check that the payment methods for affected customers are valid
3. Ensure webhooks are properly configured to receive payment events
4. Verify the subscription has a valid price attached

#### Issue: Subscription Updates Not Syncing

**Symptoms:**
- Changes to subscriptions in Stripe aren't reflected in BillaBear
- Subscription status discrepancies between systems

**Solutions:**
1. Verify webhooks are properly configured
2. Check that the subscription events are being sent to BillaBear
3. Manually sync the subscription data if necessary

## Environment-Specific Issues

### Test Mode vs. Live Mode Confusion

**Symptoms:**
- Data appears in one environment but not the other
- Test payments showing in live mode or vice versa

**Solutions:**
1. Verify you're using the correct API keys for your intended environment
2. Check which environment you're currently viewing in BillaBear
3. Remember that test and live data are completely separate

### Multi-Account Setup Issues

**Symptoms:**
- Data from one Stripe account appearing in another
- Confusion about which Stripe account is connected

**Solutions:**
1. Verify the API keys for each BillaBear instance
2. Ensure each BillaBear instance is connected to the correct Stripe account
3. Use separate BillaBear instances for different Stripe accounts

## When to Contact Support

If you've tried the troubleshooting steps above and still can't resolve your issue, it's time to contact support. Before reaching out, gather the following information:

1. Detailed description of the issue
2. Steps you've already taken to troubleshoot
3. Error messages (if any)
4. Screenshots of relevant screens
5. Timestamps of when the issue occurred
6. Any relevant IDs (customer IDs, subscription IDs, etc.)

## Preventative Measures

To minimize integration issues:

- **Regularly test** your integration in test mode
- **Monitor webhook deliveries** in your Stripe dashboard
- **Keep your API keys secure** and rotate them periodically
- **Stay updated** on changes to Stripe's API
- **Maintain backups** of your BillaBear data
- **Document your configuration** for future reference

## Logging and Debugging

BillaBear provides detailed logs that can help identify Stripe integration issues:

1. Access your BillaBear server logs
2. Look for entries related to Stripe API calls
3. Check for webhook receipt and processing logs
4. Review any error messages or warnings

For advanced users, you can enable debug mode for more detailed logging of Stripe interactions.