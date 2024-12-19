export const constants = {
  url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
  stripeLink:
    process.env.NODE_ENV === 'development'
      ? 'https://buy.stripe.com/test_00gaGH9XJewQ5lCfYY'
      : '',
};
