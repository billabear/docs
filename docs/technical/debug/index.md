---
title: Debugging
sidebar_label: Debugging
sidebar_position: 14
---

# Debugging in BillaBear

This section provides information about debugging capabilities and error logging in BillaBear. Proper debugging and error tracking are essential for maintaining a healthy BillaBear installation and quickly resolving issues when they occur.

## Available Debugging Tools

BillaBear provides several tools and methods for debugging and error tracking:

### Symfony Profiler

In development environments, BillaBear includes the Symfony Profiler, a powerful debugging tool that provides detailed information about each request:

- **Access**: Available at `/_profiler` after making a request
- **Features**:
  - Request and response details
  - Performance metrics and timeline
  - Database queries and execution time
  - Memory usage
  - Logged messages
  - Configuration details

The Symfony Profiler is automatically disabled in production environments for security and performance reasons.

### Logging System

BillaBear uses Symfony's Monolog for comprehensive logging:

#### Log Files

- **Development**: Logs are written to `var/log/dev.log` with debug level
- **Production**: Logs are written to `var/log/prod.log` with info level
- **Test**: Logs are written to `var/log/test.log`

#### Logging Channels

BillaBear uses several logging channels for different types of information:

- **main**: General application logs
- **deprecation**: Deprecation notices
- **obol**: Payment processing logs
- **controller**: Controller action logs
- **audit**: Audit logs for tracking important actions

#### Viewing Logs

You can view logs using standard command-line tools:

```bash
# View the latest logs
tail -f var/log/prod.log

# Search logs for specific terms
grep "error" var/log/prod.log
```

### External Error Tracking

For production environments, BillaBear supports integration with Rollbar for error tracking and notification. See the [Rollbar Integration](./rollbar) page for configuration details.

## Debugging Background Tasks

For debugging background tasks:

1. Check the application logs for task execution records
2. Monitor the Symfony Messenger queue status:
   ```bash
   bin/console messenger:stats
   ```
3. Check for failed messages in the queue:
   ```bash
   bin/console messenger:failed:show
   ```
4. Manually trigger a task to test:
   ```bash
   bin/console billabear:background-generic
   ```

## Audit Logging

BillaBear includes an audit logging system that tracks important actions in the system:

- In standard installations, audit logs are written to the configured log files
- In cloud environments, audit logs are stored in Elasticsearch for better searchability and retention

## Best Practices for Debugging

1. **Use the appropriate environment**:
   - Development environment for debugging with full error details
   - Production environment with proper error logging for live systems

2. **Configure error reporting**:
   - Enable Rollbar in production for immediate error notifications
   - Set appropriate log levels based on environment

3. **Monitor logs regularly**:
   - Check logs for warnings and errors
   - Set up log rotation to manage disk space

4. **Use debugging tools wisely**:
   - Symfony Profiler in development for detailed request analysis
   - Xdebug for step-by-step debugging (requires configuration)

5. **Troubleshoot methodically**:
   - Check logs first for error messages
   - Verify configuration settings
   - Test in isolation when possible
   - Use the Symfony Profiler to analyze requests