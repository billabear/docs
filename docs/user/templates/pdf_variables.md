---
title: PDF Template Variables
sidebar_label: PDF Template Variables
sidebar_position: 3
---

# PDF Template Variables

BillaBear gives you complete control over your invoice and receipt PDFs, allowing you to ensure your documents are legally compliant while maintaining your brand identity. This page documents the variables available for use in your PDF templates.

## How PDF Templates Work

PDF templates in BillaBear use the Twig template engine, which allows you to:
- Insert dynamic data using variables
- Apply conditional formatting
- Loop through collections of data (like invoice line items)
- Format dates and numbers

When creating PDF templates, you'll use these variables to populate your documents with the specific information for each invoice or receipt.

## Invoice Template Variables

The following variables are available for use in invoice templates:

| Variable | Description | Example |
| --- | --- | --- |  
| brand.name | Name of your brand | BillaBear |
| brand.tax_number | The tax identification number for your company | GB123456789 |
| brand.address.company_name | Your company's legal name | Humbly Arrogant Software Limited |
| brand.address.street_line_one | First line of your company address | 1 Example Way |
| brand.address.street_line_two | Second line of your company address | Floor 3 |
| brand.address.city | City of your company address | Exampleville |
| brand.address.region | Region/state of your company address | Renfrewshire |
| brand.address.country | Country code of your company address | GB |
| brand.address.postcode | Postal code of your company address | PA5 1ND |
| customer.name | The name of the customer | Example User |
| customer.email | The email address of the customer | customer@example.org |
| invoice.total | The total amount due on the invoice | 1000 |
| invoice.total_display | The formatted total amount with currency | EUR 1000 |
| invoice.sub_total | The amount before tax | 800 |
| invoice.vat_total | The tax/VAT amount | 200 |
| invoice.currency | The currency code for the invoice | EUR |
| invoice.due_date | The date by which payment must be made | 2023-09-21 10:04:00.000 |
| invoice.payee_address.company_name | The customer's company name | Acme Corporation |
| invoice.payee_address.street_line_one | First line of customer's address | 123 Customer Street |
| invoice.payee_address.street_line_two | Second line of customer's address | Suite 456 |
| invoice.payee_address.city | Customer's city | Exampleville |
| invoice.payee_address.region | Customer's region/state | Renfrewshire |
| invoice.payee_address.country | Customer's country code | GB |
| invoice.payee_address.postcode | Customer's postal code | PA5 1ND |
| invoice.biller_address.company_name | Your company name (same as brand address) | Humbly Arrogant Software Limited |
| invoice.biller_address.street_line_one | First line of your address | 1 Example Way |
| invoice.biller_address.street_line_two | Second line of your address | Floor 3 |
| invoice.biller_address.city | Your city | Exampleville |
| invoice.biller_address.region | Your region/state | Renfrewshire |
| invoice.biller_address.country | Your country code | GB |
| invoice.biller_address.postcode | Your postal code | PA5 1ND |
| invoice.lines | Array of invoice line items | [] |
| invoice.lines[0].total | Total amount for a line item | 100 |
| invoice.lines[0].total_display | Formatted total with currency | EUR 100 |
| invoice.lines[0].sub_total | Amount before tax for a line item | 90 |
| invoice.lines[0].vat_total | Tax/VAT amount for a line item | 10 |
| invoice.lines[0].vat_percentage | Tax/VAT percentage applied | 10.0 |
| invoice.lines[0].description | Description of the line item | Monthly Subscription - Professional Plan |
| invoice.lines[0].metadata | Additional data about the line item | {"period_start": "2023-09-01"} |

### Example Usage in Templates

Here's how you might use these variables in an invoice template:

```twig
<h1>INVOICE</h1>
<p>Invoice #: INV-{{ "now"|date("Ymd") }}-{{ customer.name|slice(0, 3)|upper }}</p>
<p>Date: {{ "now"|date("F j, Y") }}</p>
<p>Due Date: {{ invoice.due_date|date("F j, Y") }}</p>

<div class="addresses">
  <div class="from">
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
  
  <div class="to">
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

<table class="line-items">
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
</div>
```

## Receipt Template Variables

The following variables are available for use in receipt templates. Receipts are typically generated after a payment has been successfully processed.

