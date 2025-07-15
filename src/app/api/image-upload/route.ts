import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { uploadToLocal } from "@/lib/local-upload";

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
  timeout: 30000, // 30 seconds timeout
});

const USE_LOCAL_STORAGE = false; // Toggle this for local development
const FALLBACK_TO_LOCAL = true; // Fallback to local storage if Cloudinary fails

export async function POST(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let result;
    let usedLocalStorage = false;
    
    if (USE_LOCAL_STORAGE) {
      // Use local storage for development
      result = await uploadToLocal(buffer, file.name, 'images');
      usedLocalStorage = true;
    } else {
      try {
        // Use Cloudinary for production
        const base64 = buffer.toString('base64');
        const dataURI = `data:${file.type};base64,${base64}`;
        
        result = await cloudinary.uploader.upload(dataURI, {
          folder: 'next-cloudinary-uploads',
          resource_type: 'auto',
          timeout: 30000, // 30 seconds timeout
        });
        usedLocalStorage = false;
      } catch (cloudinaryError: any) {
        console.log('Cloudinary upload failed, falling back to local storage:', cloudinaryError);
        if (FALLBACK_TO_LOCAL) {
          // Fallback to local storage
          result = await uploadToLocal(buffer, file.name, 'images');
          usedLocalStorage = true;
        } else {
          throw cloudinaryError;
        }
      }
    }

    return NextResponse.json(
      {
        publicId: result.public_id,
        url: result.secure_url,
        storage: usedLocalStorage ? 'local' : 'cloudinary'
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log("Upload image failed", error);
    return NextResponse.json({ error: error.message || "Upload image failed" }, { status: 500 });
  }
}
