import "@/app/globals.css";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";

export const metadata = {
  title: "Get a Free Quote | Maria Concepts",
};

const imgSmall = getCloudinaryUrl("KBEL7733_fk6opu", { aspect_ratio: "9:16" });
const imgLarge = getCloudinaryUrl("KBEL7733_fk6opu");

export default function MyApp() {
  return (
    <>
      <Hero
        title={"Get a Free Quote"}
        imgLarge={imgLarge}
        imgSmall={imgSmall}
      />
      <div className="min-h-screen">
        <h1 className="text-2xl text-center py-6">Get a Quote</h1>
        <div className="max-w-md mx-auto px-2">
          <ContactForm isUrl={true} />
        </div>
      </div>
    </>
  );
}
