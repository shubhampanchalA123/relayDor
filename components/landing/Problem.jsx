import {
  MessageSquareWarning,
  Clock,
  Ban,
  ShieldOff
} from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: MessageSquareWarning,
      title: "Scattered Communication",
      description:
        "Referrals often depend on fragmented calls, messages, and informal channels — leading to confusion and inefficiency.",
    },
    {
      icon: Clock,
      title: "Unnecessary Delays",
      description:
        "Critical cases face avoidable delays due to the lack of a structured referral ecosystem.",
    },
    {
      icon: Ban,
      title: "Unethical Intermediaries",
      description:
        "Middlemen and commission-based interference compromise professional integrity.",
    },
    {
      icon: ShieldOff,
      title: "Diluted Trust",
      description:
        "When systems lack transparency, trust between doctors and patients weakens.",
    },
  ];

  return (
    <section className="relative bg-[#F4F8FC] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123C5A] leading-tight">
            The Referral System Needs Change
          </h2>
          <p className="mt-6 text-lg text-gray-600 italic">
            “Healthcare should be built on trust — not transactions.”
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#1E5C8A] transition-all duration-300">
                <item.icon className="w-7 h-7 text-[#1E5C8A] group-hover:text-white transition-all duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-[#123C5A] group-hover:text-[#1E5C8A] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}