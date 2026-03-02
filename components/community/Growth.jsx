import { Briefcase, CalendarDays, Building2, FileBadge } from "lucide-react";

export default function Growth() {
  const items = [
    {
      icon: Briefcase,
      title: "Jobs & Fellowships",
      description:
        "Discover verified career opportunities, fellowships, and locum positions across India.",
    },
    {
      icon: CalendarDays,
      title: "Events & CMEs",
      description:
        "Stay updated with conferences, CMEs, workshops, and professional gatherings.",
    },
    {
      icon: Building2,
      title: "Clinics & Partnerships",
      description:
        "Explore collaborations, clinic partnerships, and structured expansion opportunities.",
    },
    {
      icon: FileBadge,
      title: "Professional CV Builder",
      description:
        "Generate a structured, referral-ready professional profile with one-click updates.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#F4F8FC] overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-[#1E5C8A] font-semibold">
            Professional Expansion
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#123C5A]">
            Growth & Opportunities
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            relayDor extends beyond referrals — empowering doctors
            with structured opportunities for career advancement and professional visibility.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E6F2FA] flex items-center justify-center group-hover:bg-[#1E5C8A] transition-all duration-300">
                <item.icon className="w-7 h-7 text-[#1E5C8A] group-hover:text-white transition-all duration-300" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-[#123C5A]">
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