// Import mongoose to define schema and model
import mongoose from "mongoose";

// Destructure Schema constructor from mongoose
const { Schema } = mongoose;

// Define a new schema for a Person
const personSchema = new Schema({
  // Name is a required string field
  name: {
    type: String,
    required: true,
  },

  // Age is an optional number field
  age: Number,

  // favoriteFoods is an array of strings
  favoriteFoods: [String],
});

// Export the model so it can be used in other files like index.js
// The first argument 'Person' is the name of the model (collection will be 'people')
// The second argument is the schema we just created
const Person = mongoose.model("Person", personSchema);
export default Person;
