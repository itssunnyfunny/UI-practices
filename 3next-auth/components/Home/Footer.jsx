

function Footer() {
  return (
    <div className="mt-14 bg-slate-500 p-16 text-white  grid grid-cols-[200px_1fr_200px]">
        <div className="col-start-2">
            <div className="flex">
            <div className=" text-xl font-semibold">ninox</div>
            <div className="ml-16 grid grid-cols-5 gap-20 text-xs font-extralight opacity-75">
                <div className=" col-span-1 gap-y-5">
                    <span className=" text-sm  
                 opacity-95"> Product</span>
                     <br />
                    Platforms <br />
                    Templates <br />
                    Pricing
    
                </div>
                <div className=" col-span-1 ">
                    <span>Customers</span> <br />
                    Our partners <br />
                    Referneces <br />
                </div>
                <div className=" col-span-1">
                    <span>Universe</span> <br />
                    Documentation <br />
                    FAQ <br />
                    News <br />
                    Forum  <br />
                    PressKit <br />
                </div>
                <div className=" col-span-1">
                    <span>Company</span> <br />
                    Careers <br />
                    Blog <br />
                    Webinars <br />
                    GDPR  <br />
                </div>
                <div className=" col-span-1">
                    <span>Support</span> <br />
                    Help Center <br />
                    Contact us <br />
                    <span>+91 23345-47255</span> <br />
                    India <br />
                </div>
            </div>
        </div>
        <div>
            two coard
        </div>
        <div className="flex justify-between"> 
            <div>Change language 💴</div>
            <div className=" "><span>©2020 Ninox</span>  <span>imprint</span> <span>Terms & COnditions <span>Privacy</span></span></div>
            </div>
        </div>
        </div>
  )
}

export default Footer