const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = path.join(__dirname, "data", "quran.json");
// get all shura
app.get("/api/surahs", (req, res) => {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return res.status(404).json({ message: "No file available" });
    }

    const rawData = fs.readFileSync(FILE_PATH, "utf-8");
    const surahs = JSON.parse(rawData);

    const surahList = surahs.map((s) => ({
      id: s.number,
      name: s.name,
      transliteration: s.englishName,
      translation: s.englishNameTranslation,
      total_verses: s.ayahs.length,
    }));

    res.json(surahList);
  } catch (error) {
    console.error("Error loading surah list:", error);
    res.status(500).json({ message: "No data available" });
  }
});
// dynamic shura use id
app.get("/api/surah/:id", (req, res) => {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return res.status(404).json({ message: "no file " });
    }

    const rawData = fs.readFileSync(FILE_PATH, "utf-8");
    const surahs = JSON.parse(rawData);
    const surah = surahs.find((s) => s.number === parseInt(req.params.id));

    if (!surah) {
      return res.status(404).json({ message: "server error" });
    }

    res.json(surah);
  } catch (error) {
    console.error("Error loading surah details:", error);
    res.status(500).json({ message: "server error " });
  }
});
// test route
app.get("/", (req, res) => {
  res.send("Quran Server is running ");
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
