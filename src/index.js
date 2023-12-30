import express from "express";
import dotenv from "dotenv";
import hrrouter from "./routes/hrRoute.js";
import adminrouter from "./routes/user.route.js";
import comrouter from "./routes/company.route.js";
import candidateRouter from "./routes/candidate.route.js";
import candidateHistoryRouter from "./routes/candidateH.route.js";
import mongoose from "mongoose";
import * as countriesList from "countries-list";
import countryStateCity from "country-state-city";

// var MONGOURI =
// "mongodb+srv://Madhuri9988:qkqCkGvAjbIv4Sv7@cluster0.stqyao7.mongodb.net/Xperian";
// "mongodb+srv://Madhurilenka:Madhuri1998@cluster0.zcysdvm.mongodb.net/group62Database?retryWrites=true&w=majority";

const app = express();
// const multer = require("multer")
app.use(express.json());
// app.use(multer().any());
dotenv.config();
mongoose
  .connect("mongodb://localhost:27017/Xperian", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("mongoose connection error", err));

app.use("/", hrrouter);
app.use("/", adminrouter);
app.use("/", comrouter);
app.use("/", candidateRouter);
app.use("/", candidateHistoryRouter);

// Endpoint to get states of a specific country
// app.get("/countries", (req, res) => {
//   const countries = countryStateCity
//     .getAllCountries()
//     .map((country) => country.name);
//   res.json(countries);
// });

// // Endpoint to get states of a specific country
// app.get("/states/:country", (req, res) => {
//   const country = req.params.country;
//   const states = countryStateCity
//     .getStatesByCountry(country)
//     .map((state) => state.name);

//   if (states.length === 0) {
//     return res
//       .status(404)
//       .json({ error: "Country not found or has no states" });
//   }

//   res.json(states);
// });

// Endpoint to get cities of a specific country and state
// app.get("/cities/:country/:state", (req, res) => {
//   const { country, state } = req.params;
//   const cities =
//     countryStateCity.getStatesByCountry(country).find((s) => s.name === state)
//       ?.cities || [];

//   if (cities.length === 0) {
//     return res
//       .status(404)
//       .json({ error: "Country, state, or cities not found" });
//   }

//   res.json(cities);
// });

app.use((req, res) => {
  var err = new Error("Not Found");
  err.status = 404;
  return res.status(404).send({ status: "404 ", msg: "Path not found" });
});
app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});
