/**
 * PremiumCustomerRules.js
 * Shared Business Rules - Reference Repository
 *
 * Business rules that apply specifically to PREMIUM customers.
 * Consumer repos: customer-portal-ui, customer-service-api
 */

export const PremiumCustomerRules = {
  /**
   * Rule 1: Premium customers receive priority support.
   * Implementation note: Premium customers should be routed to the
   * priority support queue and receive faster response SLAs.
   */
  PRIORITY_SUPPORT: true,

  /**
   * Rule 2: Premium customers appear with gold badges.
   * Implementation note: Use badge colour #FFD700 (gold) in the UI
   * to distinguish Premium customers from Active and Inactive ones.
   */
  BADGE_COLOR: '#FFD700',
  BADGE_LABEL: 'Premium',

  /**
   * Rule 3: Premium customers are highlighted in dashboards.
   * Implementation note: Premium customers should be counted and
   * displayed in a dedicated "Premium Customers" metric card on
   * the Dashboard page.
   */
  DASHBOARD_HIGHLIGHT: true,
};

export function isPremiumCustomer(customer) {
  return customer && customer.status === 'PREMIUM';
}
