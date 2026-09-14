'use client';

import Image from 'next/image';
import Link from 'next/link';

const resultsData = [
  {
    id: 1,
    title: "تجميل وترميم الأنف",
    description: "إعادة رسم وتعديل هيكل الأنف للحصول على مظهر متناسق وطبيعي يتماشى مع ملامح الوجه مع الحفاظ على كفاءة التنفس.",
    image: "/aa.webp"
  },
  {
    id: 2,
    title: "نحت القوام وشد البطن",
    description: "تخلص من الدهون المستعصية وشد عضلات البطن للحصول على قوام متناسق ومثالي بأحدث تقنيات النحت الجراحي.",
    image: "/bb.webp"
  },
  {
    id: 3,
    title: "إجراءات تجميل الوجه",
    description: "إعادة نضارة وشباب الوجه وإبراز الملامح الجمالية بطرق دقيقة تضمن نتائج واقعية ومبهرة.",
    image: "/cc.webp"
  }
];

export default function ResultsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-[#5bc0de]/10 to-white text-right text-slate-900 relative overflow-hidden" dir="rtl">
      
      {/* تأثيرات خلفية ناعمة ومنعشة */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#5bc0de]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0082a9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان السكشن */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20">
            نتائج حقيقية وواقعية
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            قصص نجاح وتغيير مظاهر المرضى
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            شاهد أمثلة حية لنتائج العمليات الجراحية والتجميلية التي أجرها د. أحمد عبد الرحمن بدقة واحترافية عالية.
          </p>
        </div>

        {/* شبكة الصور الثلاث */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resultsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl flex flex-col group hover:shadow-2xl hover:border-[#0082a9]/40 transition-all duration-500"
            >
              {/* إطار الصورة */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0082a9] text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-md">
                  قبل وبعد (Before & After)
                </div>
              </div>

              {/* تفاصيل الحالة */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0082a9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* زر الحجز */}
                <div className="pt-2">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#0082a9] text-white font-semibold text-sm shadow-lg hover:bg-[#5bc0de] transition-all duration-300"
                  >
                    احجز استشارتك لهذه الحالة
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