export default function CardEmpleyments({image, name, cargo}) {
  return (
    <div className='bg-white p-6 w-4/5'>
        <img src={image} alt={image} />
        <h1 className="text-black">{name}</h1>
        <p className="text-black">{cargo}</p>
        <input type="checkbox" />
    </div>
  )
}