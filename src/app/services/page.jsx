import "@/app/globals.css";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";
export const metadata = {
  title: "Services | Maria Concepts",
};

const data = [
  {
    title: "Residential Interiors",
    description:
      "Transform homes into personalized living spaces that balance comfort, style, and functionality through thoughtful design and premium materials.",
    coverImage: getCloudinaryUrl(
      "premium_photo-1661964178554-cb583b357dd7_ufhqvx"
    ),
  },
  {
    title: "Commercial Interiors",
    description:
      "Design efficient and inspiring workplaces that elevate brand identity and enhance productivity through modern layouts and smart design.",
    coverImage: getCloudinaryUrl("photo-1524758631624-e2822e304c36_qrnr38"),
  },
  {
    title: "Modular Kitchens",
    description:
      "Craft sleek and functional modular kitchens with custom layouts, durable finishes, and clever storage solutions for every lifestyle.",
    coverImage: getCloudinaryUrl("photo-1507089947368-19c1da9775ae_iireal"),
  },
  {
    title: "Living Room Design",
    description:
      "Create elegant living spaces with balanced lighting, comfortable furnishings, and a touch of luxury to make every moment special.",
    coverImage: getCloudinaryUrl("photo-1505691938895-1758d7feb511_auo2yl"),
  },
  {
    title: "Bedroom Interiors",
    description:
      "Design serene and cozy bedrooms featuring calming color palettes, ambient lighting, and furniture layouts that promote rest and relaxation.",
    coverImage: getCloudinaryUrl("photo-1615874959474-d609969a20ed_aiuskj"),
  },
  {
    title: "Office Interiors",
    description:
      "Build inspiring office environments that foster collaboration, focus, and creativity with ergonomic furniture and modern aesthetics.",
    coverImage: getCloudinaryUrl(
      "premium_photo-1683880731785-e5b632e0ea13_iva8nq"
    ),
  },
  {
    title: "Retail Store Design",
    description:
      "Design engaging retail spaces that captivate customers, showcase products beautifully, and enhance the overall shopping experience.",
    coverImage: getCloudinaryUrl("photo-1497366216548-37526070297c_tyztaw"),
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Breathe new life into existing spaces with smart upgrades, contemporary aesthetics, and functional improvements that redefine style.",
    coverImage: getCloudinaryUrl("photo-1503387762-592deb58ef4e_avukns"),
  },
  {
    title: "3D Visualization & Rendering",
    description:
      "Bring your concepts to life with realistic 3D renders and walkthroughs that help you visualize the final design before execution.",
    coverImage: getCloudinaryUrl("photo-1652792997653-7e5897fb309a_t4vkuo"),
  },
];
const imgSmall = getCloudinaryUrl("hero_gqdsnr", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("hero_gqdsnr");

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
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src={item.coverImage}
                  alt={item.title}
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
