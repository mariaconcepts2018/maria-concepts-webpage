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

          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-4  pt-4 pb-4">

            <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/project.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Project Management</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our skilled project managers oversee every detail to ensure interiors are completed on time, within budget, and to the highest quality standards.
                </p>

            </div>
            <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/interiors.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Interior Design</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our interior design team in Bangalore creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.
                </p>
            </div>
            <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/construction.svg" height={36} width={36} alt="svg-icon prject management"/>

<h2 className="text-xl">Constructions</h2>
<p className="text-sm pt-2 md:pt-4">
  Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.
</p>

            </div>
                        <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/5">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>
          </div>


      </main>
    </>
  );
}
