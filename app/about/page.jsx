import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "About Us - relayDor",
  description: "Learn more about relayDor - simplifying healthcare connections",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2F80ED] via-[#3A8DFF] to-[#56CCF2] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About relayDor</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Simplifying Healthcare Connections
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Trusted Healthcare Partner
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                relayDor is a modern healthcare platform designed to bridge the gap 
                between patients and doctors. We believe that quality healthcare should 
                be accessible to everyone, anywhere.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our platform allows patients to easily find specialists, book appointments 
                instantly, and receive referrals when needed. For doctors, we provide an 
                efficient way to manage patients and grow their practice through our 
                trusted referral network.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl h-80 md:h-96 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <p className="text-xl font-semibold">Caring for Your Health</p>
                  <p className="text-blue-100 mt-2">Your trusted healthcare partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 mt-2">Verified Doctors</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600 mt-2">Happy Patients</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-2">Specialties</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Support</div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make healthcare accessible and convenient for everyone by creating 
                a seamless connection between patients and healthcare providers.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted healthcare platform in India, empowering 
                both patients and doctors with innovative technology solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
