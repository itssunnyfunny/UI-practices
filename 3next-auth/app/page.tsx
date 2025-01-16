import Button from "@/components/Button";
import CustomerReview from "@/components/Home/CustomerRe";
import GetStared from "@/components/Home/GetStared";
import Landing from "@/components/Home/Landing";
import UserNo from "@/components/Home/UserNo";
import UserReview from "@/components/Home/UserReview";
import Footer from '@/components/Home/Footer'
import Image from "next/image";
import ScrollAnimation from "@/components/Animation/scrollBarAnimation";

export default function Home() {
  return (
   <div className=" min-h-screen grid grid-cols-[200px_1fr_200px]  bg-slate-100 text-black ">
    <div className="col-start-2 ">

        <Landing />
       
        <ScrollAnimation> <CustomerReview /></ScrollAnimation>
        <GetStared />
      <UserReview />
      <UserNo />
     
       </div>
        <div className="col-start-1 col-end-4 bottom-0">< Footer /></div>
   </div>
  );
}

 
