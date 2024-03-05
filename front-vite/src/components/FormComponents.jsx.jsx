export function InputForm({ label, value, setValue, type }) {
  return (
    <label className="relative block mb-4">
      <span className='bg-black p-1 absolute ml-5 -mt-4'>{label}</span>
      <input className={`w-full h-10 p-1 border border-blue bg-light-blue rounded-lg pt-5 ${type === 'datalist' ? 'list' : ''}`} 
      type={type} 
      value={value} 
      onChange={(e) => setValue(e.target.value)} />
    </label>
  )
}

export function TextAreaForm({ label, value, setValue }) {
  return (
    <label className="relative block mb-4">
      <span className='bg-black p-1 absolute ml-5 -mt-4'>{label}</span>
      <textarea className='w-full h-40 p-1 border border-blue bg-light-blue rounded-lg pt-5' value={value} onChange={(e) => setValue(e.target.value)} />
    </label>
  )
}

 
