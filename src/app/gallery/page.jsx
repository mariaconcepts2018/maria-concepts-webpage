import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import getCloudinaryUrl from "@/lib/cloudinary";
import FullscreenImageViewer from "@/components/FullscrenImageViewer";

const imgSmall = getCloudinaryUrl("OUMK7387_ztxsix", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("OUMK7387_ztxsix");

const images = [
  {
    src: getCloudinaryUrl("QVLN1248_rlp2zl"),
    alt: "Warm and elegant vanity unit with storage",
  },
  {
    src: getCloudinaryUrl("KYXV5019_cihadt"),
    alt: "Modern bedroom",
  },
  {
    src: getCloudinaryUrl("XVMU2749_pjrbgp"),
    alt: "False ceiling",
  },
  {
    src: getCloudinaryUrl("QLGZ0787_bgtdvn"),
    alt: "Comfy sitout",
  },
  {
    src: getCloudinaryUrl("WZXY3953_zcp5my"),
    alt: "Building Exteriors",
  },
  {
    src: getCloudinaryUrl("HYSM1733_fae8ai"),
    alt: "Glass panneling",
  },
  {
    src: getCloudinaryUrl("PJZQ6281_foshke"),
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
  {
    src: getCloudinaryUrl("FBZF7418_ya2fkd"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("PDTH8875_m3xhhg"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("OUMK7387_ztxsix"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("TSQB8131_nzucio"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("UYRI1358_eguvgf"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("TASN5894_xb1uii"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("RNRA9126_az04xd"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("UXDG6435_gxw2o9"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("PGSQ2308_jucej1"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("GWHK5413_dj96ep"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("ESFO9150_vzwysq"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("IMG_4440_v1crnt"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("THMA9754_drvzux"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("BJPH7884_aubcfb"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("BRJY9743_tyhbpr"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("AFPP3467_y5v92w"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("ASYE8945_fgiky2"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("HIZV7179_hdpnpa"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("IMG_4439_qjxtoz"),
    alt: "3d Visualization",
  },

  {
    src: getCloudinaryUrl("SIGL5751_tqt8js"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("DKQE4292_izcrgl"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("NKMS3466_qnggci"),
    alt: "Grotto",
  },
  {
    src: getCloudinaryUrl("QWYG0595_hilcad"),
    alt: "3d Visualization",
  },
  {
    src: getCloudinaryUrl("BPII9215_ped48s"),
    alt: "Kids bedroom",
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:w-3/4 md:mx-auto gap-4 p-4">
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
