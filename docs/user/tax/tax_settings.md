---
title: Change Tax Settings
sidebar_label: Tax Settings
sidebar_position: 1
---

# Tax Settings

Tax settings in BillaBear allow you to configure how taxes are calculated and applied to your customers' invoices and subscriptions. These settings help ensure your business complies with relevant tax regulations.

## Permissions

To change tax settings in the BillaBear admin system, you need to have the ADMIN role. This restriction ensures that only authorized personnel can modify these important settings.

[Check the user roles here.](../user_roles/)

## How It Works

BillaBear's tax settings control several important aspects of tax calculation:

1. **Tax Customers with Tax Number**: Determines whether customers who have provided a tax number (such as a VAT number) should be charged tax. In many jurisdictions, businesses with valid tax numbers may be exempt from certain taxes.

2. **EU Business Tax Rules**: Enables special tax handling for business-to-business (B2B) transactions within the European Union. When enabled, BillaBear follows EU rules for cross-border B2B transactions.

3. **EU One Stop Shop Rule**: Enables compliance with the EU One Stop Shop (OSS) scheme, which simplifies VAT obligations for businesses selling to consumers across the EU.

4. **VatSense Integration**: Allows you to validate VAT numbers automatically using the VatSense service, ensuring your tax exemptions are only applied to customers with valid VAT numbers.

These settings help you comply with tax regulations while ensuring you're charging the correct amount of tax to your customers.

## How To Change Tax Settings

### Step 1. Go to Settings

Navigate to the Settings section in the BillaBear admin interface by clicking on the "Settings" option in the main menu.

![Click Settings](./tax_settings_screenshots/1_click_setttings.png)

### Step 2. Go to Tax Settings

In the Settings menu, locate and click on the "Tax" section to access the tax settings.

![Click Tax Settings](./tax_settings_screenshots/2_click_tax_sections.png)

### Step 3. Configure Tax Settings

On the Tax Settings page, you'll see several options that you can enable or disable:

- **Tax Customers with Tax Number**: Toggle this option to determine whether customers who have provided a tax number should be charged tax. If disabled, customers with tax numbers will be exempt from tax.

- **EU Business Tax Rules**: Enable this option if you need to comply with EU B2B tax rules.

- **EU One Stop Shop Rule**: Enable this option if you're registered for the EU One Stop Shop scheme.

- **VatSense Integration**: If you have a VatSense account, you can enable this integration to automatically validate VAT numbers. You'll need to provide your VatSense API key.

Select the appropriate settings for your business needs.

![Choose settings](./tax_settings_screenshots/3_choose_tax.png)

### Step 4. Save Your Changes

After configuring your tax settings, click the "Save" button to apply your changes.

![Click Save](./tax_settings_screenshots/4_click_save.png)

## Important Considerations

- **Tax Compliance**: Ensure your tax settings comply with the tax regulations in all jurisdictions where you do business.

- **VAT Validation**: If you're doing business in the EU, validating VAT numbers is important to ensure you're correctly applying tax exemptions.

- **Customer-Specific Tax Rates**: Remember that these global tax settings can be overridden by customer-specific tax rates. See [Customer Specific Tax](./customer_specific_tax.md) for more information.

- **Regular Review**: Tax regulations change frequently. Regularly review your tax settings to ensure continued compliance.