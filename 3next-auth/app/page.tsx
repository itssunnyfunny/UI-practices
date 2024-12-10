import Button from "@/components/Button";
import CustomerReview from "@/components/Home/CustomerRe";
import GetStared from "@/components/Home/GetStared";
import Landing from "@/components/Home/Landing";
import UserNo from "@/components/Home/UserNo";
import UserReview from "@/components/Home/UserReview";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" min-h-screen grid grid-cols-[200px_1fr_200px]  bg-slate-100 text-black ">
    <div className="col-start-2 mb-8 ">

        <Landing />
        <CustomerReview />
       <GetStared />
      <UserReview />
      <UserNo />
       </div>
   </div>
  );
}

 
