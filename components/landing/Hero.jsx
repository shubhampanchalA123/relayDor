"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/images/doctor3.png",
    "/images/doctor4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F4F8FC] to-[#E6F2FA]" />

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#123C5A]">
            Refer for Better.
            <span className="block text-[#1E5C8A] mt-2">
              Connect with Trust.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            India’s ethical doctor-to-doctor referral network —
            built to eliminate intermediaries and restore professional trust.
          </p>

          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Relaydor enables verified doctors to securely refer patients,
            collaborate in real time, and grow through a trusted nationwide network.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-[#1E5C8A] to-[#123C5A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Join as Verified Doctor
            </button>

            <button className="border border-[#1E5C8A] text-[#123C5A] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              Request Early Access
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-white shadow-sm border border-blue-100 rounded-full text-sm text-gray-600">
              ✔ Verified Doctors Only
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-blue-100 rounded-full text-sm text-gray-600">
              ✔ No Middlemen
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-blue-100 rounded-full text-sm text-gray-600">
              ✔ Confidential & Secure
            </span>
          </div>

        </div>

        {/* RIGHT SQUARE ANIMATED IMAGE */}
        {/* RIGHT SQUARE ANIMATED IMAGE */}
<div className="relative flex justify-center lg:justify-end">

  <div className="relative w-[380px] sm:w-[420px] lg:w-[480px] aspect-square overflow-hidden rounded-3xl shadow-2xl">

    {images.map((src, i) => (
      <Image
        key={i}
        src={src}
        alt="Doctor"
        fill
        className={`object-cover absolute transition-opacity duration-1000 ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    ))}

  </div>

</div>

      </div>
    </section>
  );
}