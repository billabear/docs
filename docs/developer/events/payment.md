---
title: BillaBear Payments Events
sidebar_label: Payments
sidebar_position: 4
---
Here is the information relating to events relating to Payments

## Payment Failed

This is triggered when a checkout is created.

| Name | Constant For Name |
| --- | --- |
| billabear.payment.failed | `BillaBear\Event\Payment\PaymentFailed::NAME` |

### Event Class

```php
namespace BillaBear\Event\Payment;

use BillaBear\Entity\PaymentAttempt;
use BillaBear\Entity\PaymentFailureProcess;
use Symfony\Contracts\EventDispatcher\Event;

class PaymentFailed extends Event
{
    public const string NAME = 'billabear.payment.failed';

    public function __construct(
        public readonly PaymentAttempt $paymentAttempt,
        public readonly PaymentFailureProcess $paymentFailureProcess,
    ) {
    }
}
```