import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import getCloudinaryUrl from "@/lib/cloudinary";

const heroSrc = getCloudinaryUrl("hero_gqdsnr");

const images = [
  {
    src: getCloudinaryUrl("photo-1502672260266-1c1ef2d93688_v8c9dr"),
    alt: "Warm wooden interior living space",
  },
  {
    src: getCloudinaryUrl("photo-1507089947368-19c1da9775ae_iireal"),
    alt: "Modern kitchen with island lighting",
  },
  {
    src: getCloudinaryUrl("photo-1499955085172-a104c9463ece_mtknfq"),
    alt: "Cozy living room with natural light",
  },
  {
    src: getCloudinaryUrl("premium_photo-1661964178554-cb583b357dd7_ufhqvx"),
    alt: "Minimal bedroom with white linens",
  },
  {
    src: getCloudinaryUrl("home-2486092_1280_shsr2f"),
    alt: "Contemporary bathroom marble details",
  },
  {
    src: getCloudinaryUrl("photo-1632583824020-937ae9564495_rlpz58"),
    alt: "Dining with industrial pendant lights",
  },
  {
    src: getCloudinaryUrl("premium_photo-1678229915680-edef57d8c234_bscz3s"),
    alt: "Scandinavian staircase minimal style",
  },
  {
    src: getCloudinaryUrl("photo-1600585154526-990dced4db0d_d03c1e"),
    alt: "Modern home exterior at sunset",
  },
];

export const metadata = {
  title: "Our Gallery | Maria Concepts",
};

export default function MyApp() {
  return (
    <>
      <Hero title={"Our Gallery"} src={heroSrc} />
      <main className="px-4 xl:px-8 py-12 mx-auto text-left">
        <Gallery images={images} />
      </main>

      <ImageView />
    </>
  );
}
