import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// 1. إعدادات الـ SEO والميتا ديسكربشن (تعمل على السيرفر)
export const metadata: Metadata = {
  title: 'شد الترهلات وأجهزة شد الجلد الحديثة بدون جراحة | عيادة د. أحمد عبد الرحمن',
  description: 'احجزي استشارتك الآن مع الدكتور أحمد عبد الرحمن لأحدث تقنيات وأجهزة شد الترهلات والجلد للوجه والجسم، لاستعادة الشباب والرشاقة بأمان تام ومعايير VIP.',
  keywords: ['شد الترهلات', 'أجهزة شد الجلد', 'شد الوجه بدون جراحة', 'شد الجسم', 'نحت القوام', 'دكتور أحمد عبد الرحمن'],
  openGraph: {
    title: 'شد الترهلات وأجهزة شد الجلد الحديثة | د. أحمد عبد الرحمن',
    description: 'استعادة شباب البشرة وقوام الجسم المشدود بأحدث الأجهزة والتقنيات الطبية المتقدمة.',
    url: 'https://yourdomain.com/services/skin-tightening',
    siteName: 'عيادة الدكتور أحمد عبد الرحمن',
    images: [{ url: '/e.webp', width: 1200, height: 630, alt: 'شد الترهلات وأجهزة شد الجلد' }],
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function SkinTighteningPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. السكشن الأول: الهيرو مع الفيديو */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/microneedlingcollagen.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/35 backdrop-blur-md shadow-lg">
            تقنيات شد الجلد ونحت القوام المتطورة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            شد الترهلات وأحدث أجهزة شد الجلد بدون جراحة
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            استعيدي شباب ملامحك وقوامك المشدود بأحدث التقنيات غير الجراحية وأعلى معايير الأمان مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-xl hover:bg-[#5bc0de] transition-all duration-300"
            >
              احجزي استشارتك الخاصة الآن
            </Link>
          </div>
        </div>
      </section>

      {/* 2. السكشن الثاني: نظرة عامة وتعريف التقنية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              ثورة شد الجلد
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              وداعاً للترهلات وعلامات التقدم في السن نهائياً
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              مع تقدم العمر أو بعد فقدان الوزن، يفقد الجلد مرونته وتظهر الترهلات. نعتمد في عيادتنا على أحدث الأجهزة الطبية العالمية التي تستهدف طبقات الجلد العميقة لتحفيز الكولاجين الطبيعي وشد الأنسجة بدون أي تدخل جراحي أو فترة تعافي.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/e.webp" alt="أجهزة شد الترهلات الجلدية" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* 3. السكشن الثالث: المناطق المستهدفة لشد الترهلات */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              شمولية العناية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي المناطق التي يمكن علاجها وشدها بأجهزتنا؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">✨</div>
              <h3 className="text-xl font-bold text-slate-900">الوجه والرقبة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">شد اللغد، تحديد خط الفك، رفع الخدود، ومحاربة تجاعيد الرقبة لاستعادة مظهر الشباب.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">💪</div>
              <h3 className="text-xl font-bold text-slate-900">الذراعين والفخذين</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">التخلص من الترهلات الناتجة عن فقدان الوزن الزائد ومنح الأطراف مظهراً مشدوداً ومثاليق.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🌟</div>
              <h3 className="text-xl font-bold text-slate-900">البطن والخصر</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">شد الجلد المرتخي في منطقة البطن بعد الولادة أو الحميات الغذائية ونحت الخصر بأمان.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. السكشن الرابع: مميزات الأجهزة الحديثة مع الصورة الثانية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/ee.webp" alt="تقنيات أجهزة شد الجلد الحديثة" fill className="object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              تكنولوجيا متقدمة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              أحدث الأجهزة العالمية لنتائج فورية ومستدامة
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              نعتمد على تقنيات الطاقة المتطورة (مثل الترددات الراديوية والموجات فوق الصوتية المركزة) التي تخترق الجلد بلطف لتسخين الطبقات المستهدفة، مما يحفز انكماش الأنسجة الفوري وبناء كولاجين جديد يمتد لشهور طويلة.
            </p>
          </div>
        </div>
      </section>

      {/* 5. السكشن الخامس: مزايا العلاج غير الجراحي */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              لماذا تختارين هذه التقنية؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              مميزات جلسات شد الترهلات في عيادتنا
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">🛡️</span>
              <h3 className="font-bold text-slate-900 text-lg">بدون جراحة</h3>
              <p className="text-slate-600 text-sm font-light">لا توجد جروح، غرز، أو ندبات ظاهرية نهائياً.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">⏱️</span>
              <h3 className="font-bold text-slate-900 text-lg">بدون فترة تعافي</h3>
              <p className="text-slate-600 text-sm font-light">يمكنك العودة لممارسة حياتك وعملك فور انتهاء الجلسة.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">⚡</span>
              <h3 className="font-bold text-slate-900 text-lg">نتائج تدريجية طبيعية</h3>
              <p className="text-slate-600 text-sm font-light">تحسن مستمر وملاحظ في شد الجلد بمرور الوقت.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">💎</span>
              <h3 className="font-bold text-slate-900 text-lg">أمان تام</h3>
              <p className="text-slate-600 text-sm font-light">إشراف طبي دقيق وأجهزة معتمدة عالمياً.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. السكشن السادس: خطوات الجلسة مع الصورة الثالثة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              خطوات العلاج
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              كيف تُجرى جلسة شد الجلد بخطوات دقيقة؟
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تبدأ الجلسة بتقييم شامل لحالة الجلد وتحديد الجهاز المناسب، ثم يتم تطبيق الجل المرطب وتمرير نبضات الجهاز بلطف على المنطقة المستهدفة لضمان توزيع الطاقة بشكل متساوٍ ومريح للغاية.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/eeeee.webp" alt="خطوات جلسة شد الجلد" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. السكشن السابع: إرشادات ما بعد الجلسة مع الصورة الرابعة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/eeee.webp" alt="النتائج والعناية بعد شد الترهلات" fill className="object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              العناية اللاحقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              نصائح للحفاظ على النتائج المثالية لفترات طويلة
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              نوصي بشرب كميات وفيرة من الماء للمساعدة في تحفيز الكولاجين، الالتزام بالترطيب المستمر، واستخدام واقي الشمس عند الخروج، إلى جانب الحفاظ على نمط حياة صحي لتعزيز دوام النتائج المشدودة.
            </p>
          </div>
        </div>
      </section>

      {/* 8. السكشن الثامن: الأسئلة الشائعة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              استفسارات شائعة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول أجهزة شد الجلد والترهلات
            </h2>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">متى تظهر نتائج أجهزة شد الترهلات؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">تظهر نسبة من النتيجة فور الانتهاء من الجلسة بسبب انكماش الأنسجة الفوري، بينما تظهر النتيجة الحقيقية والكاملة خلال شهرين إلى 3 أشهر مع اكتمال تحفيز الكولاجين.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">كم عدد الجلسات التي يحتاجها المريض؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">تختلف حسب درجة الترهل ومنطقة الجسم؛ فبعض الحالات تستجيب من جلسة واحدة إلى 3 جلسات فاصلة يحددها الدكتور أحمد عبد الرحمن أثناء الاستشارة.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">هل الجلسة مؤلمة؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">الإجراء مريح جداً وغير مؤلم، حيث يشعر المريض فقط بإحساس دافئ خفيف أثناء توصيل الطاقة للأنسجة العميقة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. السكشن التاسع: آراء العملاء والثقة */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-[#5bc0de] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#5bc0de]/30 inline-block">
            قصص نجاح
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">ماذا تقول مريضاتنا بعد تجربة أجهزة شد الجلد؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4">
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                &ldquo;كان عندي ترهل بسيط في منطقة اللغد والرقبة، وبعد جلسات شد الجلد مع دكتور أحمد عبد الرحمن النتيجة بقت ساحرة ومحددة جداً كأنها عملية جراحية بدون أي تعب!&rdquo;
              </p>
              <div className="font-bold text-[#5bc0de] text-sm">- هبة ر.</div>
            </div>
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4">
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                &ldquo;العيادة متقدمة جداً والأجهزة حديثة بمعايير VIP. جربت شد الذراعين والنتيجة أبهرتني من أول شهر. شكراً دكتور أحمد على الأمانة والاحترافية.&rdquo;
              </p>
              <div className="font-bold text-[#5bc0de] text-sm">- ندى أ.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. السكشن العاشر: الختام والدعوة للحجز */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            استعيدي شباب ملامحك وقوامك المشدود بكل ثقة وأمان
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة اليوم واكتشفي الجهاز الأنسب لحالتك مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-[#0082a9] font-bold text-base shadow-2xl hover:bg-slate-100 transition-all duration-300"
            >
              احجزي استشارتك الخاصة الآن ←
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}