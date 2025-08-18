---
title: Metrics
sidebar_label: Metrics
sidebar_position: 1
---

# Understanding Metrics

Metrics are the foundation of usage-based billing in BillaBear. They define what aspects of your service you want to measure and how those measurements should be processed for billing purposes.

## What is a Metric?

A metric represents a specific measurable aspect of your service, such as:
- Number of API calls
- Amount of data stored
- Processing time used
- Number of active users
- Bandwidth consumed

Each metric has specific settings that determine how BillaBear collects and processes usage data.

## Permissions

The role `ROLE_ACCOUNT_MANAGER` is required to create or edit metrics.

## Creating and Editing Metrics

To create or edit a metric, navigate to the Metrics section in the BillaBear dashboard and provide the following information:

| Field | Description |
| --- | --- |
| Name | A descriptive name for the metric (e.g., "API Calls", "Storage Usage") |
| Code | A unique identifier used in API requests and event processing |
| Metric Type | Determines how usage accumulates across billing periods:<br>• **Resettable**: Usage resets to zero at the start of each billing period<br>• **Continuous**: Usage accumulates continuously across billing periods |
| Aggregation Method | How individual usage events are combined to calculate the total:<br>• **Sum**: Adds all values together<br>• **Count**: Counts the number of events<br>• **Latest**: Uses the most recent value<br>• **Count Unique**: Counts unique values<br>• **Max**: Uses the highest value |
| Ingestion | How frequently usage data is processed:<br>• **Real-time**: Processed immediately<br>• **Hourly**: Processed once per hour<br>• **Daily**: Processed once per day |
| Filters | Optional rules to include or exclude specific events based on their properties:<br>• **Inclusive**: Only include events that match the filter<br>• **Exclusive**: Exclude events that match the filter |

## Example Metric Configuration

Here's an example of creating an "API Calls" metric:

![Create Metric](./metric_screenshots/create_screenshot.png)

## Best Practices for Metrics

- Use clear, descriptive names that reflect what is being measured
- Choose the appropriate aggregation method based on what you're measuring
- Consider the volume of events when selecting an ingestion method
- Use filters to separate different types of usage within the same metric
- Test your metric configuration with sample data before using it in production
