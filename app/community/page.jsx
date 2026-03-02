import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Hero from "@/components/community/Hero";
import DoctorCircles from "@/components/community/DoctorCircles";
import Collaboration from "@/components/community/Collaboration";
import Growth from "@/components/community/Growth";
import Privacy from "@/components/community/Privacy";

export default function Community() {
  return (
    <>
      <Header />
      <Hero />
      <DoctorCircles />
      <Collaboration />
      <Growth />
      <Privacy />
      <Footer />
    </>
  );
}