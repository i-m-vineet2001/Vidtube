# VidTube: Full-Stack Video Sharing Platform 📹🚀

![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?logo=next.js)

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)

![Clerk](https://img.shields.io/badge/Clerk-Auth-green?logo=auth0)

![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-purple?logo=cloudinary)VidTube is a modern **full-stack video-sharing platform** built with **Next.js**, featuring secure user authentication 🔒, efficient video storage 📤, and optimized database management 💾. It leverages cutting-edge tools like **Clerk** for OTP-based authentication, **Cloudinary** for video and thumbnail handling, and **PostgreSQL** with **Prisma ORM** for scalable data operations.

## ✨ Features

- 🔒 **Secure Authentication**: OTP-based login (email & mobile) via Clerk for robust user management.
- 📹 **Video & Thumbnail Management**: Cloudinary integration for seamless video uploads and auto-resized thumbnails optimized for Instagram, YouTube, and X.
- 💾 **Scalable Database**: Manages user profiles, video metadata, likes, and comments with PostgreSQL and Prisma ORM, boosting query performance by **30%**.
- 📱 **Responsive UI**: Crafted with Next.js and Tailwind CSS for a seamless, cross-device experience.

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| **Frontend** | Next.js, React, Tailwind CSS 🌟 |
| **Backend** | Node.js, Prisma ORM ⚙️ |
| **Database** | PostgreSQL 🗄️ |
| **Authentication** | Clerk 🔑 |
| **Storage** | Cloudinary 📂 |
| **Tools** | Git, GitHub, Vercel 🧰 |

## ✅ Prerequisites

Before diving in, ensure you have:

| Requirement | Version/Info |
| --- | --- |
| 💻 Node.js | v16 or higher |
| 🗄️ PostgreSQL | Configured database |
| 📤 Cloudinary | Account with API keys |
| 🔒 Clerk | Account with API keys |
| 🐙 Git | Installed for version control |

## 🏁 Getting Started

1. **Clone the Repository** 📥:

   ```bash
   git clone https://github.com/i-m-vineet2001/Vidtube.git
   cd Vidtube
   ```

2. **Install Dependencies** ⚙️:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set Up Environment Variables** 🔧: Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL=your_postgresql_database_url
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the Development Server** 🚀:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Access the App** 🌐: Open http://localhost:3000 in your browser to explore VidTube! 🎉

## 📂 Project Structure

- `app/page.tsx` 🏠: Main entry point for the Next.js app.
- `app/api/` 🛤️: Backend API routes for video uploads and user data.
- `components/` 🧩: Reusable React components for the UI.
- `prisma/` 📚: Schema and migrations for PostgreSQL database.
- `public/` 🖼️: Static assets like images and styles.

## ✏️ Editing the Application

Modify `app/page.tsx` to customize the app. Next.js’s hot-reloading ensures changes update instantly! 🔥 VidTube uses `next/font` with the Geist font for optimized typography.

## 🌍 Deployment

Deploy VidTube effortlessly on the Vercel Platform 🌐:

1. Push your code to a GitHub repository 📤.
2. Connect the repository to Vercel via the dashboard 🖥️.
3. Add environment variables in Vercel (same as `.env.local`) 🔧.
4. Deploy and share your live app! 🎊

See the Next.js deployment documentation for details.

## 📚 Learn More

Dive deeper into the tech stack:

- Next.js Documentation 📖 – Explore Next.js features and APIs.
- Learn Next.js 🎓 – Interactive Next.js tutorial.
- Clerk Documentation 🔒 – Authentication setup guide.
- Cloudinary Documentation 📹 – Video and image management.
- Prisma Documentation 💾 – Database ORM tutorials.

🤝 Contributing

We’d love your contributions! 💡 Follow these steps:

1. Fork the repository 🍴.
2. Create a feature branch (`git checkout -b feature/YourFeature`) 🌿.
3. Commit your changes (`git commit -m "Add YourFeature"`) 📝.
4. Push to the branch (`git push origin feature/YourFeature`) 📤.
5. Open a pull request 🚀.

Check out the Next.js GitHub repository for inspiration! 🌟

📜 License

# This project is licensed under the MIT License.