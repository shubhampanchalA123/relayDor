import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us - relayDor",
  description: "Get in touch with relayDor - Ethical medical networking",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#123C5A] to-[#1E5C8A] text-white overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Let’s Connect
          </h1>
          <p className="mt-6 text-lg text-blue-100">
            Have questions about relayDor? We’re here to support ethical collaboration.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-28 bg-[#F4F8FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT INFO */}
            <div>

              <h2 className="text-3xl font-bold text-[#123C5A] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1E5C8A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">support@relayDor.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#1E5C8A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1E5C8A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      relayDor Healthcare Pvt. Ltd.<br />
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-100">

              <h3 className="text-2xl font-semibold text-[#123C5A] mb-8">
                Send a Message
              </h3>

              <form className="space-y-6">

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1E5C8A] outline-none"
                    placeholder="Dr. Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1E5C8A] outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1E5C8A] outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E5C8A] to-[#123C5A] text-white py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}