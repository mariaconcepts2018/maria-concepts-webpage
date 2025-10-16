import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata = {
  title: "About Us | Maria Concepts",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Hero title={'About Us'}/>
      <main className="bg-secondary-100 text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-left text-gray-800">
        <>

                                <h2 className="text-3xl text-center mt-12 text-primary-500">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-8 gap-8">

            <div className="basis-1/2">
              <Image src="/team.jpg"
                width={800}
                height ={600}
                alt="Our team"
                className="w-auto h-full object-cover object-center border border-secondary"
              />
            </div>

            <div className="basis-1/2">

            <p className="py-2">


              Maria Concepts is a leading construction and interior design firm in Bangalore, offering end-to-end solutions that blend innovation, quality, and craftsmanship.
            </p>

            <p className="py-2">


Our expert team manages every project with precision — ensuring seamless execution, on-time delivery, and exceptional results across residential, commercial, and institutional spaces.
            </p>
<p className="py-2">

From building construction to interior design, renovation, and custom furniture, we create spaces that reflect our clients’ vision while maintaining the highest standards of durability and aesthetics.
</p>
<p className="py-2">

At Maria Concepts, we’re committed to excellence, client satisfaction, and long-lasting relationships — redefining interiors in Bangalore with every project we deliver.
</p>
            </div>
</div>
          



 <div className="flex flex-col md:flex-row justify-center gap-8">
    <div className="p-4 text-center border border-primary-600 rounded basis-1/3">

      <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 472 384">
    <path fill="currentColor" d="M235 32q79 0 142.5 44.5T469 192q-28 71-91.5 115.5T235 352T92 307.5T0 192q28-71 92-115.5T235 32zm0 267q44 0 75-31.5t31-75.5t-31-75.5T235 85t-75.5 31.5T128 192t31.5 75.5T235 299zm-.5-171q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45.5 18.5t-45-18.5T171 192t18.5-45.5t45-18.5z"/>
</svg>

      <h3 className="text-primary-500">
        VISION
      </h3>

      <p className="pt-2">
        At Maria Concepts, our vision is to lead the construction and interiors industry in Bangalore through innovation, quality, and integrity. We uphold the highest engineering and construction standards while embracing advanced technologies to deliver projects that exceed client expectations in an ever-evolving world.
      </p>
    </div>

    <div className="p-4 text-center border border-primary-600 rounded basis-1/3">

      <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path fill="currentColor" d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5a5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
</svg>
      <h3 className="text-primary-500">
EXPERIENCE
      </h3>
      <p className="pt-2">
        At Maria Concepts, our foundation is built on trust, experience, and a commitment to excellence. Synonymous with reliability and expertise, we bring our clients' visions to life, consistently delivering exceptional interiors and construction projects in Bangalore.


      </p>
    </div>

        <div className="p-4 text-center border border-primary-600 rounded basis-1/3">
          <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h32q27 0 45.5-19t18.5-45V64q0-26 19-45t45-19h640q27 0 45.5 19T896 64v832q0 27 19 45.5t45 18.5h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zM384 160q0-13-9.5-22.5T352 128h-64q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h64q13 0 22.5-9.5T384 224v-64zm0 192q0-13-9.5-22.5T352 320h-64q-13 0-22.5 9.5T256 352v64q0 13 9.5 22.5T288 448h64q13 0 22.5-9.5T384 416v-64zm0 192q0-13-9.5-22.5T352 512h-64q-13 0-22.5 9.5T256 544v64q0 13 9.5 22.5T288 640h64q13 0 22.5-9.5T384 608v-64zm192-384q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v64q0 13 9.5 22.5T480 256h64q13 0 22.5-9.5T576 224v-64zm0 192q0-13-9.5-22.5T544 320h-64q-13 0-22.5 9.5T448 352v64q0 13 9.5 22.5T480 448h64q13 0 22.5-9.5T576 416v-64zm0 192q0-13-9.5-22.5T544 512h-64q-13 0-22.5 9.5T448 544v64q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608v-64zm32 224H416q-13 0-22.5 9.5T384 800v128q0 13 9.5 22.5T416 960h192q13 0 22.5-9.5T640 928V800q0-13-9.5-22.5T608 768zm160-608q0-13-9.5-22.5T736 128h-64q-13 0-22.5 9.5T640 160v64q0 13 9.5 22.5T672 256h64q13 0 22.5-9.5T768 224v-64zm0 192q0-13-9.5-22.5T736 320h-64q-13 0-22.5 9.5T640 352v64q0 13 9.5 22.5T672 448h64q13 0 22.5-9.5T768 416v-64zm0 192q0-13-9.5-22.5T736 512h-64q-13 0-22.5 9.5T640 544v64q0 13 9.5 22.5T672 640h64q13 0 22.5-9.5T768 608v-64z"/>
</svg>
      <h3 className="text-primary-500">
        MISSION
      </h3>
      <p className="pt-2">
At Maria Concepts, our mission is to deliver comprehensive and tailored construction and interior solutions in Bangalore. Guided by integrity, quality, and timely delivery, we empower our team to create spaces that reflect excellence and exceed client expectations.

      </p>
    </div>
 </div>
 <br/>
          
        </>
      </main>
    </>
  );
}
