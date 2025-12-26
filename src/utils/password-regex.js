export const validatePassword = (password) => {
    // At least one uppercase letter, one lowercase letter, one digit, one special character, and minimum 8 characters
    const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}