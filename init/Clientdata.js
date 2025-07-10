require('dotenv').config(); // ✅ always first
const mongoose = require('mongoose');
const Client = require('../models/Client.js'); // adjust path as needed

console.log("MONGO_URI is:", process.env.MONGO_URL); // ✅ Debug

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

const dummyClients = [
  {
    name: "Rowman Smith",
    designation: "Real Estate Client",
    description: "I was completely satisfied with the high service and final result.",
    image: "Ellipse 28.png"
  },
  {
    name: "Shijana Kayak",
    designation: "Home Buyer",
    description: "Design and execution were outstanding. Highly recommend!",
    image: "Ellipse 29.png"
  },
  {
    name: "John Lopess",
    designation: "Investor",
    description: "Wonderful team to work with. Truly professional and friendly.",
    image: "Ellipse 31.png"
  },
  {
    name: "Merry Freeman",
    designation: "Marketing Manager",
    description: "Great experience with the design team. Loved the outcome.",
    image: "Ellipse 33.png"
  },
  {
    name: "Lucy",
    designation: "Client",
    description: "Beautiful design work and smooth process throughout.",
    image: "Ellipse 35.png"
  }
];

const seedDB = async () => {
  try {
    await Client.deleteMany({});
    await Client.insertMany(dummyClients);
    console.log("✅ Client data inserted");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
