// src/app.js
// Import dependencies
const express = require('express');
const { getRandomScenario } = require('./scenarioService');

// Initialise the Express application
const app = express();
const PORT = 3000;

// The API route
app.get('/api/scenario', (req, res) => {
  const { technology, role, environment } = req.query;
  const response = getRandomScenario({ technology, role, environment });
  res.json(response);
});

// Start listening *only* when this file is run
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
  });
}

module.exports = app;
