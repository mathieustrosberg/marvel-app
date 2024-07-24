const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersControllers");

router.get("/", charactersController.getAllCharacters);
router.get("/:characterId", charactersController.getCharacterById);

module.exports = router;
