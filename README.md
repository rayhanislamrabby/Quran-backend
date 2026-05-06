Quran Mazid Backend - Express.js API
​This is the backend server for the Quran Mazid application. It serves Surah metadata and Ayah details (including Arabic text, English translations, and audio URLs) to the frontend client.
​🛠 Tech Stack
​Runtime: Node.js
​Framework: Express.js
​Data Format: JSON (serving static Quranic data)
​Middleware: CORS, Body-Parser
​🚀 Getting Started
​1. Prerequisites
​Ensure you have Node.js installed on your system.
​2. Installation
​Navigate to the server directory and install the necessary dependencies: npm install
Running the Server
​To start the server in development mode:npm start
By default, the server will run at: http://localhost:5000.
​📡 API Endpoints
​1. Get All Surahs
​Returns a list of all Surahs with their IDs, names, and translations for the sidebar.
​Endpoint: /api/surahs
​Method: GET
​2. Get Specific Surah Details
​Returns full details of a specific Surah, including all its Ayahs (Arabic text, English text, and audio links).
​Endpoint: /api/surah/:id
​Method: GET
​Example: http://localhost:5000/api/surah/1 (Fetches Surah Al-Fatiha).
​📂 Data Structure
​The backend serves data in the following JSON format to ensure the frontend can render the Arabic script and play audio correctly: {
  "number": 1,
  "englishName": "Al-Faatiha",
  "ayahs": [
    {
      "numberInSurah": 1,
      "text_arabic": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      "text_english": "In the name of God...",
      "audio": "https://cdn.islamic.network/..."
    }
  ]
}

🛡 Security & CORS
​The server is configured to allow requests from the Next.js frontend (typically http://localhost:3000). If you deploy this, make sure to update the CORS origin settings in server.js.






