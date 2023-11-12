const { getUser } = require("../services/auth");
const Opportunity = require("../models/opportunity");
const mongoose = require("mongoose");

async function handleOpportunityCreation(req, res) {
  try {
    const { opportunityName, description, link } = req.body;

    const newOpportunity = await Opportunity.create({
      opportunityName,
      description,
      link,
      createdBy: req.user.id,
    });

    return res.status(201).json(newOpportunity);
  } catch (error) {
    console.error('Error creating opportunity:', error);
    return res.status(500).json({ error: 'Failed to create opportunity' });
  }
}

async function handleOpportunityDeletion(req, res) {
  const opportunityId = req.params.id;

  try {
    await Opportunity.findByIdAndDelete(opportunityId);
    res.status(204).send("Opportunity deleted successfully");
  } catch (error) {
    console.error('Error deleting opportunity:', error);
    res.status(500).json({ error: 'Failed to delete opportunity' });
  }
}

async function handleOpportunityUpdation(req, res) {
  const opportunityId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedOpportunity = await Opportunity.findByIdAndUpdate(opportunityId, updatedData, { new: true });

    if (!updatedOpportunity) {
      return res.status(404).json({ error: 'Opportunity not found' });
    }

    res.status(200).json(updatedOpportunity);
  } catch (error) {
    console.error('Error updating opportunity:', error);
    res.status(500).json({ error: 'Failed to update opportunity' });
  }
}

async function getOpportunityById(req, res) {
  const opportunityId = req.params.id;

  try {
    const opportunity = await Opportunity.findById(opportunityId);

    if (!opportunity) {
      return res.status(404).json({ error: 'Opportunity not found' });
    }

    res.status(200).json(opportunity);
  } catch (error) {
    console.error('Error retrieving opportunity:', error);
    res.status(500).json({ error: 'Failed to retrieve opportunity' });
  }
}

module.exports = {
  handleOpportunityCreation,
  handleOpportunityDeletion,
  handleOpportunityUpdation,
  getOpportunityById,
};
