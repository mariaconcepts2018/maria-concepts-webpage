"use client";

export default function Footer() {

  return (
    <section className="relative overflow-hidden text-center p-4 flex flex-row justify-evenly">

        <div className="basis-1/3">
                <h3 className="text-xl">
                        Maria Concepts
                </h3>
                <br/>
                <p>
                        Maria Construction and Interiors is a distinguished firm specialising in a wide range of services tailored to meet the diverse needs of our clients. With a steadfast commitment to excellence and innovation, we offer comprehensive solutions that elevate spaces and exceed expectations.
                </p>
        </div>
      {/* Footer container */}

<div className="basis-1/3 text-left p-4">


      <h3 className="text-xl">Get in touch</h3>

      <div className="flex flex-col justify-evenly items-left gap-4">

        <div>
             
        Phone Number

        <br/>

+91 90 36 36 86 88
        </div>

        <div>

Email Address
        <br/>


contact@mariaconcepts.com
        </div>

        <div>


Office Address
        <br/>

# 4, Opp. Podar International School, <br/> Basavanapura, Gottigere Post, <br/>Bengaluru - 560 083.
        </div>

</div>
      </div>

    </section>
  );
}
