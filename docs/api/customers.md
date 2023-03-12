---
sidebar_position: 1
---
# Customer API

Customers are the entities that are paying. 

## Create Customer

**URI:** `/api/v1.0/customer`<br />
**METHOD:** `PUT`

| Name | Required | Description | 
| --- | --- | --- |
| email | yes | The billing email of the customer |
| country | yes | The billing country of the customer |
| reference | no | Your reference for the customer |
| external_reference | no | The external reference from Stripe for the customer |

### Example

```json
{
    email: "iain.cambridge@example.org",
    country: "DE"
}
```

### Response

| Status Code | Meaning |
| --- | --- |
| 400 | There has been an invalid request sent |
| 409 | Customer for billing email already exists |
| 201 | The customer has been created |

#### Error Output

```json
{
    success: false,
    errors: {
        email: "Invalid email"
    }
}
```