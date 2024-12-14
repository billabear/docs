---
title: BillaBear Invoice Events
sidebar_label: Invoice
sidebar_position: 2
---
Here is the information relating to events relating to Invoices

## Invoice Created

This is triggered when an invoice is created.

| Name | Constant For Name |
| --- | --- |
| billabear.invoice.created | `BillaBear\Event\Invoice\InvoiceCreated::NAME` |

### Event Class

```php
namespace BillaBear\Event\Invoice;

use BillaBear\Entity\Invoice;
use Symfony\Contracts\EventDispatcher\Event;

class InvoiceCreated extends Event
{
    public const string NAME = 'billabear.invoice.created';

    public function __construct(public readonly Invoice $invoice)
    {
    }
}
```

## Invoice Paid

This is triggered when an invoice is paid.

| Name | Constant For Name |
| --- | --- |
| billabear.invoice.paid | `BillaBear\Event\Invoice\InvoicePaid::NAME` |

### Event Class

```php
namespace BillaBear\Event\Invoice;

use BillaBear\Entity\Invoice;
use Symfony\Contracts\EventDispatcher\Event;

class InvoicePaid extends Event
{
    public const string NAME = 'billabear.invoice.paid';

    public function __construct(public readonly Invoice $invoice)
    {
    }
}

```
