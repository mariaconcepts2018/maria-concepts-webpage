import Hero from "@/components/Hero";
import { Building, Eye, Trophy } from "@/components/Icons";
import getCloudinaryUrl from "@/lib/cloudinary";
import Image from "next/image";

export const metadata = {
  title: "Get to know us",
};

const imgSmall = getCloudinaryUrl("RNRA9126_az04xd", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("RNRA9126_az04xd");

export default function MyApp({}) {
  return (
    <>
      <Hero title={"Get to know us"} imgLarge={imgLarge} imgSmall={imgSmall} />
      <main className="px-4 xl:px-8 mx-auto text-left text-neutral-800">
        <>
          <h2 className="text-3xl text-center my-6 text-neutral-800">
            About Us
          </h2>

          <div className="flex flex-col xl:flex-row max-w-6xl mx-auto gap-8">
            <div className="basis-1/2 md:px-4 mx-auto">
              <p className="py-2">
                Maria Concepts is a leading construction and interior design
                firm in Bengaluru, offering end-to-end solutions that blend
                innovation, quality, and craftsmanship.
              </p>

              <p className="py-2">
                Our expert team manages every project with precision — ensuring
                seamless execution, on-time delivery, and exceptional results
                across residential, commercial, and institutional spaces.
              </p>
              <p className="py-2">
                From building construction to interior design, renovation, and
                custom furniture, we create spaces that reflect our clients’
                vision while maintaining the highest standards of durability and
                aesthetics. We have more than 10 years of experience in the
                industry and we have undertaken 300+ projects.
              </p>
              <p className="py-2">
                At Maria Concepts, we’re committed to excellence, client
                satisfaction, and long-lasting relationships — redefining
                interiors in Bengaluru with every project we deliver.
              </p>
            </div>
          </div>
          <h2 className="my-4 text-center">
            Appreciations for Construction & Interior Projects
          </h2>
          <div className="w-full md:w-1/4 mx-auto flex flex-wrap gap-2 justify-center w-full">
            <Image
              src={getCloudinaryUrl("SLN_7962_pqcf5c")}
              width={800}
              height={600}
              alt="Our team"
              className="w-2/5 h-auto object-cover object-center border border-secondary"
            />
            <Image
              src={getCloudinaryUrl("SLN_9545_gljbiy")}
              width={800}
              height={600}
              alt="Our team"
              className="w-2/5 h-auto object-cover object-center border border-secondary"
            />
            <Image
              src={getCloudinaryUrl("FB_IMG_1740116084948_hnbfs2")}
              width={800}
              height={600}
              alt="Our team"
              className="w-2/5 h-auto object-cover object-center border border-secondary"
            />
            <Image
              src={getCloudinaryUrl("FB_IMG_1740115990053_wy0rbs")}
              width={800}
              height={600}
              alt="Our team"
              className="w-2/5 h-auto object-cover object-center border border-secondary"
            />
          </div>
          <div className="flex flex-nowrap xl:flex-row justify-start gap-8 mt-8 max-w-7xl mx-auto overflow-x-scroll md:overflow-x-auto">
            <div className="min-w-xs p-4 text-center border border-primary-600 rounded">
              <Eye className="w-12 text-secondary mx-auto my-4" />
              <h3 className="text-primary-800">VISION</h3>

              <p className="pt-2">
                At Maria Concepts, our vision is to lead the construction and
                interiors industry in Bengaluru through innovation, quality, and
                integrity. We uphold the highest engineering and construction
                standards while embracing advanced technologies to deliver
                projects that exceed client expectations in an ever-evolving
                world.
              </p>
            </div>

            <div className="min-w-xs p-4 text-center border border-primary-600 rounded">
              <Trophy className="w-12 text-secondary mx-auto my-4" />

              <h3 className="text-primary-800">EXPERIENCE</h3>
              <p className="pt-2">
                At Maria Concepts, our foundation is built on trust, experience,
                and a commitment to excellence. Synonymous with reliability and
                expertise, we bring our clients' visions to life, consistently
                delivering exceptional interiors and construction projects in
                Bengaluru.
              </p>
            </div>

            <div className="min-w-xs p-4 text-center border border-primary-600 rounded">
              <Building className="w-12 text-secondary mx-auto my-4" />

              <h3 className="text-primary-800">MISSION</h3>
              <p className="pt-2">
                At Maria Concepts, our mission is to deliver comprehensive and
                tailored construction and interior solutions in Bengaluru.
                Guided by integrity, quality, and timely delivery, we empower
                our team to create spaces that reflect excellence and exceed
                client expectations.
              </p>
            </div>
          </div>
          <br />
        </>
      </main>
    </>
  );
}
