---
title: Customer Specific Tax
sidebar_label: Customer Specific Tax
sidebar_position: 2
---

# Customer Specific Tax Rates

BillaBear allows you to set specific tax rates for individual customers. This feature is useful when certain customers require special tax treatment due to their location, business status, or other factors.

## Permissions

To set customer-specific tax rates in the BillaBear admin system, you need to have the CUSTOMER SUPPORT role or higher.

[Check the user roles here.](../user_roles/)

## How It Works

Customer-specific tax rates override the default tax rates that would normally apply based on the customer's country and your global tax settings. BillaBear allows you to set two different types of tax rates for each customer:

1. **Standard Tax Rate**: This rate applies to physical goods and most services. It's the default tax rate used for items that aren't classified as digital services.

2. **Digital Tax Rate**: This rate applies specifically to digital services. Some countries have different tax rates or special rules for digital services compared to physical goods.

When you set customer-specific tax rates, these rates will override all other tax calculations for that customer, including:
- Country-based tax rates
- EU VAT rules
- Tax exemptions based on tax numbers

This gives you complete control over how much tax is charged to specific customers.

## When to Use Customer-Specific Tax Rates

You might want to set customer-specific tax rates in the following situations:

- When a customer has a special tax status that isn't handled by your global tax settings
- When you need to manually adjust tax rates for specific customers due to their unique circumstances
- When you have negotiated special tax arrangements with certain customers
- When a customer is located in a jurisdiction with complex tax rules that aren't automatically handled by BillaBear

## How To Set Customer-Specific Tax Rates

### Step 1. Navigate to the Customer Profile

First, find and open the customer's profile in the BillaBear admin interface.

### Step 2. Edit Customer Information

Look for the "Edit" or "Update" button on the customer profile page and click it to access the customer editing form.

### Step 3. Set Tax Rates

In the customer editing form, you'll find fields for setting tax rates:

- **Standard Tax Rate**: Enter the percentage rate for physical goods and general services (e.g., 20.0 for 20%)
- **Digital Tax Rate**: Enter the percentage rate for digital services (e.g., 16.0 for 16%)

If you want to exempt a customer from tax, you can set the rate to 0.

![Set Rates](./customer_specific_tax_screenshots/tax_rates.png)

### Step 4. Save Changes

After entering the desired tax rates, save the customer information to apply the changes.

## Viewing Customer Tax Rates

When viewing a customer's profile, you can see their tax rates in the tax information section:

### When No Rates Are Set

If no customer-specific tax rates have been set, the system will display "No tax rates set" and will use the default tax calculation based on the customer's country and your global tax settings.

![Display When No Rates are Set](./customer_specific_tax_screenshots/no_tax_rates.png)

### When Tax Rates Are Set

If customer-specific tax rates have been set, the system will display the rates that will be applied to this customer's invoices and subscriptions.

![Display When Tax Rates are Set](./customer_specific_tax_screenshots/tax_rates.png)

## Important Considerations

- **Tax Compliance**: Ensure that any customer-specific tax rates you set comply with relevant tax regulations.

- **Documentation**: It's good practice to document why you've set special tax rates for specific customers for audit purposes.

- **Regular Review**: Tax regulations change frequently. Regularly review your customer-specific tax rates to ensure continued compliance.

- **Impact on Reporting**: Remember that customer-specific tax rates will affect your tax reports and may require special handling in your accounting system.

- **Precedence**: Customer-specific tax rates take precedence over all other tax rules in BillaBear, including country-specific rates and global tax settings.