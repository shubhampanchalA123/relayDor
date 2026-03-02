import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Hero from "@/components/vision/Hero";
import Problem from "@/components/vision/Problem";
import Belief from "@/components/vision/Belief";
import Mission from "@/components/vision/Mission";
import FutureVision from "@/components/vision/FutureVision";

export default function Vision() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Belief />
      <Mission />
      <FutureVision />
      <Footer />
    </>
  );
}