---
title: BillaBear Invoice Delivery System
sidebar_label: Invoice Delivery
sidebar_position: 2
---

# Invoice Delivery System

BillaBear provides a flexible invoice delivery system that allows you to deliver invoices to customers through various channels. The system is designed to be extensible, allowing you to create custom delivery methods to meet your specific requirements.

## Overview

The invoice delivery system consists of the following components:

- **DeliveryHandlerInterface**: The core interface that all delivery handlers must implement
- **DeliveryHandlerProvider**: A service that manages and provides access to all registered delivery handlers
- **Delivery Handlers**: Implementations of the DeliveryHandlerInterface that handle the actual delivery of invoices

BillaBear comes with several built-in delivery handlers:

- **EmailDeliveryHandler**: Delivers invoices via email
- **SftpDeliveryHandler**: Delivers invoices via SFTP
- **WebhookDeliveryHandler**: Delivers invoices via webhook

## Creating Custom Delivery Handlers

If the built-in delivery handlers don't meet your requirements, you can create your own custom delivery handler. See the [Custom Delivery Handler](./custom-delivery-handler.md) documentation for details.