---
title: ENV Variables
sidebar_label: ENV Variables
sidebar_position: 5
---
There are some Enviorment Variables that must be set and some that can be override.

| ENV Var | Description |
| --- | --- | 
| STRIPE_PRIVATE_API_KEY | Secret API key for Stripe |
| STRIPE_PUBLIC_API_KEY  | The publishable API key for stripe | 
| APP_SECRET | Symfony ENV var that should be unique string |
| DATABASE_URL | The DSN for database accesss |
| MESSENGER_TRANSPORT_DSN | Symfony Messenger DSN for if you're changing the background processing messenger |
| MAILER_DSN | The Symfony Mailer DSN which is used for the System Email settings. |
| XERO_CLIENT_ID | The Client ID for the Xero App |
| XERO_CLIENT_SECRET | The client secret for the Xero App |