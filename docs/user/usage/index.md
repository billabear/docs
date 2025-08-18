---
title: Usage Based Billing
sidebar_label: Usage
sidebar_position: 15
---

# Overview

Usage-based billing allows you to charge customers based on their actual consumption of your services. This creates a fair pricing model where customers who use your service more pay more, while those who use it less pay less.

## How Usage-Based Billing Works in BillaBear

1. **Define Metrics**: Create metrics to track specific aspects of your service that you want to measure (e.g., API calls, storage used, processing time).

2. **Record Usage**: Your system sends usage events to BillaBear whenever customers use your service.

3. **Aggregate Data**: BillaBear processes these events using your chosen aggregation method (count, sum, max, etc.) to calculate the total usage.

4. **Apply Pricing**: The aggregated usage is combined with your pricing rules to calculate charges.

5. **Generate Invoices**: BillaBear creates invoices that include the usage-based charges.

## Key Components

* [Metrics](./metrics) - Define what you want to measure and how to process the data
* [Aggregation Methods](./aggregation_methods) - Different ways to calculate total usage from individual events
* [Cost Estimates](./usage_estimate_costs) - Provide customers with estimated costs based on current usage
* [Events](./events) - Record actual usage data in your system
