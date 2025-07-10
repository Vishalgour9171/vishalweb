const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Client = require('../models/Client');
const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

// Landing Page
router.get('/', async (req, res) => {
  const projects = await Project.find();
  const clients = await Client.find();
  res.render('landing', { projects, clients });
});

// Contact Form
router.post('/contact', async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  await Contact.create({ fullName, email, mobile, city });
  res.redirect('/');
});

// Newsletter Subscribe
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  await Subscriber.create({ email });
  res.redirect('/');
});

module.exports = router;
