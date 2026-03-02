import Image from "next/image";
import { ShieldCheck, MessageCircle, Activity, FileText } from "lucide-react";

export default function Collaboration() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Referral Tracking",
      description:
        "Structured and confidential referral workflows with full visibility and control.",
    },
    {
      icon: FileText,
      title: "Case Discussions (De-identified)",
      description:
        "Collaborate responsibly on complex cases while protecting patient confidentiality.",
    },
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description:
        "Instant doctor-to-doctor communication within a verified professional network.",
    },
    {
      icon: Activity,
      title: "Referral Status Updates",
      description:
        "Track progress and ensure continuity of care without manual follow-ups.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#F4F8FC] overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-widest text-sm text-[#1E5C8A] font-semibold">
              Collaboration Infrastructure
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#123C5A] leading-tight">
              Seamless, Structured
              <span className="block text-[#1E5C8A] mt-2">
                Doctor-to-Doctor Coordination
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              relayDor replaces fragmented communication with a secure,
              transparent, and efficient collaboration ecosystem.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F2FA] flex items-center justify-center group-hover:bg-[#1E5C8A] transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#1E5C8A] group-hover:text-white transition-all duration-300" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#123C5A]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="flex justify-center">

            <div className="relative group">

              {/* Glow Behind */}
              <div className="absolute inset-0 bg-blue-300 opacity-20 blur-3xl rounded-3xl"></div>

              {/* Card */}
              <div className="relative w-[420px] aspect-square bg-white rounded-3xl border border-blue-100 shadow-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">

                <Image
                  src="/images/doctornetwork.png"
                  alt="Doctor Network"
                  fill
                  className="object-cover p-6"
                  priority
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}