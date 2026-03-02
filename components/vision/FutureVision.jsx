export default function FutureVision() {
  const items = [
    {
      title: "Pan-India Doctor Network",
      description:
        "A unified nationwide ecosystem connecting verified doctors across cities and specialities.",
    },
    {
      title: "Seamless Mobile Experience",
      description:
        "Dedicated Android & iOS apps for instant referrals, collaboration, and real-time access.",
    },
    {
      title: "Hospital & EHR Integration",
      description:
        "Secure integration with hospital systems to streamline referral workflows ethically.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#F4F8FC] overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#123C5A]">
          The Road Ahead
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          relayDor is building more than a platform — we are building
          the future of ethical medical connectivity.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {items.map((item, index) => (
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