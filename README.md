# Shared Business Rules

> **This repository is read-only and intended as a reference repository for AI agents and consumer services.**

## Purpose

This repository stores reusable customer validation logic and business constants that are shared across the Customer Portal ecosystem. Consumer repositories should read and implement these rules rather than defining their own.

## Consumer Repositories

| Repository | Role |
|---|---|
| `customer-portal-ui` | React frontend — uses status constants, badge colours, and validation patterns |
| `customer-service-api` | .NET backend — mirrors validation rules and status enum values |

## Files

| File | Description |
|---|---|
| `CustomerStatusRules.js` | Canonical customer status values: `ACTIVE`, `INACTIVE`, `PREMIUM` |
| `PremiumCustomerRules.js` | Business rules specific to premium customers (priority support, gold badge, dashboard highlight) |
| `CustomerValidationRules.js` | Reusable validation functions for name, email, and status fields |

## Business Rules Summary

### Customer Statuses
- `ACTIVE` – Standard active customer
- `INACTIVE` – Deactivated customer
- `PREMIUM` – High-value customer with additional benefits

### Premium Customer Rules
1. **Priority Support** – Premium customers are routed to the priority support queue.
2. **Gold Badge** – Premium customers display a gold badge (`#FFD700`) in the UI.
3. **Dashboard Highlight** – Premium customers are counted in a dedicated metric card on the Dashboard.

### Validation Rules
1. **Email** – Must be a non-empty string matching standard email format (`user@domain.tld`).
2. **Name** – Must be between 2 and 100 characters.
3. **Status** – Must be one of the values defined in `CustomerStatusRules.js`.

## Usage Pattern

Consumer repositories should implement these rules in their own language/framework but **must not diverge** from the logic defined here.

```js
// JavaScript example (customer-portal-ui) — ES module imports
import { CustomerStatus } from './CustomerStatusRules.js';
import { validateCustomer } from './CustomerValidationRules.js';

const result = validateCustomer({ name: 'Alice', email: 'alice@example.com', status: CustomerStatus.ACTIVE });
// { valid: true, errors: [] }
```

```csharp
// C# example (customer-service-api)
// Mirror the same enum values and validation constraints
public enum CustomerStatus { Active, Inactive, Premium }
```

## Notes

- Do **not** submit pull requests to add application-specific logic to this repository.
- All changes must be reviewed to ensure they remain generic and reusable.
