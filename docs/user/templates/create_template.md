---
title: Create Email Template
sidebar_label: Create Email Template
sidebar_position: 3
---

# Creating Email Templates

Email templates in BillaBear allow you to customise the notifications sent to your customers. This guide will walk you through the process of creating and managing email templates.

## Permissions Required

To create and manage email templates in BillaBear, you need to have an account with administrator or manager privileges. These roles have access to the settings area where templates are managed.

[Learn more about user roles here](../user_roles/)

## Understanding Email Templates

BillaBear uses email templates to send professional, branded communications to your customers for various events such as:

- Subscription creation
- Subscription cancellation
- Payment processing
- Invoice creation
- Payment card expiry notifications

Each template can be associated with:
- A specific notification type
- A specific locale (language)
- A specific brand (if you manage multiple brands)

The system follows a fallback order when selecting templates:
1. First, it looks for a template matching the specific locale and brand
2. If not found, it uses the default locale template for the specific brand
3. If still not found, it uses the default locale template for the default brand

## Email Service Provider Integration

BillaBear supports two ways to create email templates:

1. **BillaBear's Built-in Templates**: Create and manage templates directly in BillaBear using the Twig template language
2. **Email Service Provider (ESP) Templates**: Use templates from supported email service providers like SendGrid, Mailgun, or Postmark

If you're using ESP templates, you'll need to provide the template ID from your email service provider instead of creating the template body in BillaBear.

## Creating an Email Template

Follow these steps to create a new email template in BillaBear:

### Step 1: Navigate to Settings

In the BillaBear admin interface, click on the "Settings" option in the main navigation menu.

![Click Settings](./create_template_screenshots/1_click_settings.png)

### Step 2: Select Email Templates

In the Settings menu, click on "Email Templates" to access the template management area.

![Click Email Templates](./create_template_screenshots/2_click_email_templates.png)

### Step 3: Click Create

Click the "Create" button to start creating a new email template.

![Click Create](./create_template_screenshots/3_click_create.png)

### Step 4: Enter Template Details

Fill in the template details form with the following information:

- **Type**: Select the notification type (e.g., subscription_created, payment_created)
- **Locale**: Choose the language locale for this template (e.g., "en" for English)
- **Subject**: Enter the email subject line
- **Use ESP Template**: Toggle this on if you're using an external email service provider template
- **Template ID**: (Only if using ESP) Enter the template ID from your email service provider
- **Template Body**: (Only if not using ESP) Enter the HTML/Twig code for your template

![Enter Template Details](./create_template_screenshots/4_enter_data.png)

The template body should contain HTML with Twig variables as described in the [Email Template Variables](./email_variables.md) documentation.

### Step 5: Save the Template

Click the "Create" button to save your new template.

![Click Create](./create_template_screenshots/5_click_update.png)

## Managing Existing Templates

### Viewing Templates

You can view all your existing email templates from the Email Templates page in Settings. This page displays:

- The template type
- The locale
- Whether it uses an ESP template
- Creation and modification dates

### Editing a Template

To edit an existing template:

1. Click on the template in the list
2. Make your changes to the subject, template ID, or template body
3. Click "Update" to save your changes

### Testing Templates

After creating or editing a template, it's a good practice to test it to ensure it renders correctly:

1. Use the preview function if available
2. Send a test email to yourself
3. Check how the email appears in different email clients

## Template Design Tips

When creating email templates, consider the following best practices:

1. **Keep it simple**: Email clients have limited HTML and CSS support
2. **Use responsive design**: Ensure your emails look good on mobile devices
3. **Include clear calls to action**: Make it obvious what you want the recipient to do
4. **Personalize with variables**: Use customer name and other personalization variables
5. **Test thoroughly**: Check your emails in multiple email clients and devices
6. **Include unsubscribe options**: This is often legally required
7. **Balance text and images**: Don't rely too heavily on images as they may be blocked

## Example Template

Here's a simple example of a subscription created email template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #777;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to {{ brand.name }}!</h1>
        </div>
        
        <p>Hello {{ customer.name }},</p>
        
        <p>Thank you for subscribing to our {{ subscription.plan_name }} plan!</p>
        
        {% if subscription.has_trial %}
        <p>Your {{ subscription.trial_length }}-day trial period has begun. You won't be charged until {{ subscription.next_payment_due|date("F j, Y") }}.</p>
        {% else %}
        <p>Your subscription is now active. The next payment of {{ subscription.amount }} will be due on {{ subscription.next_payment_due|date("F j, Y") }}.</p>
        {% endif %}
        
        <p>
            <a href="https://yourdomain.com/account" class="button">View Your Account</a>
        </p>
        
        <p>If you have any questions, please don't hesitate to contact our support team.</p>
        
        <p>Best regards,<br>The {{ brand.name }} Team</p>
        
        <div class="footer">
            <p>{{ brand.address.company_name }}<br>
            {{ brand.address.street_line_one }}, {{ brand.address.city }}, {{ brand.address.postcode }}<br>
            {{ brand.address.country }}</p>
        </div>
    </div>
</body>
</html>
```

## Troubleshooting

If you encounter issues with your email templates:

- **Check your HTML syntax** for any errors
- **Verify that all variables** are spelled correctly and match the available variables
- **Test with simplified templates** first, then add complexity
- **Check spam filters**: Overly complex HTML can trigger spam filters

For more information about the variables available in email templates, see the [Email Template Variables](./email_variables.md) documentation.