/**
 * The API will filter this list and then pick ONE of
 * the matching entries at random.
 */
module.exports = [
  // ------------- Cloud Computing -------------
  {
    technology: "Cloud Computing",
    role: "System Administrator",
    environment: "Cloud Infrastructure",
    challenge: "Virtual machines fail to scale during high traffic.",
    incident:  "Auto‑scaling group misconfigured.",
    troubleshooting: "Review scaling policies; test with simulated load."
  },
  {
    technology: "Cloud Computing",
    role: "Software Engineer",
    environment: "Enterprise Network",
    challenge: "App deployment cannot reach cloud DB.",
    incident:  "Security‑group rules block the connection.",
    troubleshooting: "Open the required port/IP range in the security group."
  },

  // ------------- DevOps -------------
  {
    technology: "DevOps",
    role: "Software Engineer",
    environment: "Cloud Infrastructure",
    challenge: "CI pipeline fails during the test stage.",
    incident:  "Environment variables missing in the CI runner.",
    troubleshooting: "Add the variables to CI settings and retry."
  },
  {
    technology: "DevOps",
    role: "System Administrator",
    environment: "On-Prem Data Center",
    challenge: "Automated deployment scripts randomly fail.",
    incident:  "Permission errors on deployment directories.",
    troubleshooting: "Audit permissions; grant correct access to the deploy user."
  },

  // ------------- Cybersecurity -------------
  {
    technology: "Cybersecurity",
    role: "Security Analyst",
    environment: "On-Prem Data Center",
    challenge: "Unusual outbound traffic detected.",
    incident:  "Possible malware infection on internal servers.",
    troubleshooting: "Isolate affected hosts and run threat scans."
  },
  {
    technology: "Cybersecurity",
    role: "System Administrator",
    environment: "Enterprise Network",
    challenge: "Phishing emails bypass spam filters.",
    incident:  "Filter rules outdated.",
    troubleshooting: "Update filter definitions and run user‑awareness training."
  }
];
