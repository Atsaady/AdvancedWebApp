// Defines the way in which the client requests are handled by the application endpoints

const express = require("express");
const router = express.Router();

const termController = require("../controllers/tremController");

//GET
router.get("/terms/:termName", termController.getTermByName);
router.get("/terms/:termNameByLetter", termController.getTermsByFirstLetter); //Need to change to first letter
router.get("/terms", termController.getAllTerms);
router.get("/import", termController.scrape);

//CREATE
router.post("/terms", termController.createTerm);

//UPDATE
router.put("/terms/:termName", termController.updateTerm);

//DELETE
router.delete("/terms/:termName",termController.deleteTerm);
router.delete("/terms/:termNameByLetter",termController.deleteTermsByLetter);


module.exports =router;