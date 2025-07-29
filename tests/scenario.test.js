// tests/scenario.test.js - To test the API

// Import dependencies
const request = require('supertest');
const app = require('../src/app');
const { getRandomScenario } = require('../src/scenarioService');

// test the scenario generator in isolation
describe('Scenario Generator Unit Tests', () => {
  it('should return a scenario with default inputs', () => {
    const result = getRandomScenario({});
    expect(result).toHaveProperty('inputs');
    expect(result).toHaveProperty('scenario');
    expect(result.scenario).toHaveProperty('challenge');
  });

  it('should filter by technology', () => {
    const result = getRandomScenario({ technology: 'DevOps' });
    expect(result.inputs.technology).toBe('DevOps');
  });
});

// hit the live Express endpoint
describe('API Integration Tests', () => {
  it('should return 200 OK and valid scenario', async () => {
    const res = await request(app).get('/api/scenario');
    // HTTP status and JSON structure
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('scenario');
    expect(res.body.scenario).toHaveProperty('challenge');
  });

  // Endpoint handle query parameters
  it('should filter scenario using query parameters', async () => {
    const res = await request(app)
      .get('/api/scenario')
      .query({ technology: 'Cybersecurity' });
      // API echoes the filter in its "inputs" section
    expect(res.statusCode).toBe(200);
    expect(res.body.inputs.technology).toBe('Cybersecurity');
  });
});
