'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 text-right overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* الناحية الأولى: الصورة والكارت المميز */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* تأثيرات خلفية بلون الهوية */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0082a9] to-[#5bc0de] rounded-3xl opacity-20 blur-2xl -z-10" />
            
            {/* الكارت المميز */}
            <div className="relative rounded-3xl p-3 bg-white shadow-2xl border border-slate-100 transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/about.webp"
                  alt="د. أحمد عبد الرحمن"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* الشارة بخلفية لون الهوية الداكن والكلام الواضح */}
              <div className="absolute bottom-6 right-6 bg-[#0082a9] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/20">
                <p className="text-xs text-[#5bc0de] font-medium tracking-wide">خبرة معتمدة</p>
                <p className="text-sm font-bold text-white">15+ عاماً من التميز الجراحي</p>
              </div>
            </div>
          </div>
        </div>

        {/* الناحية الثانية: النص والزر */}
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full">
            تعرف على استشاري التجميل
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            د. أحمد عبد الرحمن <br />
            <span className="text-[#0082a9] text-2xl md:text-3xl font-medium">التميز، الدقة، والجمال الطبيعي</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            يُعد د. أحمد عبد الرحمن واحداً من أبرز استشاريي جراحات التجميل والترميم. يجمع بين النظرة الفنية الدقيقة وأحدث التقنيات العالمية لضمان نتائج متناغمة تعزز ثقة المريض وتبرز ملامحه الطبيعية بأعلى معايير الأمان والاحترافية.
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            يؤمن الدكتور بأن كل مريض يمتلك جمالاً فريداً يستحق خطة علاجية مخصصة تلبي تطلعاته بدقة متناهية، مع متابعة دقيقة قبل وبعد الإجراء.
          </p>

          {/* نقاط الثقة */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5bc0de]/20 flex items-center justify-center text-[#0082a9] font-bold text-sm">✓</div>
              <span className="text-sm font-semibold text-slate-800">نتائج طبيعية ومخصصة</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5bc0de]/20 flex items-center justify-center text-[#0082a9] font-bold text-sm">✓</div>
              <span className="text-sm font-semibold text-slate-800">معايير أمان عالية</span>
            </div>
          </div>

          {/* زر الانتقال لصفحة "من نحن" بلون الهوية الواضح */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0082a9] text-white font-semibold shadow-lg hover:bg-[#5bc0de] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>اقرأ المزيد عن مسيرتنا</span>
              <span>←</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}