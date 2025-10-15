import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Image from "next/image";
import FullScreenButton from "@/components/FullScreenButton";

const projects = ["Residential", "Schools & colleges", "Churchs"]

const data = [
    {
        id:"1",
        title:"Project Management",
        project:"Residential",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/project-management.jpg",
    },
        {
        id:"2",
        title:"Building Construction",
        project:"Schools & colleges",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Building.jpg",
    },
        {
        id:"3",
        title:"Interiors",
        project:"Churchs",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Interior-1.jpg",
    },
        {
        id:"4",
        title:"Renovation",
        project:"Residential",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Renovation.jpg",
    },
        {
        id:"5",
        title:"Built-in Furniture",
        project:"Residential",
        imgUrl:"https://mariaconstructions.in/wp-content/uploads/2024/02/Built-In-Furniture.jpg",
    }
]

export const metadata = {
  title: "Our Projects | Maria Concepts",
};

export default function MyApp() {

  return (
    <>
          <Hero title={'Projects'}/>
      <main className="bg-gray-100 text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-left text-gray-800">
        <>

          <div className="flex flex-col justify-center gap-4 mx-auto">

          {projects.map((project, index) => (

            
            
            <div key={index}>
                    <h1 className="text-2xl text-primary-600">{project}</h1>
                    <div className="flex flex-row gap-8 flex-wrap">
                        {data && data.filter((i, index) => i.project === project).map((item, i) => (
                        <FullScreenButton key={i} src={item.imgUrl} alt={item.title} >
                          <Image  width={400} height={300} src={item.imgUrl} alt={item.title}/>
                        </FullScreenButton>
                        ))}
                    </div>
                    <br/>
                </div>
          ))}

            <div>

            </div>
          
          </div>

        </>
      </main>

      <ImageView />
    </>
  );
}
