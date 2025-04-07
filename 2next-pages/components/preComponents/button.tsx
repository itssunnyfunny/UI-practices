export default function Button({
    children = 'Btn',
    bgColor = 'bg-indigo-600',
    fontWeight = 'font-thin',
    textSize = 'text-xs'
  
  }) {
     return <div>
      <button className={` py-3 px-10 rounded-3xl border text-center opacity-80 ${fontWeight} ${bgColor} ${textSize} text-white  `}>
        {children}
      </button>
     </div>
  }