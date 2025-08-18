---
title: Update Customer
sidebar_label: Update
sidebar_position: 4
---

# Updating Customers

After creating customers in BillaBear, you may need to update their information as circumstances change. BillaBear provides a comprehensive interface for modifying customer details, preferences, and settings.

## Required Permissions

To update a customer in the BillaBear admin system, you need to have a role of **Customer Support** or higher.

[Learn more about user roles here](../user_roles/)

## When to Update Customer Information

You might need to update customer information for various reasons:
- Contact details have changed
- Billing preferences need adjustment
- Address information requires updating
- Tax status or settings need modification
- Customer has opted in/out of marketing communications
- Custom metadata needs to be added or modified

## Understanding Customer Update Fields

When updating a customer, you can modify several categories of information:

### Basic Information
- **Email**: The customer's primary contact email
- **Locale**: The customer's preferred language and regional settings
- **Reference**: Your internal reference for this customer
- **Customer Type**: Whether the customer is a business or individual
- **Billing Type**: How the customer will be billed (Card or Invoice)
- **Marketing Opt-in**: Whether the customer has consented to marketing communications

### Tax Information
- **Tax Number**: The customer's tax identification number
- **Standard Tax Rate**: The default tax rate applied to this customer
- **Invoice Format**: The format for invoices (PDF or ZUGFeRD v1)

### Address Information
- **Company Name**: For business customers
- **Street Line 1**: Primary address line
- **Street Line 2**: Secondary address line (optional)
- **City**: City name
- **Region**: State, province, or region
- **Country**: Country code (ISO format)
- **Post Code**: Postal or ZIP code

### Metadata
- Custom key-value pairs for storing additional information about the customer

## Step-by-Step Guide

### Step 1: Access the Customer Profile

First, locate the customer you want to update using the [search functionality](./search_customers).

1. Navigate to the Customers section
2. Search for the customer using their email, reference, or external reference
3. Click on the customer's name to access their profile

### Step 2: Navigate to Update Form

From the customer profile page, locate and click the "Update" or "Edit" button.

### Step 3: Modify Customer Information

The update form will display the customer's current information. Make changes to any fields that require updating:

1. **Basic Information**: Update email, locale, reference, etc.
2. **Tax Information**: Modify tax number, rates, or invoice format
3. **Address Information**: Update any address details
4. **Metadata**: Add, modify, or remove custom metadata fields

### Step 4: Review Changes

Before submitting, carefully review all changes to ensure accuracy.

### Step 5: Submit Updates

Click the "Update" button to save your changes.

## What Happens After Updating

When you update a customer:

1. The customer's information is immediately updated in the BillaBear system
2. Any integrations (such as payment processors or CRM systems) may be notified of the changes
3. The changes are logged in the audit trail for compliance purposes
4. Future invoices and communications will use the updated information

## Advanced Options

### External Reference

The External Reference field is available under the "Advanced" section. This field contains the customer's ID in your payment processor (such as Stripe). Only modify this field if you're absolutely certain of the correct value, as incorrect changes can disrupt payment processing.

### Metadata Management

The metadata section allows you to add custom key-value pairs to store additional information about the customer:

1. Click "Add Metadata" to create a new entry
2. Enter a key (name) and value
3. Add as many metadata entries as needed
4. To remove an entry, click the trash icon next to it

## Troubleshooting

If you encounter errors when updating a customer:

- Ensure email addresses are in a valid format
- Check that country codes follow the ISO 3166-1 alpha-2 format
- Verify that numeric fields (like tax rates) contain only numbers
- Make sure all required fields are completed

## Best Practices

- **Regular Updates**: Periodically verify customer information is current
- **Communication**: Inform customers when making significant changes to their account
- **Documentation**: Record reasons for important changes in your internal systems
- **Validation**: Double-check critical information like tax numbers and billing addresses
- **Audit Trail**: BillaBear maintains a log of all changes for compliance purposes