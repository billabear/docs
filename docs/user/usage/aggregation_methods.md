---
title: Metric Aggregation Methods
sidebar_label: Aggregation Methods
sidebar_position: 3
---

# Aggregation Methods Overview

Aggregation methods determine how BillaBear processes individual usage events to calculate the total usage value for billing. The method you choose depends on what aspect of usage you want to measure.

## Sum

**What it does**: Adds together the values from all events during the billing period.

**Example**: If you track data transfer in GB and have events with values [5, 10, 3, 7], the sum would be 25 GB.

**Best for**: Measuring cumulative resources like total data transferred, storage used, or processing time.

## Count

**What it does**: Counts the total number of events during the billing period, regardless of their values.

**Example**: If you receive 150 events for API calls during a month, the count would be 150.

**Best for**: Measuring the frequency of actions like API calls, logins, or transactions.

## Latest

**What it does**: Uses only the most recent event's value as the usage value.

**Example**: If you track active users with values [100, 120, 115, 130], only the last value (130) would be used.

**Best for**: Measuring current state or status that changes over time, like active users or current storage level.

## Count Unique

**What it does**: Counts the number of events with unique values during the billing period.

**Example**: If you track logins with user IDs [user1, user2, user1, user3, user2], the unique count would be 3.

**Best for**: Measuring distinct users, devices, or resources accessed.

## Max

**What it does**: Uses the highest value from all events during the billing period.

**Example**: If you track concurrent connections with values [10, 25, 15, 20], the max would be 25.

**Best for**: Measuring peak usage or capacity requirements like maximum concurrent users or highest resource utilization.