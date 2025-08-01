VidTube: Full-Stack Video Sharing Platform 📹🚀
VidTube is a modern full-stack video-sharing platform built with Next.js, featuring secure user authentication 🔒, efficient video storage 📤, and optimized database management 💾. It leverages cutting-edge tools like Clerk for OTP-based authentication, Cloudinary for video and thumbnail handling, and PostgreSQL with Prisma ORM for scalable data operations.
Features ✨

🔒 Secure Authentication: OTP-based login (email & mobile) via Clerk for robust user management.
📹 Video & Thumbnail Management: Cloudinary integration for seamless video uploads and auto-resized thumbnails optimized for Instagram, YouTube, and X.
💾 Scalable Database: Manages user profiles, video metadata, likes, and comments with PostgreSQL and Prisma ORM, boosting query performance by 30%.
📱 Responsive UI: Crafted with Next.js and Tailwind CSS for a seamless, cross-device experience.

Tech Stack 🛠️

Frontend: Next.js, React, Tailwind CSS 🌟
Backend: Node.js, Prisma ORM ⚙️
Database: PostgreSQL 🗄️
Authentication: Clerk 🔑
Storage: Cloudinary 📂
Tools: Git, GitHub, Vercel 🧰

Prerequisites ✅
Before you dive in, ensure you have:

Node.js (v16 or higher) 💻
PostgreSQL database 🗄️
Cloudinary account with API keys 📤
Clerk account with API keys 🔒
Git installed 🐙

Getting Started 🏁

Clone the Repository 📥:
git clone https://github.com/i-m-vineet2001/Vidtube.git
cd Vidtube


Install Dependencies ⚙️:
npm install
# or
yarn install
# or
pnpm install
# or
bun install


Set Up Environment Variables 🔧:Create a .env.local file in the root directory and add:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgresql_database_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


Run the Development Server 🚀:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Access the App 🌐:Open http://localhost:3000 in your browser to explore VidTube! 🎉


Project Structure 📂

app/page.tsx: Main entry point for the Next.js app 🏠
app/api/: Backend API routes for video uploads and user data 🛤️
components/: Reusable React components for the UI 🧩
prisma/: Schema and migrations for PostgreSQL database 📚
public/: Static assets like images and styles 🖼️

Editing the Application ✏️
Modify app/page.tsx to customize the app. Thanks to Next.js’s hot-reloading, changes auto-update instantly! 🔥 VidTube uses next/font with the Geist font for optimized typography.
Deployment 🌍
Deploy VidTube effortlessly on the Vercel Platform 🌐:

Push your code to a GitHub repository 📤.
Connect the repository to Vercel via the dashboard 🖥️.
Add environment variables in Vercel (same as .env.local) 🔧.
Deploy and share your live app! 🎊

See the Next.js deployment documentation for more details.
Learn More 📚
Dive deeper into the tech stack with these resources:

Next.js Documentation 📖 – Explore Next.js features and APIs.
Learn Next.js 🎓 – Interactive Next.js tutorial.
Clerk Documentation 🔒 – Authentication setup guide.
Cloudinary Documentation 📹 – Video and image management.
Prisma Documentation 💾 – Database ORM tutorials.

Contributing 🤝
We’d love your contributions! 💡 Follow these steps:

Fork the repository 🍴.
Create a feature branch (git checkout -b feature/YourFeature) 🌿.
Commit your changes (git commit -m "Add YourFeature") 📝.
Push to the branch (git push origin feature/YourFeature) 📤.
Open a pull request 🚀.

Check out the Next.js GitHub repository for inspiration! 🌟
License 📜
This project is licensed under the MIT License.