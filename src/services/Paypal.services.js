import axios from "axios";
import { env } from "../../config/env.js";
import { contentTypeHeaders } from "../utils/content-type.options.js";
import { callForFetch } from "../utils/helpers.js";

export class PaypalServices {
  // static createOrder(url, config = {}) {
  //   callForFetch(`${env.environment.dev}/v2/checkout`, {
  //     headers: {
  //       "Content-type": contentTypeHeaders[json],
  //     },
  //   });
  // }

  static async initAuth() {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const data = await axios.post(
      `${env.environment.dev}/v1/oauth2/token`,
      params,
      {
        username: env.paypal.clientID,
        password: env.paypal.secretKey,
      }
    );

    console.log(data)
    return data
  }
}
