export default function Problem() {
  const issues = [
    {
      title: "Fragmented Referral Communication",
      description:
        "Referral discussions are scattered across calls, messages, and informal channels — creating confusion and inefficiency.",
    },
    {
      title: "Unethical Intermediary Culture",
      description:
        "PRO systems and commission-based interference compromise professional dignity and patient trust.",
    },
    {
      title: "Critical Delays in Urgent Cases",
      description:
        "Lack of structured referral workflows results in avoidable delays during time-sensitive situations.",
    },
    {
      title: "Erosion of Professional Trust",
      description:
        "When systems lack transparency and accountability, trust between doctors and patients weakens.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#F4F8FC] overflow-hidden">

      {/* Soft ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-sm text-[#1E5C8A] font-semibold">
          The Challenge
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#123C5A]">
          The Current Referral Ecosystem Is Broken
        </h2>

        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Modern medicine deserves structured collaboration — not fragmented
          communication, unethical pressure, and diluted trust.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {issues.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#1E5C8A] leading-snug">
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