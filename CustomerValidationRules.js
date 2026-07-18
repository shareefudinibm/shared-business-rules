/**
 * CustomerValidationRules.js
 * Shared Business Rules - Reference Repository
 *
 * Reusable validation logic for customer entities.
 * Consumer repos: customer-portal-ui, customer-service-api
 */

import { VALID_STATUSES } from './CustomerStatusRules.js';

// Rule 1: Email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { valid: false, message: 'Email is required.' };
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return { valid: false, message: 'Email must be a valid email address.' };
  }
  return { valid: true, message: null };
}

// Rule 2: Customer name validation
const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;

export function validateName(name) {
  if (!name || typeof name !== 'string') {
    return { valid: false, message: 'Name is required.' };
  }
  const trimmed = name.trim();
  if (trimmed.length < NAME_MIN_LENGTH) {
    return { valid: false, message: `Name must be at least ${NAME_MIN_LENGTH} characters.` };
  }
  if (trimmed.length > NAME_MAX_LENGTH) {
    return { valid: false, message: `Name must be no more than ${NAME_MAX_LENGTH} characters.` };
  }
  return { valid: true, message: null };
}

// Rule 3: Customer status validation
export function validateStatus(status) {
  if (!status) {
    return { valid: false, message: 'Status is required.' };
  }
  if (!VALID_STATUSES.includes(status)) {
    return {
      valid: false,
      message: `Status must be one of: ${VALID_STATUSES.join(', ')}.`,
    };
  }
  return { valid: true, message: null };
}

export function validateCustomer(customer) {
  const nameResult = validateName(customer?.name);
  const emailResult = validateEmail(customer?.email);
  const statusResult = validateStatus(customer?.status);

  const errors = [nameResult, emailResult, statusResult]
    .filter((r) => !r.valid)
    .map((r) => r.message);

  return { valid: errors.length === 0, errors };
}
