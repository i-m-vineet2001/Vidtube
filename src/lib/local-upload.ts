import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export interface UploadResult {
  public_id: string;
  secure_url: string;
  bytes: number;
  format: string;
  width?: number;
  height?: number;
  duration?: number;
}

export async function uploadToLocal(
  buffer: Buffer,
  filename: string,
  folder: string
): Promise<UploadResult> {
  // Create unique ID
  const uniqueId = crypto.randomBytes(16).toString('hex');
  const ext = path.extname(filename);
  const publicId = `${folder}/${uniqueId}`;
  const fileName = `${uniqueId}${ext}`;
  
  // Create upload directory
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder);
  await fs.mkdir(uploadDir, { recursive: true });
  
  // Save file
  const filePath = path.join(uploadDir, fileName);
  await fs.writeFile(filePath, buffer);
  
  // Return result mimicking Cloudinary response
  return {
    public_id: publicId,
    secure_url: `/uploads/${folder}/${fileName}`,
    bytes: buffer.length,
    format: ext.slice(1),
    duration: 0, // Would need ffprobe or similar for videos
  };
}
