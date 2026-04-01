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

const imgSmall = getCloudinaryUrl("FBZF7418_ya2fkd", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("FBZF7418_ya2fkd");

const gridImages = [
  {
    col: [
      {
        src: getCloudinaryUrl("IMG_4440_v1crnt"),
        alt: "Warm and elegant vanity unit with storage and partition",
      },
      {
        src: getCloudinaryUrl("RNRA9126_az04xd"),
        alt: "Living hal with granite flooring and veneer false cieling, ss staircase railings with glasses",
      },
    ],
  },

  {
    col: [
      {
        src: getCloudinaryUrl("PGSQ2308_jucej1"),
        alt: "Kids bedroom with wardrobe, study table and false cieling",
      },
      {
        src: getCloudinaryUrl("OUMK7387_ztxsix"),
        alt: "Veneer False ceiling, chandelier with led lights",
      },
    ],
  },

  {
    col: [
      {
        src: getCloudinaryUrl("QLGZ0787_bgtdvn"),
        alt: "Elegant and Luxury Modular Kitchens with profile glasses and quartz counter-top",
      },
      {
        src: getCloudinaryUrl("AFPP3467_y5v92w"),
        alt: "Master Bedroom, wardrobe with premium digital glass shutter",
      },
    ],
  },

  {
    col: [
      {
        src: getCloudinaryUrl("ASYE8945_fgiky2"),
        alt: "Study table, storage unit with profile glasses",
      },
      {
        src: getCloudinaryUrl("THMA9754_drvzux"),
        alt: "Pooja unit / Alter with high quality laminates, co-lights and spotlights",
      },
    ],
  },
];

const services = [
  {
    title: "Interiors",
    description:
      "Our interior design team in Bengaluru creates elegant and functional spaces with precision, ensuring durability, safety, and exceptional aesthetic appeal.",
    imgurl: getCloudinaryUrl("island-kitchen-edited_ejcd3c", {
      aspect_ratio: "1:1",
    }),
  },
  {
    title: "Constructions",
    description:
      "Our construction team delivers high-quality structures built with precision, combining strength, functionality, and modern design excellence.",
    imgurl: getCloudinaryUrl("Building-1_yvshdh", {
      aspect_ratio: "1:1",
    }),
  },
  {
    title: "Renovations",
    description:
      "We provide expert renovation services, transforming homes, offices, and commercial spaces with modern designs and personalized interior solutions tailored to each client’s vision.",
    imgurl: getCloudinaryUrl("IMAGE-1_Scene_1_xiscdb", { aspect_ratio: "1:1" }),
  },
];

export const metadata = {
  title: "Maria Concepts - Constructions & Interiors in Bengaluru",

  description:
    "Maria Concepts at Bengaluru offers premium interiors, construction and renovation services tailored to your vision and lifestyle.",
  keywords: [
    "interior design",
    "construction",
    "renovation",
    "architecture",
    "home building",
  ],
  authors: [{ name: "Maria Concepts" }],
  openGraph: {
    title: "Maria Concepts – Constructions & Interiors in Bengaluru",
    description:
      "We offer premium construction and renovation services tailored to your vision and lifestyle.",
    url: "https://www.mariaconcepts.com",
    siteName: "Maria Concepts",
    images: [
      {
        url: "https://res.cloudinary.com/dylffjde8/image/upload/w_auto,q_50,c_limit/v1761220154/RNRA9126_az04xd.webp",
        width: 600,
        height: 315,
        alt: "Maria Concepts - Duplex Interiors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Concepts – Constructions & Interiors in Bengaluru",
    description:
      "We offer premium construction and renovation services tailored to your vision and lifestyle.",
    images: [
      "https://res.cloudinary.com/dylffjde8/image/upload/w_auto,q_50,c_limit/v1761220154/hero_gqdsnr.webp",
    ],
  },
  alternates: {
    canonical: "https://www.mariaconcepts.com",
  },
};

export default function MyApp({}) {
  return (
    <>
      <Hero imgLarge={imgLarge} imgSmall={imgSmall} />

      <section className="w-full py-12">
        <h2 className="text-2xl lg:text-3xl text-neutral-800 text-center">
          Why Choose Us?
        </h2>

        <div className="flex flex-wrap flex-col lg:flex-row xl:flex-row justify-center max-w-6xl py-4 mx-auto mt-6 text-lg lg:text-xl">
          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Star className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary-500 text-neutral-900 shadow-md" />
            <p className="p-4">10+ years of experience in industry</p>
          </div>

          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <WarrantyBadgeHighlight className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary-500 text-neutral-190 shadow-md" />
            <p className="p-4">Structural Warranty*</p>
          </div>

          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Calendar className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary-500 text-neutral-900 shadow-md" />
            <p className="p-4">EMI Options </p>
          </div>
          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <TeamFill className="w-11 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary-500 text-neutral-900 shadow-md" />

            <p className="p-4">In-House Design & Engineering Team</p>
          </div>
          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Trophy className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary-500 text-neutral-900 shadow-md" />
            <p className="p-4">Trusted Quality</p>
          </div>

          <div className="pl-6 lg:basis-1/2 flex justify-start items-center w-full rounded xl:basis-1/2">
            <Time className="w-10 h-10 lg:w-13 lg:h-13 m-2 p-2 rounded-full bg-primary-500 text-neutral-900 shadow-md" />
            <p className="p-4">On time delivery </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl text-neutral-800 text-center my-4">
          Our Services
        </h2>

        <div className="flex xl:justify-center xl:nowrap gap-2 flex-row md:flex-row md:overflow-x-scroll xl:overflow-x-hidden px-2 md:px-6 mx-auto max-w-4xl">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-1/3 md:w-1/3 mx-auto flex flex-col shadow-lg rounded  pb-2 border border-neutral-200"
            >
              <div className="h-full w-full relative overflow-hidden object-center text-white rounded-t border-b-2 border-primary-600">
                <Image
                  className="w-full h-full object-cover"
                  src={item.imgurl + "?"}
                  alt="card-image"
                  loading="lazy"
                  width={360}
                  height={360}
                  sizes="(max-width: 768px) 100vw, 50vw" // For responsive sizing
                />
              </div>
              <div className="px-4 py-2">
                <h6 className="text-neutral-700 text-sm xl:text-lg">
                  {item.title}
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-8xl mx-auto mt-6 py-6 lg:py-12 pl-8 flex flex-col gap-4 md:flex-row md:justify-evenly justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
          <h3 className="w-fulltext-center text-xl">Get a Free Quote</h3>

          <Link
            className="d-block"
            href={"tel:+91 70262 52255"}
            target="_blank"
          >
            <div className="flex flex-row items-center w-full min-w-xs">
              <div className=" p-3 bg-white rounded-full">
                <Phone className="w-6 lg:w-7 text-neutral-700" />
              </div>
              <div className="ml-6">
                <p className="text-left">
                  <small className="bg-primary-500 py-1 px-2 rounded-full text-neutral-900">
                    Call us now
                  </small>
                  <br />
                  <span className="text-lg block mt-2">70262 52255</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="text-neutral-800  p-0 mx-auto text-left text-neutral-800 bg-white pt-6">
        <div className="w-full mx-auto text-neutral-800 text-center mt-6 py-8 max-w-5xl px-2">
          <h4 className="text-2xl text-neutral-800 text-center pb-4">
            Our Portfolio
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {gridImages.map((item, index) => (
              <div key={index} className="grid gap-2">
                {item.col.map((item, index) => (
                  <div className="relative" key={index}>
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={300}
                    />
                    <p className="absolute bottom-0 p-1 text-xs  px-4 font-light bg-none text-black opacity-50">
                      &copy; mariaconcepts
                    </p>
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
          <h5 className="text-2xl text-neutral-800 text-center">About Us</h5>

          <p className="p-2 text-center">
            At Maria Concept, we envision redefining modern spaces through
            creative interior design, sustainable construction, and timeless
            craftsmanship. Our goal is to create inspiring environments that
            blend beauty, comfort, and functionality — enriching the way people
            live and work.
          </p>

          <div className="max-w-4xl text-center mx-auto mt-6">
            <h5 className=" text-2xl text-neutral-800">Mission</h5>
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
