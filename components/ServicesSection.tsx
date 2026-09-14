'use client';

import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    title: "حقن البوتوكس للخطوط التعبيرية",
    image: "/botox.webp",
    span: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "فلير الشفايف والوجه",
    image: "/fillers.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  {
    title: "شد الوجه بالخيوط",
    image: "/Threadlift.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-1"
  },
  {
    title: "إزالة ندبات حب الشباب",
    image: "/Acne Scars.webp",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    title: "ليزر نضارة وتجديد الجلد",
    image: "/Skin Lasers.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-1"
  },
  {
    title: "جلسات الميكرونيدلينغ للكولاجين",
    image: "/Microneedling.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-1"
  },
  {
    title: "تقشير كيميائي للوجه",
    image: "/Chemical Peels.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  {
    title: "شد الترهلات وأجهزة شد الجلد",
    image: "/Skin Tightening.webp",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 text-right text-slate-900 relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5bc0de]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20">
            الخدمات الطبية والتجميلية
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            أبرز الإجراءات التي يقدمها الدكتور
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            باقة متكاملة من أحدث تقنيات التجميل والعناية بالبشرة لضمان إبراز جمالك الطبيعي بأعلى معايير الأمان.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[20rem]">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-[#5bc0de]/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(91,192,222,0.25)] hover:shadow-[0_20px_50px_rgba(91,192,222,0.5)] ${service.span}`}
            >
              <Image
                src={service.image}
                alt={`صورة توضيحية لخدمة ${service.title} مع الدكتور أحمد عبد الرحمن`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-all duration-500" />

              {/* تأثير التوهج الداخلي والخارجي بنفس لون الصورة المرفقة */}
              <div className="absolute inset-0 border-2 border-[#5bc0de]/50 group-hover:border-[#5bc0de] rounded-3xl transition-all duration-500 pointer-events-none shadow-[inset_0_0_25px_rgba(91,192,222,0.5)]" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-right z-20 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#5bc0de] transition-colors drop-shadow-md">
                  {service.title}
                </h3>
                
                <div className="pt-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href="/booking"
                    title={`احجز استشارتك الآن لخدمة ${service.title}`}
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#0082a9] text-white font-semibold text-xs shadow-lg hover:bg-[#5bc0de] transition-all"
                  >
                    احجز استشارة لهذه الخدمة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}