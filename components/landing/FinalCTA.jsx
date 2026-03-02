export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#0D1A2D] to-[#123C5A] py-32 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 mb-8">
          Verified Doctors Only
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Join the Ethical Shift in Medical Referrals
        </h2>

        {/* Subtext */}
        <p className="mt-8 text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
          RelayDor is not just a platform — it is a nationwide movement
          built to eliminate unethical intermediaries, restore professional dignity,
          and strengthen doctor-to-doctor collaboration across India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">

          <button className="bg-white text-[#123C5A] px-10 py-4 rounded-xl font-semibold shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Apply for Verification
          </button>

          <button className="border border-white/60 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
            Request Early Access
          </button>

        </div>

        {/* Trust Line */}
        <p className="mt-10 text-sm text-blue-200 tracking-wide">
          Confidential • Secure • No Broker System • Nationwide Network
        </p>

      </div>
    </section>
  );
}