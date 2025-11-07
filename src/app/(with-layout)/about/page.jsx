import Hero from "@/components/Hero";
import { Building, Eye, Trophy } from "@/components/Icons";
import Image from "next/image";

export const metadata = {
  title: "About Us | Maria Concepts",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Hero title={'Get to know us'}/>
      <main className="px-4 xl:px-8 mx-auto text-left text-neutral-800">
        <>

                                <h2 className="text-3xl text-center my-6 text-neutral-800">
            About Us
          </h2>

          <div className="flex flex-col xl:flex-row max-w-6xl mx-auto gap-8">

            <div className="basis-1/2 py-4">
              <Image src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761721468/team_nbrl8f.avif"
                width={800}
                height ={600}
                alt="Our team"
                className="w-full h-auto object-cover object-center border border-secondary"
              />
            </div>

            <div className="basis-1/2">

            <p className="py-2">


              Maria Concepts is a leading construction and interior design firm in Bengaluru, offering end-to-end solutions that blend innovation, quality, and craftsmanship.
            </p>

            <p className="py-2">


Our expert team manages every project with precision — ensuring seamless execution, on-time delivery, and exceptional results across residential, commercial, and institutional spaces.
            </p>
<p className="py-2">

From building construction to interior design, renovation, and custom furniture, we create spaces that reflect our clients’ vision while maintaining the highest standards of durability and aesthetics. We have more than 10 years of experience in the industry and we have undertaken 300+ projects.
</p>
<p className="py-2">

At Maria Concepts, we’re committed to excellence, client satisfaction, and long-lasting relationships — redefining interiors in Bengaluru with every project we deliver.
</p>
            </div>
</div>
          

 <div className="flex flex-nowrap xl:flex-row justify-start gap-8 mt-16 max-w-7xl mx-auto overflow-x-scroll md:overflow-x-auto">
    <div className="min-w-xs p-4 text-center border border-primary-600 rounded">
    <Eye className="w-12 text-secondary mx-auto my-4" />
      <h3 className="text-primary-800">
        VISION
      </h3>

      <p className="pt-2">
        At Maria Concepts, our vision is to lead the construction and interiors industry in Bengaluru through innovation, quality, and integrity. We uphold the highest engineering and construction standards while embracing advanced technologies to deliver projects that exceed client expectations in an ever-evolving world.
      </p>
    </div>

    <div className="min-w-xs p-4 text-center border border-primary-600 rounded">
    <Trophy className="w-12 text-secondary mx-auto my-4" />

      <h3 className="text-primary-800">
EXPERIENCE
      </h3>
      <p className="pt-2">
        At Maria Concepts, our foundation is built on trust, experience, and a commitment to excellence. Synonymous with reliability and expertise, we bring our clients' visions to life, consistently delivering exceptional interiors and construction projects in Bengaluru.


      </p>
    </div>

        <div className="min-w-xs p-4 text-center border border-primary-600 rounded">
    <Building className="w-12 text-secondary mx-auto my-4" />


      <h3 className="text-primary-800">
        MISSION
      </h3>
      <p className="pt-2">
At Maria Concepts, our mission is to deliver comprehensive and tailored construction and interior solutions in Bengaluru. Guided by integrity, quality, and timely delivery, we empower our team to create spaces that reflect excellence and exceed client expectations.

      </p>
    </div>
 </div>
 <br/>
          
        </>
      </main>
    </>
  );
}
