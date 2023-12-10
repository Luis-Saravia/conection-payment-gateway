import express from 'express';
import cors from 'cors'; 
import paypalRouter from './routes/paypal.routes.js';

const app = express();

app.use(cors());
app.use('/', paypalRouter);


const PORT = 3000;


app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`))