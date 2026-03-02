import {
  BrainCircuit,
  ShieldCheck,
  MessageCircle,
  Users
} from "lucide-react";

export default function Solution() {
  const features = [
    {
      icon: BrainCircuit,
      title: "Smart Referral Matching",
      description:
        "AI-assisted specialist discovery based on location, speciality, and trusted professional connections.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Doctor Directory",
      description:
        "Only authenticated doctors with valid credentials — ensuring credibility and professional trust.",
    },
    {
      icon: MessageCircle,
      title: "Real-Time Collaboration",
      description:
        "Secure doctor-to-doctor communication and referral tracking without informal channels.",
    },
    {
      icon: Users,
      title: "Professional Community Circles",
      description:
        "Alumni groups, speciality forums, and city chapters built for ethical networking.",
    },
  ];

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123C5A] leading-tight">
            Introducing RelayDor
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            RelayDor is a verified digital bridge connecting doctors across India —
            enabling secure referrals, trusted collaboration, and ethical
            professional growth without middlemen.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#F4F8FC] p-8 rounded-2xl border border-blue-100 hover:border-[#1E5C8A] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E5C8A] to-[#123C5A] rounded-t-2xl"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:bg-[#1E5C8A] transition">
                <item.icon className="w-6 h-6 text-[#1E5C8A] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-[#123C5A] group-hover:text-[#1E5C8A] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute top-20 right-10 w-60 h-60 bg-blue-100 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
}