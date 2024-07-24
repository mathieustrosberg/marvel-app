const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const comicsRoutes = require("./src/routes/comicsRoutes");
const charactersRoutes = require("./src/routes/charactersRoutes");

app.use("/comics", comicsRoutes);
app.use("/characters", charactersRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
