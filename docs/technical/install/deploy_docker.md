---
title: Deploy Docker
sidebar_label: Deploy Docker
sidebar_position: 1
---
It's also possible to setup BillaBear using docker compose.

* have docker compose installed
* clone https://github.com/billabear/hosting-docker-compose
* go to directory
* edit the `.env` file to add the API keys - Fetch from [Stripe's dashboard](https://dashboard.stripe.com/apikeys).
* Create a secret key and copy that into `STRIPE_PRIVATE_API_KEY`
* Copy publishable key and copy that into `STRIPE_PUBLIC_API_KEY`
* run docker compose up.

```
git clone https://github.com/billabear/hosting-docker-compose.git billabear
cd billabear
nano .env
docker compose up -d
