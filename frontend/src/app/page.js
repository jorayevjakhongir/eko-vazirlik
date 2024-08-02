import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Preloader from "@/components/preloader";
import Slider from "@/components/slider";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative h-[900px] isolate overflow-hidden bg-gray-900 py-14 sm:py-10">
      <Preloader />
      <div className="wrapper">
        <Header />
        <Slider />
      </div>
    </div>
  );
}
