// Import the 'mongoose' module to interact with MongoDB
import mongoose from "mongoose";

// Import the 'dotenv' module to load environment variables from the .env file
import dotenv from "dotenv";

// Import the Person model (our Mongoose schema)
import Person from "./models/Person.js";

// Configure dotenv to load the .env variables into process.env
dotenv.config();

// Connect to MongoDB using the URI stored in the environment variable MONGO_URI
// We pass options to avoid deprecation warnings
try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected successfully!");
} catch (err) {
  // Catch and log any connection errors
  console.error("MongoDB connection error:", err);
}

// This function demonstrates how to create and save a new person to the database
const createPerson = async () => {
  try {
    // Create a new instance of the Person model
    const person = new Person({
      name: "Elijah", // required field (string)
      age: 30, // number field
      favoriteFoods: ["Rice", "Chicken"], // array of strings
    });

    // Save the new person document to the database
    const data = await person.save();

    // Log the successfully saved document
    console.log("New person saved to DB:", data);
  } catch (err) {
    // Catch and log any error during save operation
    console.error("Error while saving person:", err);
  }
};

// Call the function to create and save a new person
createPerson();
