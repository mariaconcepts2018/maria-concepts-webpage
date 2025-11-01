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
      <main className="px-1 xl:px-8 py-12 mx-auto text-left bg-neutral-100 text-neutral-800">

          <div className="max-w-7xl p-2 md:p-6 mx-auto text-left text-neutral-800 mt-4">

            <ContactForm />
          
          </div>

      </main>
    </>
  );
}
