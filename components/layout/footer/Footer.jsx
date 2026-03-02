import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0D1A2D] to-[#123C5A] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              RelayDor
            </h3>
            <p className="text-blue-200 leading-relaxed">
              India’s ethical doctor-to-doctor referral network —
              built on trust, transparency, and professional dignity.
            </p>
            <p className="mt-4 text-sm text-blue-300">
              Exclusively for Verified Medical Professionals
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-white transition">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Our Mission
            </h4>
            <p className="text-blue-200 leading-relaxed">
              To eliminate unethical intermediaries and establish a nationwide,
              trust-driven referral ecosystem where doctors collaborate with
              integrity and professional dignity.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-blue-300 text-sm">
          © 2025 RelayDor. All rights reserved.
        </div>

      </div>

      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
    </footer>
  );
}