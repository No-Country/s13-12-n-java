export default function CardEmpleyments({image, name, cargo}) {
  return (
    <div className='bg-white flex justify-between items-center gap-4 rounded-xl shadow-lg w-5/6' style={{ boxShadow: '1px 1px 3px black'}}>
        <img className="m-3" src="./images/logoName.svg" alt="nameId" />
        <img className="order-3 w-24 rounded-r-lg" src={image} alt={image} />
        <div className=" w-full flex flex-col items-start">
          <h1 className="text-black sm:text-xl text-sm font-bold">{name}</h1>
          <p className="text-black text-xs sm:text-lg">{cargo}</p>
        </div>
        <input className="hidden" type="checkbox" />
    </div>
  )
}