const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const clientController = require('../controllers/clientController');
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

// Admin Dashboard
router.get('/dashboard', async (req, res) => {
  const contacts = await require('../models/Contact').find();
  const subscribers = await require('../models/Subscriber').find();
  res.render('admin/dashboard', { contacts, subscribers });
});

// Add Project
router.get('/project/add', (req, res) => res.render('admin/addProject'));
router.post('/project/add', upload.single('image'), projectController.addProject);

// Add Client
router.get('/client/add', (req, res) => res.render('admin/addClient'));
router.post('/client/add', upload.single('image'), clientController.addClient);

module.exports = router;
