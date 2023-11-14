const express = require("express");
const Opportunity = require("../models/opportunities");
const { handleOpportunityCreation, handleOpportunityDeletion, handleOpportunityUpdation } = require("../controllers/opportunities");

const router = express.Router();

router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    try {
        const opportunities = await Opportunity.find();
        res.status(200).json(opportunities);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving opportunities' });
    }
});

router.post("/create", handleOpportunityCreation);
router.delete("/delete/:id", handleOpportunityDeletion);
router.put("/update/:id", handleOpportunityUpdation);

module.exports = router;
