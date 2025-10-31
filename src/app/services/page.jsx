import "@/app/globals.css";
import Hero from "@/components/Hero";
export const metadata = {
  title: "Services | Maria Concepts",
};

export default function MyApp() {

  return (
    <>
          <Hero title={'Our Services'}/>
      <main className="bg-gray-100 text-gray-800 px-4 xl:px-8 py-12 mx-auto text-gray-800">

          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly pt-4 pb-4 gap-8">

            <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
               <svg className = "py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
    <path fill="currentColor" d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"/>
</svg>
                <p className="text-xl">Project Management</p>
            </div>
            <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
              <svg className = "py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <rect width="18" height="20" x="3" y="2" rx="2"/>
        <path d="M8 10h.01M12 2v15m4-7h.01M3 17h18"/>
    </g>
</svg>
                <p className="text-xl">Interior Design</p>
            </div>
            <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
<svg className = "py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M14 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM9 8h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm12 8h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-8 0h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6V4h12Z"/>
</svg>

<p className="text-xl">Constructions</p>
            </div>
                                    <div className="rounded shadow-sm p-4  md:basis-1/5 hover:shadow-lg cursor-pointer transition">
<svg className = "py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024"><path fill="currentColor" d="m896 320l64 576q0 53-37.5 90.5T832 1024t-90.5-37.5T704 896l64-576q-31 0-61-36t-48.5-88T640 96q0-21 1-33t8.5-30T672 0h32v64q0 54 37 91t91 37t91-37t37-91V0h32q15 15 22.5 33t8.5 30t1 33q0 48-18.5 100T957 284t-61 36zm-63.5 512q-26.5 0-45.5 18.5T768 896t19 45.5t45.5 18.5t45-19t18.5-45.5t-18.5-45t-45-18.5zM256 608q0 40 18.5 68t45.5 28v160q0 66-47 113t-113 47t-113-47T0 864V704q27 0 45.5-28T64 608t-18.5-68T0 512q0-27 19-45.5T64 448h64V256l-64-64L96 0h128l32 192l-64 64v192h64q27 0 45.5 18.5T320 512q-26 0-45 28t-19 68z"/></svg>
              <p className="text-xl">Renovation</p>
            </div>
                        <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
<svg className="py-6 text-primary-600" width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
    <path fill="currentColor" d="M14 1H1C0 1 0 2.5 1 2.5v2.75h13V2.5c1 0 1-1.5 0-1.5M7.5 4c-.25 0-.5-.25-.5-.5s.25-.5.5-.5s.5.25.5.5s-.25.5-.5.5M1 9h13V6H1zm6.5-2c.25 0 .5.25.5.5s-.25.5-.5.5s-.5-.25-.5-.5s.25-.5.5-.5M1 9.75v4.75c0 .5 2.5.5 2.5 0V13h8v1.5c0 .5 2.5.5 2.5 0V9.75zM7.5 11c.25 0 .5.25.5.5s-.25.5-.5.5s-.5-.25-.5-.5s.25-.5.5-.5"/>
</svg>
              <p className="text-xl">Built-in Furnitures</p>
            </div>

                                    <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
<svg className="py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 1v2H9v2h2v.98l-5 3.5V12H2v10h20V12h-4V9.48l-5-3.5V5h2V3h-2V1h-2Zm1 6.72l4 2.8V20h-1v-4a3 3 0 1 0-6 0v4H8v-9.48l4-2.8ZM6 20H4v-6h2v6Zm5 0v-4a1 1 0 1 1 2 0v4h-2Zm7 0v-6h2v6h-2Z"/>
</svg>
              <p className="text-xl">Institution and Church Works</p>
            </div>

                                    <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
<svg className="py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20">
    <path fill="currentColor" d="M18.178 11.373a.7.7 0 0 1 .7.7v5.874c.027.812-.071 1.345-.434 1.68c-.338.311-.828.4-1.463.366H3.144C2.5 19.961 2 19.7 1.768 19.173c-.154-.347-.226-.757-.226-1.228v-5.873a.7.7 0 0 1 1.4 0v5.873c0 .232.026.42.07.562l.036.098l-.003-.01c.001-.013.03-.008.132-.002h13.84c.245.014.401 0 .456-.001l.004-.001c-.013-.053.012-.27 0-.622v-5.897a.7.7 0 0 1 .701-.7ZM10.434 0c.264 0 .5.104.722.297l8.625 8.139a.7.7 0 1 1-.962 1.017l-8.417-7.944l-9.244 7.965a.7.7 0 0 1-.915-1.06L9.689.277l.086-.064c.214-.134.428-.212.66-.212Z"/>
</svg>
              <p className="text-xl">Residentials</p>
            </div>

                                    <div className="rounded shadow-sm p-4 md:basis-1/5 hover:shadow-lg cursor-pointer transition">
<svg className="py-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 22V8c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22zM6.5 11h-1m5 0h-1m-3-4h-1m1 8h-1m5-8h-1m1 8h-1m9 0h-1m1-4h-1m.5-3h-4v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8" color="currentColor"/>
</svg>
              <p className="text-xl">Office Spaces</p>
            </div>

          </div>


      </main>
    </>
  );
}
