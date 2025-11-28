"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // أيقونات القائمة والإغلاق
import { navigation } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 2. دالة التعامل مع الضغط خارج القائمة
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // إذا كانت القائمة مغلقة أصلاً، لا تفعل شيئاً
      if (!isMobileMenuOpen) return;

      // تحقق مما إذا كانت الضغطة قد حدثت داخل القائمة أو داخل زر الفتح
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    // إضافة المستمع عند فتح القائمة
    document.addEventListener("mousedown", handleClickOutside);

    // تنظيف المستمع عند إغلاق القائمة أو إلغاء المكون
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="backdrop-blur-md pt-5 pb-4">
      <div className="container h-full flex items-center justify-between relative">
        {/* 1. Logo */}
        <Link
          href="/"
          className="text-3xl font-bold font-caramel text-main hover:text-hover transition-colors"
        >
          Hesham Eldib
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-600 hover:text-main transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (ربطناه بالـ Ref) */}
        <button
          ref={buttonRef} // <--- هام جداً
          className="md:hidden p-2 text-gray-600 hover:text-main transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef} // <--- ربط القائمة بالـ Ref
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 mx-auto w-[90%] max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden md:hidden"
            >
              <ul className="flex flex-col py-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-6 py-3 text-center text-gray-600 font-medium hover:bg-orange-50 hover:text-main transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
