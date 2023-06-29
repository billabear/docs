---
title: PDF Templates Variables
sidebar_label: PDF Templates Variables
sidebar_position: 3
---
BillaBear gives you complete control over your invoice and receipt PDFs. Allowing you to ensure your PDFs are legally compliant and look good at the same time.

## Invoice Templates

| Name | Description | Example |
| --- | --- | --- |  
| brand.name | Name of the brand | BilaBear |
| brand.address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| brand.address.street_line_one | The first line of the address | 1 Example Way |
| brand.address.street_line_two | The second line of the address |  |
| brand.address.city | The city for the address | Exampleville |
| brand.address.region | The region/state for the address | Renfrewshire |
| brand.address.country | The country code for the address | GB |
| brand.address.postcode | The post code for the address | PA5 1ND |
| customer.name | The name of the customer | Example User |
| customer.email | The email for the customer | iain.cambridge@example.org |
| invoice.total | The total for the invoice | 1000 |
| invoice.total_display | The total for the invoice | EUR 1000 |
| invoice.sub_total | The sub total for the invoice | 800 |
| invoice.vat_total | The vat total for the invoice | 200 |
| invoice.currency | The currency for the invoice | EUR |
| invoice.payee_address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| invoice.payee_address.street_line_one | The first line of the address | 1 Example Way |
| invoice.payee_address.street_line_two | The second line of the address |  |
| invoice.payee_address.city | The city for the address | Exampleville |
| invoice.payee_address.region | The region/state for the address | Renfrewshire |
| invoice.payee_address.country | The country code for the address | GB |
| invoice.payee_address.postcode | The post code for the address | PA5 1ND |
| invoice.biller_address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| invoice.biller_address.street_line_one | The first line of the address | 1 Example Way |
| invoice.biller_address.street_line_two | The second line of the address |  |
| invoice.biller_address.city | The city for the address | Exampleville |
| invoice.biller_address.region | The region/state for the address | Renfrewshire |
| invoice.biller_address.country | The country code for the address | GB |
| invoice.biller_address.postcode | The post code for the address | PA5 1ND |
| invoice.lines | array of lines | []
| invoice.lines[0].total | Total | 100 |
| invoice.lines[0].total_display | Total | EUR 100 |
| invoice.lines[0].sub_total | Sub totals | 90 |
| invoice.lines[0].vat_total | VAT Total | 10 |
| invoice.lines[0].vat_percentage | The VAT percentage | 9.0 |
| invoice.lines[0].description | The description for the line | An example line |

## Receipt Templates

| Name | Description | Example |
| --- | --- | --- |  
| brand.name | Name of the brand | BilaBear |
| brand.address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| brand.address.street_line_one | The first line of the address | 1 Example Way |
| brand.address.street_line_two | The second line of the address |  |
| brand.address.city | The city for the address | Exampleville |
| brand.address.region | The region/state for the address | Renfrewshire |
| brand.address.country | The country code for the address | GB |
| brand.address.postcode | The post code for the address | PA5 1ND |
| customer.name | The name of the customer | Example User |
| customer.email | The email for the customer | iain.cambridge@example.org |
| receipt.total | The total for the receipt | 1000 |
| receipt.total_display | The total for the receipt | EUR 1000 |
| receipt.sub_total | The sub total for the receipt | 800 |
| receipt.vat_total | The vat total for the receipt | 200 |
| receipt.currency | The currency for the receipt | EUR |
| receipt.payee_address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| receipt.payee_address.street_line_one | The first line of the address | 1 Example Way |
| receipt.payee_address.street_line_two | The second line of the address |  |
| receipt.payee_address.city | The city for the address | Exampleville |
| receipt.payee_address.region | The region/state for the address | Renfrewshire |
| receipt.payee_address.country | The country code for the address | GB |
| receipt.payee_address.postcode | The post code for the address | PA5 1ND |
| receipt.biller_address.company_name | The name of the company in the address | Humbly Arrogant Software Limited |
| receipt.biller_address.street_line_one | The first line of the address | 1 Example Way |
| receipt.biller_address.street_line_two | The second line of the address |  |
| receipt.biller_address.city | The city for the address | Exampleville |
| receipt.biller_address.region | The region/state for the address | Renfrewshire |
| receipt.biller_address.country | The country code for the address | GB |
| receipt.biller_address.postcode | The post code for the address | PA5 1ND |
| receipt.lines | array of lines | []
| receipt.lines[0].total | Total | 100 |
| receipt.lines[0].total_display | Total | EUR 100 |
| receipt.lines[0].sub_total | Sub totals | 90 |
| receipt.lines[0].vat_total | VAT Total | 10 |
| receipt.lines[0].vat_percentage | The VAT percentage | 9.0 |
| receipt.lines[0].description | The description for the line | An example line |
