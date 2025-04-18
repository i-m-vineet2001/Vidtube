import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//CONFIG CLOUDNAIRY
 cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_KEY,
   api_secret:process.env.CLOUDINARY_SECRET,
 });

 //uplod 
 const uploadOnCloudinary =async(localFilePath)=>{
   try {
    if(!localFilePath) return null
   const response = cloudinary.uploader.upload(
    localFilePath,{
        resource_type: "auto",
    }
   )
   console.log("File uploaded on cloudinary", response.url);
   //once the file is uploade on cloudinary, delete the local file
   fs.unlink(localFilePath)
   return response
   } catch (error) {
    fs.unlink(localFilePath) 
    return null
   }
 }
 export{uploadOnCloudinary}