---
title: Background Tasks
sidebar_label: Background Tasks
sidebar_position: 2
---

# Background Tasks

BillaBear relies on several background tasks that must run regularly to ensure proper system operation. These tasks handle critical functions such as invoice generation, payment processing, notifications, and data synchronization.

## Understanding Background Tasks

Background tasks in BillaBear are processes that run automatically at scheduled intervals without requiring user intervention. They perform essential operations such as:

- Processing payments and retrying failed payments
- Generating invoices for subscriptions
- Sending notifications about expiring payment cards
- Refreshing exchange rates
- Checking for system updates
- Synchronizing data with external services

## Running Background Tasks

There are two primary methods for running background tasks in BillaBear:

### Method 1: Using the Scheduler Command (Recommended)

The scheduler approach is the recommended method for running background tasks. It uses Symfony's Scheduler component to manage all tasks according to their defined schedules.

When using the scheduler command, all tasks will run at their predefined intervals as configured in BillaBear. You only need to ensure that the scheduler command is running continuously.

**How to run the scheduler:**

```bash
bin/console messenger:consume scheduler_main
```

This command should be kept running in the background, typically using a process manager like Supervisor or systemd.

**Example systemd configuration:**

```ini
[Unit]
Description=BillaBear Scheduler
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/path/to/billabear
ExecStart=/path/to/billabear/bin/console messenger:consume scheduler_main
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

### Method 2: Using Cronjobs

Alternatively, you can set up individual cronjobs for each background task. This approach gives you more control over when each task runs but requires more configuration.

**Example crontab configuration:**

```crontab
# Run background generic tasks every minute
* * * * * cd /path/to/billabear && bin/console billabear:background-generic

# Run Stripe import every minute
* * * * * cd /path/to/billabear && bin/console billabear:stripe:import

# Generate invoices every 5 minutes
*/5 * * * * cd /path/to/billabear && bin/console billabear:invoices:generate-new

# Retry payments every 5 minutes
*/5 * * * * cd /path/to/billabear && bin/console billabear:payments:retry

# Refresh exchange rates daily
1 3 * * * cd /path/to/billabear && bin/console billabear:payments:exchange-rates-refresh

# Check for updates daily
1 2 * * * cd /path/to/billabear && bin/console billabear:update:check

# Send expiring cards notifications (day before)
5 0 * * * cd /path/to/billabear && bin/console billabear:expiring-cards:day-before

# Send expiring cards notifications (first day of month)
1 0 1 * * cd /path/to/billabear && bin/console billabear:expiring-cards:first-day
```

## Background Task Details

The following table provides details about each background task in BillaBear:

| Task | Command | Description | Frequency |
| --- | --- | --- | --- |
| Background Generic Tasks | `billabear:background-generic` | Processes generic background tasks from the queue. | Every minute |
| Stripe Import | `billabear:stripe:import` | Handles the Stripe import process, synchronizing data from Stripe to BillaBear. | Every minute |
| Generate Invoices | `billabear:invoices:generate-new` | Generates invoices for subscriptions that are due within the next 5 minutes. | Every 5 minutes |
| Retry Payments | `billabear:payments:retry` | Attempts to process failed payments according to the configured retry schedule. | Every 5 minutes |
| Expiring Cards (Day Before) | `billabear:expiring-cards:day-before` | Sends notifications to customers whose payment cards are expiring and have subscriptions scheduled to be charged within the next day. | Daily at 00:05 |
| Expiring Cards (First Day) | `billabear:expiring-cards:first-day` | Sends notifications to all customers with expiring payment cards attached to active subscriptions. | First day of each month at 00:01 |
| Exchange Rates Refresh | `billabear:payments:exchange-rates-refresh` | Updates currency exchange rates from exchangerate-api.com. | Daily at 03:01 |
| Update Check | `billabear:update:check` | Checks for available BillaBear updates. | Daily at 02:01 |
| Before Charge Warning | N/A (scheduler only) | Sends notifications to customers before their subscription is charged. | Daily at 01:05 |
| Trial Ending Warning | N/A (scheduler only) | Sends notifications to customers whose trial periods are ending soon. | Daily at 01:15 |
| Invoice Overdue Warning | N/A (scheduler only) | Sends notifications for overdue invoices. | Daily at 03:01 |
| Disable Overdue Customers | N/A (scheduler only) | Disables customers with overdue payments according to configured policies. | Daily at 04:01 |
| Mass Subscription Change | N/A (scheduler only) | Processes bulk subscription changes. | Every 5 minutes |
| Check If Invoices Paid | N/A (scheduler only) | Verifies payment status of invoices. | Every 12 hours |

## Monitoring Background Tasks

To ensure your background tasks are running properly, you can:

1. Check the application logs for task execution records
2. Monitor the Symfony Messenger queue status
3. Use the Symfony Profiler in development environments

**Checking the Messenger queue status:**

```bash
bin/console messenger:stats
```

## Troubleshooting

If background tasks aren't running as expected:

1. **Verify the scheduler is running:**
   ```bash
   ps aux | grep messenger:consume
   ```

2. **Check for errors in the logs:**
   ```bash
   tail -f var/log/prod.log
   ```

3. **Ensure proper permissions:**
   The user running the scheduler or cronjobs must have appropriate permissions to execute commands and access required resources.

4. **Manually trigger a task to test:**
   ```bash
   bin/console billabear:background-generic
   ```

5. **Check for failed messages in the queue:**
   ```bash
   bin/console messenger:failed:show
   ```

## Best Practices

- Use the scheduler method in production environments for simplicity and reliability
- Set up proper monitoring to ensure background tasks are running
- Configure appropriate logging to track task execution and errors
- Regularly check for failed messages in the Messenger queue
- Consider using a process manager like Supervisor or systemd to ensure the scheduler stays running