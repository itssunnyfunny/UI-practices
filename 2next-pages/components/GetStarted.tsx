
import Button from "./button"
function GetStared() {
    return (
      <div className=" mt-16">
           <div className=" pt-8">
            <div className="flex justify-between">
             <div className=" w-[50%]">svg</div>
             <div className="w-[50%]"> 
              <div>
              <div className=" text-5xl font-semibold ">Get in touch <br /> with our experts</div>
              <div className="mt-4 text-sm opacity-75">Discover how your company can <br />digitize its workflows</div>
              <div className="mt-6"><Button children="contact sales" /> </div>
            </div>
            </div>
           </div>
          </div>
           
           <div className=" my-14">
            <div className=" flex justify-between">
              <div className=" w-[50%] ">
                <div >😱🥶😈🤯😡</div>
                <div className="mt-8 text-5xl font-semibold">Get started <br /> with templates</div>
                <div  className="mt-4 text-sm opacity-75 max-w-sm">No need to start from scratch. Our community created customizabel templates for a juge variety of scenarios. with just a few clicks, you can create froms, views and graphs without any limitations. Make it a pefect fit for you business.</div>
                <div className="mt-14"> <div className=" flex gap-6">
             <div className=" border-2 bg-blue-600 rounded-full p-3" >😶‍🌫️</div>
             <div className=" border-2 bg-blue-600 rounded-full p-3" >🥶</div>
             </div></div>
              </div>
              <div className="w-[50%] text-center"> screen short</div>
            </div>
           </div>
      </div>
    )
  }
  
  export default GetStared