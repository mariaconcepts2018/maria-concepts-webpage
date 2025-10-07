import "@/app/globals.css";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        <>
          <Hero/>

          <div className="w-1/2 p-6 mx-auto text-center bg-white text-black mt-4">
          <h2 className="text-xl">
            About Us
          </h2>
          
          <p>
            Maria Construction and Interiors is a distinguished firm specialising in a wide range of services tailored to meet the diverse needs of our clients. With a steadfast commitment to excellence and innovation, we offer comprehensive solutions that elevate spaces and exceed expectations. ,<br/>
At Maria Construction and Interiors, project management is the cornerstone of our operations. Our experienced project managers oversee every aspect of construction projects, ensuring seamless execution and timely delivery. From inception to completion, we maintain a keen focus on meeting client requirements while adhering to the highest standards of quality and efficiency.
          </p>
          </div>

          <div className="w-1/2 p-6 mx-auto text-left bg-white text-black mt-4">
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
          <div className="text-center">
                      <Link
              href="/services"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
            >
              Read More
            </Link>

          </div>

          <div className="mt-6 rounded flex flex-row justify-between bg-gray-900 text-white p-4 items-center">
            <div  className="text-xl">
              Get a free quote 
            </div>

            <div>
              <p>+91 9036368688 </p><small> Call us now</small>
            </div>
          </div>
                  <div className="text-center mt-6">
              <h2 className="text-xl">Appreciations for Construction & Interior Projects</h2>

              <div className="flex flex-wrap flex-row">


                    <Image className="basis-1/4 p-4" src="/1-3.png" alt="Appreciation Photos" width={800} height={400} />
                    <Image className="basis-1/4 p-4" src="/2_2-1.png" alt="Appreciation Photos" width={800} height={400} />
                    <Image className="basis-1/4 p-4" src="/3_1.png" alt="Appreciation Photos" width={800} height={400} />
                    <Image className="basis-1/4 p-4" src="/4_1-1.png" alt="Appreciation Photos" width={800} height={400} />
                    <Image className="basis-1/4 p-4" src="/7_1-1.png" alt="Appreciation Photos" width={800} height={400} />
                    <Image className="basis-1/4 p-4" src="/7_1-1.png" alt="Appreciation Photos" width={800} height={400} />
             
        </div>
            </div>

          </div>
        </>
      </main>
      <Footer/>
    </>
  );
}
