const express = require("express");
const router = express.Router();
const comicsController = require("../controllers/comicsControllers");

router.get("/", comicsController.getAllComics);
router.get("/:characterId", comicsController.getComicsByCharacterId);
router.get("/comic/:comicId", comicsController.getComicById);

module.exports = router;
