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
        imgUrl:"/residential (1).jpg",
    },
        {
        id:"2",
        title:"Building Construction",
        project:"Residential",
        imgUrl:"/residential (2).jpg",
    },
        {
        id:"3",
        title:"Interiors",
        project:"Residential",
        imgUrl:"/residential (3).jpg",
    },
        {
        id:"4",
        title:"Renovation",
        project:"Residential",
        imgUrl:"/residential (4).jpg",
    },
        {
        id:"5",
        title:"Built-in Furniture",
        project:"Residential",
        imgUrl:"/residential (5).jpg",
    },
            {
        id:"6",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/schools (1).jpg",
    },
                {
        id:"7",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/schools (2).jpg",
    },
                {
        id:"8",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/schools (3).jpg",
    },
                {
        id:"9",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/schools (4).jpg",
    },
                {
        id:"10",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/schools (5).jpg",
    },
                    {
        id:"11",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/church (1).jpg",
    },
                        {
        id:"12",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/church (2).jpg",
    },
                        {
        id:"3",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/church (3).jpg",
    },                    {
        id:"14",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/church (4).jpg",
    },
                        {
        id:"15",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/church (5).jpg",
    }
]

export const metadata = {
  title: "Our Gallery | Maria Concepts",
};

export default function MyApp() {

  return (
    <>
          <Hero title={'Our Gallery'}/>
      <main className="bg-secondary-100 text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-left text-gray-800">
        <>

          <div className="flex flex-col justify-center gap-4 mx-auto">

          {projects.map((project, index) => (

            
            <div key={index}>
                    <h1 className="text-2xl text-primary-600 text-center py-8">{project}</h1>
                    <div className="flex flex-row gap-2 md:gap-4 flex-wrap justify-evenly">
                        {data && data.filter((i, index) => i.project === project).map((item, i) => (
                        <FullScreenButton className={'basis-1/2 md:basis-1/6'} key={i} src={item.imgUrl} alt={item.title} >
                          <Image className="max-w-80 h-80 object-cover border border-secondary"  width={400} height={300} src={item.imgUrl} alt={item.title}/>
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
