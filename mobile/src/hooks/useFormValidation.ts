import { useState, useCallback } from 'react';
import { isValidEmail } from '../../../shared/utils';

type ValidationRules = {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isPhone?: boolean;
    custom?: (value: any) => boolean;
    message?: string;
  };
};

type FormValues = {
  [key: string]: any;
};

type FormErrors = {
  [key: string]: string;
};

/**
 * Custom hook for form validation
 * @param initialValues - Initial form values
 * @param validationRules - Rules for validation
 * @returns Form state and helper functions
 */
const useFormValidation = (
  initialValues: FormValues,
  validationRules: ValidationRules
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Handle input change
  const handleChange = useCallback(
    (name: string, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      
      // Validate field if it's been touched
      if (touched[name]) {
        validateField(name, value);
      }
    },
    [touched]
  );

  // Mark field as touched
  const handleBlur = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      validateField(name, values[name]);
    },
    [values]
  );

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  // Validate a single field
  const validateField = useCallback(
    (name: string, value: any) => {
      const rules = validationRules[name];
      if (!rules) return;

      let error = '';

      if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
        error = rules.message || `${name} is required`;
      } else if (value) {
        if (rules.minLength && typeof value === 'string' && value.length < rules.minLength) {
          error = rules.message || `${name} must be at least ${rules.minLength} characters`;
        } else if (rules.maxLength && typeof value === 'string' && value.length > rules.maxLength) {
          error = rules.message || `${name} must be less than ${rules.maxLength} characters`;
        } else if (rules.isEmail && !isValidEmail(value)) {
          error = rules.message || 'Please enter a valid email address';
        } else if (rules.isPhone && !/^\+?[0-9]{10,15}$/.test(value.replace(/[\s()-]/g, ''))) {
          error = rules.message || 'Please enter a valid phone number';
        } else if (rules.custom && !rules.custom(value)) {
          error = rules.message || `Invalid ${name}`;
        }
      }

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));

      return !error;
    },
    [validationRules]
  );

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Mark all fields as touched
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(validationRules).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate each field
    Object.keys(validationRules).forEach((key) => {
      const fieldIsValid = validateField(key, values[key]);
      if (!fieldIsValid) {
        isValid = false;
      }
    });

    return isValid;
  }, [validateField, values, validationRules]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setValues,
  };
};

export default useFormValidation;
