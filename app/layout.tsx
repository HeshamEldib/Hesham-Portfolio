import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  // العنوان الذي يظهر في المتصفح
  title: {
    default: "Hesham Eldib | Front-End Developer",
    template: "%s | Hesham Eldib", // سيظهر كـ "Sadeem Store | Hesham Eldib" في الصفحات الداخلية
  },
  description: "Portfolio of Hesham Eldib, a Front-End Developer specializing in React, Next.js, and modern web technologies.",
  
  // الكلمات المفتاحية لمحركات البحث
  keywords: ["Hesham Eldib", "Front-End Developer", "React", "Next.js", "Portfolio", "Web Developer", "Egypt"],
  
  // اسم المؤلف
  authors: [{ name: "Hesham Eldib" }],
  
  // إعدادات الأيقونات (احتياطي لو لم تعمل الطريقة التلقائية)
  icons: {
    icon: "/icon.png", // تأكد أنك نسخت H1.png وأسميتها icon.png في مجلد public أيضاً
  },

  // إعدادات المشاركة على السوشيال ميديا (Open Graph)
  openGraph: {
    title: "Hesham Eldib | Front-End Developer",
    description: "Check out my latest projects and skills.",
    url: "https://heshameldib.github.io", // أو رابطك الجديد بعد الرفع
    siteName: "Hesham Eldib Portfolio",
    images: [
      {
        url: "/icon.png", // صورتك الشخصية ستظهر عند مشاركة الرابط
        width: 1200,
        height: 630,
        alt: "Hesham Eldib",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />

        {/* إضافة هامش علوي لتعويض الـ Header الثابت (Fixed) */}
        <main className="flex-grow pt-10 md:pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
