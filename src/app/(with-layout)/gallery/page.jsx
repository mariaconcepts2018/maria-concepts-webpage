import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Image from "next/image";

export const metadata = {
  title: "Our Gallery | Maria Concepts",
};

const gridImages = [
  {
    col: [
      "https://plus.unsplash.com/premium_photo-1683140941523-f1fbbabe54d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://plus.unsplash.com/premium_photo-1670076515866-73822a3d610d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1678104076255-fcf85b026555?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  {
    col: [
      "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      "https://plus.unsplash.com/premium_photo-1676823570845-d2dd715c9967?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://plus.unsplash.com/premium_photo-1661964178554-cb583b357dd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    ],
  },  {
    col: [
      "https://plus.unsplash.com/premium_photo-1661779632194-6cf32a9b5325?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://plus.unsplash.com/premium_photo-1661914953201-854a4ba9dc46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      "https://plus.unsplash.com/premium_photo-1674730952302-c9c9bc5da824?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1156",
    ],
  },  {
    col: [
      "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1678229915680-edef57d8c234?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    ],
  },
]

export default function MyApp() {



  return (
    <>
      <Hero title={'Our Gallery'}/>
      <main className="px-4 xl:px-8 py-12 mx-auto text-left">
        <>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gridImages.map((item, index) => (
      
          <div key={index} className="grid gap-4">
            {item.col.map((item, index) => (
              <div key={index}>
                  <Image className="h-auto max-w-full rounded-lg" src={item} alt="grid-images" width={400} height={300}/>
             </div>
            ))}
          </div>
        ))}
      </div>

        </>
      </main>

      <ImageView />
    </>
  );
}
