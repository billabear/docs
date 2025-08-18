---
title: Create API Key
sidebar_label: Create API Key
sidebar_position: 1
---
When integrating with the API, you need to provide an API key for all requests to authenticate that the client is allowed to make the request. This guide explains how to create a new API key in the BillaBear admin system.

## Permissions

To create an API key in the BillaBear admin system, you must have a user role of developer or higher.

[Check the user roles here.](../../user/user_roles/)

## API Key Security Best Practices

When working with API keys, follow these security best practices:

1. **Treat API keys like passwords** - They provide access to your billing system and customer data
2. **Set expiration dates** - Always set an appropriate expiration date for API keys
3. **Use different keys for different integrations** - Create separate keys for each application or service
4. **Rotate keys regularly** - Replace keys periodically, especially for production environments
5. **Limit access** - Only share keys with those who need them
6. **Monitor usage** - Regularly review API key usage for suspicious activity
7. **Disable unused keys** - Promptly disable keys that are no longer needed

## How To

### Step 1. Click Settings

![Click Settings](./create_api_key_screenshots/1_click_settings.png)

### Step 2. Click API Keys

![Click API Keys](./create_api_key_screenshots/2_click_api_keys.png)

### Step 3. Click Create

![Click Create](./create_api_key_screenshots/3_click_create.png)

### Step 4. Enter Name

![Enter Name](./create_api_key_screenshots/4_enter_name.png)

### Step 5. Enter Expires At

![Enter Expires At](./create_api_key_screenshots/5_enter_expires_at.png)

### Step 6. Click Create

![Click Create](./create_api_key_screenshots/6_click_create.png)

### Step 7. Save Your API Key

After clicking Create, you'll see a confirmation screen with your new API key displayed. This is the **only time** the full API key will be shown.

![Save API Key](./create_api_key_screenshots/7_save_api_key.png)

**IMPORTANT:** Copy and securely store your API key immediately. For security reasons, BillaBear only displays the complete API key once. If you lose it, you'll need to create a new one.

## Using Your API Key

To use your API key in API requests, include it in the Authorization header:

```
Authorization: Bearer YOUR_API_KEY
```

Example using curl:

```bash
curl -X GET "https://your-billabear-instance.com/api/v1/customers" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```