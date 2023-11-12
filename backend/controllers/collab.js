const { getUser } = require("../services/auth");
const Collab = require("../models/collab");
const mongoose = require("mongoose");

async function handleCollabCreation(req, res) {
  try {
    const { description, skills, deadline, contact, comments } = req.body;

    const newCollab = await Collab.create({
      description,
      skills,
      deadline,
      contact,
      comments,
      author: req.user.id,
    });

    return res.status(201).json(newCollab);
  } catch (error) {
    console.error('Error creating collab:', error);
    return res.status(500).json({ error: 'Failed to create collab' });
  }
}

async function handleCollabDeletion(req, res) {
  const collabId = req.params.id;

  try {
    await Collab.findByIdAndDelete(collabId);
    res.status(204).send("Collab deleted successfully");
  } catch (error) {
    console.error('Error deleting collab:', error);
    res.status(500).json({ error: 'Failed to delete collab' });
  }
}

async function handleCollabUpdation(req, res) {
  const collabId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedCollab = await Collab.findByIdAndUpdate(collabId, updatedData, { new: true });

    if (!updatedCollab) {
      return res.status(404).json({ error: 'Collab not found' });
    }

    res.status(200).json(updatedCollab);
  } catch (error) {
    console.error('Error updating collab:', error);
    res.status(500).json({ error: 'Failed to update collab' });
  }
}

async function getCollabById(req, res) {
  const collabId = req.params.id;

  try {
    const collab = await Collab.findById(collabId);

    if (!collab) {
      return res.status(404).json({ error: 'Collab not found' });
    }

    res.status(200).json(collab);
  } catch (error) {
    console.error('Error retrieving collab:', error);
    res.status(500).json({ error: 'Failed to retrieve collab' });
  }
}

module.exports = {
  handleCollabCreation,
  handleCollabDeletion,
  handleCollabUpdation,
  getCollabById,
};
