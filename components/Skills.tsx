import Image from "next/image";
import { skills } from "@/lib/data"; // تأكد أن البيانات موجودة هنا

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Tech <span className="text-main">Stack</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Technologies I use to build high-performance web applications.
          </p>
        </div>

        {/* شبكة المهارات */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-main/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 mb-3 transition-transform group-hover:scale-110 duration-300">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-main transition-colors">
                {skill.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}