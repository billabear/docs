---
title: Environment Variables
sidebar_label: Environment Variables
sidebar_position: 5
---

# BillaBear Environment Variables

BillaBear uses environment variables for configuration. Some variables are required for the system to function, while others are optional and can be used to override default settings.

The "Since" column indicates the version of BillaBear in which the variable was introduced.

## Core Configuration

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| APP_SECRET | A unique string used by Symfony for security purposes | Yes | None | 1.0.0 |
| DATABASE_URL | The DSN (connection string) for database access | Yes | None | 1.0.0 |
| MESSENGER_TRANSPORT_DSN | Symfony Messenger DSN for background processing configuration | No | `doctrine://default` | 1.0.0 |

## Payment Processing

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| STRIPE_PRIVATE_API_KEY | Secret API key for Stripe | Yes | None | 1.0.0 |
| STRIPE_PUBLIC_API_KEY | The publishable API key for Stripe | Yes | None | 1.0.0 |

## Email Configuration

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| MAILER_DSN | The Symfony Mailer DSN used for system email settings | No | `null://null` | 1.0.0 |

## Error Tracking

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| ROLLBAR_ENABLED | Enable or disable Rollbar error logging (`true` or `false`) | No | `false` | 2024.01.01 |
| ROLLBAR_API_KEY | Rollbar's API Key | No | None | 2024.01.01 |
| ROLLBAR_ENV | The environment name to report to Rollbar | No | `production` | 2024.01.01 |

## Xero Integration

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| XERO_CLIENT_ID | The Client ID for the Xero App | No | None | 2024.01.01 |
| XERO_CLIENT_SECRET | The client secret for the Xero App | No | None | 2024.01.01 |
| XERO_CLIENT_REDIRECT_URI | The redirect URL to provide to Xero | No | None | 2024.01.01 |

## HubSpot Integration

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| HUBSPOT_APP_ID | The App ID for HubSpot | No | None | 2024.02.01 |
| HUBSPOT_CLIENT_ID | The client ID for the HubSpot App | No | None | 2024.02.01 |
| HUBSPOT_CLIENT_SECRET | The client secret for the HubSpot App | No | None | 2024.02.01 |
| HUBSPOT_REDIRECT_URI | The redirect URL to provide to HubSpot | No | None | 2024.02.01 |

## Elasticsearch Configuration

| Environment Variable | Description | Required | Default | Since |
| --- | --- | --- | --- | --- |
| ELASTICSEARCH_HOST | The hostname for Elasticsearch | No | `elasticsearch` | 2024.02.01 |
| ELASTICSEARCH_PORT | The port for Elasticsearch | No | `9200` | 2024.02.01 |
| AUDIT_LOG_INDEX | The Elasticsearch index name for the audit log | No | `audit_log` | 2024.02.01 |

## Examples

### Database Configuration
```
DATABASE_URL=postgresql://billabear:password@127.0.0.1:5432/billabear?serverVersion=14&charset=utf8
```

### Email Configuration
```
# Gmail
MAILER_DSN=smtp://username:password@gmail

# Mailgun
MAILER_DSN=mailgun://KEY:DOMAIN@default

# SendGrid
MAILER_DSN=sendgrid://KEY@default
```

For more information on Symfony Mailer DSN formats, refer to the [Symfony documentation](https://symfony.com/doc/current/mailer.html#transport-setup).

## Security Considerations

When setting environment variables:

1. **Protect sensitive values**: Variables like API keys and database credentials should be kept secure
2. **Use different values for environments**: Use different values for development, staging, and production
3. **Limit access**: Restrict access to environment configuration files
4. **Consider using a vault**: For production, consider using a secrets management solution

## Troubleshooting

If you encounter issues with environment variables:

1. Verify that all required variables are set
2. Check for typos in variable names
3. Ensure values are properly formatted (especially URLs and DSNs)
4. Confirm that the application has access to read the environment variables
5. For Docker deployments, verify that variables are properly passed to containers