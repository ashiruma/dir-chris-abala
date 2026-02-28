const fs = require('fs');
const envPath = '.env.local';
const content = fs.readFileSync(envPath, 'utf8');

const lines = content.split('\n');
let jsonLines = [];
let capturing = false;
let otherLines = [];

for (const line of lines) {
  if (line.startsWith('GOOGLE_SERVICE_ACCOUNT_JSON=')) {
    capturing = true;
    jsonLines.push(line.slice('GOOGLE_SERVICE_ACCOUNT_JSON='.length).trim());
    continue;
  }
  if (capturing) {
    if (/^[A-Z_]+=/.test(line) && line.trim() !== '') {
      capturing = false;
      otherLines.push(line);
    } else {
      jsonLines.push(line.trim());
    }
  } else {
    otherLines.push(line);
  }
}

let raw = jsonLines.join(' ').replace(/\s+/g, ' ').trim();

// Fix common issues
if (!raw.startsWith('{')) { raw = '{' + raw; console.log('Fixed: added missing {'); }
if (!raw.endsWith('}'))   { raw = raw + '}'; console.log('Fixed: added missing }'); }

// Try to parse
let parsed;
try {
  parsed = JSON.parse(raw);
} catch(e) {
  console.error('Still invalid JSON:', e.message);
  console.log('First 300 chars:', raw.substring(0, 300));
  process.exit(1);
}

console.log('JSON valid!');
console.log('Email:', parsed.client_email);
console.log('Has private_key:', !!parsed.private_key);

// Rewrite .env.local with JSON on one clean line
const newContent = otherLines.join('\n').trimEnd() + '\nGOOGLE_SERVICE_ACCOUNT_JSON=' + JSON.stringify(parsed) + '\n';
fs.writeFileSync(envPath, newContent, 'utf8');
console.log('.env.local updated successfully!');
