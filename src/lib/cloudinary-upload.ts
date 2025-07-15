import crypto from 'crypto';

interface UploadOptions {
  file: Buffer;
  filename: string;
  resourceType: 'image' | 'video' | 'raw' | 'auto';
  folder?: string;
  transformation?: any[];
}

interface CloudinaryResponse {
  public_id: string;
  version: number;
  signature: string;
  width?: number;
  height?: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  type: string;
  url: string;
  secure_url: string;
  duration?: number;
  [key: string]: any;
}

export async function uploadToCloudinary(options: UploadOptions): Promise<CloudinaryResponse> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary credentials not configured');
  }

  const timestamp = Math.round(Date.now() / 1000);
  const params: any = {
    timestamp: timestamp,
    folder: options.folder || 'uploads',
  };

  // Skip transformation for now to simplify

  // Generate signature
  const paramString = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');
  
  const signature = crypto
    .createHash('sha256')
    .update(paramString + apiSecret)
    .digest('hex');

  // Create form data
  const formData = new FormData();
  formData.append('file', new Blob([options.file]), options.filename);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp.toString());
  formData.append('signature', signature);
  formData.append('folder', params.folder);
  
  if (params.transformation) {
    formData.append('transformation', params.transformation);
  }

  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${options.resourceType}/upload`;

  try {
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Cloudinary upload failed: ${error}`);
    }

    const result = await response.json();
    return result as CloudinaryResponse;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}
