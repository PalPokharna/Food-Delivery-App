import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import foodModel from "../models/foodModel.js";

const sampleFoodData = [
  // Salad category
  {
    name: "Greek salad",
    description: "Fresh and healthy Greek salad with feta cheese",
    price: 120,
    category: "Salad",
    image: "food_1.jpg",
  },
  {
    name: "Veg salad",
    description: "Fresh vegetable salad with seasonal produce",
    price: 180,
    category: "Salad",
    image: "food_2.jpg",
  },
  {
    name: "Clover Salad",
    description: "Unique clover-themed salad with fresh ingredients",
    price: 160,
    category: "Salad",
    image: "food_3.jpg",
  },
  {
    name: "Chicken Salad",
    description: "Protein-rich chicken salad with mixed greens",
    price: 240,
    category: "Salad",
    image: "food_4.jpg",
  },

  // Rolls category
  {
    name: "Lasagna Rolls",
    description: "Delicious lasagna rolls with rich tomato sauce",
    price: 140,
    category: "Rolls",
    image: "food_5.jpg",
  },
  {
    name: "Peri Peri Rolls",
    description: "Spicy peri peri flavored rolls with special sauce",
    price: 120,
    category: "Rolls",
    image: "food_6.jpg",
  },
  {
    name: "Chicken Rolls",
    description: "Savory chicken rolls with herbs and spices",
    price: 200,
    category: "Rolls",
    image: "food_7.jpg",
  },
  {
    name: "Veg Rolls",
    description: "Crispy vegetable rolls with special sauce",
    price: 150,
    category: "Rolls",
    image: "food_8.jpg",
  },

  // Deserts category
  {
    name: "Ripple Ice Cream",
    description: "Creamy ripple ice cream with chocolate swirls",
    price: 140,
    category: "Deserts",
    image: "food_9.jpg",
  },
  {
    name: "Fruit Ice Cream",
    description: "Refreshing fruit flavored ice cream with real fruit chunks",
    price: 220,
    category: "Deserts",
    image: "food_10.jpg",
  },
  {
    name: "Jar Ice Cream",
    description: "Specialty ice cream served in a convenient jar",
    price: 100,
    category: "Deserts",
    image: "food_11.jpg",
  },
  {
    name: "Vanilla Ice Cream",
    description: "Classic vanilla ice cream with premium ingredients",
    price: 120,
    category: "Deserts",
    image: "food_12.jpg",
  },

  // Sandwich category
  {
    name: "Chicken Sandwich",
    description: "Grilled chicken sandwich with fresh vegetables",
    price: 180,
    category: "Sandwich",
    image: "food_13.jpg",
  },
  {
    name: "Vegan Sandwich",
    description: "Plant-based sandwich with avocado and vegetables",
    price: 180,
    category: "Sandwich",
    image: "food_14.jpg",
  },
  {
    name: "Grilled Sandwich",
    description: "Classic grilled sandwich with melted cheese",
    price: 160,
    category: "Sandwich",
    image: "food_15.jpg",
  },
  {
    name: "Bread Sandwich",
    description: "Traditional bread sandwich with premium fillings",
    price: 240,
    category: "Sandwich",
    image: "food_16.jpg",
  },

  // Cake category
  {
    name: "Cup Cake",
    description: "Delightful individual cupcakes with frosting",
    price: 140,
    category: "Cake",
    image: "food_17.jpg",
  },
  {
    name: "Vegan Cake",
    description: "Plant-based cake with sustainable ingredients",
    price: 120,
    category: "Cake",
    image: "food_18.jpg",
  },
  {
    name: "Butterscotch Cake",
    description: "Sweet butterscotch flavored cake with caramel",
    price: 220,
    category: "Cake",
    image: "food_19.jpg",
  },
  {
    name: "Chocolate Cake",
    description: "Rich chocolate cake with premium cocoa",
    price: 200,
    category: "Cake",
    image: "food_20.jpg",
  },

  // Pure Veg category
  {
    name: "Garlic Mushroom",
    description: "Sautéed garlic mushrooms with fresh herbs",
    price: 140,
    category: "Pure Veg",
    image: "food_21.jpg",
  },
  {
    name: "Fried Cauliflower",
    description: "Crispy fried cauliflower with special spices",
    price: 220,
    category: "Pure Veg",
    image: "food_22.jpg",
  },
  {
    name: "Mix Veg Pulao",
    description: "Aromatic rice cooked with mixed vegetables",
    price: 100,
    category: "Pure Veg",
    image: "food_23.jpg",
  },
  {
    name: "Rice Zucchini",
    description: "Rice with sautéed zucchini and herbs",
    price: 120,
    category: "Pure Veg",
    image: "food_24.jpg",
  },

  // Additional Pasta items
  {
    name: "Cheese Pasta",
    description: "Creamy pasta with premium cheese blend",
    price: 180,
    category: "Pasta",
    image: "food_25.jpg",
  },
  {
    name: "Tomato Pasta",
    description: "Classic pasta with rich tomato sauce",
    price: 160,
    category: "Pasta",
    image: "food_26.jpg",
  },
  {
    name: "Creamy Pasta",
    description: "Ultra creamy pasta with white sauce",
    price: 180,
    category: "Pasta",
    image: "food_27.jpg",
  },
  {
    name: "Chicken Pasta",
    description: "Pasta with tender chicken and herbs",
    price: 240,
    category: "Pasta",
    image: "food_28.jpg",
  },

  // Noodles category
  {
    name: "Butter Noodles",
    description: "Noodles tossed in butter and herbs",
    price: 140,
    category: "Noodles",
    image: "food_29.jpg",
  },
  {
    name: "Veg Noodles",
    description: "Stir-fried noodles with mixed vegetables",
    price: 120,
    category: "Noodles",
    image: "food_30.jpg",
  },
  {
    name: "Somen Noodles",
    description: "Traditional thin Japanese noodles",
    price: 200,
    category: "Noodles",
    image: "food_31.jpg",
  },
  {
    name: "Cooked Noodles",
    description: "Perfectly cooked noodles with special sauce",
    price: 150,
    category: "Noodles",
    image: "food_32.jpg",
  },
];

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await foodModel.deleteMany({});
    console.log("Cleared existing food items");

    // Insert new data
    const result = await foodModel.insertMany(sampleFoodData);
    console.log(`Successfully added ${result.length} food items`);

    // Verify the data
    const count = await foodModel.countDocuments();
    console.log(`Total food items in database: ${count}`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

// Run the seed function
seedData();
