import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
    title: "Interior Designs",
    description: "Our interior design team in Bangalore creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.",
    imgurl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
    {
    title: "Constructions",
    description: "Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.",
    imgurl: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
  },
    {
    title: "Renovations",
    description: "We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.",
    imgurl: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Project Management",
    description: "Our skilled project managers oversee every detail to ensure interiors are completed on time, within budget, and to the highest quality standards.",
    imgurl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
  },
]

export const metadata = {
  title: "Best Interiors and Constructions in Bangalore | Maria Concepts",

  description: "Maria Concepts at Bangalore offers premium construction and renovation services tailored to your vision and lifestyle.",
  keywords: ["construction", "renovation", "architecture", "interior design", "home building"],
  authors: [{ name: "Maria Concepts" }],
  openGraph: {
    title: "Maria Concepts – Best Interiors and Constructions in Bangalore",
    description: "We offer premium construction and renovation services tailored to your vision and lifestyle.",
    url: "https://mariaconcepts.com",
    siteName: "Maria Concepts",
    images: [
      {
        url: "https://res.cloudinary.com/dylffjde8/image/upload/w_auto,q_50,c_limit/v1761220154/hero_gqdsnr.webp",
        width: 1200,
        height: 630,
        alt: "Your Brand - Construction Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Concepts – Best Interiors and Constructions in Bangalore",
    description: "We offer premium construction and renovation services tailored to your vision and lifestyle.",
    images: ["https://res.cloudinary.com/dylffjde8/image/upload/w_auto,q_50,c_limit/v1761220154/hero_gqdsnr.webp"],
  },
  alternates: {
    canonical: "https://mariaconcepts.com",
  },
};


export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Hero/>
      <main className="text-gray-800  p-0 mx-auto text-left text-gray-800 bg-gray-100 pt-6">

              <div className="max-w-4xl mx-auto p-4 md:p-8 md:border md:border-primary-600">


                      <h2 className="text-2xl text-primary-600 text-center">
            About Us
          </h2>
          <p className="p-2 text-center">
            At Maria Concept, we envision redefining modern spaces through creative design, sustainable construction, and timeless craftsmanship. Our goal is to create inspiring environments that blend beauty, comfort, and functionality — enriching the way people live and work.
</p>
<p className="p-2 text-center">
Our mission is to deliver complete construction and interior solutions with integrity, innovation, and precision. Backed by a skilled in-house team, we focus on using sustainable materials and advanced design practices to ensure every project reflects quality, value, and lasting trust.

          </p>
              </ div>

          <div className="w-full mx-auto text-left text-gray-800 mt-4 max-w-7xl p-4">
          <h2 className="text-2xl text-primary-600 text-center">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap flex-col md:flex-row justify-center flex-wrap py-8 gap-2 mx-auto">
            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024"><path fill="currentColor" d="m512 77.488l137.472 285.088L962.08 409.04L735.664 634.88l7.616 45.311l45.28 270.16l-276.607-148.784L235.36 950.415l45.295-270.224l7.584-45.311L61.904 409.008l312.592-46.464L395.04 320zm-.017-61.936c-28.656 0-54.784 16.176-66.977 41.456l-115.904 240.64l-266.704 39.664c-27.391 4.096-50.143 22.8-58.975 48.384c-8.817 25.664-2.145 53.904 17.199 73.152l195.408 195.2l-45.328 270.656c-4.56 27.28 7.232 54.624 30.368 70.576c12.72 8.737 27.664 13.153 42.624 13.153c12.32 0 24.64-2.992 35.793-8.977l232.496-125.184l232.512 125.184a75.853 75.853 0 0 0 35.776 8.977c14.96 0 29.905-4.416 42.657-13.153c23.103-15.952 34.91-43.295 30.319-70.576l-45.344-270.656l195.504-195.2c19.344-19.248 25.968-47.504 17.152-73.152c-8.848-25.616-31.6-44.32-58.976-48.385l-266.656-39.664l-115.968-240.64c-12.112-25.311-38.256-41.455-66.976-41.455z"/></svg>
            <p className="p-4">10+ years of experience in industry
              </p>

              </div>

            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" fill="currentColor"><g fill="none" stroke="currentColor" strokeLinejoin="round"><path d="M1.082 7.626a.976.976 0 0 1 0-1.273q.338-.393.678-.773q-.103-.493-.198-.996a.976.976 0 0 1 .636-1.103q.49-.172.974-.331q.157-.479.327-.962A.976.976 0 0 1 4.6 1.552q.5.094.992.196q.374-.334.76-.666a.976.976 0 0 1 1.273 0q.39.334.764.67q.5-.105 1.009-.2a.976.976 0 0 1 1.102.636q.17.484.327.962q.484.16.974.331c.455.16.725.628.636 1.103q-.096.512-.201 1.013q.34.381.68.777a.976.976 0 0 1 .001 1.273q-.337.393-.678.773q.104.493.198.997a.976.976 0 0 1-.636 1.102q-.49.172-.974.331q-.158.48-.327.962a.976.976 0 0 1-1.102.637a53 53 0 0 1-.992-.197q-.374.335-.76.666a.976.976 0 0 1-1.273 0q-.39-.334-.764-.67q-.5.105-1.009.2a.976.976 0 0 1-1.102-.636a53 53 0 0 1-.327-.962a52 52 0 0 1-.974-.33a.976.976 0 0 1-.636-1.103q.096-.513.201-1.014a53 53 0 0 1-.68-.777Z"/><path strokeLinecap="round" d="M4.62 7.738L6.212 9.38C6.962 7.227 7.586 6.282 9 5"/></g></svg>
            <p className="p-4">Structural Warranty*
              </p>

              </div>

            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024">
    <path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/>
</svg>
<p className="p-4">
            EMI Options </p></div>
            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/>
</svg>
            <p className="p-4">In-House Design & Engineering Team</p></div>
            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9a7 7 0 1 0-10.974 5.76L5 20l2.256.093L8.464 22l3.466-6.004c.024 0 .046.004.07.004s.046-.003.07-.004L15.536 22l1.232-1.866L19 20l-3.026-5.24A6.99 6.99 0 0 0 19 9ZM7 9a5 5 0 1 1 5 5a5 5 0 0 1-5-5Z"/><circle cx="12" cy="9" r="3" fill="currentColor"/></svg>
            <p className="p-4">Trusted Quality</p></div>

                        <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
<svg className="text-primary-600"  xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6z"/>
    <path fill="currentColor" d="M8 3H7v6h5V8H8z"/>
</svg>
<p className="p-4">
            On time delivery </p></div>
          </div>

          </div>



          <div className="mt-2 py-4 text-center max-w-7xl mx-auto p-4">
          <h2 className="text-2xl text-primary-600 text-center mt-8">
            Our Services
          </h2>

<div className="flex flex-col gap-4 md:flex-row">
{services.map((item, index) => 

<div key={index} className="flex flex-col justify-evenly bg-gray-100 shadow-sm border border-secondary-200 rounded w-full">
  <div className="relative h-56 md:h-28 lg:h-40 m-2.5 overflow-hidden text-white rounded">
    <img src={item.imgurl} alt="card-image" loading="lazy" />
  </div>
  <div className = "p-4">
    <h6 className="mb-2 text-primary-600 text-xl md:text-lg font-semibold">
      {item.title}
    </h6>
    <p className="text-secondary-600 leading-normal font-light text-xs">
      {item.description}
    </p>
  </div>
  <div className="px-4 pb-4 pt-0 mt-1">
    <button className="rounded py-1 px-2 text-primary-600 border border-primary-600 text-center text-xs transition-all hover:text-white focus:bg-secondary-700 focus:shadow-none active:bg-secondary-100 hover:bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>  

)}

</div>
 
<br/>
            <Link
              href="/services"
              className="px-6 py-3 bg-primary-500 text-white shadow-md uppercase font-medium rounded hover:bg-primary-400 transition"
              >
              View More
            </Link>
            </div>
                      <div className="w-full mx-auto text-gray-800 text-center mt-12 py-8 max-w-7xl px-2">

          <h2 className="text-2xl text-primary-600 text-center py-4">
            Our Portfolio
          </h2>
          <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center mb-8 gap-8">
            <div className="rounded border border-secondary-400 shadow-md w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" loading={"lazy"} src="https://res.cloudinary.com/dylffjde8/image/upload/v1761653836/kitchen_d6lzrq.avif" width={400} height={300} alt="island kitchen" />
            </div>
            <div className="rounded border border-secondary-400 shadow-md w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" loading={"lazy"} src="https://res.cloudinary.com/dylffjde8/image/upload/v1761653841/office_am4vcr.avif" width={400} height={300} alt="building" />
            </div>
                        <div className="rounded border border-secondary-400 shadow-md w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" loading={"lazy"} src="https://res.cloudinary.com/dylffjde8/image/upload/v1761653840/library_m822tj.avif" width={400} height={300} alt="building" />
            </div>
                        <div className="rounded border border-secondary-400 shadow-md w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" loading={"lazy"}  src="https://res.cloudinary.com/dylffjde8/image/upload/v1761653801/lobby_afeg1z.avif" width={400} height={300} alt="building" />
            </div>

            
          </div>
            <Link
              href="/gallery"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium rounded hover:bg-primary-400 transition shadow-md"
              >
              View More
            </Link>



               <div className="max-w-7xl mx-auto mt-6 p-4 md:py-4 md:rounded flex flex-col gap-4 md:flex-row md:justify-between justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
            <h3  className="text-xl px-4">
              Get a Free Quote 
            </h3>

              <Link className='d-block' href={'tel:+919036368688'} target="_blank">
            <div className="flex flex-row items-center md:gap-4 gap-8 p-3">
              <div className=" p-3 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#aa905e"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              </div>
              <div>
              <p className="text-left">+91 9036368688<small><br/>Call us now</small></p>
              </div>
            </div>
              </Link>
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
