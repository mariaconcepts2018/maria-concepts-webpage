import "@/app/globals.css";
import Hero from "@/components/Hero";
import { Calender, Phone, Star, TeamFill, Time, WarrantyBadgeHighlight } from "@/components/Icons";
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
      <main className="text-neutral-800  p-0 mx-auto text-left text-neutral-800 bg-neutral-100 pt-6">

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

          <div className="w-full mx-auto text-left text-neutral-800 mt-4 max-w-7xl p-4">
          <h2 className="text-2xl text-primary-600 text-center">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap flex-col md:flex-row justify-center flex-wrap py-8 gap-2 mx-auto">
            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <Star className="w-8 text-primary-600" />
            <p className="p-4 text-black">10+ years of experience in industry
              </p>

              </div>

            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <WarrantyBadgeHighlight className="w-8 text-primary-600" />
            <p className="p-4">Structural Warranty*
              </p>

              </div>

            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <Calender className="w-8 text-primary-600" />
<p className="p-4">
            EMI Options </p></div>
            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <TeamFill className="w-8 text-primary-600" />

            <p className="p-4">In-House Design & Engineering Team</p></div>
            <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <Time className="w-8 text-primary-600" />
            <p className="p-4">Trusted Quality</p></div>

                        <div className="flex justify-start w-full rounded md:basis-1/3 font-bold">
            <Time className="w-8 text-primary-600" />
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

<div key={index} className="flex flex-col justify-evenly bg-neutral-100 shadow-sm border border-secondary-200 rounded w-full">
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
    <button 
    className="rounded py-1 px-2 text-primary-600 border border-primary-600 text-center text-xs transition-all hover:text-white active:text-black focus:shadow-none hover:bg-primary active:bg-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
    type="button">
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
                      <div className="w-full mx-auto text-neutral-800 text-center mt-12 py-8 max-w-7xl px-2">

          <h2 className="text-2xl text-primary-600 text-center py-4">
            Our Portfolio
          </h2>
          <div className="flex flex-wrap mb-8">
            <div className="basis-1/2 md:basis-1/4 p-1">
            <Image className="rounded-sm shadow-md border border-neutral-600" loading={"lazy"} src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761653836/kitchen_d6lzrq.avif" width={400} height={300} alt="island kitchen" />

            </div>
            <div className="basis-1/2 md:basis-1/4 p-1">
            <Image className="rounded-sm shadow-md border border-neutral-600" loading={"lazy"} src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761653841/office_am4vcr.avif" width={400} height={300} alt="building" />
              
            </div>
              <div className="basis-1/2 md:basis-1/4 p-1">
            <Image className="rounded-sm shadow-md border border-neutral-600" loading={"lazy"} src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761653840/library_m822tj.avif" width={400} height={300} alt="building" />
              
            </div>          
            <div className="basis-1/2 md:basis-1/4 p-1">
            <Image className="rounded-sm shadow-md border border-neutral-600" loading={"lazy"}  src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761653801/lobby_afeg1z.avif" width={400} height={300} alt="building" />
              
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
              <div className=" p-3 bg-neutral-100 rounded-full">
                <Phone className="w-6 text-primary" />
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
