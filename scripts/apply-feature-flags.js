const fs = require('fs');
const path = require('path');

const cfgPath = path.join(__dirname, '..', 'config', 'feature-flags.json');
let cfg = {};
try {
  cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
} catch (e) {
  // if missing or invalid, default to false
  cfg = {};
}

const enabled = !!cfg.enableGpt5MiniForAllClients;
if (enabled) {
  process.env.ENABLE_GPT5_MINI = '1';
}

// Export for runtime imports: const { enableGpt5Mini } = require('./scripts/apply-feature-flags');
module.exports = { enableGpt5Mini: enabled };
