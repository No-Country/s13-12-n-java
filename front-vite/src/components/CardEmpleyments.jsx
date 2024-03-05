import "./probando2.css"

export default function CardEmpleyments({image, name, cargo}) {
  return (
    <div className='bg-white-employee flex justify-between items-center gap-4 rounded-xl shadow-sm w-5/6 lg:w-full lg:p-6 lg:bg-white-transparent lg:rounded-sm lg:shadow-none' >
        <img className="m-3 lg:hidden" src="./images/logoName.svg" alt="nameId" />
        <img className="order-3 max-w-24 min-w-24 rounded-r-lg lg:order-first" src={image} alt={image} />
        <div className=" w-full flex flex-col items-start">
          <h1 className="text-black sm:text-xl text-sm font-bold">{name}</h1>
          <p className="text-black text-xs sm:text-lg">{cargo}</p>
        </div>
        <input className="hidden lg:block checkbox checkbox-primary rounded-md" type="checkbox" />
    </div>
  )
}