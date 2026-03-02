import { ShieldCheck, Lock, Ban, EyeOff } from "lucide-react";

export default function Privacy() {
  const points = [
    {
      icon: ShieldCheck,
      text: "Verified doctors only — strict professional authentication.",
    },
    {
      icon: Lock,
      text: "Zero patient data misuse — confidentiality is non-negotiable.",
    },
    {
      icon: Ban,
      text: "No broker interference — referrals remain doctor to doctor.",
    },
    {
      icon: EyeOff,
      text: "Confidential referral tracking with permission-based visibility.",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0B1F33] via-[#0D1A2D] to-[#123C5A] text-white overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-widest text-sm text-blue-300 font-semibold">
              Trust Framework
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Privacy & Ethics
              <span className="block text-blue-300 mt-3">
                Built Into Our Foundation.
              </span>
            </h2>

            <p className="mt-8 text-lg text-blue-100 leading-relaxed">
              relayDor is designed to protect professional dignity,
              patient confidentiality, and ethical medical collaboration.
              Every interaction is structured, verified, and secure.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 space-y-8">

            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-300" />
                </div>

                <p className="text-blue-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}