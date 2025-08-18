---
title: Email Template Variables
sidebar_label: Email Template Variables
sidebar_position: 1
---

# Email Template Variables

Sending customised emails is an essential part of running a software business. Customers expect emails in their language and with the correct branding. BillaBear allows you to create professional, branded emails by defining email templates for each brand and locale.

## Template Types

BillaBear offers two ways to create email templates:

1. **Email Service Provider Templates**: BillaBear integrates with SendGrid, Mailgun, and Postmark email service providers and allows you to use their template systems. When using this option, you need to provide the template ID given by your email service provider.

2. **BillaBear's Built-in Templates**: If you prefer to manage templates directly in BillaBear, you can use the built-in template system powered by Twig, a flexible template language.

## How Template Selection Works

When BillaBear needs to send an email, it follows a specific order to find the most appropriate template:

1. First, it looks for a template matching the specific **Locale and Brand** (e.g., German template for Brand A)
2. If not found, it looks for a template matching the **Default Locale and specific Brand** (e.g., English template for Brand A)
3. If still not found, it looks for a template matching the **Default Locale and Default Brand** (e.g., English template for the default brand)
4. If no template is found after these steps, an error occurs

This fallback system ensures that customers receive communications in the most appropriate language and branding available.

## Using Template Variables

When creating email templates, you can use variables to personalise the content. Variables are placeholders that get replaced with actual data when the email is sent.

To use a variable in your template, enclose it in double curly braces like this: `{{ variable.name }}`

For example: `Hello {{ customer.name }}!` would be sent as "Hello John Smith!" to a customer named John Smith.

The following sections list all available variables for different types of email templates.


### General Variables

The following variables are available in all email templates, regardless of the template type:

| Variable | Description | Example |
| --- | --- | --- |  
| brand.name | Name of the brand | BillaBear |
| brand.tax_number | The tax number for the brand/company | GB123456789 |
| brand.address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| brand.address.street_line_one | The first line of the address | 1 Example Way |
| brand.address.street_line_two | The second line of the address | Suite 123 |
| brand.address.city | The city for the address | Exampleville |
| brand.address.region | The region/state for the address | Renfrewshire |
| brand.address.country | The country code for the address | GB |
| brand.address.postcode | The post code for the address | PA5 1ND |
| customer.name | The name of the customer | Example User |
| customer.email | The email address of the customer | customer@example.org |

### Subscription Created Template

This template is used when a new subscription is created for a customer. In addition to the general variables, the following subscription-specific variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| subscription.plan_name | The name of the subscription plan | Professional Plan |
| subscription.has_trial | Boolean value indicating if the subscription includes a trial period | true |
| subscription.trial_length | The number of days the trial period lasts | 14 |
| subscription.payment_schedule | The payment frequency (`week`, `month`, or `year`) | month | 
| subscription.amount | The cost of the subscription per payment period, including currency | 29.99 EUR |
| subscription.next_payment_due | The date when the next payment is due | 2023-09-15T00:00:00+01:00 |

#### Example Usage

```
Thank you for subscribing to our {{ subscription.plan_name }} plan!

{% if subscription.has_trial %}
Your {{ subscription.trial_length }}-day trial period has begun. You won't be charged until {{ subscription.next_payment_due|date("F j, Y") }}.
{% else %}
Your subscription is now active. The next payment of {{ subscription.amount }} will be due on {{ subscription.next_payment_due|date("F j, Y") }}.
{% endif %}
```

### Subscription Cancelled Template

This template is used when a customer cancels their subscription. In addition to the general variables, the following subscription-specific variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| subscription.plan_name | The name of the subscription plan | Professional Plan |
| subscription.finishes_at | The date when the subscription will end | 2023-09-30T23:59:59+01:00 |

#### Example Usage

```
We're sorry to see you go!

Your {{ subscription.plan_name }} subscription has been cancelled. You'll continue to have access to your subscription benefits until {{ subscription.finishes_at|date("F j, Y") }}.

If you change your mind, you can reactivate your subscription from your account dashboard.
```

### Payment Created Template

This template is used when a payment is successfully processed. It's typically sent as a payment confirmation to customers. In addition to the general variables, the following payment-specific variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| payment.amount | The total amount of the payment, including currency | 49.99 EUR |
| payment.currency | The currency code for the payment | EUR |
| payment.description | A description of what the payment was for | Monthly Subscription Payment |
| receipt.total | The total amount on the receipt, including currency | 49.99 EUR |
| receipt.tax_total | The tax/VAT portion of the payment | 8.33 EUR |
| receipt.sub_total | The amount before tax/VAT | 41.66 EUR |

