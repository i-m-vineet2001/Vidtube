// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";
// import { PrismaClient } from "@/generated/prisma";
// import { v2 as cloudinary } from "cloudinary";
// import { uploadToLocal } from "@/lib/local-upload";

// const prisma = new PrismaClient();

// // Configure cloudinary
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const USE_LOCAL_STORAGE = true; // Toggle this for local development

// export async function POST(request: NextRequest) {
//   try {
//     //todo to check user

//     if (
//       !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
//       !process.env.CLOUDINARY_API_KEY ||
//       !process.env.CLOUDINARY_API_SECRET
//     ) {
//       return NextResponse.json(
//         { error: "Cloudinary credentials not found" },
//         { status: 500 }
//       );
//     }

//     const formData = await request.formData();
//     const file = formData.get("file") as File | null;
//     const title = formData.get("title") as string;
//     const description = formData.get("description") as string;
//     const originalSize = formData.get("originalSize") as string;

//     if (!file) {
//       return NextResponse.json({ error: "File not found" }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     let result;
    
//     if (USE_LOCAL_STORAGE) {
//       // Use local storage for development
//       result = await uploadToLocal(buffer, file.name, 'videos');
//     } else {
//       // Use Cloudinary for production
//       const base64 = buffer.toString('base64');
//       const dataURI = `data:${file.type};base64,${base64}`;
      
//       result = await cloudinary.uploader.upload(dataURI, {
//         resource_type: 'video',
//         folder: 'video-uploads',
//         eager: [
//           { quality: 'auto', fetch_format: 'mp4' }
//         ],
//         eager_async: true,
//       });
//     }
//     const video = await prisma.video.create({
//       data: {
//         title,
//         description,
//         publicId: result.public_id,
//         originalSize: originalSize,
//         compressedSize: String(result.bytes),
//         duration: result.duration || 0,
//       },
//     });
//     return NextResponse.json(video);
//   } catch (error) {
//     console.log("UPload video failed", error);
//     return NextResponse.json({ error: "UPload video failed" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }


// new code
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs"; // ensure Node.js runtime for Buffer

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const originalSize = formData.get("originalSize") as string;

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 400 });
    }

    // Read file as buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert buffer to base64 Data URI
    const base64 = buffer.toString("base64");
    const dataURI = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "video",
      folder: "video-uploads",
      eager: [{ quality: "auto", fetch_format: "mp4" }],
      eager_async: true,
    });

    console.log("Cloudinary upload result:", result);

    const video = await prisma.video.create({
      data: {
        title,
        description,
        publicId: result.public_id,
        originalSize: originalSize,
        compressedSize: String(result.bytes),
        duration: result.duration || 0,
        // url: result.secure_url,  store the full URL for playback
      },
    });

    return NextResponse.json(video);
  } catch (error) {
    console.log("Upload video failed", error);
    return NextResponse.json({ error: "Upload video failed" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
