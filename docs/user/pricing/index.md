---
title: Pricing Models
sidebar_label: Pricing
sidebar_position: 16
---

# Pricing Models

BillaBear supports multiple pricing models to help you charge your customers in the way that best suits your business. This flexibility allows you to create pricing structures that align with your value proposition and customer needs.

## Understanding Pricing Models

A pricing model determines how you charge your customers for your products or services. BillaBear offers several pricing models that can be applied to subscription plans, each designed to meet different business needs and customer expectations.

## How to Create and Manage Pricing

When creating or editing a subscription plan in BillaBear, you'll need to set up pricing for that plan:

1. Navigate to the Subscription Plans section
2. Select an existing plan to edit or create a new plan
3. In the Prices section, you can either:
   - Select an existing price to add to the plan
   - Create a new price by clicking the "New" option

When creating a new price, you'll need to select a pricing model and configure its specific settings.

## Available Pricing Models

### Fixed Price

A fixed price is the simplest pricing model available. It applies a single price for all customers subscribing to a plan, regardless of usage or other factors.

**When to use:** Ideal for products or services with a consistent cost structure or when you want to offer straightforward pricing to customers.

**How to set up:**
1. Select "Fixed Price" as the pricing type
2. Enter the amount to charge
3. Select the currency
4. Choose the billing schedule (weekly, monthly, or yearly)

**Example:**
A subscription to your software costs £10 per month for all customers, regardless of how much they use it.

### Per Unit/Per Seat

A per seat (or per unit) pricing model allows you to charge customers based on how many units or seats they use. This model scales linearly with usage, making it fair and transparent for customers.

**When to use:** Ideal for team-based software, services where usage can be clearly counted in discrete units, or when you want to scale pricing directly with customer usage.

**How to set up:**
1. Select "Per Unit" as the pricing type
2. Enter the amount to charge per unit
3. Select the currency
4. Choose the billing schedule
5. Optionally, enable usage-based billing and select a metric

**Example:**
If you charge £10 per user per month:
- A customer with 1 user pays £10 per month
- A customer with 12 users pays £120 per month (12 × £10)

### Package

Package pricing allows you to sell units or seats in predefined bundles rather than individually. Customers pay for a full package even if they don't use all units in that package.

**When to use:** Useful when you want to simplify pricing tiers or when there are economies of scale in serving customers in groups.

**How to set up:**
1. Select "Package" as the pricing type
2. Enter the amount to charge per package
3. Enter the number of units included in each package
4. Select the currency
5. Choose the billing schedule

**Example:**
If you sell seats in packages of 10 at £90 per package:
- A customer with 5 seats pays for 1 package (£90)
- A customer with 25 seats pays for 3 packages (£270)

### Tiered Volume

Tiered volume pricing allows you to charge different rates based on the total volume of units a customer uses. The price for all units is determined by which tier the total usage falls into.

**When to use:** Ideal for encouraging higher usage with volume discounts or when your costs decrease significantly at scale.

**How to set up:**
1. Select "Tiered Volume" as the pricing type
2. Add tiers with:
   - First unit (automatically set)
   - Last unit (the upper bound of this tier)
   - Unit price (amount to charge per unit in this tier)
   - Flat fee (fixed amount to charge for this tier)
3. Select the currency
4. Choose the billing schedule

**Example 1 (Flat fee):**
Tiers are set as:
- 1 to 100 units: £1,000 flat fee
- 101 to 200 units: £1,500 flat fee
- 201+ units: £2,000 flat fee

If a customer uses 50 units, they pay £1,000.
If a customer uses 150 units, they pay £1,500.
If a customer uses 250 units, they pay £2,000.

**Example 2 (Per unit):**
Tiers are set as:
- 1 to 100 units: £10 per unit
- 101 to 200 units: £7.50 per unit
- 201+ units: £5 per unit

If a customer uses 50 units, they pay £500 (50 × £10).
If a customer uses 150 units, they pay £1,125 (150 × £7.50).
If a customer uses 250 units, they pay £1,250 (250 × £5).

### Tiered Graduated

Tiered graduated pricing applies different rates to different portions of a customer's usage. Each unit is priced according to the tier it falls into, allowing for more granular pricing.

**When to use:** Best for fairly reflecting different costs at different usage levels while still encouraging growth.

**How to set up:**
1. Select "Tiered Graduated" as the pricing type
2. Add tiers with:
   - First unit (automatically set)
   - Last unit (the upper bound of this tier)
   - Unit price (amount to charge per unit in this tier)
   - Flat fee (fixed amount to charge for this tier)
3. Select the currency
4. Choose the billing schedule

**Example 1 (Flat fee):**
Tiers are set as:
- 1 to 100 units: £1,000 flat fee
- 101 to 200 units: £500 flat fee
- 201+ units: £250 flat fee

If a customer uses 150 units, they pay £1,500:
- £1,000 for the first 100 units
- £500 for the next 50 units (101-150)

**Example 2 (Per unit):**
Tiers are set as:
- 1 to 100 units: £10 per unit
- 101 to 200 units: £7.50 per unit
- 201+ units: £5 per unit

If a customer uses 250 units, they pay £2,000:
- £1,000 for the first 100 units (100 × £10)
- £750 for the next 100 units (100 × £7.50)
- £250 for the remaining 50 units (50 × £5)

## Additional Pricing Options

When creating prices in BillaBear, you can configure several additional options:

### Currency

Select the currency for the price. BillaBear supports multiple currencies, allowing you to price your products appropriately for different markets.

### Recurring Billing

Specify whether the price should recur and on what schedule:
- Weekly
- Monthly
- Yearly

### Tax Settings

Choose whether the price includes tax or not. This affects how tax is calculated and displayed on invoices.

### Public/Private Pricing

Mark prices as public or private:
- Public prices are visible to customers in the customer portal
- Private prices are only visible to administrators

### Usage-Based Pricing

For non-fixed pricing models, you can enable usage-based pricing and select a metric to track usage. This allows you to charge based on actual consumption rather than a predetermined amount.

## Best Practices

- **Start simple:** Begin with a straightforward pricing model and add complexity only when necessary
- **Consider your customers:** Choose a pricing model that aligns with how customers perceive the value of your product
- **Test different approaches:** Use BillaBear's flexibility to experiment with different pricing models
- **Be transparent:** Ensure customers understand how they're being charged
- **Review regularly:** Periodically review your pricing strategy to ensure it remains competitive and profitable