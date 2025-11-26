import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import getCloudinaryUrl from "@/lib/cloudinary";
import FullscreenImageViewer from "@/components/FullscrenImageViewer";

const imgSmall = getCloudinaryUrl("hero_gqdsnr", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("hero_gqdsnr");

const images = [
  {
    src: getCloudinaryUrl("IMG_0434_kwwia9"),
    alt: "Warm and elegant vanity unit with storage",
  },
  {
    src: getCloudinaryUrl("IMG_0428_jjccni"),
    alt: "Modern bedroom",
  },
  {
    src: getCloudinaryUrl("IMG_0424_k2paog"),
    alt: "Kids bedroom",
  },
  {
    src: getCloudinaryUrl("IMG_0423_mp7ksr"),
    alt: "False ceiling",
  },
  {
    src: getCloudinaryUrl("IMG_0425_mezitu"),
    alt: "Comfy sitout",
  },
  {
    src: getCloudinaryUrl("IMG_0421_dmevf1"),
    alt: "Building Exteriors",
  },
  {
    src: getCloudinaryUrl("IMG_0417_fny8fe"),
    alt: "Glass panneling",
  },
  {
    src: getCloudinaryUrl("IMG_0416_q30xqx"),
    alt: "Balcony",
  },
  {
    src: getCloudinaryUrl("gallery_14_fu2uqp"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("photo-1600585154340-be6161a56a0c_tjam6z"),
    alt: "3d Visualization",
  },
];

export const metadata = {
  title: "Our Gallery | Maria Concepts",
};

export default function MyApp() {
  return (
    <>
      <Hero title={"Our Gallery"} imgLarge={imgLarge} imgSmall={imgSmall} />
      <div className="min-h-screen">
        <h1 className="text-2xl text-center py-6">Portfolio</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-1/2 md:mx-auto gap-4 p-4">
          {images.map((img, i) => (
            <FullscreenImageViewer
              key={i}
              index={i}
              image={img}
              images={images}
            />
          ))}
        </div>
      </div>
    </>
  );
}
