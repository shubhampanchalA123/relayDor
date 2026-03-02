import {
  Stethoscope,
  Scissors,
  Microscope,
  GraduationCap,
  MapPin
} from "lucide-react";

export default function WhoIsItFor() {
  const audience = [
    {
      icon: Stethoscope,
      title: "General Physicians",
      description:
        "Strengthen referral networks and build trusted specialist connections.",
    },
    {
      icon: Scissors,
      title: "Surgeons",
      description:
        "Collaborate efficiently and receive structured referrals without intermediaries.",
    },
    {
      icon: Microscope,
      title: "Super Specialists",
      description:
        "Expand professional visibility across cities through ethical referrals.",
    },
    {
      icon: GraduationCap,
      title: "Junior Doctors",
      description:
        "Grow faster with trusted mentorship and professional exposure.",
    },
    {
      icon: MapPin,
      title: "Tier 2 & Tier 3 City Doctors",
      description:
        "Connect with metro specialists and build a nationwide trusted network.",
    },
  ];

  return (
    <section className="relative bg-[#F4F8FC] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123C5A]">
            Who Is RelayDor For?
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Built for doctors who value trust, ethics, and collaborative growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {audience.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#1E5C8A] transition-all duration-300">
                <item.icon className="w-6 h-6 text-[#1E5C8A] group-hover:text-white transition-all duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-[#123C5A] group-hover:text-[#1E5C8A] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}