---
title: Metrics
sidebar_label: Metrics
sidebar_position: 1
---
Metrics are at the core of usage. These are used to record the usage.  

## Permissions

The role `ROLE_ACCOUNT_MANAGER` is required to create/edit Metrics.

## Create/Edit

To create/edit a metric you need to define

| Field | Description |
| ---   | ---         |
| Name  | The name of the metric |
| Code  | The code for the metric that is to be used for API Requests |
| Aggregation Method | How the metric events should be aggregated into a value |
| Ingestion          | How the data should be ingested |
| Filters            | If you want to filter events you can add data you the event property and you can choose between inclusive and exclusive filters to decide if you want to filter out values or filter by value |

![Create Metric](./metric_screenshots/create_screenshot.png)
