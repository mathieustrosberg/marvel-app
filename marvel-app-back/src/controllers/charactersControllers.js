const axios = require("axios");

exports.getAllCharacters = async (req, res) => {
  try {
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    let name = "";

    if (req.query.name) {
      name = req.query.name;
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCharacterById = (req, res) => {
  res.send(`Fetching character with characterId ${req.params.characterId}`);
};
