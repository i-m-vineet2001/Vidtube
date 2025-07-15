import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


// ✅ This sets the <title> and <meta description>
export const metadata = {
  title: "Welcome to VidTube",
  description: "Upload, manage, and share your videos with ease using VidTube.",
  openGraph: {
    title: "VidTube",
    description: "Upload, manage, and share your videos easily.",
    url: "https://yourdomain.com",
    siteName: "VidTube",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VidTube",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



export default async function LandingPage() {
  const { userId } = await auth();

  // If user is authenticated, redirect to home
  if (userId) {
    redirect("/home");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to VidTube
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Upload, manage, and share your videos with ease using VidTube
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/sign-in"
            className="btn btn-primary px-8 py-3 rounded-lg font-semibold"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="btn btn-secondary px-8 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
