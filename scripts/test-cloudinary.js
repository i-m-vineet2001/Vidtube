const { v2: cloudinary } = require('cloudinary');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function testCloudinary() {
  console.log('Testing Cloudinary connection...');
  console.log('Cloud Name:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  console.log('API Key:', process.env.CLOUDINARY_API_KEY ? 'Set (hidden)' : 'Not set');
  console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? 'Set (hidden)' : 'Not set');
  
  try {
    // Test connection by getting account details
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary connection successful!');
    console.log('Response:', result);
    
    // Try to get usage details
    const usage = await cloudinary.api.usage();
    console.log('\nAccount usage:');
    console.log('- Plan:', usage.plan);
    console.log('- Credits used:', usage.credits.usage);
    console.log('- Credits limit:', usage.credits.limit);
    
  } catch (error) {
    console.error('❌ Cloudinary connection failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes('401')) {
      console.error('\nAuthentication failed. Please check:');
      console.error('1. API Key and Secret are correct');
      console.error('2. Cloud name is correct');
    } else if (error.message.includes('timeout')) {
      console.error('\nConnection timeout. Please check:');
      console.error('1. Internet connectivity');
      console.error('2. Firewall settings');
      console.error('3. Proxy configuration');
    }
  }
}

testCloudinary();
