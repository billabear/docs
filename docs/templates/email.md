---
title: Email Templates
sidebar_label: Email Templates
sidebar_position: 1
---
Sending custom emails are an essential part of running a software business. Customers expect emails in their language and with the correct branding. BillaBear allows you to do this by allowing you to define email templates for a brand and locale. 

## Template Types

BillaBear integrates with SendGrid, Mailgun, and Postmark email service providers and allows you to use their template system. When using this you must give the template id given by the email service provider. 

If you use BillaBear's template system instead, it's powered by the template language Twig.

## Fallback Order

BillaBear has a fallback order for email templates, so if there is no specific template for a locale and brand then it'll look for a fallback.

1. It looks for Locale and Brand.
2. Then it looks for Default Locale and Brand.
3. Then it looks for  Default Locale and Default Brand
4. Then it throws an error

