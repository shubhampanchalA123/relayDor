export default function Mission() {
  const pillars = [
    {
      title: "Verified Doctors Only",
      description:
        "A strictly authenticated professional network ensuring credibility and trust.",
    },
    {
      title: "Secure Referral Infrastructure",
      description:
        "Structured, transparent, and confidential referral workflows without intermediaries.",
    },
    {
      title: "Nationwide Ethical Connectivity",
      description:
        "Pan-India doctor collaboration built on integrity and professional respect.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#E6F2FA] to-[#F4F8FC] overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="uppercase tracking-widest text-sm text-[#1E5C8A] font-semibold">
          Our Mission
        </p>

        {/* Main Mission Statement */}
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#123C5A] leading-tight max-w-4xl mx-auto">
          To Build India’s Most Trusted Doctor-to-Doctor Referral Network.
        </h2>

        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          relayDor exists to redefine medical collaboration — replacing fragmented
          systems and unethical intermediaries with structured, trust-driven connectivity.
        </p>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {pillars.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#1E5C8A]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}