#### Example Usage

```
Thank you for your payment!

We've successfully processed your payment of {{ payment.amount }} for "{{ payment.description }}".

Payment Details:
- Amount: {{ payment.amount }}
- Date: {{ "now"|date("F j, Y") }}
- Description: {{ payment.description }}

Receipt Summary:
- Subtotal: {{ receipt.sub_total }}
- Tax: {{ receipt.tax_total }}
- Total: {{ receipt.total }}

A full receipt is available in your account dashboard.
```

### Payment Card Expiring Template

This template is sent to notify customers when their payment card is approaching its expiry date. In addition to the general variables, the following card-specific variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| payment_card.last_four | The last four digits of the card number for identification | 1234 |
| payment_card.expiry_month | The month when the card will expire | 10 |
| payment_card.expiry_year | The year when the card will expire | 2023 |
| voucher.has_voucher | Boolean indicating if a special offer is available when updating the card | true |
| voucher.type | The type of voucher offered ('percentage' or 'fixed') | percentage |
| voucher.percentage | The percentage discount (only if voucher type is 'percentage') | 10 |
| voucher.amount | The fixed amount credit (only if voucher type is 'fixed') | 1000 |
| voucher.currency | The currency for the voucher | USD |

#### Example Usage

```
Important: Your Payment Card is Expiring Soon

We noticed that your payment card ending in {{ payment_card.last_four }} will expire in {{ payment_card.expiry_month }}/{{ payment_card.expiry_year }}.

To ensure uninterrupted service, please update your payment information in your account dashboard.

{% if voucher.has_voucher %}
Special Offer: When you update your card, you'll receive:
{% if voucher.type == 'percentage' %}
{{ voucher.percentage }}% discount on your next payment
{% else %}
{{ voucher.amount }} {{ voucher.currency }} credit to your account
{% endif %}
{% endif %}
```

### Payment Card Expiring - Day Before Payment Template

This template is sent the day before a payment attempt when the customer's card is still valid but expiring soon. In addition to the general variables, the following variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| payment_card.last_four | The last four digits of the card number | 1234 |
| payment_card.expiry_month | The month when the card will expire | 10 |
| payment_card.expiry_year | The year when the card will expire | 2023 |
| subscription.plan_name | The name of the subscription plan | Professional Plan |
| subscription.has_trial | Boolean indicating if the subscription has a trial period | false |
| subscription.trial_length | The number of days in the trial period (if applicable) | 14 |
| subscription.payment_schedule | The payment frequency (`week`, `month`, or `year`) | month | 
| subscription.amount | The cost of the subscription per payment period | 29.99 EUR |
| subscription.next_payment_due | The date when the next payment is due | 2023-09-15T00:00:00+01:00 |
| voucher.has_voucher | Boolean indicating if a special offer is available | true |
| voucher.type | The type of voucher offered ('percentage' or 'fixed') | percentage |
| voucher.percentage | The percentage discount (if applicable) | 10 |
| voucher.amount | The fixed amount credit (if applicable) | 1000 |
| voucher.currency | The currency for the voucher | USD |

#### Example Usage

```
Important: Payment Due Tomorrow - Card Expiring Soon

Your {{ subscription.plan_name }} subscription payment of {{ subscription.amount }} is scheduled for tomorrow ({{ subscription.next_payment_due|date("F j, Y") }}).

We noticed that your payment card ending in {{ payment_card.last_four }} will expire soon in {{ payment_card.expiry_month }}/{{ payment_card.expiry_year }}. While this card should work for tomorrow's payment, please update your payment information soon to avoid future interruptions.

{% if voucher.has_voucher %}
Special Offer: Update your card now and receive:
{% if voucher.type == 'percentage' %}
{{ voucher.percentage }}% discount on your next payment
{% else %}
{{ voucher.amount }} {{ voucher.currency }} credit to your account
{% endif %}
{% endif %}
```

### Payment Card Expired - Day Before Payment Template

This template is sent the day before a payment attempt when the customer's card has already expired. In addition to the general variables, the following variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| payment_card.last_four | The last four digits of the card number | 1234 |
| payment_card.expiry_month | The month when the card expired | 08 |
| payment_card.expiry_year | The year when the card expired | 2023 |
| subscription.plan_name | The name of the subscription plan | Professional Plan |
| subscription.has_trial | Boolean indicating if the subscription has a trial period | false |
| subscription.trial_length | The number of days in the trial period (if applicable) | 14 |
| subscription.payment_schedule | The payment frequency (`week`, `month`, or `year`) | month | 
| subscription.amount | The cost of the subscription per payment period | 29.99 EUR |
| subscription.next_payment_due | The date when the next payment is due | 2023-09-15T00:00:00+01:00 |
| voucher.has_voucher | Boolean indicating if a special offer is available | true |
| voucher.type | The type of voucher offered ('percentage' or 'fixed') | percentage |
| voucher.percentage | The percentage discount (if applicable) | 10 |
| voucher.amount | The fixed amount credit (if applicable) | 1000 |
| voucher.currency | The currency for the voucher | USD |

