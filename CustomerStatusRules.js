/**
 * CustomerStatusRules.js
 * Shared Business Rules - Reference Repository
 *
 * Defines the canonical set of customer status values.
 * Consumer repos: customer-portal-ui, customer-service-api
 */

export const CustomerStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PREMIUM: 'PREMIUM',
};

export const VALID_STATUSES = Object.values(CustomerStatus);

export function isValidStatus(status) {
  return VALID_STATUSES.includes(status);
}
