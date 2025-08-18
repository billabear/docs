---
title: Payment Details
sidebar_label: Payment Details
sidebar_position: 3
---

# Payment Details

The payment details page in BillaBear provides comprehensive information about individual payment transactions. This guide explains how to interpret and use the payment details screen effectively.

## Accessing Payment Details

To view details for a specific payment:

1. Navigate to the [payments list](./viewing_payments)
2. Find the payment you want to examine
3. Click on the payment ID or the "View" button in the Actions column

Alternatively, you can access payment details from:
* A customer's payment history
* An invoice's payment information
* A subscription's payment history

## Understanding the Payment Details Screen

The payment details screen is divided into several sections, each providing specific information about the payment.

### Payment Summary

The top section displays key payment information:

* **Payment ID**: The unique identifier for this payment
* **Customer**: The customer who made the payment, with a link to their profile
* **Amount**: The total payment amount and currency
* **Date**: When the payment was processed
* **Status**: Current status (e.g., Completed, Failed, Partially Refunded, Fully Refunded)
* **Payment Method**: The method used (e.g., Credit Card, Bank Transfer)
* **Reference**: External reference number from the payment processor

### Payment Method Details

This section shows information about the payment method used:

* For credit cards: Last 4 digits, card type, expiry date
* For bank transfers: Bank name, account reference
* For other methods: Relevant identifying information

### Associated Items

This section shows what the payment was for:

* **Invoices**: Any invoices paid with this payment
* **Subscriptions**: Any subscriptions this payment was applied to
* **Products**: Any one-time purchases included in this payment

### Refund History

If any refunds have been processed for this payment, they appear in this section:

* **Refund Amount**: How much was refunded
* **Refund Date**: When the refund was processed
* **Reason**: The documented reason for the refund
* **Processed By**: The user who processed the refund

### Available Actions

Depending on your permissions and the payment status, you may see action buttons such as:

* **Issue Refund**: Process a refund for this payment (if not fully refunded)
* **Attach to Customer**: Assign an unassigned payment to a customer
* **View Receipt**: View or download the payment receipt

## Maximum Refundable Amount

For payments that can still be refunded, BillaBear displays the maximum refundable amount, which is:

```
Maximum Refundable Amount = Original Payment Amount - Sum of All Previous Refunds
```

This helps ensure you don't attempt to refund more than the available amount.

## Receipts

The payment details page shows all receipts generated for this payment. For each receipt, you can:

* View the receipt online
* Download the receipt as a PDF
* See when the receipt was generated and sent

## Related Records

The payment details page may also show related records such as:

* **Chargebacks**: Any payment disputes filed by the customer
* **Payment Attempts**: For failed payments, information about the attempts
* **Audit Logs**: Record of changes or actions related to this payment

## Common Tasks

From the payment details page, you can:

1. **Issue a Refund**: Click the "Issue Refund" button to process a full or partial refund
2. **Download Receipt**: Click "View Receipt" to access and download the payment receipt
3. **Navigate to Customer**: Click the customer's name to view their complete profile
4. **View Related Items**: Click on associated invoices or subscriptions to view their details

## Troubleshooting

If you encounter issues with payment details:

* **Missing Information**: Ensure you have the necessary permissions to view all payment details
* **Refund Button Not Available**: Check if the payment has already been fully refunded or if you have the required permissions
* **Related Items Not Showing**: Verify that the payment has been properly associated with invoices or subscriptions