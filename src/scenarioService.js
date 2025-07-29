// src/scenarioService.js
const dataset = require("../data/dataset");

function getRandomScenario({ technology, role, environment } = {}) {
  // Filter by any inputs provided
  let filtered = dataset.filter(item =>
    (!technology  || item.technology  === technology) &&
    (!role        || item.role        === role) &&
    (!environment || item.environment === environment)
  );

  // Fallback – if no matches, use the whole dataset
  if (filtered.length === 0) {
    filtered = dataset;
  }

  // Pick one random scenario from the pool
  const chosen = filtered[Math.floor(Math.random() * filtered.length)];

  // Return the Json response
  return {
    inputs: {
      technology:  technology  ?? null,
      role:        role        ?? null,
      environment: environment ?? null
    },
    scenario: {
      challenge:       chosen.challenge,
      incident:        chosen.incident,
      troubleshooting: chosen.troubleshooting
    }
  };
}

module.exports = { getRandomScenario };