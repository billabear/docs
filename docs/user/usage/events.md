---
title: Usage Events
sidebar_label: Events
sidebar_position: 4
---

# Understanding Usage Events

Usage events are records of customer activity that BillaBear uses to calculate usage-based charges. Each event represents a single instance of service usage tied to a specific subscription.

## What is a Usage Event?

A usage event contains the following key information:

- **Subscription ID**: Links the usage to a specific customer subscription
- **Metric Code**: Identifies which metric the usage applies to
- **Value**: The quantity or measurement of the usage
- **Timestamp**: When the usage occurred
- **Properties**: Optional additional data that can be used for filtering

## How Events Are Processed

When BillaBear receives a usage event:

1. It validates the event data
2. Associates it with the correct subscription and metric
3. Applies any relevant filters
4. Processes the event according to the metric's ingestion method (real-time, hourly, or daily)
5. Updates the usage counters for billing calculations

## Sending Usage Events

Your system needs to send usage events to BillaBear whenever relevant activity occurs. This can be done through:

- API calls to the BillaBear usage event endpoint
- Batch uploads for high-volume usage data
- Integration with event streaming platforms

## Best Practices

- Send events promptly to ensure accurate billing
- Include all required fields in each event
- Use consistent units of measurement
- Consider implementing retry logic for failed event submissions
- Monitor event processing to ensure all usage is captured correctly