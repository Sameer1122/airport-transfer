import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Book from "@/components/LandingPage/Book";
import Features from "@/components/LandingPage/Features";
import Hero from "@/components/LandingPage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#fffcf9]">
      <div className="w-[80%] m-auto">
        <Header />
        <Hero />
        <Features />
        <Book />
      </div>
      <Footer />
    </main>
  );
}
