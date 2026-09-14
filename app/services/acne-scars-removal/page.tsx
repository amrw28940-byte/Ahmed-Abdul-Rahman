'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// الأسئلة الشائعة الخاصة بإزالة ندبات حب الشباب
const faqs = [
  {
    question: "متى تظهر نتائج جلسات إزالة ندبات حب الشباب؟",
    answer: "تبدأ التحسنات في ملمس ونضارة البشرة بالظهور تدريجياً بعد أسبوعين إلى ثلاثة أسابيع من الجلسة الأولى، حيث يتجدد الكولاجين وتتلاشى الندبات بعمق مع اكتمال سلسلة الجلسات."
  },
  {
    question: "كم عدد الجلسات التي تحتاجها البشرة للحصول على نتيجة مثالية؟",
    answer: "يختلف عدد الجلسات حسب عمق ونوع الندبات، وعادةً ما تتراوح الخطة العلاجية بين 3 إلى 6 جلسات تفصل بينها مدة تتراوح من 4 إلى 6 أسابيع لضمان أفضل استجابة."
  },
  {
    question: "هل جلسات علاج الندبات مؤلمة؟",
    answer: "الإجراء مريح للغاية بفضل استخدام كريمات تخدير موضعية قوية ومخصصة قبل الجلسة بفترة كافية، مما يجعل شعور المريض خفيفاً جداً ومتحملاً تماماً."
  },
  {
    question: "هل تترك الجلسات أي آثار جانبية أو فترة تعافي طويلة؟",
    answer: "تقتصر الآثار الجانبية على احمرار مؤقت يزول خلال أيام قليلة، ولا تتطلب الجلسات فترة تعافي طويلة؛ حيث يمكنك العودة لممارسة حياتك الطبيعية فوراً مع الالتزام بواقي الشمس."
  }
];

