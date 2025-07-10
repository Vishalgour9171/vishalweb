require('dotenv').config();
console.log("MONGO_URL:", process.env.MONGO_URL); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

console.log("MONGO_URL:", process.env.MONGO_URL); // ✅ Add this temporarily
// DB Connection
mongoose.connect(process.env.MONGO_URL);

// Routes
const publicRoutes = require('./routes/listings'); // rename later if needed
const adminRoutes = require('./routes/admin');

app.use('/', publicRoutes);       // Handles landing, contact, subscribe
app.use('/admin', adminRoutes);  // Handles /admin/dashboard, addProject, etc.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
