import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";


export const metadata = {
  title: "Services | Maria Concepts",
};

export default function MyApp() {

  return (
    <>
          <Hero title={'Our Services'}/>
      <main className="bg-secondary-100 text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-gray-800">

          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly pt-4 pb-4 gap-8">

            <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/project.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Project Management</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our skilled project managers oversee every detail to ensure interiors are completed on time, within budget, and to the highest quality standards.
                </p>

            </div>
            <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/interiors.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Interior Design</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our interior design team in Bangalore creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.
                </p>
            </div>
            <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/construction.svg" height={36} width={36} alt="svg-icon prject management"/>

<h2 className="text-xl">Constructions</h2>
<p className="text-sm pt-2 md:pt-4">
  Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.
</p>

            </div>
                                    <div className="border border-primary p-4 md:p-8  md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>
                        <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/furniture.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Built-in Furnitures</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/church.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Institution and Church Works</h2>
              <p className="text-sm pt-2 md:pt-4">
                Maria Concepts constructs custom built-in furniture that seamlessly integrates with your interior spaces.
Our bespoke furniture solutions are crafted to maximize space utilization and enhance the overall design aesthetic — delivering functionality, durability, and timeless appeal.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/home.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Residentials</h2>
              <p className="text-sm pt-2 md:pt-4">
                Maria Construction and Interiors specializes in institutional and church construction projects, combining expertise with sensitivity to each organization’s values and vision.
Our experienced team delivers spaces that meet the functional, aesthetic, and spiritual needs of religious and institutional organizations — creating inspiring environments for worship, learning, and community.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/office.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Office Spaces</h2>
              <p className="text-sm pt-2 md:pt-4">
                We design and build modern, functional office spaces that inspire productivity, collaboration, and employee well-being.
Our tailored office interior design solutions reflect your brand identity and corporate culture — creating work environments that help your business thrive
              </p>
            </div>

          </div>


      </main>
    </>
  );
}
