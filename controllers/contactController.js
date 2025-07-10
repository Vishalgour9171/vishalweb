const Contact = require('../models/Contact');

exports.submitForm = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    await Contact.create({ fullName, email, mobile, city });
    res.redirect('/');
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render('admin/viewContacts', { contacts });
  } catch (error) {
    res.status(500).send('Error fetching contacts');
  }
};
    