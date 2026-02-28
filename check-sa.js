require('dotenv').config({ path: '.env.local' });

const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
if (!raw) { console.log('❌ GOOGLE_SERVICE_ACCOUNT_JSON is MISSING'); process.exit(1); }

const sa = JSON.parse(raw);
sa.private_key = sa.private_key.replace(/\\n/g, '\n');

console.log('Email:    ', sa.client_email);
console.log('Key start:', sa.private_key.substring(0, 50));
console.log('Key end:  ', sa.private_key.slice(-50));
console.log('Has BEGIN:', sa.private_key.includes('-----BEGIN PRIVATE KEY-----'));
console.log('Has END:  ', sa.private_key.includes('-----END PRIVATE KEY-----'));
