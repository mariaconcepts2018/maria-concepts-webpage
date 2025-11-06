import "@/app/globals.css";
import Hero from "@/components/Hero";
import { Calendar, Phone, Star, TeamFill, Time, Trophy, WarrantyBadgeHighlight } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

const gridImages = [
  {
    col: [
      "https://plus.unsplash.com/premium_photo-1683140941523-f1fbbabe54d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://plus.unsplash.com/premium_photo-1670076515866-73822a3d610d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1678104076255-fcf85b026555?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  {
    col: [
      "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      "https://plus.unsplash.com/premium_photo-1676823570845-d2dd715c9967?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://plus.unsplash.com/premium_photo-1661964178554-cb583b357dd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    ],
  },  {
    col: [
      "https://plus.unsplash.com/premium_photo-1661779632194-6cf32a9b5325?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://plus.unsplash.com/premium_photo-1661914953201-854a4ba9dc46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      "https://plus.unsplash.com/premium_photo-1674730952302-c9c9bc5da824?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1156",
    ],
  },  {
    col: [
      "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1678229915680-edef57d8c234?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    ],
  },
]

const services = [
    {
    title: "Interior Designs",
    description: "Our interior design team in Bengaluru creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.",
    imgurl: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg?auto=format&fit=crop&q=80&w=1170"
  },
    {
    title: "Constructions",
    description: "Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.",
    imgurl: "https://pixabay.com/get/g81d21ecc757f33b1bc41427f2aa23ee054ed365a70824654fab6a3866675dc7c48da7b88a231728a7e2b5c0db063cc4f4779bc2b8f48397fca3edc7594d1a150_1280.jpg?auto=format&fit=crop&q=80&w=1171"
  },
    {
    title: "Renovations",
    description: "We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.",
    imgurl: "https://pixabay.com/get/g9fce5a879e758e3aeca2b743434aab2aefff878604257537127146a45097389f11c174c7a2a1f973ebbd8cbed6ec048cbea503e2d59442a2016c1bcf04cec016_1280.jpg?auto=format&fit=crop&q=80&w=1170"
  }
]

export const metadata = {
  title: "Best Interiors and Constructions in Bengaluru | Maria Concepts",

  description: "Maria Concepts at Bengaluru offers premium construction and renovation services tailored to your vision and lifestyle.",
  keywords: ["construction", "renovation", "architecture", "interior design", "home building"],
  authors: [{ name: "Maria Concepts" }],
  openGraph: {
    title: "Maria Concepts – Best Interiors and Constructions in Bengaluru",
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
    title: "Maria Concepts – Best Interiors and Constructions in Bengaluru",
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

          <section className="w-full py-12">
          <h2 className="text-2xl lg:text-3xl text-neutral-800 text-center">
            Why Choose Us?
          </h2>

          <div className="flex flex-wrap flex-col lg:flex-row xl:flex-row justify-center max-w-6xl py-4 mx-auto mt-6 text-lg lg:text-xl">
            <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Star className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">10+ years of experience in industry
              </p>

              </div>

            <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <WarrantyBadgeHighlight className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">Structural Warranty*
              </p>

              </div>

            <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Calendar className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
<p className="p-4">
            EMI Options </p></div>
            <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <TeamFill className="w-11 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />

            <p className="p-4">In-House Design & Engineering Team</p></div>
            <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Trophy className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">Trusted Quality</p></div>

            <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Time className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
<p className="p-4">
            On time delivery </p></div>
          </div>

          </section>

          <section className="py-12">

          <h2 className="text-2xl text-neutral-800 text-center my-4">
            Our Services
          </h2>

<div className="flex xl:justify-center xl:nowrap gap-4 flex-col md:flex-row overflow-x-auto xl:overflow-x-hidden px-2 md:px-6 mx-auto">
{services.map((item, index) => 

<div key={index} className="lg:max-w-sm md:max-w-xs flex flex-col shadow-lg rounded  pb-2 border border-neutral-200">
  <div className="h-full w-full relative overflow-hidden object-center text-white rounded-t border-b-2 border-primary-600">
    <img className="h-full w-full object-cover" src={item.imgurl} alt="card-image" loading="lazy" />
  </div>
  <div className = "p-4">
    <h6 className="mb-2 text-neutral-700 text-xl xl:text-lg">
      {item.title}
    </h6>
    <p className="text-secondary-600 leading-normal font-light text-xs pb-4 truncate">
      {item.description}
    </p>
  </div>
</div>  

)}

</div>

<div className="max-w-8xl mx-auto mt-6 py-6 lg:py-12 pl-8 flex flex-col gap-4 md:flex-row md:justify-evenly justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
            <h3  className="w-fulltext-center text-xl">
              Get a Free Quote 
            </h3>

              <Link className='d-block' href={'tel:+91(toll free number)'} target="_blank">
            <div className="flex flex-row items-center w-full min-w-xs">
              <div className=" p-3 bg-white rounded-full">
                <Phone className="w-6 lg:w-7 text-neutral-700" />
              </div>
              <div className="ml-6">
              <p className="text-left"><small className="bg-primary py-1 px-2 rounded-full text-neutral-900">Call Us Now</small><br/><span className="text-lg block mt-2">(toll free number)</span></p>
              </div>
            </div>
              </Link>
          </div>     
</section>
      <section className="text-neutral-800  p-0 mx-auto text-left text-neutral-800 bg-white pt-6">


                      <div className="w-full mx-auto text-neutral-800 text-center mt-6 py-8 max-w-7xl px-2">

          <h2 className="text-2xl text-neutral-800 text-center pb-4">
            Our Portfolio
          </h2>


<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {gridImages.map((item, index) => (

    <div key={index} className="grid gap-4">
      {item.col.map((item, index) => (
        <div key={index}>
            <Image className="h-auto max-w-full rounded-lg" src={item} alt="grid-images" width={400} height={300}/>
       </div>
      ))}
    </div>
  ))}
</div>

            <Link
              href="/gallery"
              className="block max-w-64 mx-auto mt-12 px-6 py-3 bg-primary-500 text-neutral-900 uppercase font-medium rounded hover:bg-primary-400 transition shadow-md"
              >
              View More
            </Link>

          </div>

                        <div className="max-w-4xl mx-auto p-4 xl:p-8">


                      <h2 className="text-2xl text-neutral-800 text-center">
            About Us
          </h2>

          
          <p className="p-2 text-center">
            At Maria Concept, we envision redefining modern spaces through creative design, sustainable construction, and timeless craftsmanship. Our goal is to create inspiring environments that blend beauty, comfort, and functionality — enriching the way people live and work.
</p>



          <div className="max-w-4xl text-center mx-auto mt-6">
            <h2 className=" text-2xl text-neutral-800">Mission</h2>
            <p className="p-2 text-center">
Our mission is to deliver complete construction and interior solutions with integrity, innovation, and precision. 
<br/><br/>
Backed by a skilled in-house team, we focus on using sustainable materials and advanced design practices to ensure every project reflects quality, value, and lasting trust.

          </p>
          </div>
              </ div>


      </section>
    </>
  );
}
