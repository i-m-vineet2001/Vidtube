const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function testConnection() {
  console.log('Testing database connection...');
  console.log('Database URL:', process.env.DATABASE_URL ? 'Set (hidden)' : 'Not set');
  
  try {
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    
    // Try to count videos
    const videoCount = await prisma.video.count();
    console.log(`Number of videos in database: ${videoCount}`);
    
  } catch (error) {
    console.error('❌ Database connection failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes("Can't reach database server")) {
      console.error('\nPossible issues:');
      console.error('1. Database server is down');
      console.error('2. Network connectivity issues');
      console.error('3. Incorrect connection string');
      console.error('4. Firewall blocking the connection');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Load environment variables
require('dotenv').config();
testConnection();
