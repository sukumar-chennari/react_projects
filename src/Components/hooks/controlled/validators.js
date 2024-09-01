export const usernameValidator = (value) => {
    if (!value) {
        return 'Please enter your name';
    } else if (value.length > 20) {
        return 'Length exceeded';
    }
    return '';
};

export const mobileValidator = (num) => {
    const mobileRegex = /^[6-9]\d{9}$/; // Added '$' to ensure the string ends after 10 digits
    if (!num) {
        return 'Please enter the mobile number';
    } else if (!mobileRegex.test(num)) {
        return 'Please enter a valid mobile number';
    }
    return '';
};
