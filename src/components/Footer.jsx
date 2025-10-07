"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <section className="relative overflow-hidden text-center">
        <div className="flex flex-col md:flex-row justify-center px-8">


        <div className="basis-1/3 p-4">

        <div  className="bg-white text-gray-800 rounded p-8 max-w-sm">

                <h3 className="text-xl">
                        Maria Concepts
                </h3>
                <p>
                        Maria Construction and Interiors is a distinguished firm specialising in a wide range of services tailored to meet the diverse needs of our clients. With a steadfast commitment to excellence and innovation, we offer comprehensive solutions that elevate spaces and exceed expectations.
                </p>

                       <Link
              href="/contact"
              className="block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
              Contact Us
            </Link>     
        </div>
        </div>
      {/* Footer container */}

      <div className="basis-1/3 p-4">

      {/* Photos here */} 

      </div>

<div className="basis-1/3 text-left p-4">


      <h3 className="text-xl">Get in touch</h3>

      <div className="flex flex-col justify-evenly items-left gap-4">

        <div>
                <p>

             
        Phone Number
                </p>

       <p>


+91 90 36 36 86 88
       </p>
        </div>

        <div>

<p>
Email Address
</p>

<p>
contact@mariaconcepts.com
</p>
        </div>

        <div>


Office Address
        <br/>

# 4, Opp. Podar International School, <br/> Basavanapura, Gottigere Post, <br/>Bengaluru - 560 083.
        </div>

</div>
      </div>

                    </div>
      <p>&copy; Maria Concepts - 2025</p>

    </section>
  );
}