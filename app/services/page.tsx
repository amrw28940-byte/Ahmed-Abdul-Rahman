'use client';

import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    title: "حقن البوتوكس للخطوط التعبيرية",
    slug: "botox-treatment",
    description: "إجراء تجميلي دقيق لإرخاء العضلات المسؤولة عن ظهور الخطوط التعبيرية والتجاعيد في جبهة وحول عينين الوجه، لاستعادة مظهر أكثر شباباً ونضارة.",
    image: "/botox.webp"
  },
  {
    title: "فلير الشفايف والوجه",
    slug: "facial-fillers",
    description: "تقنية حقن المادة المالئة (الهيالورونيك) لتحديد ملامح الوجه، إبراز جمال الشفايف، وملء الفراغات وتrestoring الحجم المفقود بطريقة طبيعية ساحرة.",
    image: "/fillers.webp"
  },
  {
    title: "شد الوجه بالخيوط",
    slug: "thread-lift",
    description: "أحدث صيحة غير جراحية لشد الترهلات الخفيفة والمتوسطة في الوجه والرقبة، وتحفيز إنتاج الكولاجين الطبيعي لشد الجلد وإعادة رسم خط الفك.",
    image: "/Threadlift.webp"
  },
  {
    title: "إزالة ندبات حب الشباب",
    slug: "acne-scars-removal",
    description: "حلول علاجية متقدمة ومتكاملة تشمل الليزر والتقشير والميكرونيدلينغ لتنعيم البشرة وإخفاء الندبات والحفر الناتجة عن حب الشباب القديم.",
    image: "/Acne Scars.webp"
  },
  {
    title: "ليزر نضارة وتجديد الجلد",
    slug: "skin-rejuvenation-laser",
    description: "جلسات الليزر الفعالة لإزالة التصبغات، توحيد لون البشرة، وتحفيز الخلايا العميقة لتجديد الكولاجين وإكساب البشرة إشراقة دائمة.",
    image: "/Skin Lasers.webp"
  },
  {
    title: "جلسات الميكرونيدلينغ للكولاجين",
    slug: "microneedling-collagen",
    description: "تقنية الوخز الدقيق الدقيقة لتحفيز البشرة ذاتياً على إفراز الكولاجين الطبيعي، وعلاج المسام الواسعة والخطوط الدقيقة لتحسين ملمس الجلد.",
    image: "/Microneedling.webp"
  },
  {
    title: "تقشير كيميائي للوجه",
    slug: "chemical-peels",
    description: "إزالة طبقات الجلد التالفة والسطحية باستخدام أحماض طبية مدروسة، لإظهار بشرة جديدة أكثر نضارة ونقاء وخالية من عيوب البقع والتصبغات.",
    image: "/Chemical Peels.webp"
  },
  {
    title: "شد الترهلات وأجهزة شد الجلد",
    slug: "skin-tightening-devices",
    description: "استخدام أحدث الأجهزة الطبية غير الجراحية المعتمدة لشد الجلد المترهل في الوجه والجسم وتحسين مرونته وقوامه العام بكفاءة عالية.",
    image: "/Skin Tightening.webp"
  }
];

export default function ServicesFullWidthSection() {
  return (
    <section id="services-full" className="py-24 px-6 bg-slate-50 text-right text-slate-900 relative overflow-hidden" dir="rtl">
      
      {/* خلفية جمالية متناسقة */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5bc0de]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0082a9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان السكشن الرئيسي */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20">
            الخدمات الطبية والتجميلية الشاملة
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            استكشف خدماتنا التجميلية بالتفصيل
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            تعرف على باقة إجراءاتنا المتكاملة والمصممة خصيصاً لتلبية احتياجاتك الجمالية بأعلى معايير الأمان والاحترافية.
          </p>
        </div>

        {/* عرض الخدمات بعرض السكشن بالكامل (صف واحد لكل خدمة بتصميم تبادلي) */}
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* صورة الخدمة (تتبادل الأماكن يميناً ويساراً حسب الفهرس زوجي/فردي) */}
              <div className={`relative h-72 lg:h-96 w-full overflow-hidden bg-slate-900 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Image
                  src={service.image}
                  alt={`صورة توضيحية لخدمة ${service.title} مع الدكتور أحمد عبد الرحمن`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0082a9] text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-md">
                  خدمة معتمدة VIP
                </div>
              </div>

              {/* تفاصيل الخدمة والنصوص */}
              <div className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-3">
                  <span className="text-[#0082a9] text-xs font-bold tracking-wider uppercase bg-[#5bc0de]/10 px-3 py-1 rounded-md inline-block">
                    إجراء تجميلي دقيق
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-[#0082a9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* أزرار الإجراءات (الانتقال لصفحة الخدمة أو الحجز المباشر) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    title={`اقرأ المزيد عن تفاصيل خدمة ${service.title}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-[#0082a9] transition-all duration-300"
                  >
                    اقرأ المزيد عن الخدمة ←
                  </Link>
                  
                  <Link
                    href="/booking"
                    title={`احجز استشارتك الآن لخدمة ${service.title}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0082a9]/10 text-[#0082a9] font-semibold text-sm border border-[#0082a9]/30 hover:bg-[#0082a9] hover:text-white transition-all duration-300"
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