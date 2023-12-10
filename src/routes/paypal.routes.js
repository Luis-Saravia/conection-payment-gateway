import { Router } from 'express';
import {
  captureOrder,
  createdOrder,
  cancelPayment
} from '../controllers/paypal.controllers.js'

const paypalRouter = Router();

paypalRouter.get('/create-order', createdOrder)
paypalRouter.get('/capture-order', captureOrder);
paypalRouter.get('/cancel-order', cancelPayment)

export default paypalRouter