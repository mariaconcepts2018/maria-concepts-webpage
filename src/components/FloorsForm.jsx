const options = ['1', '2', '3 or More', 'Duplex'];

export default function FloorsForm({setStep, formData, setMessage, setFormData }){

  const handleClick = async (e) =>{

            setStep(6);
            setMessage(null)
            setFormData({ ...formData, 'floors': e.target.value });

  }
  
return(<>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              What is the number of floors on your property?
            </h2>
<div className="flex flex-col gap-y-6 mt-8">

{options.map((item, index) => (
  <button
    key={index}
    type="button"
    value={item}
    onClick={handleClick}
    className={`capitalize w-full mx-auto px-4 py-2 rounded-lg transition hover:bg-primary-500 hover:text-neutral-800 active:bg-primary-500 active:text-neutral-800  cursor-pointer
        border border-gray-300 text-neutral-600"
        }`}
    >
        {item}
    </button>
))}
</div>
          </div>
</>)
}