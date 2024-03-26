// config/cloudinary.js


export default cloudinary;

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dhdemhxmp', 
  api_key: '985147956967751', 
  api_secret: process.env.CLOUDINARY_SECRET_API
});