const Client = require('../models/Client');

exports.addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file ? req.file.filename : '';

    await Client.create({ name, description, designation, image });
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.render('/landing', { clients }); // optional if you build this view
  } catch (error) {
    res.status(500).send('Error fetching clients');
  }
};
