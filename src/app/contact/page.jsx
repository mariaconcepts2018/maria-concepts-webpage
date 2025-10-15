import "@/app/globals.css";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Contact Us | Maria Concepts",
};

export default function MyApp({ }) {
    
  return (
    <>
          <Hero title={'Contact Us'}/>
      <main className="bg-white text-gray-800 px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-left bg-gray-100 text-gray-800">

          <div className="max-w-7xl p-2 md:p-6 mx-auto text-left bg-white text-gray-800 mt-4">

            <ContactForm />
          
          </div>

      </main>
    </>
  );
}