| Variable | Description | Example |
| --- | --- | --- |  
| brand.name | Name of your brand | BillaBear |
| brand.tax_number | The tax identification number for your company | GB123456789 |
| brand.address.company_name | Your company's legal name | Humbly Arrogant Software Limited |
| brand.address.street_line_one | First line of your company address | 1 Example Way |
| brand.address.street_line_two | Second line of your company address | Floor 3 |
| brand.address.city | City of your company address | Exampleville |
| brand.address.region | Region/state of your company address | Renfrewshire |
| brand.address.country | Country code of your company address | GB |
| brand.address.postcode | Postal code of your company address | PA5 1ND |
| customer.name | The name of the customer | Example User |
| customer.email | The email address of the customer | customer@example.org |
| receipt.total | The total amount of the payment | 1000 |
| receipt.total_display | The formatted total amount with currency | EUR 1000 |
| receipt.sub_total | The amount before tax | 800 |
| receipt.vat_total | The tax/VAT amount | 200 |
| receipt.currency | The currency code for the receipt | EUR |
| receipt.payee_address.company_name | The customer's company name | Acme Corporation |
| receipt.payee_address.street_line_one | First line of customer's address | 123 Customer Street |
| receipt.payee_address.street_line_two | Second line of customer's address | Suite 456 |
| receipt.payee_address.city | Customer's city | Exampleville |
| receipt.payee_address.region | Customer's region/state | Renfrewshire |
| receipt.payee_address.country | Customer's country code | GB |
| receipt.payee_address.postcode | Customer's postal code | PA5 1ND |
| receipt.biller_address.company_name | Your company name (same as brand address) | Humbly Arrogant Software Limited |
| receipt.biller_address.street_line_one | First line of your address | 1 Example Way |
| receipt.biller_address.street_line_two | Second line of your address | Floor 3 |
| receipt.biller_address.city | Your city | Exampleville |
| receipt.biller_address.region | Your region/state | Renfrewshire |
| receipt.biller_address.country | Your country code | GB |
| receipt.biller_address.postcode | Your postal code | PA5 1ND |
| receipt.lines | Array of receipt line items | [] |
| receipt.lines[0].total | Total amount for a line item | 100 |
| receipt.lines[0].total_display | Formatted total with currency | EUR 100 |
| receipt.lines[0].sub_total | Amount before tax for a line item | 90 |
| receipt.lines[0].vat_total | Tax/VAT amount for a line item | 10 |
| receipt.lines[0].vat_percentage | Tax/VAT percentage applied | 10.0 |
| receipt.lines[0].description | Description of the line item | Monthly Subscription - Professional Plan |
| receipt.lines[0].metadata | Additional data about the line item | {"period_start": "2023-09-01"} |

### Example Usage in Templates

Here's how you might use these variables in a receipt template:

```twig
<h1>RECEIPT</h1>
<p>Receipt #: REC-{{ "now"|date("Ymd") }}-{{ customer.name|slice(0, 3)|upper }}</p>
<p>Date: {{ "now"|date("F j, Y") }}</p>

<div class="addresses">
  <div class="from">
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
  
  <div class="to">
    <h3>To:</h3>
    <p>{{ customer.name }}</p>
    <p>{{ receipt.payee_address.company_name }}</p>
    <p>{{ receipt.payee_address.street_line_one }}</p>
    {% if receipt.payee_address.street_line_two %}
    <p>{{ receipt.payee_address.street_line_two }}</p>
    {% endif %}
    <p>{{ receipt.payee_address.city }}, {{ receipt.payee_address.region }} {{ receipt.payee_address.postcode }}</p>
    <p>{{ receipt.payee_address.country }}</p>
  </div>
</div>

<table class="line-items">
  <tr>
    <th>Description</th>
    <th>Amount</th>
    <th>VAT</th>
    <th>Total</th>
  </tr>
  {% for line in receipt.lines %}
  <tr>
    <td>{{ line.description }}</td>
    <td>{{ line.sub_total }}</td>
    <td>{{ line.vat_total }} ({{ line.vat_percentage }}%)</td>
    <td>{{ line.total }}</td>
  </tr>
  {% endfor %}
</table>

<div class="totals">
  <p>Subtotal: {{ receipt.sub_total }}</p>
  <p>VAT: {{ receipt.vat_total }}</p>
  <p>Total Paid: {{ receipt.total_display }}</p>
</div>

<div class="payment-info">
  <p>Payment received with thanks.</p>
  <p>This receipt serves as confirmation of your payment.</p>
</div>
```

## Customizing Your PDF Templates

When creating PDF templates in BillaBear, you can use HTML and CSS to style your documents. The templates are rendered using a PDF generation engine that supports most standard HTML and CSS features.

Some tips for creating effective PDF templates:

1. **Use proper HTML structure** with appropriate tags for headings, paragraphs, tables, etc.
2. **Apply CSS styling** to make your documents visually appealing and on-brand
3. **Test your templates** with different data to ensure they handle various scenarios correctly
4. **Consider legal requirements** for invoices and receipts in your jurisdiction
5. **Include all necessary information** such as tax numbers, payment terms, and contact details

For more information on creating and managing PDF templates in BillaBear, see the [Create PDF Template](./create_pdf_template.md) guide.
