import "@/app/globals.css";
import Hero from "@/components/Hero";
import {
  Calendar,
  Phone,
  Star,
  TeamFill,
  Time,
  Trophy,
  WarrantyBadgeHighlight,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import getCloudinaryUrl from "@/lib/cloudinary";

const heroSrc = getCloudinaryUrl("hero_gqdsnr");

const gridImages = [
  {
    col: [
      getCloudinaryUrl("premium_photo-1683140941523-f1fbbabe54d5_ohvz0j"),
      getCloudinaryUrl("premium_photo-1675616563084-63d1f129623d_xtubve"),
      getCloudinaryUrl("premium_photo-1670076515866-73822a3d610d_wa64aq"),
    ],
  },
  {
    col: [
      getCloudinaryUrl("premium_photo-1661779632194-6cf32a9b5325_dnx5mk"),
      getCloudinaryUrl("premium_photo-1661914953201-854a4ba9dc46_y6kyss"),
      getCloudinaryUrl("premium_photo-1683880731785-e5b632e0ea13_iva8nq"),
    ],
  },
  {
    col: [
      getCloudinaryUrl("premium_photo-1683140941523-f1fbbabe54d5_ohvz0j"),
      getCloudinaryUrl("premium_photo-1675616563084-63d1f129623d_xtubve"),
      getCloudinaryUrl("premium_photo-1670076515866-73822a3d610d_wa64aq"),
    ],
  },
  {
    col: [
      getCloudinaryUrl("premium_photo-1661779632194-6cf32a9b5325_dnx5mk"),
      getCloudinaryUrl("premium_photo-1661914953201-854a4ba9dc46_y6kyss"),
      getCloudinaryUrl("premium_photo-1683880731785-e5b632e0ea13_iva8nq"),
    ],
  },
];

const services = [
  {
    title: "Interior Designs",
    description:
      "Our interior design team in Bengaluru creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.",
    imgurl: getCloudinaryUrl("photo-1560448204-e02f11c3d0e2_biynvk"),
  },
  {
    title: "Constructions",
    description:
      "Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.",
    imgurl: getCloudinaryUrl("pexels-photo-323780_uivb7z"),
  },
  {
    title: "Renovations",
    description:
      "We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.",
    imgurl: getCloudinaryUrl("home-2486092_1280_shsr2f"),
  },
];

export const metadata = {
  title: "Best Interiors in Bengaluru | Maria Concepts",

  description:
    "Maria Concepts at Bengaluru offers premium construction and renovation services tailored to your vision and lifestyle.",
  keywords: [
    "construction",
    "renovation",
    "architecture",
    "interior design",
    "home building",
  ],
  authors: [{ name: "Maria Concepts" }],
  openGraph: {
    title: "Maria Concepts – Best Interiors in Bengaluru",
    description:
      "We offer premium construction and renovation services tailored to your vision and lifestyle.",
    url: "https://mariaconcepts.com",
    siteName: "Maria Concepts",
    images: [
      {
        url: "https://res.cloudinary.com/dylffjde8/image/upload/w_auto,q_50,c_limit/v1761220154/hero_gqdsnr.webp",
        width: 600,
        height: 315,
        alt: "Your Brand - Construction Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Concepts – Best Interiors and Constructions",
    description:
      "We offer premium construction and renovation services tailored to your vision and lifestyle.",
    images: [
      "https://res.cloudinary.com/dylffjde8/image/upload/w_auto,q_50,c_limit/v1761220154/hero_gqdsnr.webp",
    ],
  },
  alternates: {
    canonical: "https://mariaconcepts.com",
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Hero src={heroSrc} />

      <section className="w-full py-12">
        <h2 className="text-2xl lg:text-3xl text-neutral-800 text-center">
          Why Choose Us?
        </h2>

        <div className="flex flex-wrap flex-col lg:flex-row xl:flex-row justify-center max-w-6xl py-4 mx-auto mt-6 text-lg lg:text-xl">
          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Star className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">10+ years of experience in industry</p>
          </div>

          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <WarrantyBadgeHighlight className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">Structural Warranty*</p>
          </div>

          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Calendar className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">EMI Options </p>
          </div>
          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <TeamFill className="w-11 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />

            <p className="p-4">In-House Design & Engineering Team</p>
          </div>
          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Trophy className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">Trusted Quality</p>
          </div>

          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Time className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary text-neutral shadow-md" />
            <p className="p-4">On time delivery </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl text-neutral-800 text-center my-4">
          Our Services
        </h2>

        <div className="flex xl:justify-center xl:nowrap gap-4 flex-col md:flex-row md:overflow-x-scroll xl:overflow-x-hidden px-2 md:px-6 mx-auto max-w-4xl">
          {services.map((item, index) => (
            <div
              key={index}
              className="md:w-1/3 md:mx-auto flex flex-col shadow-lg rounded  pb-2 border border-neutral-200"
            >
              <div className="h-full w-full relative overflow-hidden object-center text-white rounded-t border-b-2 border-primary-600">
                <Image
                  className="w-full object-cover"
                  src={item.imgurl}
                  alt="card-image"
                  loading="lazy"
                  width={360}
                  height={360}
                  sizes="(max-width: 768px) 100vw, 50vw" // For responsive sizing
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-neutral-700 text-xl xl:text-lg">
                  {item.title}
                </h6>
                <p className="text-secondary-600 leading-normal font-light text-sm pb-4 truncate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-8xl mx-auto mt-6 py-6 lg:py-12 pl-8 flex flex-col gap-4 md:flex-row md:justify-evenly justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
          <h3 className="w-fulltext-center text-xl">Get a Free Quote</h3>

          <Link
            className="d-block"
            href={"tel:+91(toll free number)"}
            target="_blank"
          >
            <div className="flex flex-row items-center w-full min-w-xs">
              <div className=" p-3 bg-white rounded-full">
                <Phone className="w-6 lg:w-7 text-neutral-700" />
              </div>
              <div className="ml-6">
                <p className="text-left">
                  <small className="bg-primary py-1 px-2 rounded-full text-neutral-900">
                    Call us now
                  </small>
                  <br />
                  <span className="text-lg block mt-2">(toll free number)</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-neutral-800  p-0 mx-auto text-left text-neutral-800 bg-white pt-6">
        <div className="w-full mx-auto text-neutral-800 text-center mt-6 py-8 max-w-5xl px-2">
          <h2 className="text-2xl text-neutral-800 text-center pb-4">
            Our Portfolio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {gridImages.map((item, index) => (
              <div key={index} className="grid gap-2">
                {item.col.map((item, index) => (
                  <div key={index}>
                    <Image
                      className="h-full w-auto max-w-full rounded-lg"
                      src={item}
                      alt="grid-images"
                      width={400}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <Link
            href="/gallery"
            className="block max-w-64 mx-auto mt-12 px-6 py-3 bg-primary-500 text-neutral-900 uppercase rounded hover:bg-primary-400 transition shadow-md"
          >
            View More
          </Link>
        </div>

        <div className="max-w-4xl mx-auto p-4 xl:p-8">
          <h2 className="text-2xl text-neutral-800 text-center">About Us</h2>

          <p className="p-2 text-center">
            At Maria Concept, we envision redefining modern spaces through
            creative design, sustainable construction, and timeless
            craftsmanship. Our goal is to create inspiring environments that
            blend beauty, comfort, and functionality — enriching the way people
            live and work.
          </p>

          <div className="max-w-4xl text-center mx-auto mt-6">
            <h2 className=" text-2xl text-neutral-800">Mission</h2>
            <p className="p-2 text-center">
              Our mission is to deliver complete construction and interior
              solutions with integrity, innovation, and precision.
              <br />
              <br />
              Backed by a skilled in-house team, we focus on using sustainable
              materials and advanced design practices to ensure every project
              reflects quality, value, and lasting trust.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
