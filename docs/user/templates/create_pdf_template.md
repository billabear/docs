---
title: Create PDF Template
sidebar_label: Create PDF Template
sidebar_position: 4
---

# Creating PDF Templates

PDF templates in BillaBear allow you to customise the appearance and content of your invoices and receipts. This guide will walk you through the process of creating and managing PDF templates.

## Permissions Required

To create and manage PDF templates in BillaBear, you need to have an account with administrator or manager privileges. These roles have access to the settings area where templates are managed.

[Learn more about user roles here](../user_roles/)

## Understanding PDF Templates

BillaBear uses PDF templates to generate professional-looking invoices and receipts for your customers. Each template can be associated with:

- A specific document type (invoice or receipt)
- A specific locale (language)
- A specific brand (if you manage multiple brands)

The system follows a fallback order when selecting templates:
1. First, it looks for a template matching the specific locale and brand
2. If not found, it uses the default locale template for the specific brand
3. If still not found, it uses the default locale template for the default brand

## Creating a PDF Template

Follow these steps to create a new PDF template in BillaBear:

### Step 1: Navigate to Settings

In the BillaBear admin interface, click on the "Settings" option in the main navigation menu.

![Navigate to Settings](./create_template_screenshots/1_click_settings.png)

### Step 2: Select PDF Templates

In the Settings menu, click on "PDF Templates" to access the template management area.

![Select PDF Templates](./pdf_template_screenshots/select_pdf_templates.png)

### Step 3: Click Create New Template

Click the "Create" button to start creating a new PDF template.

![Click Create New Template](./pdf_template_screenshots/click_create.png)

### Step 4: Enter Template Details

Fill in the template details form with the following information:

- **Type**: Select either "invoice" or "receipt"
- **Locale**: Choose the language locale for this template (e.g., "en" for English)
- **Template Body**: Enter the HTML/Twig code for your template

![Enter Template Details](./pdf_template_screenshots/enter_details.png)

The template body should contain HTML with Twig variables as described in the [PDF Template Variables](./pdf_variables.md) documentation.

### Step 5: Save the Template

Click the "Create" button to save your new template.

![Save Template](./pdf_template_screenshots/save_template.png)

## Managing Existing Templates

### Viewing Templates

You can view all your existing PDF templates from the PDF Templates page in Settings. This page displays:

- The template type (invoice or receipt)
- The locale
- Creation and modification dates

### Editing a Template

To edit an existing template:

1. Click on the template in the list
2. Make your changes to the template body
3. Click "Update" to save your changes

### Testing Templates

After creating or editing a template, it's a good practice to test it to ensure it renders correctly:

1. From the template detail view, click "Download Preview"
2. Review the generated PDF to ensure it looks as expected
3. Make adjustments to the template if necessary

## Template Design Tips

When creating PDF templates, consider the following best practices:

1. **Include all required legal information** for your jurisdiction (tax numbers, company details, etc.)
2. **Use clear, readable fonts** that will render well in PDF format
3. **Test with different data scenarios** to ensure your template handles various cases correctly
4. **Include your branding elements** such as logos and colour schemes
5. **Structure your document logically** with clear sections for addresses, line items, and totals
6. **Use conditional logic** to handle optional elements (e.g., second address lines)
7. **Format dates and numbers** appropriately for the target locale

## Example Template

Here's a simple example of an invoice template to help you get started:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.5;
            color: #333;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .addresses {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }
        .address-block {
            width: 45%;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .totals {
            text-align: right;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>INVOICE</h1>
        <p>Invoice #: INV-{{ "now"|date("Ymd") }}-{{ customer.name|slice(0, 3)|upper }}</p>
        <p>Date: {{ "now"|date("F j, Y") }}</p>
    </div>

    <div class="addresses">
        <div class="address-block">
            <h3>From:</h3>
            <p>{{ brand.name }}</p>
            <p>{{ brand.address.company_name }}</p>
            <p>{{ brand.address.street_line_one }}</p>
            {% if brand.address.street_line_two %}
            <p>{{ brand.address.street_line_two }}</p>
            {% endif %}
            <p>{{ brand.address.city }}, {{ brand.address.region }} {{ brand.address.postcode }}</p>
            <p>{{ brand.address.country }}</p>
            <p>Tax ID: {{ brand.tax_number }}</p>
        </div>
        
        <div class="address-block">
            <h3>To:</h3>
            <p>{{ customer.name }}</p>
            <p>{{ invoice.payee_address.company_name }}</p>
            <p>{{ invoice.payee_address.street_line_one }}</p>
            {% if invoice.payee_address.street_line_two %}
            <p>{{ invoice.payee_address.street_line_two }}</p>
            {% endif %}
            <p>{{ invoice.payee_address.city }}, {{ invoice.payee_address.region }} {{ invoice.payee_address.postcode }}</p>
            <p>{{ invoice.payee_address.country }}</p>
        </div>
    </div>

    <table>
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>VAT</th>
            <th>Total</th>
        </tr>
        {% for line in invoice.lines %}
        <tr>
            <td>{{ line.description }}</td>
            <td>{{ line.sub_total }}</td>
            <td>{{ line.vat_total }} ({{ line.vat_percentage }}%)</td>
            <td>{{ line.total }}</td>
        </tr>
        {% endfor %}
    </table>

    <div class="totals">
        <p>Subtotal: {{ invoice.sub_total }}</p>
        <p>VAT: {{ invoice.vat_total }}</p>
        <p>Total Due: {{ invoice.total_display }}</p>
        <p>Due Date: {{ invoice.due_date|date("F j, Y") }}</p>
    </div>

    <div class="footer">
        <p>Thank you for your business!</p>
    </div>
</body>
</html>
```

## Troubleshooting

If you encounter issues with your PDF templates:

- **Check your HTML syntax** for any errors
- **Verify that all variables** are spelled correctly and match the available variables
- **Test with simplified templates** first, then add complexity
- **Review the browser console** for any JavaScript errors
- **Ensure your CSS is compatible** with the PDF rendering engine

For more information about the variables available in PDF templates, see the [PDF Template Variables](./pdf_variables.md) documentation.