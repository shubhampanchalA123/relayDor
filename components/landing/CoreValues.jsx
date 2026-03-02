import {
  ShieldCheck,
  TrendingUp,
  Ban,
  Lock
} from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Ethics First",
      description:
        "Every referral is built on integrity, transparency, and professional dignity.",
    },
    {
      icon: TrendingUp,
      title: "Mutual Growth",
      description:
        "We believe doctors grow stronger together — not in competition, but collaboration.",
    },
    {
      icon: Ban,
      title: "No Broker System",
      description:
        "RelayDor eliminates unethical intermediaries and commission-based interference.",
    },
    {
      icon: Lock,
      title: "Data Confidentiality",
      description:
        "Strict privacy standards ensure secure, permission-based referral communication.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0D1A2D] to-[#123C5A] py-28 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Core Values
          </h2>

          <p className="mt-6 text-xl text-blue-100 italic">
            “We are not competitors. We are uplifters.”
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300">
                <item.icon className="w-7 h-7 text-blue-300 group-hover:text-white transition-all duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-blue-100 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}