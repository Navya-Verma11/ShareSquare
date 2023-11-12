const express = require("express");
const Collab = require("../models/collab");
const { handleCollabCreation, handleCollabDeletion, handleCollabUpdation } = require("../controllers/collab");

const router = express.Router();

router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    try {
        const collabs = await Collab.find();
        res.status(200).json(collabs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving collabs' });
    }
});

router.post("/create", handleCollabCreation);
router.delete("/delete/:id", handleCollabDeletion);
router.put("/update/:id", handleCollabUpdation);

module.exports = router;