export default function AcneScarsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع صورة acne-scars-removal.webp */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <Image
          src="/acne-scars-removal.webp"
          alt="إزالة ندبات حب الشباب"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            إجراءات تصحيح البشرة وتجديدها - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            إزالة ندبات حب الشباب واستعادة ملمس البشرة الناعم
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            تخلصي من الحفر والآثار القديمة، أعيدي بناء الكولاجين، وتألقي ببشرة صافية خالية من العيوب مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة لإزالة ندبات حب الشباب"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-xl hover:bg-[#5bc0de] transition-all duration-300"
            >
              احجز استشارتك الخاصة الآن
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم نظرة عامة وتعارض الخدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-[#005f7d] to-[#0082a9] p-8 flex flex-col justify-between border-4 border-slate-100 text-white">
            <div className="space-y-2">
              <span className="text-[#5bc0de] text-xs font-bold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                تقنيات متقدمة لإعادة بناء الجلد
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                علاج جذري لآثار الحبوب والحفر العميقة
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-2xl mb-1 block">✨</span>
                <h4 className="font-bold text-sm text-white">نعومة ملموسة</h4>
                <p className="text-[11px] text-slate-200">توحيد سطح البشرة بدقة.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-2xl mb-1 block">🧬</span>
                <h4 className="font-bold text-sm text-white">تحفيز الكولاجين</h4>
                <p className="text-[11px] text-slate-200">إصلاح الأنسجة التالفة من الأعماق.</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5bc0de]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا علاج ندبات حب الشباب؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              الحل النهائي للبشرة الصافية والمشرقة بلا آثار
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تترك حبوب الشباب أثراً مزعجاً في كثير من الأحيان على شكل حفر أو ندبات عميقة يصعب إزالتها بالطرق التقليدية. في عيادتنا، نعتمد على أحدث التقنيات الطبية لتكسير الأنسجة الليفية وتحفيز الجلد على إنتاج خلايا جديدة كلياً.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">إزالة الحفر والندبات</h3>
                <p className="text-xs text-slate-600 font-light">رفع الندبات الغائرة ومساواتها مع سطح الجلد الطبيعي.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">تصفية التصبغات</h3>
                <p className="text-xs text-slate-600 font-light">التخلص من الآثار البنية والحمراء الناتجة عن الحبوب القديمة.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. الأنواع والتقنيات المستخدمة للندبات */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              تقنيات علاجية مخصصة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي أحدث التقنيات المستخدمة لإزالة الندبات؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نختار التقنية الأنسب لحالة بشرتك وعمق الندبات لضمان أعلى نسبة نجاح ومظهر مثالي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900">الليزر الجزئي (Fractional Laser)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                إحداث أعمدة حرارية دقيقة لتحفيز البشرة على بناء طبقات كولاجين جديدة وملء الحفر والندبات بكفاءة.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🧬
              </div>
              <h3 className="text-xl font-bold text-slate-900">الميكرونيدلنج بالراديو فريكونسي</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                دمج الإبر الدقيقة مع طاقة الموجات الراديوية للوصول للطبقات العميقة وشد ألياف الجلد التالفة.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🛠️
              </div>
              <h3 className="text-xl font-bold text-slate-900">تقشير وفصل الألياف (Subcision)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                فصل الألياف المشدودة تحت الندبات العميقة لتحرير الجلد المرتد لأعلى واستعادة ملمسه المستوي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. خطوات تنفيذ الإجراء في العيادة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/10 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              خطوات العمل والدقة الطبية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              كيف تتم جلسات علاج الندبات خطوة بخطوة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نضمن لك تجربة علاجية مدروسة تدار بأعلى معايير النظافة والأمان الطبي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">الفحص والتشخيص الشامل</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تقييم أنواع الندبات (حفر ضحلة، عميقة، أو صندوقية) وتحديد خطة الجلسات المخصصة لبشرتك.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">التخدير الموضعي وتطبيق الجهاز</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تطبيق مخدر موضعي مريح ثم استخدام التقنية المختارة بعناية فائقة لتغطية كافة مناطق الندبات.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">التهدئة وبرنامج المتابعة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                ترطيب البشرة بمواد مهدئة وتوجيهك بالتعليمات المنزلية لضمان أسرع شفاء وأفضل نتيجة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ليه الدكتور أحمد عبد الرحمن هو الأفضل في علاج الندبات؟ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الخبرة والمهارة المطلقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا دكتور أحمد عبد الرحمن هو الخيار الأمثل لعلاج ندبات البشرة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              علاج الندبات يتطلب خبرة دقيقة في تقييم استجابة الجلد واختيار الطاقة والعمق المناسب لكل حالة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900">خبرة واسعة في تصحيح الجلد</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                سجل حافل بالنجاحات في تحسين ملمس البشرة المتضررة وإخفاء الحفر والندبات المستعصية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                💎
              </div>
              <h3 className="text-xl font-bold text-slate-900">أحدث أجهزة التكنولوجيا العالمية</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                نعتمد على منصات ليزر وأجهزة متطورة تضمن أعلى كفاءة علاجية بأقل فترة تعافي ممكنة.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900">خطط علاجية مدمجة ومخصصة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                دمج أكثر من تقنية في الخطة العلاجية الواحدة للوصول إلى أقصى تحسن ممكن في ملمس وشكل البشرة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. مميزات إضافية ومعايير الأمان المتقدمة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              معايير الأمان والفخامة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              نتائج حقيقية ودائمة في بيئة طبية آمنة
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نولي في عيادتنا عناية قصوى لتعقيم وتطهير كل الأدوات والأجهزة لضمان سلامتك التامة. نعمل على تحفيز الجلد بطريقة علمية مدروسة تضمن لك نتائج دائمة ومستقرة تعيد لك الثقة ببشرتك المشرقة.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-bold text-slate-900">تعقيم تام</h4>
              <p className="text-xs text-slate-600 font-light">أعلى معايير مكافحة العدوى والتعقيم.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">📈</span>
              <h4 className="font-bold text-slate-900">تحسن مستمر</h4>
              <p className="text-xs text-slate-600 font-light">استمرار تحسن الجلد بمرور الأسابيع.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🌿</span>
              <h4 className="font-bold text-slate-900">بدون مضاعفات</h4>
              <p className="text-xs text-slate-600 font-light">بروتوكولات تقلل أي آثار جانبية.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⭐</span>
              <h4 className="font-bold text-slate-900">نتائج دائمة</h4>
              <p className="text-xs text-slate-600 font-light">إصلاح جذري لأنسجة الجلد التالفة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. إرشادات ما بعد جلسة إزالة الندبات */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              العناية المنزلية الذكية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              إرشادات هامة للحفاظ على نتائج جلسات الندبات
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              اتباع هذه النصائح يضمن حماية البشرة وتسريع عملية تجدد الكولاجين بشكل مثالي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">الالتزام بواقي الشمس</h4>
                <p className="text-xs text-slate-600 font-light">تجنب التعرض المباشر لأشعة الشمس واستخدام واقي شمس طبي معتمد بانتظام.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">الترطيب المستمر والمكثف</h4>
                <p className="text-xs text-slate-600 font-light">استخدام الكريمات المهدئة والمرطبات الطبية الموصوفة للمساعدة على تعافي الجلد.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">تجنب مستحضرات التجميل القوية</h4>
                <p className="text-xs text-slate-600 font-light">الابتعاد عن المكياج والمواد المعطرة أو المقشرات الكيميائية خلال أول أيام بعد الجلسة.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">عدم تقشير القشور البسيطة</h4>
                <p className="text-xs text-slate-600 font-light">ترك القشور الناتجة عن التقشير أو الليزر تتساقط تلقائياً وعدم محاولة إزالتها يدوياً.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. الأسئلة الشائعة (FAQ) بتصميم تفاعلي أنيق */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              إجابات واضحة لراحة بالك
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الأسئلة الشائعة حول إزالة ندبات حب الشباب
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto">
              كل ما تحتاجي معرفته حول الإجراء، عدد الجلسات، ومدة الاستشفاء.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#0082a9] bg-slate-50/50 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-right font-bold text-slate-900 text-base md:text-lg focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-transform duration-300 bg-[#0082a9]/10 text-[#0082a9] ${isOpen ? 'rotate-180 bg-[#0082a9] text-white' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed font-light border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. قسم مقارنة سريعة (لماذا العلاج معنا مختلف) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الفرق الواضح
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الفرق بين المراكز التجريبية وعيادة الدكتور أحمد عبد الرحمن
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                <span>❌</span> المراكز غير المتخصصة
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>• استخدام أجهزة قديمة لاخترق الطبقات العميقة للندبات.</li>
                <li>• جلسات عشوائية بدون تشخيص دقيق لنوع حفر الوجه.</li>
                <li>• نتائج ضعيفة وعدم القدرة على تحسين ملمس الجلد بشكل حقيقي.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#0082a9] shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#0082a9] text-white text-[10px] font-bold px-3 py-1 rounded-br-xl uppercase">
                معيار VIP
              </div>
              <h3 className="text-lg font-bold text-[#0082a9] flex items-center gap-2 pt-2">
                <span>✔</span> عيادة الدكتور أحمد عبد الرحمن
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 font-light">
                <li>• أحدث تقنيات الليزر وأجهزة تحفيز الكولاجين العالمية المعتمدة.</li>
                <li>• بروتوكول علاجي مخصص يدمج تقنيات متعددة لضمان نتيجة مبهرة.</li>
                <li>• متابعة طبية دقيقة لضمان أعلى نسب الشفاء ونعومة البشرة.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            مستعدة لبشرة صافية خالية من الندبات والحفر بكل ثقة؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي استشارتك الخاصة الآن ودعي الخبير الدكتور أحمد عبد الرحمن يمنحك البشرة النضرة والمثالية التي تستحقينها.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة الآن لإزالة ندبات حب الشباب"
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