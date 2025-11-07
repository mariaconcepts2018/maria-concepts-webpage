import "@/app/globals.css";
import Hero from "@/components/Hero";
export const metadata = {
  title: "Services | Maria Concepts",
};

const data = [
  {
    "title": "Residential Interiors",
    "description": "Transform homes into personalized living spaces that balance comfort, style, and functionality through thoughtful design and premium materials.",
    "coverImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    "title": "Commercial Interiors",
    "description": "Design efficient and inspiring workplaces that elevate brand identity and enhance productivity through modern layouts and smart design.",
    "coverImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    "title": "Modular Kitchens",
    "description": "Craft sleek and functional modular kitchens with custom layouts, durable finishes, and clever storage solutions for every lifestyle.",
    "coverImage": "https://images.unsplash.com/photo-1632583824020-937ae9564495?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=958"
  },
  {
    "title": "Living Room Design",
    "description": "Create elegant living spaces with balanced lighting, comfortable furnishings, and a touch of luxury to make every moment special.",
    "coverImage": "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
  },
  {
    "title": "Bedroom Interiors",
    "description": "Design serene and cozy bedrooms featuring calming color palettes, ambient lighting, and furniture layouts that promote rest and relaxation.",
    "coverImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    "title": "Office Interiors",
    "description": "Build inspiring office environments that foster collaboration, focus, and creativity with ergonomic furniture and modern aesthetics.",
    "coverImage": "https://images.unsplash.com/photo-1551292831-023188e78222"
  },
  {
    "title": "Retail Store Design",
    "description": "Design engaging retail spaces that captivate customers, showcase products beautifully, and enhance the overall shopping experience.",
    "coverImage": "https://images.unsplash.com/photo-1522199710521-72d69614c702"
  },
  {
    "title": "Renovation & Remodeling",
    "description": "Breathe new life into existing spaces with smart upgrades, contemporary aesthetics, and functional improvements that redefine style.",
    "coverImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  },
  {
    "title": "3D Visualization & Rendering",
    "description": "Bring your concepts to life with realistic 3D renders and walkthroughs that help you visualize the final design before execution.",
    "coverImage": "https://images.unsplash.com/photo-1652792997653-7e5897fb309a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
  }
]


export default function MyApp() {

  return (
    <>
          <Hero title={'Our Services'}/>
      <main className=" text-neutral-800 px-4 xl:px-8 py-12 mx-auto text-neutral-800">

          <div className="flex flex-row flex-wrap xl:flex-wrap justify-center pt-4 pb-4 gap-8 mx-auto xl:max-w-7xl">

            {data.map ((item, index) => (
<div key={index} className="cursor-pointer group relative flex flex-col  justify-center bg-white shadow-sm border border-slate-200 rounded-lg w-84 md:w-96 hover:shadow-lg transition-shadow duration-300">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
         src={item.coverImage} alt={item.title} />
  </div>
  <div className="p-4">
    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
      {item.title}
    </h6>
    <p className="text-slate-600 leading-normal font-light truncate">{item.description}</p>
  </div>
</div> 
            ))}

          </div>
      </main>
    </>
  );
}