#### Example Usage

```
URGENT: Payment Due Tomorrow - Card Has Expired

Your {{ subscription.plan_name }} subscription payment of {{ subscription.amount }} is scheduled for tomorrow ({{ subscription.next_payment_due|date("F j, Y") }}), but we've detected a problem.

Your payment card ending in {{ payment_card.last_four }} expired in {{ payment_card.expiry_month }}/{{ payment_card.expiry_year }}. To avoid service interruption, please update your payment information immediately.

{% if voucher.has_voucher %}
Special Offer: Update your card now and receive:
{% if voucher.type == 'percentage' %}
{{ voucher.percentage }}% discount on your next payment
{% else %}
{{ voucher.amount }} {{ voucher.currency }} credit to your account
{% endif %}
{% endif %}

If you need assistance, please contact our support team.
```

### Invoice Created Template

This template is sent when a new invoice is created for a customer. In addition to the general variables, the following invoice-specific variables are available:

| Variable | Description | Example |
| --- | --- | --- |  
| invoice.total | The total amount due on the invoice | 1000.00 EUR |
| invoice.sub_total | The amount before tax | 800.00 EUR |
| invoice.tax_total | The tax amount | 200.00 EUR |
| invoice.currency | The currency code for the invoice | EUR |
| invoice.due_date | The date by which payment must be made | 2023-09-21 10:04:00.000 |
| invoice.payee_address.company_name | The customer's company name | Acme Corporation |
| invoice.payee_address.street_line_one | First line of customer's address | 123 Customer Street |
| invoice.payee_address.street_line_two | Second line of customer's address | Suite 456 |
| invoice.payee_address.city | Customer's city | Exampleville |
| invoice.payee_address.region | Customer's region/state | Renfrewshire |
| invoice.payee_address.country | Customer's country code | GB |
| invoice.payee_address.postcode | Customer's postal code | PA5 1ND |
| invoice.biller_address.company_name | Your company name | Humbly Arrogant Software Limited |
| invoice.biller_address.street_line_one | First line of your address | 1 Example Way |
| invoice.biller_address.street_line_two | Second line of your address | Floor 3 |
| invoice.biller_address.city | Your city | Exampleville |
| invoice.biller_address.region | Your region/state | Renfrewshire |
| invoice.biller_address.country | Your country code | GB |
| invoice.biller_address.postcode | Your postal code | PA5 1ND |
| invoice.lines | Array of invoice line items | [] |
| invoice.lines[0].total | Total amount for a line item | 100.00 EUR |
| invoice.lines[0].sub_total | Amount before tax for a line item | 90.00 EUR |
| invoice.lines[0].tax_total | Tax amount for a line item | 10.00 EUR |
| invoice.lines[0].tax_percentage | Tax percentage applied to a line item | 10.0 |
| invoice.lines[0].description | Description of a line item | Monthly Subscription - Professional Plan |

#### Example Usage

```
Your Invoice from {{ brand.name }} - Due {{ invoice.due_date|date("F j, Y") }}

Dear {{ customer.name }},

We've created a new invoice for you, due on {{ invoice.due_date|date("F j, Y") }}.

Invoice Summary:
- Invoice Number: INV-{{ "now"|date("Ymd") }}-{{ customer.name|replace({' ': ''})|slice(0, 3)|upper }}
- Amount Due: {{ invoice.total }}
- Due Date: {{ invoice.due_date|date("F j, Y") }}

Invoice Details:
{% for line in invoice.lines %}
- {{ line.description }}: {{ line.sub_total }} + {{ line.tax_total }} tax ({{ line.tax_percentage }}%) = {{ line.total }}
{% endfor %}

Subtotal: {{ invoice.sub_total }}
Tax: {{ invoice.tax_total }}
Total Due: {{ invoice.total }}

You can view and pay this invoice by logging into your account dashboard.

Thank you for your business!

{{ brand.name }}
{{ brand.address.company_name }}
{{ brand.tax_number }}
```

This template demonstrates how to create a professional invoice notification email with detailed line items and formatting. You can customize it to match your brand's voice and specific requirements.
