---
title: Invoice Number Generation
sidebar_label: Invoice Numbers
sidebar_position: 1
---

# Invoice Number Generation

Invoice numbers are important identifiers that help track and reference your invoices. Many countries have specific legal requirements for how invoice numbers must be generated, and many businesses have their own numbering systems to meet internal needs.

## Understanding Invoice Number Generation

BillaBear offers two methods for generating invoice numbers:

### Random Number Generation

With this method, BillaBear generates a random unique number for each invoice. This is the default method and works well for most general use cases.

**Benefits:**
* Simple implementation
* No need to manage number sequences
* Guaranteed uniqueness

### Sequential Number Generation

With sequential numbering, each new invoice receives a number that increments from the previous one (e.g., 1001, 1002, 1003). This method allows you to:

* Comply with regulations that require sequential invoice numbering
* Maintain an existing invoice numbering sequence when migrating to BillaBear
* Create predictable, ordered invoice numbers

## Required Permissions

To configure invoice number generation in BillaBear, you need administrator access with a role of **Developer** or higher.

[Learn more about user roles here](../user_roles/)

## How to Configure Invoice Number Generation

Follow these steps to set up your preferred invoice numbering method:

### Step 1: Access Settings

From the main menu, click on **Settings**.

![Click Settings](./invoice_number_generation_screenshots/1_click_settings.png)

### Step 2: Open System Settings

In the settings menu, select **System Settings**.

![Click System Settings](./invoice_number_generation_screenshots/2_click_system_settings.png)

### Step 3: Choose Generation Type

In the Invoice section, find the **Invoice Number Generation** option and select your preferred method:
* **Random** - For randomly generated numbers
* **Sequential** - For incrementing numbers

![Choose Type](./invoice_number_generation_screenshots/3_choose_type.png)

### Step 4: Set Starting Number (Sequential Only)

If you selected Sequential numbering, you'll need to set the starting number. This is particularly useful when:
* Migrating from another system and want to continue your numbering sequence
* Starting with a specific number format (e.g., beginning with 1000)

:::note
This option only appears when Sequential numbering is selected.
:::

![Set number](./invoice_number_generation_screenshots/4_set_number.png)

### Step 5: Save Your Changes

Click the **Update** button to save your configuration.

![Click Update](./invoice_number_generation_screenshots/5_click_update.png)

## Important Considerations

* **Changing Methods**: If you switch from one method to another, BillaBear will use the new method for all future invoices. Existing invoice numbers will not change.
* **Legal Requirements**: Some jurisdictions require sequential, gap-free invoice numbering. Ensure your chosen method complies with local regulations.
* **Starting Number**: When using sequential numbering, choose a starting number that won't conflict with existing invoices.