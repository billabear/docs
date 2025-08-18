---
title: Workflows
sidebar_label: Workflows
sidebar_position: 8
---

# Understanding Workflows in BillaBear

BillaBear handles core business actions through workflows, which are structured sequences of operations that execute in a specific order. These workflows ensure that all necessary steps are completed when important events occur in your billing system.

## What Are Workflows?

Workflows in BillaBear are predefined sequences of actions that automatically run when certain events occur. For example, when a customer creates a new subscription, BillaBear initiates a "Subscription Creation" workflow that handles all the necessary steps, from recording the subscription in the database to sending notifications.

Each workflow consists of multiple steps that execute in sequence. If any step in a workflow fails, BillaBear allows you to restart the workflow from the point of failure, ensuring that important processes are completed successfully.

## Permissions

To manage workflows in the BillaBear admin system, you need to have a role of Account Manager or higher.

[Learn more about user roles here](../user_roles/)

## Events That Create Workflows

The following actions in BillaBear automatically create workflows:

* **Subscription Creation** - When a new subscription is created
* **Subscription Cancellation** - When a subscription is cancelled
* **Payment Success** - When a payment is successfully processed
* **Payment Failure** - When a payment attempt fails
* **Invoice Creation** - When a new invoice is generated
* **Refund Creation** - When a refund is issued
* **Chargeback Creation** - When a chargeback is received

## How Workflows Function

Each workflow type has a series of predefined steps that execute automatically. For example, a Subscription Creation workflow might include:

1. Creating the subscription record in the database
2. Notifying the payment provider
3. Updating system statistics
4. Sending a confirmation email to the customer
5. Sending internal notifications to your team

If any step in the workflow fails (for example, if an email notification cannot be sent), the workflow pauses at that point. You can then review the issue and restart the workflow, which will continue from the failed step.

## Viewing and Managing Workflows

### Accessing Workflows

To access workflows in BillaBear:

1. Log in to your BillaBear admin account
2. Navigate to the "Workflows" section in the main menu
3. Select the type of workflow you want to view (e.g., Subscription Creation, Payment Success)

### Workflow Status Indicators

Workflows in BillaBear have different status indicators:

* **Completed** - All steps in the workflow have executed successfully
* **In Progress** - The workflow is currently executing
* **Failed** - One or more steps in the workflow have failed
* **Pending** - The workflow is waiting to start

### Restarting Failed Workflows

If a workflow fails, you can restart it to complete the process:

1. Navigate to the Workflows section
2. Find the failed workflow in the list
3. Click on the workflow to view details about which step failed
4. Click the "Restart Workflow" button
5. The workflow will resume from the failed step

This feature ensures that important processes are not left incomplete due to temporary issues.

## Benefits of BillaBear's Workflow System

BillaBear's workflow system provides several advantages:

* **Reliability** - Ensures all necessary steps are completed for critical business processes
* **Transparency** - Provides visibility into the status of important operations
* **Error Recovery** - Allows for easy recovery from failures without manual intervention
* **Consistency** - Ensures the same process is followed every time a specific event occurs

## Video Tutorial

For a visual guide to understanding and managing workflows in BillaBear, watch this tutorial:

[![Watch the video](https://img.youtube.com/vi/q_00MSyuAz0/mqdefault.jpg)](https://youtu.be/q_00MSyuAz0)

## Common Questions About Workflows

### What happens if a workflow fails?

If a workflow fails, it stops at the failed step. The system records the failure, and you can restart the workflow from that point once the issue is resolved.

### Can I customize workflows?

BillaBear's workflows have predefined steps based on best practices for billing operations. While the steps themselves are not customizable, many aspects of what happens within those steps (such as notification content) can be configured in your BillaBear settings.

### How do I know if a workflow has failed?

BillaBear provides notifications for workflow failures through the admin interface. Depending on your configuration, you may also receive email or Slack notifications about workflow failures.

### Can I manually trigger workflows?

Most workflows are triggered automatically by specific events in the system. However, in some cases, you can manually initiate certain workflows through the admin interface when needed.