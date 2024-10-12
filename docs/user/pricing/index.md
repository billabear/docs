---
title: Pricing Models
sidebar_label: Pricing
sidebar_position: 16
---
BillaBear supports multiple pricing models. This allows you to price your application the way you want that suits you best and enables you to provide maximum value.

## Fixed Price

A fixed price is the simpliest pricing model available. That is there is a single price for all for a subscription plan.

## Per Unit/Per Seat

A per seat pricing model allows you to charge customers based on how many units/seats are being used by the customer. This allows you to charge customers who need more users or more of a specific resource more based on how much they use it.

For example, if you have a customer with 1 seat they pay for 1 seat, if you have a customer using 12 seats then they pay for 12 seats.

# Package

A package pricing allows you to sell units/seats in a package instead of separately.

For example, you can sell seats in packages of 10. So if a customer has 5 seats they pay for 10, but if they have 25 they pay for 30.

# Tier Volume

Tier volume allows you to sell units/seats at a specific price based on how many they're using. With there being several levels of pricing. You're able to set a flat fee for the volume or a per unit pricing.

**Example 1:**

Tiers are: flat fee for between 1 to 100 units it's 1000.00, for between 101 to 200 units it's 1500.00. And above 201 for 2000.00

If the customer is using 50 seats. They pay 1000.00. If the customer is 250 then they pay 2000.00.

**Example 2:**

Tiers are per seat for between 1 to 100 units it's 10.00, for between 101 to 200 units it's 7.50. And above 201 it's 5.

If the customer is uing 50 seats then it's `50*10.00` which is 500.00. If the customer is using 150 then it's `199*7.50` which is 1492.50. If the customer is using 201 seats then it's `201*5` 1005.00.

# Tier Graduated

Tier graduated allows you to sell units/seats at variable rates based on how many they use. For you can charge a certain price for the first 100, then another price for the next 100, and then another price for the rest.

**Example 1:**

Tiers are: flat fee for between 1 to 100 units it's 1000.00, for between 101 to 200 units it's 500.00. And above 201 for 250.00

If the customer is using 150 seats then they pay 1000.00 for the first 100 and then an extra 500.00 for the next 50. 

**Example 2:**

Tiers are per seat for between 1 to 100 units it's 10.00, for between 101 to 200 units it's 7.50. And above 201 it's 5.

If the customer is using 250 seats then it works out at `(100 * 10.00) + (100 * 7.50) + (50 * 5)` which is 2000.00. `100*100` is 1000.00. `100*7.50` is 750. And `50*5` is 250. 