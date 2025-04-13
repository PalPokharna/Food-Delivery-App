import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://spidy:pal16112@cluster0.lzg5vbu.mongodb.net/food-del",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("Database Connected Successfully"));
  } catch (error) {
    console.error("Database Connection Error:", error);
    throw error;
  }
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
