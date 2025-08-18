---
title: Updating BillaBear
sidebar_label: Updating
sidebar_position: 4
---

# Updating BillaBear

This guide provides comprehensive instructions for updating your BillaBear installation to the latest version. Regular updates ensure you have access to the newest features, security patches, and bug fixes.

## Update Detection

BillaBear includes a built-in update detection system that automatically checks for new versions. This system works as follows:

1. The `billabear:update:check` command runs daily (typically via a scheduled task/cron job)
2. When a new version is detected, an alert appears in the BillaBear admin interface
3. The alert includes a link to this documentation to guide you through the update process

## Before Updating

Before updating your BillaBear installation, it's important to take these precautionary steps:

1. **Create a backup** of your database and application files
2. **Review the changelog** for any breaking changes or special update instructions
3. **Check compatibility** with your current environment (PHP version, extensions, etc.)
4. **Plan for downtime** if necessary, especially for major version updates

## Update Process by Deployment Method

The update process varies depending on how you've deployed BillaBear. Follow the instructions for your specific deployment method.

### Docker Compose Deployment

If you're using the recommended Docker Compose setup:

1. Navigate to your BillaBear directory:
   ```bash
   cd /path/to/billabear
   ```

2. Pull the latest changes from the repository:
   ```bash
   git pull
   ```

3. Rebuild and restart the containers:
   ```bash
   docker compose down
   docker compose up -d
   ```

4. The update process will automatically:
   - Update application files
   - Run database migrations
   - Clear caches
   - Rebuild assets

5. Verify the update was successful by checking the version number in the admin interface

### DigitalOcean App Platform Deployment

If you've deployed BillaBear to DigitalOcean App Platform:

1. Log in to your DigitalOcean account
2. Navigate to the App Platform section
3. Select your BillaBear application
4. Click on the "Components" tab
5. Find the BillaBear service and click the three-dot menu
6. Select "Force Rebuild and Deploy"
7. The platform will automatically pull the latest version and deploy it

### Manual Deployment

If you've installed BillaBear manually:

1. Navigate to your BillaBear directory:
   ```bash
   cd /path/to/billabear
   ```

2. Pull the latest changes from the repository:
   ```bash
   git pull
   ```

3. Install or update dependencies:
   ```bash
   composer install --no-dev --optimize-autoloader
   npm install
   ```

4. Build frontend assets:
   ```bash
   npm run build
   ```

5. Run database migrations:
   ```bash
   php bin/console doctrine:migrations:migrate --no-interaction
   ```

6. Clear the cache:
   ```bash
   php bin/console cache:clear
   ```

7. Ensure proper permissions:
   ```bash
   chmod -R 777 var/cache var/log
   ```

## Database Migrations

During the update process, BillaBear automatically runs database migrations to ensure your database schema is compatible with the new version. These migrations:

- Add new tables and columns required by new features
- Modify existing structures as needed
- Migrate data to new formats when necessary

If you need to run migrations manually, use the following command:

```bash
php bin/console doctrine:migrations:migrate --no-interaction
```

## Post-Update Tasks

After updating BillaBear, it's recommended to:

1. **Test critical functionality** to ensure everything works as expected
2. **Check for new configuration options** that may have been added
3. **Review new features** to take advantage of the latest capabilities
4. **Update any custom integrations** that might be affected by the update

## Troubleshooting

If you encounter issues during or after the update process:

### Common Issues

1. **Database migration errors**
   - Check the migration logs for specific errors
   - Ensure your database user has sufficient privileges
   - Verify database compatibility with the new version

2. **Asset compilation failures**
   - Ensure Node.js and npm are installed and up to date
   - Clear the node_modules directory and reinstall dependencies
   - Check for JavaScript errors in the browser console

3. **Permission issues**
   - Ensure the web server has write access to the var/cache and var/log directories
   - Check file ownership and permissions

4. **White screen or 500 errors**
   - Check the application logs in var/log
   - Enable development mode temporarily to see detailed error messages
   - Verify PHP extensions and version requirements

### Getting Help

If you're unable to resolve update issues:

1. Check the [GitHub Issues](https://github.com/billabear/billabear/issues) for similar problems
2. Post a question in [GitHub Discussions](https://github.com/billabear/billabear/discussions/categories/q-a)
3. Contact support at [support@billabear.com](mailto:support@billabear.com)

## Rollback Procedure

If you need to revert to a previous version:

1. Restore your database from backup
2. For Docker deployments:
   ```bash
   git checkout [previous-version-tag]
   docker compose down
   docker compose up -d
   ```

3. For manual deployments:
   ```bash
   git checkout [previous-version-tag]
   composer install --no-dev --optimize-autoloader
   npm install
   npm run build
   php bin/console cache:clear
   ```

## Best Practices

To ensure smooth updates in the future:

1. **Update regularly** to avoid large, potentially problematic jumps between versions
2. **Subscribe to release notifications** to stay informed about new versions
3. **Test updates in a staging environment** before applying to production
4. **Maintain regular backups** of your database and application files
5. **Document any customizations** you've made to core files
6. **Run the update check command** regularly to detect new versions:
   ```bash
   php bin/console billabear:update:check
   ```

By following these guidelines, you can keep your BillaBear installation up to date while minimizing potential disruptions to your billing operations.