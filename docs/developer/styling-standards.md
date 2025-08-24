# CSS and Styling Standards

This document establishes clear guidelines for CSS organisation and styling patterns in the BillaBear application to ensure consistency and maintainability.

## Overview

BillaBear uses a combination of Tailwind CSS utilities and custom CSS classes to achieve consistent styling across the application. This document outlines when to use each approach and provides guidelines for maintaining clean, organised code.

## Tailwind CSS vs Custom CSS Guidelines

### When to Use Tailwind CSS

**Primary Approach**: Tailwind utilities should be the default choice for most styling needs.

Use Tailwind CSS utilities for:
- **Standard spacing, colours, and typography**: margins, padding, font sizes, text colours
- **Layout and positioning**: flexbox, grid, positioning utilities
- **Responsive design**: responsive prefixes (sm:, md:, lg:, xl:)
- **Basic styling**: borders, shadows, background colours
- **Simple interactive states**: hover:, focus:, active: states

Example:
```css
.example-class {
    @apply rounded-lg p-2 bg-teal-500 text-white font-bold hover:bg-teal-400;
}
```

### When to Use Custom CSS

Use custom CSS properties for:
- **Third-party integrations**: Stripe elements, external library styling
- **Complex animations**: multi-step animations, custom transitions
- **Browser-specific fixes**: webkit-specific properties, vendor prefixes
- **Complex selectors**: pseudo-elements, complex child selectors
- **Legacy browser support**: fallback styles that Tailwind doesn't cover

Example:
```css
.StripeElement {
    box-sizing: border-box;
    height: 40px;
    padding: 10px 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px 0 #d1defc;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
}
```

## CSS File Organisation

### Primary CSS Files

1. **`assets/public/styles/app.css`**
   - Global Tailwind imports and base layer styles
   - Third-party integration styles (e.g., Stripe elements)
   - Global element styling (h1, h2, h3, a tags)
   - Public-facing application styles

2. **`assets/billabear/styles/three.css`**
   - Component-specific utility classes
   - Button styles and variants
   - Form field styles
   - List and table styles
   - Admin application styles

### File Usage Guidelines

- **app.css**: Use for global styles, base layer overrides, and third-party integrations
- **three.css**: Use for reusable component classes and admin-specific styling
- **Component styles**: Use `<style>` sections in Vue components only for component-specific styling that cannot be achieved with utility classes

## Component Styling Standards

### Button Classes

Standardised button classes are defined in `three.css`:

```css
.btn--main {
    @apply rounded-lg p-2 bg-teal-500 text-white font-bold hover:bg-teal-400 no-underline;
}

.btn--secondary {
    @apply rounded-lg p-2 border bg-white border-teal-500 text-teal-500 font-bold hover:bg-gray-100 cursor-pointer;
}

.btn--danger {
    @apply rounded-lg p-2 border text-white bg-red-500 font-bold hover:bg-red-400;
}

.btn--black {
    @apply rounded-lg p-2 border text-white bg-black font-bold hover:bg-gray-700;
}
```

### Form Field Classes

Consistent form styling:

```css
.form-field-lbl {
    @apply block mb-1 font-medium;
}

.form-field-input, .form-field {
    @apply rounded-lg border border-gray-300 ring-teal-500 p-2;
}

.form-field-help {
    @apply text-gray-500 italic mt-1;
}

.form-field-error {
    @apply text-red-500 italic py-1;
}
```

### List and Table Classes

Standardised list and table styling:

```css
.list-table {
    @apply w-full;
}

.list-table thead th {
    @apply pb-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400;
}

.list-table tbody tr {
    @apply hover:bg-gray-100 dark:hover:bg-gray-700;
}

.list-table tbody td {
    @apply py-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white;
}
```

## Code Organisation Rules

### Avoid Duplicate Definitions

- **Never define the same class in multiple CSS files**
- Check existing definitions before creating new utility classes
- Use consistent naming conventions across all files

### CSS Formatting Standards

- **Use single blank lines** between CSS rules
- **Group related classes** together (e.g., all button variants)
- **Use consistent indentation** (4 spaces)
- **Order properties logically**: layout → appearance → typography → interactions

### Naming Conventions

- **Component classes**: Use BEM-style naming or descriptive names (`.form-field-input`, `.list-table`)
- **Utility classes**: Use semantic names that describe purpose (`.section-header`, `.page-title`)
- **Button variants**: Use consistent prefixes (`.btn--main`, `.btn--secondary`, `.btn--danger`)

## Vue Component Guidelines

### Template Styling

```vue
<template>
  <!-- Prefer Tailwind utilities for simple styling -->
  <div class="p-4 bg-white rounded-lg shadow">
    
    <!-- Use defined utility classes for common patterns -->
    <h1 class="page-title">{{ title }}</h1>
    
    <!-- Use standardised button classes -->
    <button class="btn--main" @click="submit">Submit</button>
  </div>
</template>
```

### Component-Specific Styles

Only use `<style>` sections for:
- Complex component-specific styling that cannot be achieved with utilities
- Animations and transitions
- Third-party component customisation

```vue
<style scoped>
/* Only when Tailwind utilities are insufficient */
.custom-animation {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
```

## Maintenance Guidelines

### Regular Reviews

1. **Audit CSS files quarterly** for duplicate definitions
2. **Remove unused classes** during feature development
3. **Consolidate similar patterns** into reusable utility classes

### Adding New Styles

1. **Check existing utilities** before creating new classes
2. **Use Tailwind utilities first** when possible
3. **Document new utility classes** if they're reusable
4. **Test across different screen sizes** and themes

### Troubleshooting

Common issues and solutions:

- **Conflicting styles**: Check for duplicate class definitions across CSS files
- **Specificity issues**: Ensure proper CSS cascade order
- **Missing styles**: Verify Tailwind configuration includes required utilities

## Migration Guidelines

When updating existing components:

1. **Gradually migrate** from custom CSS to Tailwind utilities
2. **Test thoroughly** after style changes
3. **Maintain visual consistency** during migration
4. **Update related components** to use new patterns

---

This document should be updated as styling patterns evolve and new requirements emerge.