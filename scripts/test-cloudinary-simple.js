require('dotenv').config();
const https = require('https');

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

console.log('Testing Cloudinary with direct API call...');
console.log('Cloud Name:', cloudName);
console.log('API Key:', apiKey ? `${apiKey.substring(0, 6)}...` : 'Not set');
console.log('API Secret:', apiSecret ? 'Set (hidden)' : 'Not set');

// Create Basic Auth string
const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

// Test with a simple API call
const options = {
  hostname: 'api.cloudinary.com',
  port: 443,
  path: `/v1_1/${cloudName}/resources/image`,
  method: 'GET',
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 second timeout
};

const req = https.request(options, (res) => {
  console.log(`\nStatus Code: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Cloudinary API is accessible!');
      const parsed = JSON.parse(data);
      console.log(`Total images: ${parsed.resources ? parsed.resources.length : 0}`);
    } else {
      console.error('❌ Cloudinary API error:');
      console.error(data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Connection error:', error.message);
});

req.on('timeout', () => {
  console.error('❌ Request timeout after 10 seconds');
  req.destroy();
});

req.end();
