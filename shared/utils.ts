// Shared utility functions for Amplify ARC

/**
 * Formats a price as currency
 * @param price - The price to format
 * @param currency - The currency symbol (default: $)
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency: string = '$'): string => {
  return `${currency}${price.toLocaleString('en-US')}`;
};

/**
 * Calculates the total price for selected services
 * @param serviceIds - Array of service IDs
 * @param services - Array of service objects
 * @returns Total price
 */
export const calculateTotalPrice = (serviceIds: string[], services: any[]): number => {
  return serviceIds.reduce((total, id) => {
    const service = services.find(s => s.id === id);
    return total + (service ? service.price : 0);
  }, 0);
};

/**
 * Applies a discount to a price
 * @param price - Original price
 * @param discountPercent - Discount percentage
 * @returns Discounted price
 */
export const applyDiscount = (price: number, discountPercent: number): number => {
  return price * (1 - discountPercent / 100);
};

/**
 * Validates an email address
 * @param email - Email address to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Truncates text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Generates a random ID
 * @returns Random ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

/**
 * Debounces a function
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = (func: Function, wait: number): Function => {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
