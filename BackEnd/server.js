const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());

// Middleware to set CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // Connect to MongoDB database
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.znbkog7.mongodb.net/?retryWrites=true&w=majority');

}

// Define a schema for the car data
const carSchema = new mongoose.Schema({
  Name: String,
  Make: String,
  Model: String,
  Year: mongoose.Schema.Types.Mixed, // Accept both numbers and strings
  EngineSize: String,
  Color: String,
  BodyType: String,
  PriceRange: String,
  ImageURL: String
});

// Create a model for the car data
const carModel = mongoose.model('Car', carSchema);

// POST route to create a new car
app.post('/api/cars', (req, res) => {
  const carData = req.body;

  carModel.create(carData)
    .then(() => { 
      res.send("Car Created");
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging
      res.status(500).send("Car NOT Created");
    });
});

// GET route to fetch all cars
app.get('/api/cars', async (req, res) => {
  const cars = await carModel.find({});
  res.json(cars);
});

// Delete a car via ID
app.delete('/api/cars/:id', async (req, res) => {
  await carModel.findByIdAndDelete(req.params.id);
  console.log("deleted: " + req.params.id)
  res.send("Result");
});

// GET route to fetch a car by ID
app.get('/api/cars/:id', async (req, res) => {
  const carId = req.params.id;
  try {
    const car = await carModel.findById(carId);
    if (!car) {
      res.status(404).send("Car not found");
    } else {
      res.json(car);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// PUT route to update a car by ID
app.put('/api/cars/:id', async (req, res) => {
  const carId = req.params.id;
  const updatedCarData = req.body;
  try {
    const updatedCar = await carModel.findByIdAndUpdate(carId, updatedCarData, { new: true });
    if (!updatedCar) {
      res.status(404).send("Car not found");
    } else {
      res.json(updatedCar);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
