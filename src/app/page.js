import "@/app/globals.css";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="bg-white text-gray-800">
        <>
          <Hero/>

          <div className="max-w-7xl p-8 px-16 mx-auto text-center bg-white text-gray-800 mt-4">
          <h2 className="text-xl">
            About Us
          </h2>
          
          <p>
            Maria Construction and Interiors is a distinguished firm specialising in a wide range of services tailored to meet the diverse needs of our clients. With a steadfast commitment to excellence and innovation, we offer comprehensive solutions that elevate spaces and exceed expectations. ,<br/>
At Maria Construction and Interiors, project management is the cornerstone of our operations. Our experienced project managers oversee every aspect of construction projects, ensuring seamless execution and timely delivery. From inception to completion, we maintain a keen focus on meeting client requirements while adhering to the highest standards of quality and efficiency.
          </p>
          </div>

          <div className="max-w-7xl p-6 mx-auto text-left bg-white text-gray-800 mt-4">
          <div className="p-4">

                    <h2 className="text-xl">
            Our Services
          </h2>
          <p>We are a firm that specializes in the services related to.</p>
          <ul className="list-disc ml-6">
            <li>Project Management</li>
            <li>Building Construction</li>
            <li>Interiors</li>
            <li>Renovation</li>
            <li>Built-In Furniture</li>
            <li>Institutional And Church Work</li>
            <li>Residentials</li>
            <li>Office Spaces</li>
          </ul>

          </div>
          <div className="text-left lg-text-center mt-4">
                      <Link
              href="/services"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Read More
            </Link>

          </div>

          <div className="mt-6 p-8 rounded flex flex-col gap-4 md:flex-row justify-between bg-gray-900 text-white items-center">
            <div  className="text-xl">
              Get a free quote 
            </div>

            <div className="flex flex-row items-center gap-4">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e3e3e3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              </div>
              <div>
              <p>+91 9036368688 </p><small> Call us now</small>
              </div>
            </div>
          </div>
                  <div className="text-center mt-6">
              <h2 className="text-xl">Appreciations for Construction & Interior Projects</h2>

              <div className="flex flex-wrap flex-row justify-center items-center gap-2">

                    <Image className="basis-1/2 md:basis-1/4" src="/1-3.png" alt="Appreciation Photos" width={400} height={200} />
                    <Image className="basis-1/2 md:basis-1/4" src="/2_2-1.png" alt="Appreciation Photos" width={400} height={200} />
                    <Image className="basis-1/2 md:basis-1/4" src="/3_1.png" alt="Appreciation Photos" width={400} height={200} />
                    <Image className="basis-1/2 md:basis-1/4" src="/4_1-1.png" alt="Appreciation Photos" width={400} height={200} />
                    <Image className="basis-1/2 md:basis-1/4" src="/7_1-1.png" alt="Appreciation Photos" width={400} height={200} />
                    <Image className="basis-1/2 md:basis-1/4" src="/7_1-1.png" alt="Appreciation Photos" width={400} height={200} />
             
        </div>
            </div>

          </div>
        </>
      </main>
    </>
  );
}
