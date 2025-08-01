VidTube: Full-Stack Video Sharing Platform

VidTube is a full-stack video-sharing platform built with Next.js, featuring secure user authentication, efficient video storage, and optimized database management. It leverages modern technologies like Clerk for OTP-based authentication, Cloudinary for video and thumbnail management, and PostgreSQL with Prisma ORM for scalable data handling.
Features

Secure Authentication: Implements OTP-based login (email and mobile) using Clerk for robust user management.
Video Storage and Thumbnails: Integrates Cloudinary for seamless video uploads and automatic thumbnail resizing optimized for platforms like Instagram, YouTube, and X.
Scalable Database: Manages user profiles, video metadata, likes, and comments with PostgreSQL and Prisma ORM, achieving 30% faster query performance.
Responsive Design: Built with Next.js and Tailwind CSS for a user-friendly, cross-device experience.

Tech Stack

Frontend: Next.js, React, Tailwind CSS
Backend: Node.js, Prisma ORM
Database: PostgreSQL
Authentication: Clerk
Storage: Cloudinary
Tools: Git, GitHub, Vercel

Prerequisites
Before setting up the project, ensure you have:

Node.js (v16 or higher)
PostgreSQL database
Cloudinary account with API keys
Clerk account with API keys for authentication
Git installed

Getting Started

Clone the Repository:
git clone https://github.com/i-m-vineet2001/Vidtube.git
cd Vidtube


Install Dependencies:
npm install
# or
yarn install
# or
pnpm install
# or
bun install


Set Up Environment Variables:Create a .env.local file in the root directory and add the following:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgresql_database_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


Run the Development Server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Access the App:Open http://localhost:3000 in your browser to view the application.


Project Structure

app/page.tsx: Main entry point for the Next.js application.
app/api/: Backend API routes for handling video uploads and user data.
components/: Reusable React components for the UI.
prisma/: Schema and migrations for PostgreSQL database.
public/: Static assets like images and styles.

Editing the Application
To customize the app, start by modifying app/page.tsx. The page auto-updates as you edit, thanks to Next.js’s hot-reloading feature. Use next/font (Geist font) for optimized font loading.
Deployment
Deploy VidTube easily on the Vercel Platform for seamless hosting:

Push your code to a GitHub repository.
Connect the repository to Vercel via the Vercel dashboard.
Configure environment variables in Vercel (same as .env.local).
Deploy and access your live application.

For more details, refer to the Next.js deployment documentation.
Learn More
Explore these resources to deepen your understanding of the technologies used:

Next.js Documentation – Learn about Next.js features and APIs.
Learn Next.js – Interactive Next.js tutorial.
Clerk Documentation – Guide to authentication with Clerk.
Cloudinary Documentation – Video and image management.
Prisma Documentation – Database ORM setup and queries.

Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m "Add YourFeature").
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

Check out the Next.js GitHub repository for inspiration and feedback.
License
This project is licensed under the MIT License.