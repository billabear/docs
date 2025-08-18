---
title: Rollbar Integration
sidebar_label: Rollbar Integration
sidebar_position: 1
---

# Rollbar Error Tracking

BillaBear supports integration with [Rollbar](https://rollbar.com), a cloud-based error tracking service that helps you identify, track, and resolve errors in your application.

## Configuration

To enable Rollbar error logging in BillaBear, you need to configure the following environment variables:

| Environment Variable | Description |
| --- | --- | 
| `ROLLBAR_ENABLED` | Set to `true` to enable Rollbar error tracking, or `false` to disable it. |
| `ROLLBAR_API_KEY` | Your Rollbar project access token, available from your Rollbar account dashboard. |

## How It Works

When Rollbar is enabled:

1. BillaBear automatically captures and reports errors and exceptions to your Rollbar dashboard
2. Error reports include:
   - Stack traces
   - Request data
   - Environment information
   - User context (when available)

## Best Practices

- **Enable in Production**: Rollbar is particularly valuable in production environments where direct access to logs may be limited
- **Set Notification Rules**: Configure notification rules in your Rollbar dashboard to receive alerts for critical errors
- **Group Similar Errors**: Use Rollbar's grouping features to organize similar errors
- **Track Deployment Changes**: Configure deployment tracking to correlate errors with specific releases

## Troubleshooting

If errors are not appearing in your Rollbar dashboard:

1. Verify that `ROLLBAR_ENABLED` is set to `true`
2. Confirm that your `ROLLBAR_API_KEY` is correct
3. Check your application logs for any issues with the Rollbar integration
4. Ensure your server can connect to the Rollbar API endpoints
