---
title: BillaBear Checkout Events
sidebar_label: Checkout
sidebar_position: 3
---
Here is the information relating to events relating to Checkout

## Checkout Created

This is triggered when a checkout is created.

| Name | Constant For Name |
| --- | --- |
| billabear.checkout.created | `BillaBear\Event\Checkout\CheckoutCreated::NAME` |

### Event Class

```php
namespace BillaBear\Event\Checkout;

use BillaBear\Entity\Checkout;
use Symfony\Contracts\EventDispatcher\Event;

class CheckoutCreated extends Event
{
    public const string NAME = 'billabear.checkout.created';

    public function __construct(public readonly Checkout $checkout)
    {
    }
}
```

## Checkout Session Created

This is triggered when a checkout seassion is created.

| Name | Constant For Name |
| --- | --- |
| billabear.checkout_session.created | `BillaBear\Event\Checkout\CheckoutSessionCreated::NAME` |

### Event Class

```php
namespace BillaBear\Event\Checkout;

use BillaBear\Entity\CheckoutSession;
use Symfony\Contracts\EventDispatcher\Event;

class CheckoutSessionCreated extends Event
{
    public const string NAME = 'billabear.checkout_session.created';

    public function __construct(public readonly CheckoutSession $checkoutSession)
    {
    }
}
```