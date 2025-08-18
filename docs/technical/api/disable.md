---
title: Disable API Key
sidebar_label: Disable API Key
sidebar_position: 2
---
API keys should be disabled when they are no longer needed or if they have been compromised. This guide explains how to disable an API key in the BillaBear admin system.

## When to Disable API Keys

You should disable API keys in the following situations:

1. **Security breach** - If you suspect an API key has been compromised
2. **End of integration** - When you no longer need a particular integration
3. **Staff changes** - When team members with access to the key leave the organization
4. **Key rotation** - As part of regular security practices to rotate keys
5. **Suspicious activity** - If you notice unusual patterns in API usage

## Permissions

To disable an API key in the BillaBear admin system, you must have a user role of developer or higher.

[Check the user roles here.](../../user/user_roles/)

## How To

### Step 1. Navigate to API Keys

First, navigate to the API Keys section by clicking on Settings in the main menu, then selecting API Keys.

![Click Settings](./create_api_key_screenshots/1_click_settings.png)

![Click API Keys](./create_api_key_screenshots/2_click_api_keys.png)

### Step 2. Locate the API Key

Find the API key you want to disable in the list of API keys.

### Step 3. Click Disable

Click the Disable button next to the API key you want to disable.

![Click Disable](./disable_screenshot/1_click_disable.png)

### Step 4. Confirm Disabling

A confirmation dialog will appear. Click Confirm to disable the API key.

## What Happens After Disabling

When an API key is disabled:

1. The key immediately becomes invalid
2. All API requests using this key will be rejected with a 401 Unauthorized response
3. The key remains in the system but is marked as inactive
4. The key cannot be re-enabled (you must create a new key if needed)

## Alternative: API Key Expiration

Instead of manually disabling keys, consider setting appropriate expiration dates when creating API keys. This provides automatic key rotation without manual intervention.