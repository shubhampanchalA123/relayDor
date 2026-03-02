export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Verified Foundation",
      description:
        "Secure doctor verification system with structured and ethical referral tracking.",
      status: "Completed",
    },
    {
      phase: "Phase 2",
      title: "Collaboration Layer",
      description:
        "Real-time doctor messaging, referral updates, and professional community feed.",
      status: "Active",
    },
    {
      phase: "Phase 3",
      title: "Mobile Expansion",
      description:
        "Dedicated Android & iOS applications for seamless access across India.",
      status: "Upcoming",
    },
    {
  phase: "Phase 4",
  title: "Professional Network Expansion",
  description:
    "Speciality circles, alumni groups, and collaborative professional communities.",
  status: "Upcoming",
},
  ];

  return (
    <section className="relative bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123C5A]">
            relayDor Roadmap
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A phased, structured expansion to build India’s most trusted
            doctor-to-doctor referral network.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {phases.map((item, index) => (
            <div
              key={index}
              className="group bg-[#F4F8FC] p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Phase Badge */}
              <div className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-[#1E5C8A] text-white mb-6">
                {item.phase}
              </div>

              <h3 className="text-lg font-semibold text-[#123C5A] group-hover:text-[#1E5C8A] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <p className="mt-6 text-xs font-medium text-gray-500 uppercase tracking-wide">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
}