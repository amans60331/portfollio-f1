/**
 * Form validation utilities for the portfolio
 */

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[0-9\s-+()]{10,15}$/;
    return phoneRegex.test(phone);
};

export const validateContactForm = (formData) => {
    const errors = {};

    if (!formData.get('name')?.trim()) {
        errors.name = "Driver name required for entry.";
    }

    if (!validateEmail(formData.get('email'))) {
        errors.email = "Valid cockpit frequency (email) required.";
    }

    if (!validatePhone(formData.get('phone'))) {
        errors.phone = "Invalid telemetry line (min 10 digits).";
    }

    if (!formData.get('subject')?.trim()) {
        errors.subject = "Race briefing (subject) required.";
    }

    if (!formData.get('message')?.trim()) {
        errors.message = "Message logs cannot be empty.";
    }

    return errors;
};
