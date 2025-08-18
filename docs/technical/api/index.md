---
title: API
sidebar_label: API
sidebar_position: 8
---
BillaBear provides a comprehensive REST API that allows you to integrate with and automate your billing operations. This documentation provides an overview of the API capabilities, authentication, and available endpoints.

## Authentication

All API requests require authentication using an API key. The API key must be included in the `X-API-KEY` header of each request:

```
X-API-KEY: YOUR_API_KEY
```

### API Key Management

To manage your API keys, BillaBear provides the following UI functionalities:

* [Create API Key](./create_api_key) - Generate a new API key for integration
* [Disable API Key](./disable) - Deactivate an existing API key for security purposes

## API Documentation

Detailed API documentation with all endpoints, request parameters, and response formats is available at:

[https://swagger.billabear.com](https://swagger.billabear.com)


## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests:

* `200 OK` - The request was successful
* `201 Created` - A resource was successfully created
* `400 Bad Request` - The request was invalid or malformed
* `401 Unauthorized` - Authentication failed or was not provided
* `403 Forbidden` - The authenticated user doesn't have permission
* `404 Not Found` - The requested resource doesn't exist
* `429 Too Many Requests` - Rate limit exceeded
* `500 Internal Server Error` - An error occurred on the server

Error responses include a JSON body with details about the error:

```json
{
  "errors": {
    "field_name": "Error message for this field",
    "another_field": "Another error message"
  }
}
```
