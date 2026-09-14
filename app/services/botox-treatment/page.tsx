import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// تعريف الميتا داتا الخاصة بالصفحة
export const metadata: Metadata = {
  title: 'حقن البوتوكس للخطوط التعبيرية وتجديد الشباب',
  description: 'استعدي ملامح الوجه المشرقة وتخلصي من التجاعيد التعبيرية بأعلى معايير الدقة والاحترافية مع الدكتور أحمد عبد الرحمن استشاري جراحة التجميل.',
  keywords: ['حقن بوتوكس', 'إزالة التجاعيد', 'بوتوكس الوجه', 'تجديد الشباب', 'الدكتور أحمد عبد الرحمن'],
  alternates: {
    canonical: '/services/botox-treatment',
  },
  openGraph: {
    title: 'حقن البوتوكس للخطوط التعبيرية وتجديد الشباب | الدكتور أحمد عبد الرحمن',
    description: 'استعدي ملامح الوجه المشرقة وتخلصي من التجاعيد التعبيرية بأعلى معايير الدقة والاحترافية.',
    url: '/services/botox-treatment',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function BotoxTreatmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع الفيديو الخلفي */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/botoxtreatment.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            إجراءات التجميل غير الجراحي - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            حقن البوتوكس للخطوط التعبيرية وتجديد الشباب
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            استعدي ملامح الوجه المشرقة وتخلصي من التجاعيد التعبيرية بأعلى معايير الدقة والاحترافية مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة لخدمة حقن البوتوكس"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-xl hover:bg-[#5bc0de] transition-all duration-300"
            >
              احجز استشارتك الخاصة الآن
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم نظرة عامة وتعريف الخدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا حقن البوتوكس؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              السر وراء إطلالة طبيعية خالية من التجاعيد
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              يُعد حقن البوتوكس من أكثر الإجراءات التجميلية شيوعاً وأماناً على مستوى العالم. يعمل الإجراء على إرخاء العضلات المسؤولة عن ظهور الخطوط التعبيرية المزعجة في الجبهة، وحول العينين، وبين الحاجبين.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image
              src="/botox.webp"
              alt="صورة توضيحية لخدمة حقن البوتوكس للوجه مع الدكتور أحمد عبد الرحمن"
              title="حقن البوتوكس للوجه مع الدكتور أحمد عبد الرحمن"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. مميزات الإجراء */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              مميزات حصرية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ماذا تضمن لك جلسة البوتوكس؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">جلسة سريعة وآمنة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">لا تستغرق الجلسة سوى دقائق معدودة دون الحاجة لفترة تعافي.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">نتائج تدوم طويلاً</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تستمر النتائج لفترات تتراوح من 4 إلى 6 أشهر بكل استقرار.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">مظهر شبابي مشرق</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">استعادة الحيوية والابتعاد عن مظهر الإجهاد المزمن.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. خطوات العمل والدقة الطبية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              خطوات دقيقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              كيف يتم إجراء حقن البوتوكس في العيادة؟
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نضمن لك تجربة مريحة ومصممة بعناية عبر خطوات مدروسة ومخصصة لحالتك بدءاً من الاستشارة وحتى المتابعة.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-1">1. الاستشارة والتقييم الشامل</h3>
              <p className="text-sm text-slate-600 font-light">فحص دقيق لعضلات الوجه وتحديد نقاط الحقن المستهدفة.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-1">2. خطوة الحقن الدقيقة والمريحة</h3>
              <p className="text-sm text-slate-600 font-light">استخدام إبر دقيقة للغاية ومواد معتمدة عالمياً.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-1">3. تعليمات ما بعد الجلسة</h3>
              <p className="text-sm text-slate-600 font-light">تقديم إرشادات العناية الكاملة ومتابعة النتائج.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. المناطق المستهدفة بالحقن */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              أبرز مناطق علاج البوتوكس في الوجه
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              التركيز على المواضع الأكثر عرضة للخطوط التعبيرية لإخفائها تماماً.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border space-y-3">
              <h3 className="text-lg font-bold text-[#0082a9]">خطوط الجبهة العرضية</h3>
              <p className="text-slate-600 text-sm font-light">التخلص من الانكماشات الناتجة عن تعابير الوجه المتكررة.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border space-y-3">
              <h3 className="text-lg font-bold text-[#0082a9]">ما بين الحاجبين (العابسة)</h3>
              <p className="text-slate-600 text-sm font-light">منح الوجه مظهر أكثر راحة واسترخاء وإزالة علامات التوتر.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border space-y-3">
              <h3 className="text-lg font-bold text-[#0082a9]">التجاعيد حول العينين</h3>
              <p className="text-slate-600 text-sm font-light">علاج خطوط أضحاك الفرح الجانبية لنعومة فائقة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. لماذا دكتور أحمد عبد الرحمن هو الخيار الأفضل؟ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border inline-block">
              التميز المطلق
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا دكتور أحمد عبد الرحمن هو الخيار الأفضل لحقن البوتوكس؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">حفظ الملامح الطبيعية</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">الحفاظ على تعابير الوجه العفوية بعيداً عن التجمّد الاصطناعي.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">مواد معتمدة وآمنة 100%</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">استخدام أفضل الأنواع العالمية المرخصة والمعتمدة.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border space-y-4">
              <h3 className="text-xl font-bold text-slate-900">خبرة ودقة في التشخيص</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">فحص دقيق لعضلات الوجه وحركتها قبل الحقن بدقة متناهية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. إرشادات ما بعد الجلسة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
            نصائح وإرشادات هامة بعد حقن البوتوكس
          </h2>
          <ul className="space-y-4 text-slate-700 bg-white p-8 rounded-3xl border shadow-sm">
            <li className="flex items-center gap-3">✅ تجنب الاستلقاء أو الانحناء للأمام لمدة 4 ساعات بعد الجلسة.</li>
            <li className="flex items-center gap-3">✅ الابتعاد عن التدليك أو الضغط على مناطق الحقن في أول 24 ساعة.</li>
            <li className="flex items-center gap-3">✅ تجنب التمارين الرياضية العنيفة والساونا ليومين للحصول على أفضل نتيجة.</li>
          </ul>
        </div>
      </section>

      {/* 8. متى تظهر النتائج والاستمرارية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              متى تلاحظين الفرق والنتيجة النهائية؟
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              تبدأ التحولات والاسترخاء في العضلات بالتدرج خلال الأيام الأولى، لتستقري على النتيجة المشعة والكاملة بنهاية الأسبوع الثاني، مما يمنحك ثقة مطلقة ومظهر مفعم بالشباب.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border shadow-md space-y-4">
            <h3 className="font-bold text-xl text-[#0082a9]">جدول الزمني للنتائج:</h3>
            <p className="text-sm text-slate-600">🔹 من 3 إلى 5 أيام: ظهور البوادر الأولية واسترخاء الخطوط.</p>
            <p className="text-sm text-slate-600">🔹 أسبوعين: اكتمال النتيجة النهائية وثبات الملامح الطبيعية.</p>
            <p className="text-sm text-slate-600">🔹 من 4 إلى 6 أشهر: فترة الاستمرارية المثالية قبل موعد الجلسة التالية.</p>
          </div>
        </div>
      </section>

      {/* 9. الأسئلة الشائعة (FAQ) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border inline-block">
              إجابات واضحة لراحة بالك
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول حقن البوتوكس
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">متى تبدأ نتائج حقن البوتوكس في الظهور؟</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">تبدأ النتائج الأولية خلال 3 إلى 5 أيام، والنتيجة الكاملة خلال أسبوعين.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">هل إجراء حقن البوتوكس مؤلم؟</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">لا، الإجراء غير مؤلم تماماً ونستخدم إبر دقيقة للغاية ومخدر موضعي عند الطلب.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">هل يبدو الوجه متجداً بشكل طبيعي؟</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">بالتأكيد، بفضل دقة الدكتور أحمد عبد الرحمن نحافظ على تعابير الوجه الطبيعية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            جاهزة لاستعادة نضارة وشباب بشرتك اليوم؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن ودعي الخبير الدكتور أحمد عبد الرحمن يرسم لك خطة الجمال المناسبة.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة الآن مع الدكتور أحمد عبد الرحمن"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-[#0082a9] font-bold text-base shadow-2xl hover:bg-slate-100 transition-all duration-300"
            >
              احجز استشارتك الخاصة الآن ←
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}