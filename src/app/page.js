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
      <main className="text-gray-800  p-0 mx-auto text-left bg-secondary-100 text-gray-800 pt-12">



              <div className="max-w-7xl mx-auto p-4 md:p-8 md:border md:border-primary-600">


                      <h2 className="text-2xl text-primary-600 text-center">
            About Us
          </h2>
          <p className="py-4 text-center md:text-left">

Maria Concepts is a leading interior design firm in Bangalore, offering a complete range of services designed to transform residential and commercial spaces. With a strong focus on innovation, quality, and attention to detail, we create interiors that blend functionality with aesthetic excellence.
          </p>
<p className="py-4 text-center md:text-left">
At Maria Concepts, expert project management lies at the heart of every project. Our experienced team ensures smooth coordination from concept to completion — delivering every project on time and within budget. We take pride in meeting client expectations through transparent communication, superior craftsmanship, and unwavering commitment to quality.
</p>
              </ div>
              

          <div className="w-full mx-auto text-left text-gray-800 mt-18 max-w-7xl p-4">
          <h2 className="text-2xl text-primary-600 text-center">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap flex-col md:flex-row flex-wrap py-8 items-center text-center justify-center md:justify-evenly md:gap-8 gap-4">
            <div className="p-2 pt-6 w-full rounded md:p-4 basis-1/3 md:basis-1/5 bg-primary-100 font-bold">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" fill="currentColor"><g fill="none" stroke="#000000" strokeLinejoin="round"><path d="M1.082 7.626a.976.976 0 0 1 0-1.273q.338-.393.678-.773q-.103-.493-.198-.996a.976.976 0 0 1 .636-1.103q.49-.172.974-.331q.157-.479.327-.962A.976.976 0 0 1 4.6 1.552q.5.094.992.196q.374-.334.76-.666a.976.976 0 0 1 1.273 0q.39.334.764.67q.5-.105 1.009-.2a.976.976 0 0 1 1.102.636q.17.484.327.962q.484.16.974.331c.455.16.725.628.636 1.103q-.096.512-.201 1.013q.34.381.68.777a.976.976 0 0 1 .001 1.273q-.337.393-.678.773q.104.493.198.997a.976.976 0 0 1-.636 1.102q-.49.172-.974.331q-.158.48-.327.962a.976.976 0 0 1-1.102.637a53 53 0 0 1-.992-.197q-.374.335-.76.666a.976.976 0 0 1-1.273 0q-.39-.334-.764-.67q-.5.105-1.009.2a.976.976 0 0 1-1.102-.636a53 53 0 0 1-.327-.962a52 52 0 0 1-.974-.33a.976.976 0 0 1-.636-1.103q.096-.513.201-1.014a53 53 0 0 1-.68-.777Z"/><path strokeLinecap="round" d="M4.62 7.738L6.212 9.38C6.962 7.227 7.586 6.282 9 5"/></g></svg>
            <p className="p-4">Structural Warranty*
              </p>

              </div>

            <div className="p-2 pt-6 w-full rounded md:p-4 basis-1/3 md:basis-1/5 bg-primary-100 font-bold">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024">
    <path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/>
</svg>
<p className="p-4">
            EMI Options </p></div>

            <div className="p-2 pt-6 w-full rounded md:p-4 basis-1/3 md:basis-1/5 bg-primary-100 font-bold">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#000000" d="M19 9a7 7 0 1 0-10.974 5.76L5 20l2.256.093L8.464 22l3.466-6.004c.024 0 .046.004.07.004s.046-.003.07-.004L15.536 22l1.232-1.866L19 20l-3.026-5.24A6.99 6.99 0 0 0 19 9ZM7 9a5 5 0 1 1 5 5a5 5 0 0 1-5-5Z"/><circle cx="12" cy="9" r="3" fill="#000000"/></svg>
            <p className="p-4">Trusted Quality</p></div>

                        <div className="p-2 pt-6 w-full rounded md:p-4 basis-1/3 md:basis-1/5 bg-primary-100 font-bold">
<svg className="mx-auto"  xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6z"/>
    <path fill="currentColor" d="M8 3H7v6h5V8H8z"/>
</svg>
<p className="p-4">
            On time delivery </p></div>
          </div>

          </div>

                      <div className="w-full mx-auto text-gray-800 text-center mt-12 py-8 max-w-7xl">
          <h2 className="text-2xl text-primary-600 text-center py-4">
            Our Portfolio
          </h2>
          <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center mb-8 gap-8">
            <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" src="/kitchen.jpg" width={400} height={300} alt="island kitchen" />
            </div>
            <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" src="/library.jpg" width={400} height={300} alt="building" />
            </div>
                        <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" src="/office.jpg" width={400} height={300} alt="building" />
            </div>
                        <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded"  src="/lobby.jpg" width={400} height={300} alt="building" />
            </div>

            
          </div>
            <Link
              href="/gallery"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium rounded hover:bg-primary-400 transition"
              >
              View More
            </Link>

          <div className="mt-2 py-4 text-center max-w-7xl mx-auto p-4">
          <h2 className="text-2xl text-primary-600 text-center mt-8">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly gap-4 pt-4 pb-4">

            <div className="border border-primary p-4 md:p-8">
              <svg className = "py-4 mx-auto logo-xl text-secondary-500" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
    <path fill="currentColor" d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"/>
</svg>
                <h2 className="text-xl text-primary-600">Project Management</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our skilled project managers oversee every detail to ensure interiors are completed on time, within budget, and to the highest quality standards.
                </p>

            </div>
            <div className="border border-primary p-4 md:p-8">
              <svg className = "py-4 mx-auto logo-xl text-secondary-500" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <rect width="18" height="20" x="3" y="2" rx="2"/>
        <path d="M8 10h.01M12 2v15m4-7h.01M3 17h18"/>
    </g>
</svg>
                <h2 className="text-xl text-primary-600">Interior Design</h2>
                <p className="text-sm pt-2 md:pt-4">
                  Our interior design team in Bangalore creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.
                </p>
            </div>
            <div className="border border-primary p-4 md:p-8">
<svg className = "py-4 mx-auto logo-xl text-secondary-500" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M14 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM9 8h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm12 8h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-8 0h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6V4h12Z"/>
</svg>

<h2 className="text-xl text-primary-600">Constructions</h2>
<p className="text-sm pt-2 md:pt-4">
  Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.
</p>

            </div>
                        <div className="border border-primary p-4 md:p-8">
<svg className = "py-4 mx-auto logo-xl text-secondary-500" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1-5 5h-5v2m-2 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/></g></svg>

              <h2 className="text-xl text-primary-600">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
                We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.
              </p>
            </div>
          </div>
<br/>
            <Link
              href="/services"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium rounded hover:bg-primary-400 transition"
              >
              View More
            </Link>
            </div>



               <div className="max-w-7xl mx-auto mt-6 p-4 md:py-4 md:rounded flex flex-col gap-4 md:flex-row md:justify-between justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
            <h3  className="text-xl px-4">
              Get a Free Quote 
            </h3>

            <div className="flex flex-row items-center md:gap-4 gap-8 p-3">
              <div className=" p-3 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#aa905e"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              </div>
              <div>
              <p className="text-left">+91 9036368688<small><br/>Call us now</small></p>
              </div>
            </div>
          </div>     


          </div>
          <br/>
          <br/>

                  <div className="text-center mt-6 max-w-5xl mx-auto">
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
