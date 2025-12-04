import "@/app/globals.css";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";
import Image from "next/image";
export const metadata = {
  title: "Services | Maria Concepts",
};

const data = [
  {
    title: "Residential Interiors",
    description:
      "Transform homes into personalized living spaces that balance comfort, style, and functionality through thoughtful design and premium materials.",
    coverImage: getCloudinaryUrl("THMA9754_drvzux"),
  },
  {
    title: "Commercial Interiors",
    description:
      "Design efficient and inspiring workplaces that elevate brand identity and enhance productivity through modern layouts and smart design.",
    coverImage: getCloudinaryUrl("PJBU9573_vxfvt0"),
  },
  {
    title: "Modular Kitchens",
    description:
      "Craft sleek and functional modular kitchens with custom layouts, durable finishes, and clever storage solutions for every lifestyle.",
    coverImage: getCloudinaryUrl("QLGZ0787_bgtdvn"),
  },
  {
    title: "Living Room Design",
    description:
      "Create elegant living spaces with balanced lighting, comfortable furnishings, and a touch of luxury to make every moment special.",
    coverImage: getCloudinaryUrl("ESFO9150_vzwysq"),
  },
  {
    title: "Bedroom Interiors",
    description:
      "Design serene and cozy bedrooms featuring calming color palettes, ambient lighting, and furniture layouts that promote rest and relaxation.",
    coverImage: getCloudinaryUrl("AFPP3467_y5v92w"),
  },
  {
    title: "Office Interiors",
    description:
      "Build inspiring office environments that foster collaboration, focus, and creativity with ergonomic furniture and modern aesthetics.",
    coverImage: getCloudinaryUrl("XVMU2749_pjrbgp"),
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Breathe new life into existing spaces with smart upgrades, contemporary aesthetics, and functional improvements that redefine style.",
    coverImage: getCloudinaryUrl("IMAGE-1_Scene_1_xiscdb"),
  },
  {
    title: "3D Visualization & Rendering",
    description:
      "Bring your concepts to life with realistic 3D renders and walkthroughs that help you visualize the final design before execution.",
    coverImage: getCloudinaryUrl("island-kitchen-edited_ejcd3c"),
  },
];
const imgSmall = getCloudinaryUrl("KBEL7733_fk6opu", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("KBEL7733_fk6opu");

export default function MyApp() {
  return (
    <>
      <Hero title={"Our Services"} imgLarge={imgLarge} imgSmall={imgSmall} />
      <main className=" text-neutral-800 px-4 xl:px-8 py-12 mx-auto text-neutral-800">
        <div className="flex flex-row flex-wrap xl:flex-wrap justify-center pt-4 pb-4 gap-8 mx-auto xl:max-w-8xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group relative flex flex-col  justify-center bg-white shadow-sm border border-slate-200 rounded-lg w-84 md:w-84 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <Image
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src={item.coverImage}
                  alt={item.title}
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {item.title}
                </h6>
                <p className="text-slate-600 leading-normal font-light truncate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
