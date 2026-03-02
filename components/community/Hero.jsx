export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2F47] via-[#123C5A] to-[#1E5C8A] text-white py-28">

      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Section Label */}
        <p className="uppercase tracking-widest text-sm text-blue-200 font-semibold">
          relayDor Connect
        </p>

        {/* Main Heading */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Doctors Bridging Doctors.
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          A verified nationwide professional network where doctors collaborate,
          refer, exchange knowledge, and grow together —
          without intermediaries or compromise.
        </p>

        {/* Optional subtle divider */}
        <div className="mt-12 w-24 h-1 bg-blue-300 mx-auto rounded-full"></div>

      </div>
    </section>
  );
}