import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Best Interiors and Constructions in Bangalore | Maria Concepts",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Hero/>
      <main className="text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-left bg-gray-100 text-gray-800">
            <div>

                      <h2 className="text-2xl text-primary-600 text-center">
            About Us
          </h2>
          <p className="py-4 text-center md:text-left">

Maria Concepts is a leading interior design firm in Bangalore, offering a complete range of services designed to transform residential and commercial spaces. With a strong focus on innovation, quality, and attention to detail, we create interiors that blend functionality with aesthetic excellence.
          </p>
<p className="py-4 text-center md:text-left">
At Maria Concepts, expert project management lies at the heart of every project. Our experienced team ensures smooth coordination from concept to completion — delivering every project on time and within budget. We take pride in meeting client expectations through transparent communication, superior craftsmanship, and unwavering commitment to quality.
</p>
              
            </div>

          <h2 className="text-2xl text-primary-600 text-center mt-8">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly gap-4 pt-4 pb-4">

            <div className="border border-primary p-4 md:p-8">
              <Image className="mb-4 text-primary-500" src="/project.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Project Management</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our skilled project managers oversee every detail to ensure interiors are completed on time, within budget, and to the highest quality standards.
                </p>

            </div>
            <div className="border border-primary p-4 md:p-8">
              <Image className="mb-4 text-primary-500" src="/interiors.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Interior Design</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our interior design team in Bangalore creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.
                </p>
            </div>
            <div className="border border-primary p-4 md:p-8">
              <Image className="mb-4 text-primary-500" src="/construction.svg" height={36} width={36} alt="svg-icon prject management"/>

<h2 className="text-xl">Constructions</h2>
<p className="text-sm pt-2 md:pt-4">
  Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.
</p>

            </div>
                        <div className="border border-primary p-4 md:p-8">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>
          </div>

          <div className="mt-2 py-4 text-center">
            <Link
              href="/services"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium rounded hover:bg-primary-400 transition"
              >
              View Services
            </Link>
            </div>

          

                      <div className="w-full mx-auto bg-white text-gray-800 text-center mt-12 py-8">
          <h2 className="text-2xl text-primary-600 text-center">
            Our Portfolio
          </h2>

          <div className="flex flex-wrap items-center justify-center mb-8">
            <div className="p-1 md:p-4 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded border border-secondary-400 p-1" src="/island-kitchen-edited.jpg" width={400} height={300} alt="island kitchen" />
            </div>
            <div className="p-1 md:p-4 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded border border-secondary-400 p-1" src="/building.jpg" width={400} height={300} alt="building" />
            </div>
                        <div className="p-1 md:p-4 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded border border-secondary-400 p-1" src="/kitchen-16_9.jpg" width={400} height={300} alt="building" />
            </div>
                        <div className="p-1 md:p-4 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded border border-secondary-400 p-1" src="/office.jpg" width={400} height={300} alt="building" />
            </div>

            
          </div>

                      <Link
              href="/projects"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium rounded hover:bg-primary-400 transition"
              >
              View More
            </Link>
          </div>
          <br/>
          <br/>
          <div className="w-full mx-auto text-left bg-white text-gray-800 mt-6">
          <h2 className="text-2xl text-primary-600 text-center">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap flex-col md:flex-row py-8 items-center text-center justify-evenly gap-8">
            <div className="p-2 w-full md:p-4 md:basis-1/4 border mx-auto">Structural Warranty*</div>
            <div className="p-2 w-full md:p-4 md:basis-1/4 border mx-auto">EMI Options</div>
            <div className="p-2 w-full md:p-4 md:basis-1/4 border mx-auto">Trusted Quality</div>
          </div>

          </div>


          <div className="mt-6 p-4 md:py-4 rounded flex flex-col gap-4 md:flex-row md:justify-between justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
            <h3  className="text-xl px-4">
              Get a Free Quote 
            </h3>

            <div className="flex flex-row items-center gap-4 p-3">
              <div className="bg-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#aa905e"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              </div>
              <div>
              <p>+91 9036368688 </p><small> Call us now</small>
              </div>
            </div>
          </div>
                  <div className="text-center mt-12">
                    <h2 className="text-xl">Appreciations for Construction & Interior Projects</h2>
                      <div className="flex flex-wrap flex-row md:w-3/4 md:mx-auto">
                            <Image className="p-2 basis-1/3 md:basis-1/6" src="/2_2-1.png" alt="Appreciation Photos" width={100} height={50} />
                            <Image className="p-2 basis-1/3 md:basis-1/6" src="/1-3.png" alt="Appreciation Photos" width={100} height={50} />
                            <Image className="p-2 basis-1/3 md:basis-1/6" src="/3_1.png" alt="Appreciation Photos" width={100} height={50} />
                            <Image className="p-2 basis-1/3 md:basis-1/6" src="/4_1-1.png" alt="Appreciation Photos" width={100} height={50} />
                            <Image className="p-2 basis-1/3 md:basis-1/6" src="/7_1-1.png" alt="Appreciation Photos" width={100} height={50} />
                            <Image className="p-2 basis-1/3 md:basis-1/6" src="/7_1-1.png" alt="Appreciation Photos" width={100} height={50} />                  
                      </div>
            </div>

      </main>
    </>
  );
}
