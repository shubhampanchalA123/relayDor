export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2F47] via-[#123C5A] to-[#1E5C8A] text-white py-28">

      {/* Soft Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Small Label */}
        <p className="uppercase tracking-widest text-sm text-blue-200 font-medium">
          Our Vision
        </p>

        {/* Main Heading */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Medicine Should Run on Trust
          <span className="block text-blue-200 mt-4">
            — Not Transactions.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-10 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          relayDor was created to restore ethical referral systems,
          eliminate unnecessary intermediaries, and build a nationwide
          network grounded in professional integrity.
        </p>

      </div>
    </section>
  );
}