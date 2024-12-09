import Button from "../Button"

 export default function Landing() {
  return (
    <div>
         <nav className="flex justify-between  top-0 mt-7">
      <div className=" text-xl font-semibold">ninox</div>
      <div className=" flex justify-between gap-x-16 -ml-20 text-xs ">
        
      <div> Product ⋎</div>
      <div> Pricing</div>
      <div>Partners ⋎</div>
      <div>Blog</div>
      <div> Support ⋎</div>
      </div>
      <div><Button children="sign in" /></div>
       </nav>

       <div className=" flex justify-between mt-20">
         <div className="">
          <div className=" text-5xl font-semibold">Automate business <br /> Processes with Ninox</div>
          <div className=" max-w-xs text-sm mt-8 opacity-65">move from spreadsheets to a collaborative platform, that is easy to customize</div>
          <div className=" mt-8"><Button children="Start free trial" /></div>
         </div>
         <div> screenshot.</div>
       </div>
       <div className=" flex mt-40">
        <div className=" text-sm font-medium ">TRUSTED BY</div>
        <div className=" ml-20">name of companies</div>
        </div>

    </div>
  )
}

