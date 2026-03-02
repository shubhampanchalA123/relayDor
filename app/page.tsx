import Header from "@/components/layout/header/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import CoreValues from "@/components/landing/CoreValues";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import Roadmap from "@/components/landing/Roadmap";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Solution />
      <Problem />
      <CoreValues />
      <WhoIsItFor />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </>
  );
}
