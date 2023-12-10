import axios from "axios";
import { env } from "../../config/env.js";
import { PaypalServices } from "../services/Paypal.services.js";
// import { callForFetch } from "../utils/helpers.js";

export const createdOrder = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: { currency_code: "USD", value: "100.00" },
      },
    ],
    application_context: {
      brand_name: "Mi Tienda",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${env.environment.dev}/capture-order`,
      cancel_url: `${env.environment.dev}/cancel-order`
    }
  }

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const { data } = await axios.post(`${env.environment.dev}/v1/oauth2/token`, params, {
    auth: {
      username: env.paypal.clientID,
      password: env.paypal.secretKey
    }
  });

  const token = data.access_token;

  const response = await axios.post(`${env.environment.dev}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  
  res.json(response.data);
};

export const captureOrder = async (req, res) => {
  const { token } = req.query;

  const response = await axios.post(`${env.environment.dev}/v2/checkout/orders/${token}/capture`, {}, {
    auth: {
      username: env.paypal.clientID,
      password: env.paypal.secretKey
    }
  });

  console.log(response);

  res.send('Payed')
};

export const cancelPayment = (req, res) => res.redirect('/')