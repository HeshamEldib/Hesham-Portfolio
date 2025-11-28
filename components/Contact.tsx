"use client";

import { Send, User, Mail, MessageSquare } from "lucide-react";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  // 1. فصل بيانات الاتصال (هاتف، عنوان، إيميل) عن روابط السوشيال (لينكد إن، جيت هب)
  const contactDetails = socialLinks.filter((item) =>
    ["Phone", "Email", "Address"].includes(item.label)
  );

  const socialButtons = socialLinks.filter((item) =>
    ["GitHub", "LinkedIn"].includes(item.label)
  );

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-main">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities. I am always open to discussing new projects,
              creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 text-main rounded-lg">
                    {/* عرض الأيقونة */}
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.label}</h4>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-main transition-colors mt-1 block"
                    >
                      {/* عرض القيمة (رقم الهاتف/العنوان) أو استخراج الإيميل من الرابط */}
                      {item.value || item.href.replace("mailto:", "")}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialButtons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-main hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={item.label}
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <form
              action="https://formspree.io/f/xbjerbkp" // نفس الرابط القديم الخاص بك
              method="POST"
              className="flex flex-col gap-6"
            >
              {/* Name Input */}
              <div className="relative">
                <div className="absolute top-4 left-4 text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute top-4 left-4 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <div className="absolute top-4 left-4 text-gray-400">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors resize-none text-gray-800 placeholder-gray-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-main text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-hover transition-all duration-300 shadow-lg shadow-orange-200"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
