"use client"
import ContactForm from "./ContactForm";
import QuestionnaireForm from "./QuestionnaireForm";

export default function ContactModal({ open, setOpen }) {


  

  return (
    <>
    <div className={`flex justify-center transition transition-duration-300 ${open? 'scale-100' : ' scale-0'} fixed inset-0 overflow-y-scroll overflow-x-hidden w-screen z-500 xl:inset-x-auto`}>
<div className="w-full rounded shadow-lg md:w-1/2 xl:w-1/4 bg-white border border-neutral-300 mx-auto my-auto mb-auto py-6 px-4 md:px-8 md:h-[50vh] min-h-[50vh] flex flex-col justify-center">

<ContactForm setOpen={setOpen} />

</div>
</div>
    </>
  );
}
