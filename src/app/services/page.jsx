import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";

const data = [
    {
        id:"1",
        title:"Project Management",
        content:"Maria Construction and Interiors provides expert project management services, overseeing all aspects of construction projects from initiation to completion Our experienced project managers ensure that projects are delivered on time, within budget, and according to the highest quality standards.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/project-management.jpg",
    },
        {
        id:"2",
        title:"Building Construction",
        content:"We specialise in building construction, handling projects of various sizes and complexities, ranging from residential homes to commercial buildings. Our construction team is skilled in executing structural designs with precision, ensuring durability, safety, and aesthetic appeal.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Building.jpg",
    },
        {
        id:"3",
        title:"Interiors",
        content:"Maria Construction and Interiors offers interior design and implementation services to enhance the functionality and aesthetics of spaces. Our interior design experts work closely with clients to create customised interiors that reflect their preferences and meet their needs.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Interior-1.jpg",
    },
        {
        id:"4",
        title:"Renovation",
        content:"We excel in renovation services, revitalising existing structures to improve functionality, aesthetics, and energy efficiency. Whether it’s a home renovation, office refurbishment, or institutional upgrade, we provide comprehensive solutions tailored to our clients’ requirements.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Renovation.jpg",
    },
        {
        id:"5",
        title:"Built-in Furniture",
        content:"Maria Construction and Interiors designs and constructs built-in furniture pieces that seamlessly integrate with interior spaces. Our custom-built furniture solutions are crafted to maximise space utilisation and complement the overall design aesthetic of the environment.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Built-In-Furniture.jpg",
    },
        {
        id:"6",
        title:"Institutional and Church Works",
        content:"We specialise in institutional and church construction projects, understanding the unique requirements and sensitivities involved in such endeavours. Our team is experienced in delivering projects that meet the functional, aesthetic, and spiritual needs of institutional and religious organisations.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Institutional-And-Church-Work.jpg",
    },
        {
        id:"7",
        title:"Residentials",
        content:"Maria Construction and Interiors offers residential construction and renovation services, catering to the diverse needs and preferences of homeowners. From single-family homes to multi-unit developments, we deliver high-quality residential projects that exceed expectations.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/residental.jpg",
    },
        {
        id:"8",
        title:"Office Spaces",
        content:"We design and build functional and inspiring office spaces that promote productivity, collaboration, and employee well-being. Our office space solutions are tailored to the specific requirements of businesses, reflecting their brand identity and corporate culture.",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Office-Spaces.jpg",
    },
]

export const metadata = {
  title: "Services | Maria Concepts",
};

export default function MyApp() {

  return (
    <>
          <Hero title={'Our Services'}/>
      <main className="bg-gray-100 text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-gray-800">

          <div className="flex flex-row flex-wrap justify-center gap-4">

          {data && data.map((item, index) => (
            
                <div key={item.id} className={` py-8`}>
                            <h1  className="text-2xl text-primary-600 py-2">
                                {item.title}
                            </h1>
                    <Image width={400} height={300} src={item.imgUrl} alt={item.title}/>
                </div>
          ))}

            <div>

            </div>
          
          </div>

      </main>
    </>
  );
}
