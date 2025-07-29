# Random IT Scenario Generator API

## Overview
This project is a REST API that generates a random IT-related scenario based on user inputs:
- **Technology** (e.g., Cloud Computing)
- **Role** (e.g., Software Engineer)
- **Environment** (e.g., Cloud Infrastructure)

### Features
- Filters scenarios based on query parameters
- Returns a random challenge, incident, and troubleshooting step
- Built using Javascript, and tested using TDD approach

## Getting Started

```bash
npm install
npm test       # Run tests
npm start      # Start server at http://localhost:3000
```

### API Endpoint

```
GET /api/scenario?technology=DevOps&role=Software%20Engineer
```

### Sample Response

```json
{
  "inputs":{
    "technology":"DevOps",
    "role":"Software Engineer",
    "environment":null
  },
  "scenario":{
    "challenge":"CI pipeline fails during the test stage.",
    "incident":"Environment variables missing in the CI runner.",
    "troubleshooting":"Add the variables to CI settings and retry."
  }
}
```