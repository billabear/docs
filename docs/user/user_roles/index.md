---
title: User Roles
sidebar_label: User Roles
sidebar_position: 5
---

# User Roles in BillaBear

BillaBear includes a permission system that allows you to control what different users can do within the application. This helps you manage your team's access to various features based on their responsibilities.

## Understanding the Role Hierarchy

BillaBear uses a hierarchical role system, which means that higher-level roles automatically include all the permissions of lower-level roles. For example, an Admin can do everything a Developer can do, and a Developer can do everything an Account Manager can do, and so on.

:::note
These roles only apply to the web application. API access is controlled separately using API keys, which do not have role-based restrictions.
:::

## Available Roles

BillaBear offers five standard roles, each with specific permissions:

### Admin

The Admin role has complete access to all features in BillaBear, including:

- Managing users (adding, updating, and disabling team members)
- Configuring Stripe settings
- All permissions included in the Developer role

### Developer

The Developer role focuses on technical configuration and includes:

- Managing API keys
- Configuring system settings
- Setting up notification preferences
- All permissions included in the Account Manager role

### Account Manager

The Account Manager role handles customer and product management:

- Creating and managing customers
- Managing email and PDF templates
- Configuring products and features
- Creating and managing subscriptions
- Creating vouchers
- Creating invoices and quotes
- Performing mass subscription changes
- Managing workflows
- Configuring Slack notifications
- All permissions included in the Customer Support role

### Customer Support

The Customer Support role handles day-to-day customer operations:

- Issuing refunds
- Generating new receipts
- Cancelling subscriptions
- Processing payments for unpaid invoices
- Adjusting subscription prices
- Updating payment details for subscriptions
- Adding, updating, and deleting payment methods
- Marking invoices as paid
- All permissions included in the Standard User role

### Standard User

The Standard User role provides basic read-only access to BillaBear, allowing users to view information but not make changes.

## Managing User Roles

### Viewing Team Members

To view your team members and their roles:

1. Navigate to the Team Settings page
2. You'll see a list of all team members, including their email addresses and status (active or disabled)

### Assigning Roles to Users

If you have Admin permissions, you can assign roles to users:

1. Navigate to the User Settings page
2. Select the user you want to update
3. In the user details page, you'll see checkboxes for each available role
4. Select the appropriate roles for the user
5. Click the Save button to apply the changes

A user can have multiple roles. For example, you might assign both the Account Manager and Customer Support roles to a user who handles both responsibilities.

### Adding New Team Members

To add a new team member:

1. Navigate to the Team Settings page
2. Click the "Add Team Member" button
3. Enter the email address of the person you want to invite
4. Select the appropriate role(s) for the new team member
5. Send the invitation

The new team member will receive an email invitation to join your BillaBear team.

### Disabling Team Members

If a team member no longer needs access to BillaBear:

1. Navigate to the Team Settings page
2. Find the team member in the list
3. Click the "Disable" button next to their name

This will prevent the user from accessing your BillaBear account while preserving their account history.

## Choosing the Right Roles for Your Team

When assigning roles, consider the following guidelines:

- **Admin**: Limit this role to trusted individuals who need full control over the system
- **Developer**: Assign to technical team members who need to configure system settings and integrations
- **Account Manager**: Appropriate for team members who manage customer accounts and subscriptions
- **Customer Support**: Suitable for team members who handle day-to-day customer inquiries and issues
- **Standard User**: Useful for team members who need to view information but don't need to make changes

By carefully assigning roles based on job responsibilities, you can ensure that team members have the access they need while maintaining appropriate security controls.