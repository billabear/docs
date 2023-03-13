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
| country | yes | The billing country of the customer. ISO 3166-1 alpha-2 country code. |
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

## List Customers

**URI:** `/api/v1.0/customer`<br />
**METHOD:** `PUT`

### Query Parameters

| Name | Required | Description |
| --- | --- | --- |
| per_page | no | This is how many results you want back per page. Defaults to 10 with a maximum of 100.
| email | no | To search for customers with the email containing the string provided| 
| country | no | To search for customers with the country |
| reference | no |  To search for customers with the reference containing the string provided| 
| external_reference | no |  To search for customers with the external reference containing the string provided |
| last_key | no | Used for pagination. You use the value in `last_key` in the previous response here to get the next page. | 

### Response

| Name | Type | Description |
| --- | --- | --- |
| data | array | Contains the customers found |
| last_key | string | The value to be used with the `last_key` query parameter for pagination |
| has_more | boolean | Tells you if there are more results after this page |

```json
{
	"data": [{
		"id": "4f3b3c5c-d819-48a6-a34e-a9c95d536028",
		"reference": "Customer One",
		"external_reference": "cust_jf9j545",
		"email": "customer.one@example.org",
		"country": "DE"
	}],
	"has_more": false,
	"last_key": "4f3b3c5c-d819-48a6-a34e-a9c95d536028"
}
```
