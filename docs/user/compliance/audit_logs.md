---
title: Audit Logs
sidebar_label: Audit Logs
sidebar_position: 23
---

# Audit Logs

## What Are Audit Logs?

Audit logs are a powerful compliance feature that records who has done what and when within BillaBear. They provide a chronological record of activities, helping you track changes, monitor system usage, and troubleshoot issues. Audit logs are particularly valuable during customer support queries when you need to understand the history of actions taken.

## What Information Do Audit Logs Capture?

Audit logs in BillaBear capture:

- **Actions**: What action was performed (viewing data, making changes, etc.)
- **Timestamps**: When the action occurred
- **User Information**: Which Billing Admin performed the action
- **Context**: Additional details about the action
- **Data Changes**: For changes to important data, both the old and new values

## Types of Audit Logs

BillaBear provides four different audit log views, each focusing on a specific aspect of the system:

### 1. Overall Audit Logs

The Overall audit logs show all activities across the entire system. This comprehensive view is useful for system administrators who need to monitor all actions.

### 2. Customer Audit Logs

Customer audit logs show all activities related to a specific customer. This focused view helps you track interactions with a particular customer, including profile views, changes to customer data, and subscription activities.

### 3. Subscription Audit Logs

Subscription audit logs show all activities related to a specific subscription. This view is useful for tracking changes to subscription plans, billing cycles, and payment status.

### 4. Billing Admin Audit Logs

Billing Admin audit logs show all activities performed by a specific administrator. This view helps you monitor the actions of individual team members for accountability and training purposes.

## Viewing Audit Logs

### Overall Audit Logs

To view the overall audit logs:

1. Click **Settings** in the main navigation
2. Click **Audit Log**

### Customer Audit Logs

To view audit logs for a specific customer:

1. Navigate to the customer's profile page
2. Click the **Audit Log** button

### Subscription Audit Logs

To view audit logs for a specific subscription:

1. Navigate to the subscription's details page
2. Click the **Audit Log** button

### Billing Admin Audit Logs

To view audit logs for a specific billing administrator:

1. Click **Settings** in the main navigation
2. Click **Users**
3. Find the user you want to review
4. Click the **Audit Log** button for that user

## Understanding the Audit Log Interface

The audit log interface displays a chronological list of activities:

![View Audit Logs](./audit_log_images/customer_view.png)

Each log entry shows:

- **Log Message**: A description of the action that occurred
- **Date and Time**: When the action took place

### Viewing Detailed Information

To see more details about a specific log entry:

1. Click on the log entry to expand it
2. The expanded view shows:
   - **Context**: Additional information about the action, including any data that was changed
   - **Billing Admin**: The name of the administrator who performed the action (if applicable)

### No Results

If there are no log entries matching your criteria, you'll see a message indicating that no logs are available.

## Using Audit Logs Effectively

### For Troubleshooting

When investigating issues:
1. Identify the relevant customer or subscription
2. Check their audit logs to see recent activities
3. Look for changes that might have caused the issue

### For Customer Support

When handling customer inquiries:
1. Open the customer's audit logs
2. Review recent activities related to their account
3. Use this information to provide accurate and informed responses

### For Compliance Reporting

For regular compliance reviews:
1. Use the Overall audit logs to generate activity reports
2. Filter by date range if needed
3. Document any significant findings for your compliance records

## Best Practices

- **Regular Review**: Schedule periodic reviews of audit logs to identify unusual patterns
- **Support Preparation**: Check relevant audit logs before responding to customer support requests
- **Documentation**: Reference specific audit log entries when documenting issues or changes
- **Training**: Use audit logs to help train new team members on proper procedures