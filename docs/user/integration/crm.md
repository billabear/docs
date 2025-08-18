---
title: CRM Integrations
sidebar_label: CRM
sidebar_position: 5
---

# CRM Integrations

BillaBear integrates with Customer Relationship Management (CRM) systems to keep your customer data synchronized across platforms. This integration ensures that your sales and support teams have access to up-to-date billing and subscription information directly in your CRM.

## Benefits of CRM Integration

* **Unified Customer View**: Access billing, subscription, and payment information alongside customer data
* **Improved Sales Process**: Provide sales teams with accurate subscription and billing history
* **Enhanced Customer Service**: Give support teams visibility into customer's billing status
* **Automated Data Synchronization**: Eliminate manual data entry and reduce errors
* **Streamlined Operations**: Maintain consistent customer records across systems

## What Data Is Synchronized

The following data is automatically synced to your CRM system:

* **Customer Information**: Contact details, billing address, and customer type
* **Email Communication**: Records of billing-related emails sent to customers
* **Subscription Details**: Plan information, status, and renewal dates
* **Billing History**: Payment records and invoice status

## Setting Up CRM Integration

### Accessing CRM Integration

1. Log in to your BillaBear admin account
2. Navigate to the main menu
3. Select "Integrations"
4. Choose "CRM"

## Available Integrations

### HubSpot

HubSpot is a popular CRM platform that provides marketing, sales, and service tools for businesses of all sizes.

#### Setting Up HubSpot Integration

1. From the CRM Integrations page, select "HubSpot" from the dropdown menu
2. Click "Connect with HubSpot"
3. You will be redirected to HubSpot to authorize the connection
4. Log in to your HubSpot account if prompted
5. Grant BillaBear permission to access your HubSpot data
6. You will be redirected back to BillaBear once authorization is complete
7. Verify that the connection status shows as "Connected"

#### Required HubSpot Permissions

BillaBear requires the following permissions to integrate with HubSpot:

* **Contacts**: To create and update customer records
* **Companies**: To associate customers with company records
* **Timeline**: To add billing and subscription events to the customer timeline
* **Properties**: To create custom properties for billing and subscription data

## Using the Integration

Once the HubSpot integration is set up, you'll be able to:

### View BillaBear Data in HubSpot

1. **Customer Records**: BillaBear customer information will appear in HubSpot contact records
2. **Company Records**: For business customers, company information will be synchronized
3. **Timeline Events**: Billing and subscription events will appear in the customer's timeline
4. **Custom Properties**: BillaBear-specific data will be available as custom properties

### Synchronization Behavior

* **New Customers**: When a new customer is created in BillaBear, a corresponding contact is created in HubSpot
* **Customer Updates**: When customer information is updated in BillaBear, the HubSpot contact is updated
* **Email Tracking**: Emails sent from BillaBear are logged in the customer's HubSpot timeline

## Configuring Synchronization Settings

You can customize which data is synchronized between BillaBear and HubSpot:

1. In the CRM Integration settings, locate the "Synchronization Settings" section
2. Select which data types to synchronize:
   * Customer data
   * Email communication
   * Subscription details
   * Billing history
3. Choose the synchronization frequency (real-time or scheduled)
4. Click "Save" to apply your settings

## Testing Your Integration

To verify your CRM integration is working correctly:

1. Create a test customer in BillaBear
2. Wait for the synchronization to complete (usually within a few minutes)
3. Check your HubSpot account to confirm the customer was added
4. Update the customer's information in BillaBear
5. Verify that the changes are reflected in HubSpot

## Troubleshooting

If you encounter issues with your CRM integration:

* **Connection Issues**: Verify that your OAuth connection is still valid
* **Missing Data**: Check your synchronization settings to ensure all required data types are enabled
* **Duplicate Records**: If you see duplicate records, check for existing contacts with the same email address
* **Permission Errors**: Ensure your HubSpot account has the necessary permissions granted to BillaBear

For persistent issues, contact BillaBear support with details of the problem you're experiencing.