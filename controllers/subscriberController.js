const Subscriber = require('../models/Subscriber');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Prevent duplicate subscriptions
    const existing = await Subscriber.findOne({ email });
    if (!existing) {
      await Subscriber.create({ email });
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.render('admin/viewSubscribers', { subscribers }); // optional if you build this view
  } catch (error) {
    res.status(500).send('Error fetching subscribers');
  }
};
