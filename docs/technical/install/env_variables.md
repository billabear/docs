---
title: ENV Variables
sidebar_label: ENV Variables
sidebar_position: 5
---
There are some Enviorment Variables that must be set and some that can be override.

| ENV Var | Description | Since | 
| --- | --- | --- |
| STRIPE_PRIVATE_API_KEY | Secret API key for Stripe | |
| STRIPE_PUBLIC_API_KEY  | The publishable API key for stripe | |
| APP_SECRET | Symfony ENV var that should be unique string | |
| DATABASE_URL | The DSN for database accesss | |
| MESSENGER_TRANSPORT_DSN | Symfony Messenger DSN for if you're changing the background processing messenger | |
| MAILER_DSN | The Symfony Mailer DSN which is used for the System Email settings. | | 
| ROLLBAR_ENABLED | true or false if Rollbar error logging is enabled | 2024.01.01 | 
| ROLLBAR_API_KEY | Rollbar's API Key | 2024.01.01 | 
| ROLLBAR_ENV | The environment you want to report to Rollbar as  | 2024.01.01 | 
| XERO_CLIENT_ID | The Client ID for the Xero App | 2025.01.01 | 
| XERO_CLIENT_SECRET | The client secret for the Xero App | 2025.01.01 | 
| XERO_CLIENT_REDIRECT_URI | The Redirect URL to give to Xero | 2025.01.01 | 
| HUBSPOT_APP_ID | The APP id for HubSpot | 2025.02.01 |
| HUBSPOT_CLIENT_ID | The client ID for the HubSpot App | 2025.02.01 |
| HUBSPOT_CLIENT_SECRET | The client secret for the HubSpot App | 2025.02.01 |
| HUBSPOT_REDIRECT_URI | The redirect URL to give to HubSpot | 2025.02.01 |
| ELASTICSEARCH_HOST | The host for ElasticSearch | 2025.02.01 |
| ELASTICSEARCH_PORT | The port for ElasticSearch | 2025.02.01 |