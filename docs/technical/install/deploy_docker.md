---
title: Deploy with Docker Compose
sidebar_label: Deploy with Docker Compose
sidebar_position: 1
---

# Deploy BillaBear with Docker Compose

Docker Compose provides a simple way to deploy BillaBear locally or on your own server. This method is ideal for development environments or self-hosted production deployments.

## Prerequisites

- Docker and Docker Compose installed on your system
- Git for cloning the repository
- Basic knowledge of terminal/command line operations

## Deployment Steps

1. Ensure Docker Compose is installed on your system
2. Clone the hosting repository:
   ```bash
   git clone https://github.com/billabear/hosting-docker-compose.git billabear
   ```
3. Navigate to the directory:
   ```bash
   cd billabear
   ```
4. Edit the `.env` file to configure your environment:
   ```bash
   nano .env
   ```
5. Add your Stripe API keys:
   - Fetch your API keys from [Stripe's dashboard](https://dashboard.stripe.com/apikeys)
   - Create a secret key and copy it into `STRIPE_PRIVATE_API_KEY`
   - Copy the publishable key into `STRIPE_PUBLIC_API_KEY`
6. Start the containers:
   ```bash
   docker compose up -d
   ```

## Included Services

The Docker Compose setup includes:

- PostgreSQL database
- Redis for caching
- Elasticsearch for search functionality
- BillaBear application
- Nginx web server

## Accessing BillaBear

After deployment:

1. Access BillaBear at `http://localhost` (or the IP address of your server)
2. Complete the initial setup form to create your administrator account
3. Configure additional settings as needed

## Troubleshooting

If you encounter issues:

- Check Docker container logs: `docker compose logs`
- Ensure all containers are running: `docker compose ps`
- Verify your `.env` configuration is correct
- Make sure required ports are not already in use

## Updating BillaBear

To update to the latest version:

1. Pull the latest changes: `git pull`
2. Rebuild and restart containers: `docker compose down && docker compose up -d`

For additional assistance, please contact [support@billabear.com](mailto:support@billabear.com) or visit our [GitHub Discussions](https://github.com/billabear/billabear/discussions/categories/q-a).
