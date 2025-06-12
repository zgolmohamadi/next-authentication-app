export const validatePhone = (phone: string) => {
  const phoneRegex = /^09[0-9]{9}$/;
  return phoneRegex.test(phone);
}; 