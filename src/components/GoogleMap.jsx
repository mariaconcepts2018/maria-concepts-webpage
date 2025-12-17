export default function GoogleMap({ className }) {
  return (
    <div className={"w-full lg:w-1/2 mx-auto h-auto " + className}>
      <h2 className="mb-8 text-xl">Locate Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.12191175612867!2d77.59473111715458!3d12.846468004116012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xff8e5e4d8303d81%3A0x22a0df4de9c9852c!2sMaria%20Concepts!5e0!3m2!1sen!2sin!4v1765948234260!5m2!1sen!2sin"
        width={300}
        height={200}
        title="google map"
        className="border-0 overflow-hidden w-full h-70 rounded"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
