import dotenv from 'dotenv';
dotenv.config();

export const env = {
  environment: {
    dev: process.env.PAYPAL_API_DEV
  },
  paypal: {
    clientID: process.env.PAYPAL_API_CLIENT_ID,
    secretKey: process.env.PAYPAL_API_SECRET_KEY,
  }
}