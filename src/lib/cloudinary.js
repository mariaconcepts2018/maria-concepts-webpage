import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const getCloudinaryUrl = (publicId, options = {}) => {
  const { aspect_ratio } = options;
  return cloudinary.url(publicId, {
    transformation: [
      {
        overlay: "text:Arial_80_bold:Maria%20Concepts",
        color: "white",

        gravity: "south_east",
        x: 20,
        y: 20,
        opacity: 80,
      },
    ],
    fetch_format: "auto", // f_auto
    quality: aspect_ratio ? "50" : "auto", // q_auto
    dpr: "auto", // dpr_auto
    width: "auto", // w_auto
    crop: aspect_ratio ? "crop" : "scale", // c_scale
    responsive: true, // auto breakpoints
    ...options,
  });
};

export default getCloudinaryUrl;
