import { GraduationCap, Stethoscope, MapPin, BookOpen } from "lucide-react";

export default function DoctorCircles() {
  const circles = [
    {
      icon: GraduationCap,
      title: "Alumni Groups",
      description:
        "Reconnect with trusted colleagues from your UG and PG institutions across India.",
    },
    {
      icon: Stethoscope,
      title: "Speciality Circles",
      description:
        "Collaborate with doctors in your field for case discussions and referrals.",
    },
    {
      icon: MapPin,
      title: "City Chapters",
      description:
        "Strengthen local professional networks through regional collaboration and meetups.",
    },
    {
      icon: BookOpen,
      title: "Research & Teaching Forums",
      description:
        "Engage in academic exchange, publications, and structured knowledge sharing.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#F4F8FC] to-white overflow-hidden">

      {/* Soft ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-[#1E5C8A] font-semibold">
            Community Structure
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#123C5A]">
            Doctor Circles
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Structured professional groups designed to strengthen
            collaboration, trust, and academic growth within the relayDor ecosystem.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {circles.map((item, index) => (
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