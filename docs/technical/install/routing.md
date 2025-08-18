---
title: HTTP Routing
sidebar_label: Routing
sidebar_position: 5
---

# BillaBear HTTP Routing

When setting up your BillaBear infrastructure, you may need to understand the routing schema for the application to properly configure access controls, making certain routes private, public, or internal only.

## Routing Overview

BillaBear uses a structured routing system with distinct URL paths for different components of the application:

| Route Prefix | Component | Access Level | Description |
| --- | --- | --- | --- |
| `/webhook` | Webhooks | Public | Endpoints for receiving external service notifications (e.g., Stripe events) |
| `/app` | Admin Backend | Private | Administrative interface backend for managing BillaBear |
| `/site` | Admin Frontend | Private | Administrative interface frontend for managing BillaBear |
| `/api` | API | Restricted | REST API endpoints for programmatic access to BillaBear |
| `/portal` | Customer Portal Frontend | Public | Customer-facing portal interface |
| `/public` | Customer Portal Backend | Public | Backend endpoints for the customer portal |

## Security Recommendations

### Public Routes

These routes should be publicly accessible but may require authentication:

- `/webhook` - Must be accessible from Stripe and other external services
- `/portal` - Customer-facing portal (requires customer authentication)
- `/public` - Backend for customer portal (requires customer authentication)

### Private Routes

These routes should be restricted to authorized administrators:

- `/app` - Admin backend (requires admin authentication)
- `/site` - Admin frontend (requires admin authentication)

### API Routes

- `/api` - Should be secured with API keys or tokens

## Web Server Configuration Examples

### Nginx Example

```nginx
# Public routes
location /webhook {
    # Allow all access but consider IP restrictions for added security
    proxy_pass http://billabear_app;
}

location /portal {
    # Customer portal - publicly accessible
    proxy_pass http://billabear_app;
}

location /public {
    # Customer portal backend - publicly accessible
    proxy_pass http://billabear_app;
}

# Private routes
location /app {
    # Admin backend - restrict access
    # Consider IP restrictions or basic auth for added security
    proxy_pass http://billabear_app;
}

location /site {
    # Admin frontend - restrict access
    # Consider IP restrictions or basic auth for added security
    proxy_pass http://billabear_app;
}

# API routes
location /api {
    # API endpoints - secure with API keys
    proxy_pass http://billabear_app;
}
```

## Additional Notes

- All routes support HTTPS, and it's strongly recommended to use SSL/TLS encryption
- The webhook endpoints require special consideration for security (validate webhook signatures)
- Consider implementing rate limiting for public-facing routes
- API routes should be secured with proper authentication mechanisms