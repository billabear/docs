---
title: BillaBear Customer Events
sidebar_label: Customer
sidebar_position: 1
---
Here is the information relating to events relating to Customers

## Customer Created

This is triggered when a customer is created.

| Name | Constant For Name |
| --- | --- |
| billabear.customer.created | `BillaBear\Entity\Customer::NAME` |

### Event Class

```php
namespace BillaBear\Event\Customer;

use BillaBear\Entity\Customer;

class CustomerCreated
{
    public const string NAME = 'billabear.customer.created';

    public function __construct(public readonly Customer $customer)
    {
    }
}
```

## Customer Disabled

This is triggered when a customer is disabled.

| Name | Constant For Name |
| --- | --- |
| billabear.customer.disabled | `BillaBear\Event\Customer\CustomerDisabled::NAME` |

### Event Class

```php
namespace BillaBear\Event\Customer;

use BillaBear\Entity\Customer;

class CustomerDisabled
{
    public const string NAME = 'billabear.customer.disabled';

    public function __construct(public readonly Customer $customer)
    {
    }
}
```

## Customer Enabled

This is triggered when a disabled customer is enabled again

| Name | Constant For Name |
| --- | --- |
| billabear.customer.enabled | `BillaBear\Event\Customer\CustomerEnabled::NAME` |

### Event Class

```php
namespace BillaBear\Event\Customer;

use BillaBear\Entity\Customer;

class CustomerEnabled
{
    public const string NAME = 'billabear.customer.enabled';

    public function __construct(public readonly Customer $customer)
    {
    }
}
```