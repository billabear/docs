---
title: BillaBear Quotes Events
sidebar_label: Quotes
sidebar_position: 5
---
Here is the information relating to events relating to Quotes

## Quote Created

This is triggered when a quote is created.

| Name | Constant For Name |
| --- | --- |
| billabear.quote.created | `BillaBear\Event\Quote\QuoteCreated::NAME` |

### Event Class

```php
namespace BillaBear\Event\Quote;

use BillaBear\Entity\Quote;
use Symfony\Contracts\EventDispatcher\Event;

class QuoteCreated extends Event
{
    public const string NAME = 'billabear.quote.created';

    public function __construct(public readonly Quote $quote)
    {
    }
}
```
