---
title: Invoice Formatters
sidebar_label: Formatters
sidebar_position: 1
---
BillaBear allows you to create your own Invoice Formatters to be used with the invoice delivery system.

## How To Create

Creating a new invoice formatter all you need to do is create a class that implements the `BillaBear\Invoice\Formatter\InvoiceFormatterInterface`. Once it's created it'll be automatically tagged as an invoice formatter and added to the list of invoice formats.

### Example

```php
<?php

namespace Custom\Invoice;

use BillaBear\Invoice\Formatter\InvoiceFormatterInterface;

class CustomFormatter implements InvoiceFormatterInterface
{
    public const string FORMAT_NAME = 'CustomFormatter';

    public function generate(Invoice $invoice): mixed
    {
        $xml = '';
        // ...

        return $xml;
    }

    public function filename(Invoice $invoice): string
    {
        return sprintf('invoice-%s.xml', $invoice->getInvoiceNumber());
    }

    public function supports(string $type): bool
    {
        return self::FORMAT_NAME === $type;
    }

    public function name(): string
    {
        return self::FORMAT_NAME;
    }
}
```