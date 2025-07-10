const Project = require('../models/Project');

exports.addProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : '';

    await Project.create({ name, description, image });
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log(projects);
    res.render('/landing', { projects }); // optional if you build this view
  } catch (error) {
    res.status(500).send('Error fetching projects');
  }
};
