export default function Belief() {
  const beliefs = [
    {
      title: "Doctors are not competitors — they are collaborators.",
      description:
        "True medical excellence thrives when professionals support and uplift one another.",
    },
    {
      title: "Ethical growth is possible without brokers.",
      description:
        "Referrals should be built on trust and professional respect — never commissions.",
    },
    {
      title: "Trust between doctors strengthens patient care.",
      description:
        "When referrals flow within a verified network, patients receive faster, safer, and more confident care.",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0F2F47] via-[#123C5A] to-[#1E5C8A] text-white overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-sm text-blue-200 font-semibold">
          Our Core Belief
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Built on Principles.
          <span className="block text-blue-200 mt-4">
            Driven by Integrity.
          </span>
        </h2>

        <p className="mt-8 text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
          relayDor stands for a structured, ethical, and trust-driven medical
          ecosystem — where collaboration replaces competition.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

          {beliefs.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="mt-6 text-blue-100 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}