/**
 * CustomerStatusRules.js
 * Shared Business Rules - Reference Repository
 *
 * Defines the canonical set of customer status values.
 * Consumer repos: customer-portal-ui, customer-service-api
 */

const CustomerStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PREMIUM: 'PREMIUM',
};

const VALID_STATUSES = Object.values(CustomerStatus);

function isValidStatus(status) {
  return VALID_STATUSES.includes(status);
}

module.exports = { CustomerStatus, VALID_STATUSES, isValidStatus };
