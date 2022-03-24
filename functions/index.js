const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KdLRdI4XYvLNYFiSg3tHWhCbz0P8Nbeb1qD9L9voALkrRpFRDOmhCYuZYIFmoWaLsBwre0w5OyNCaMcIOsaYJZe00YkhmGetQ')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());


// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment Request Recieved', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/lhl-final-82e6c/us-central1/api