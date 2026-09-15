import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// 1. إعدادات الـ SEO والميتا ديسكربشن (تعمل على السيرفر)
export const metadata: Metadata = {
  title: 'أحدث أجهزة شد الجلد وتقنيات تحفيز الكولاجين | عيادة د. أحمد عبد الرحمن',
  description: 'اكتشفي أحدث أجهزة شد الجلد بدون جراحة مع الدكتور أحمد عبد الرحمن. تقنيات متطورة لشد الوجه والرقبة، محاربة التجاعيد، واستعادة شباب البشرة بمعايير VIP.',
  keywords: ['أجهزة شد الجلد', 'شد الوجه بدون جراحة', 'تقنية الهايفو والرياديفركونسي', 'تحفيز الكولاجين', 'دكتور أحمد عبد الرحمن'],
  openGraph: {
    title: 'أحدث أجهزة شد الجلد وتقنياتها | د. أحمد عبد الرحمن',
    description: 'شد ترهلات الوجه والجسم بأحدث الأجهزة الطبية المتقدمة والآمنة تماماً.',
    url: 'https://yourdomain.com/services/skin-tightening-devices',
    siteName: 'عيادة الدكتور أحمد عبد الرحمن',
    images: [{ url: '/y.webp', width: 1200, height: 630, alt: 'أحدث أجهزة شد الجلد وتقنياتها' }],
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function SkinTighteningDevicesPage() {
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
          <source src="/skintighteningdevices.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/35 backdrop-blur-md shadow-lg">
            التكنولوجيا الأحدث لشباب البشرة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            أحدث أجهزة شد الجلد وتقنيات تحفيز الكولاجين
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            استعيدي شباب ومرونة بشرتكِ بأحدث الأجهزة الطبية العالمية غير الجراحية مع الدكتور أحمد عبد الرحمن.
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

      {/* 2. السكشن الثاني: نظرة عامة وتعريف الأجهزة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              ثورة التكنولوجيا الطبية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              كيف تساهم الأجهزة الحديثة في إعادة شد الأنسجة؟
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تعتمد أجهزة شد الجلد المتطورة لدينا على توجيه طاقة دقيقة (كالترددات الراديوية والموجات فوق الصوتية) إلى طبقات الجلد العميقة دون المساس بالسطح. هذا التحفيز الموجه يجبر الخلايا على انكماش الأنسجة فورياً وبناء كولاجين جديد يمنحك مظهراً مشدوداً ومفعماً بالحيوية.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/y.webp" alt="أجهزة شد الجلد الحديثة" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* 3. السكشن الثالث: الفوائد والمميزات الرئيسية للأجهزة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              مميزات استثنائية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا تُعد أجهزتنا الخيار الأمثل لشد الجلد؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">⚡</div>
              <h3 className="text-xl font-bold text-slate-900">دقة فائقة وعميقة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تخترق الطاقة الطبقات المستهدفة بدقة متناهية لاستهداف مناطق الترهل بدقة صلبة وآمنة.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🛡️</div>
              <h3 className="text-xl font-bold text-slate-900">أمان تام بدون جراحة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">لا حاجة للتدخل الجراحي، الشق, أو الغرز الطبية؛ فكل الإجراء يتم خارجياً بأمان كامل.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">✨</div>
              <h3 className="text-xl font-bold text-slate-900">نتائج طبيعية ومستدامة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تحفيز الكولاجين الطبيعي يعني استمرار تحسن مظهر الجلد وشدّه بمرور الأشهر التالية للجلسة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. السكشن الرابع: المناطق المستهدفة مع الصورة الثانية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/yy.webp" alt="المناطق المستهدفة بأجهزة شد الجلد" fill className="object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              شمولية الاستخدام
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              مناطق متعددة يمكن علاجها وشدها بكل كفاءة
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تُستخدم هذه التقنيات المتطورة لشد ترهلات الوجه، رفع الحاجبين، تحديد خط الفك، التخلص من اللغد، فضلاً عن شد مناطق الجسم المختلفة مثل الذراعين والبطن والرقبة بكفاءة مذهلة.
            </p>
          </div>
        </div>
      </section>

      {/* 5. السكشن الخامس: خطوات الجلسة المريحة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              خطوات الإجراء
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              خطوات الخضوع لجلسة الأجهزة بكل راحة واطمئنان
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">1</span>
              <h3 className="font-bold text-slate-900 text-lg">الاستشارة والتقييم</h3>
              <p className="text-slate-600 text-sm font-light">دراسة حالة الجلد واختيار الجهاز والطاقة المناسبة.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">2</span>
              <h3 className="font-bold text-slate-900 text-lg">التجهيز والتخدير</h3>
              <p className="text-slate-600 text-sm font-light">تنظيف المنطقة وتطبيق جل مريح لتوصيل الطاقة بانسيابية.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">3</span>
              <h3 className="font-bold text-slate-900 text-lg">تطبيق الجهاز</h3>
              <p className="text-slate-600 text-sm font-light">تمرير العدسات الطبية وتوصيل النبضات بدقة تامة.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">4</span>
              <h3 className="font-bold text-slate-900 text-lg">التهدئة والعودة</h3>
              <p className="text-slate-600 text-sm font-light">وضع مرطب مهدئ والعودة الفورية لحياتك اليومية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. السكشن السادس: النتائج المبهرة مع الصورة الثالثة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              النتائج المتوقعة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              ملامح مشدودة وشباب متجدد بلمسة واحدة
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تلاحظين تحسناً ملحوظاً في مرونة الجلد وملمسه فور انتهاء الجلسة، بينما تتكشف النتيجة الحقيقية والكاملة لشد الأنسجة تدريجياً خلال الشهرين أو الثلاثة أشهر اللاحقة مع اكتمال بناء الكولاجين.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/yyy.webp" alt="نتائج استخدام أجهزة شد الجلد" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. السكشن السابع: إرشادات العناية بعد الجلسة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نصائح الرعاية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              إرشادات بسيطة للحفاظ على أفضل نتيجة بعد الجلسة
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">💧</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">ترطيب الجسم وشرب الماء</h3>
                <p className="text-slate-600 text-sm font-light mt-1">الإكثار من شرب المياه لتعزيز عمليات التمثيل الخلوي وتحفيز الكولاجين.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">☀️</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">الوقاية من أشعة الشمس</h3>
                <p className="text-slate-600 text-sm font-light mt-1">استخدام واقي الشمس الطبي بانتظام لحماية البشرة المجددة حديثاً من الإشاعات الضارة.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">🚫</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">تجنب الحرارة الشديدة</h3>
                <p className="text-slate-600 text-sm font-light mt-1">الابتعاد عن الساونا والحمامات البخارية الساخنة لمدة 48 ساعة بعد الجلسة.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">✨</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">الالتزام بالمرطبات الطبية</h3>
                <p className="text-slate-600 text-sm font-light mt-1">استخدام الكريمات المهدئة الموصوفة من قِبل العيادة لضمان راحة تامة للبشرة.</p>
              </div>
            </div>
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
              الأسئلة الشائعة حول أجهزة شد الجلد الحديثة
            </h2>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">كم عدد الجلسات التي تتطلبها الأجهزة لظهور النتيجة؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">تختلف حسب الجهاز وحالة الترهل؛ فغالباً تعطي بعض الأجهزة نتائج مذهلة من جلسة واحدة سنوية، بينما قد تتطلب حالات أخرى من 2 إلى 3 جلسات بفاصل زمني محدد.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">هل الإجراء مؤلم أو مزعج؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">الإجراء مريح تماماً بفضل استخدام تقنيات التبريد الحديثة وأجهزة التخدير الموضعي عند الحاجة، وكل ما تشعرين به هو إحساس دافئ خفيف بالأعماق.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">إلى متى تستمر نتائج شد الأجهزة؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">تدوم النتائج لفترات طويلة تتراوح بين سنة إلى سنتين وأكثر، حيث تبطئ التقنية من معدلات شيخوخة الجلد الطبيعية وتحافظ على شبابه.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. السكشن التاسع: آراء العملاء والثقة */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-[#5bc0de] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#5bc0de]/30 inline-block">
            تجارب حقيقية
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">ماذا تقول مريضاتنا بعد استخدام أجهزة شد الجلد؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4">
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                &ldquo;تجربتي مع أجهزة شد الوجه عند الدكتور أحمد عبد الرحمن كانت ممتازة. خط الفك عندي بقى محدد وواضح كأني عملت عملية جراحية بدون أي تعافي!&rdquo;
              </p>
              <div className="font-bold text-[#5bc0de] text-sm">- لمياء س.</div>
            </div>
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4">
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                &ldquo;العيادة مجهزة بأحدث الأجهزة العالمية ومعايير الـ VIP واضحة في الاهتمام والاحترافية. النتائج ظهرت معايا تدريجياً بشكل طبيعي ومبهر.&rdquo;
              </p>
              <div className="font-bold text-[#5bc0de] text-sm">- شيرين ك.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. السكشن العاشر: الختام والدعوة للحجز */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            استعيدي شباب ملامحك وقوامك المشدود اليوم بكل ثقة وأمان
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن واكتشفي الجهاز الأنسب لحالتك مع الدكتور أحمد عبد الرحمن.
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