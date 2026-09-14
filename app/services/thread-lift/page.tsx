'use client';

import Link from 'next/link';
import { useState } from 'react';

// الأسئلة الشائعة الخاصة بشد الوجه بالخيوط
const faqs = [
  {
    question: "متى تظهر نتيجة شد الوجه بالخيوط وهل هي فورية؟",
    answer: "تظهر النتيجة الفورية للشد بمجرد الانتهاء من الجلسة، وتتحسن النتيجة تدريجياً خلال الشهرين التاليين نتيجة تحفيز الكولاجين الطبيعي في أنسجة الجلد بفضل الخيوط."
  },
  {
    question: "كم تدوم نتائج شد الوجه بالخيوط الطبية؟",
    answer: "تتراوح مدة بقاء النتائج عادةً بين 12 إلى 24 شهراً، وتعتمد على نوع الخيوط المستخدمة، استجابة الجسم الطبيعية لتحفيز الكولاجين، ونمط الحياة."
  },
  {
    question: "هل إجراء شد الوجه بالخيوط مؤلم؟",
    answer: "لا، الإجراء غير مؤلم تماماً؛ حيث يتم تطبيق تخدير موضعي دقيق ومنطقة الإدخال لا تستغرق وقتاً طويلاً، مما يجعل التجربة مريحة وسلسة للغاية."
  },
  {
    question: "ما الفرق بين شد الوجه بالخيوط والعمليات الجراحية؟",
    answer: "الخيوط هي إجراء غير جراحي (Non-surgical) يتم في العيادة بدون شق جراحي، وبدون فترة تعافي طويلة، وتمنح مظهراً طبيعياً تماماً بخلاف العمليات التقليدية."
  }
];

export default function ThreadLiftPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع تشغيل فيديو thread-lift.mp4 */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/thread-lift.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            إجراءات الشد والشباب الدائم - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            شد الوجه والرقبة بالخيوط الطبية لاستعادة الشباب الفوري
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            ارفعي ملامح وجهك، تخلصي من الترهلات، وحفزي الكولاجين الطبيعي بدون جراحة وبلمسات فنية مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة لخدمة شد الوجه بالخيوط"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-xl hover:bg-[#5bc0de] transition-all duration-300"
            >
              احجز استشارتك الخاصة الآن
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم نظرة عامة وتعارض الخدمة (مُعدل بالكامل ليكون فخم وعصري بدون صور ناقصة) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الجانب البصري الفخم (بديل الصورة المكسورة) */}
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-[#005f7d] to-[#0082a9] p-8 flex flex-col justify-between border-4 border-slate-100 text-white">
            <div className="space-y-2">
              <span className="text-[#5bc0de] text-xs font-bold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                تقنية متطورة آمنة 100%
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                هندسة النحت والشد بدون جراحة
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-2xl mb-1 block">✨</span>
                <h4 className="font-bold text-sm text-white">رفع فوري للترهلات</h4>
                <p className="text-[11px] text-slate-200">نتائج ملحوظة من أول جلسة.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-2xl mb-1 block">🧬</span>
                <h4 className="font-bold text-sm text-white">تجديد الخلايا</h4>
                <p className="text-[11px] text-slate-200">تحفيز طبيعي للكولاجين.</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5bc0de]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* الجانب النصي */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا شد الوجه بالخيوط؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              السر الحقيقي لشد الترهلات واستعادة خط الفك المثالي
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              تُعد الخيوط الطبية المعتمدة التقنية الأحدث لرفع الأنسجة المرتخية في الوجه والرقبة، فهي لا تقتصر فقط على الشد الفوري، بل تحفز خلايا الجلد لإنتاج ألياف كولاجين جديدة تعيد للبشرة مرونتها وشبابها لفترات طويلة.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">شد فوري بدون جراحة</h3>
                <p className="text-xs text-slate-600 font-light">نتائج ملحوظة تظهر مباشرة بعد الجلسة وبدون غرز جراحية.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">تحفيز الكولاجين</h3>
                <p className="text-xs text-slate-600 font-light">تعزيز النضارة الذاتية واستعادة مرونة الجلد بعمق.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. المناطق المستهدفة بالشد بالخيوط */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نحت وشد شامل
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي أهم المناطق المستهدفة بالخيوط الطبية؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نصمم جلسات الخيوط لتعالج علامات التقدم وتبرز جمال ملامحك بكل دقة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900">شد الحاجبين والعينين</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                رفع الذيل الخارجي للحاجبين، فتح النظرة، والتخلص من مظهر الجفون المترخية لإطلالة أكثر حيوية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                📐
              </div>
              <h3 className="text-xl font-bold text-slate-900">تحديد خط الفك والوجنات</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                إخفاء اللغلوغ الخفيف، رفع الخدود المنسدلة، ورسم خط الفك بحدة وأناقة فائقة.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                🔗
              </div>
              <h3 className="text-xl font-bold text-slate-900">شد الرقبة والخطوط العميقة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                معالجة ترهلات الجلد في منطقة الرقبة والفك السفلي وإعادة دعم الأنسجة المرتخية بكفاءة.
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
              كيف يتم إجراء شد الوجه بالخيوط بخطوات آمنة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نضمن لك تجربة احترافية مريحة تعتمد على أحدث المعايير الطبية العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">الرسم والتقييم التشريحي</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تحديد مسارات الخيوط بدقة متناهية على الوجه بما يتناسب مع اتجاهات الجاذبية وخطوط الشباب.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">الإدخال والشد الموجه</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                إدخال الخيوط الآمنة تحت الجلد بلطف عبر كانيولا دقيقة لرفع الأنسجة بالدرجة المطلوبة تماماً.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">النتائج الفورية والعناية</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                الانتهاء من الجلسة ومغادرة العيادة مباشرة مع إرشادات بسيطة للحفاظ على أفضل استقرار.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ليه الدكتور أحمد عبد الرحمن هو الأفضل في الخيوط؟ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الخبرة والمهارة المطلقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا دكتور أحمد عبد الرحمن هو الخيار الأمثل لشد الوجه بالخيوط؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              الخيوط فن يعتمد على دقة زوايا الشد ومعرفة أعماق طبقات الجلد لتجنب أي آثار جانبية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900">خبرة تشريحية عميقة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                إلمام كامل بالبنية التشريحية للوجه لضمان إدخال الخيوط في المستويات الصحيحة بأمان تام.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                💎
              </div>
              <h3 className="text-xl font-bold text-slate-900">خيوط طبية أصلية ومعتمدة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                نستخدم حصرياً أرقى أنواع الخيوط الطبية القابلة للامتصاص والمعتمدة عالمياً لتحفيز الكولاجين.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900">مظهر طبيعي بعيد عن الشد المبالغ</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                نحرص على أن تبدو النتيجة ناعمة وطبيعية كأنك عدتِ سنوات للخلف بدون أي تغير مصطنع.
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
              نتائج مبهرة بدون تدخل جراحي أو فترة تعافي طويلة
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              يُمثل شد الوجه بالخيوط بديلًا مثاليًا للعمليات الجراحية التقليدية؛ فهو لا يتطلب تخديراً كلياً، ولا تترك أي ندبات ظاهرة، وتستطيعين العودة لممارسة حياتك وأنشطتك الطبيعية في غضون أيام قليلة بكل ثقة.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-bold text-slate-900">بدون جراحة</h4>
              <p className="text-xs text-slate-600 font-light">إجراء عيادي بالكامل بدون شق أو غرز.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⚡</span>
              <h4 className="font-bold text-slate-900">تعافي سريع</h4>
              <p className="text-xs text-slate-600 font-light">العودة للحياة اليومية بشكل فوري.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⏳</span>
              <h4 className="font-bold text-slate-900">نتائج ممتدة</h4>
              <p className="text-xs text-slate-600 font-light">تستمر لسنوات بفضل تحفيز الكولاجين.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🌟</span>
              <h4 className="font-bold text-slate-900">نضارة مستمرة</h4>
              <p className="text-xs text-slate-600 font-light">تحسين جودة ولمعان البشرة بمرور الوقت.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. إرشادات ما بعد جلسة الخيوط */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              العناية المنزلية الذكية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              إرشادات هامة للحفاظ على نتائج شد الخيوط بأمان تام
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              اتباع هذه النصائح البسيطة في الأيام الأولى يضمن استقرار الخيوط في مكانها المثالي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">تجنب الحركات المبالغة للوجه</h4>
                <p className="text-xs text-slate-600 font-light">التقليل من الضحك الشديد أو المضغ القوي والتحدث المفرط خلال أول أسبوع.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">طريقة النوم الصحيحة</h4>
                <p className="text-xs text-slate-600 font-light">النوم على الظهر مع رفع الرأس قليلاً وتجنب النوم على الوجه نهائياً لأسبوعين.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">الابتعاد عن المساج والتدليك</h4>
                <p className="text-xs text-slate-600 font-light">تجنب تدليك الوجه أو جلسات تنظيف البشرة العميقة لمدة شهر كامل بعد الإجراء.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">تجنب الحرارة والتمارين القوية</h4>
                <p className="text-xs text-slate-600 font-light">الابتعاد عن الساونا، حمامات البخار، والتمارين الرياضية العنيفة لأول 10 أيام.</p>
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
              الأسئلة الشائعة حول شد الوجه بالخيوط الطبية
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto">
              كل ما تحتاجي معرفته حول الإجراء، الأنواع المستخدمة، ومدة الاستشفاء.
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

      {/* 9. قسم مقارنة سريعة (لماذا الخيوط معنا مختلفة) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الفرق الواضح
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الفرق بين الإجراء العشوائي وعيادة الدكتور أحمد عبد الرحمن
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                <span>❌</span> الأماكن غير المتخصصة
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>• استخدام خيوط رديئة لا تحفز الكولاجين وتذوب سريعاً.</li>
                <li>• سوء توزيع الخيوط مما يؤدي لظهور تكتلات أو عدم تناسق بالوجه.</li>
                <li>• عدم مراعاة المعايير الطبية والتشريحية الدقيقة للأنسجة.</li>
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
                <li>• خيوط عالمية أصلية مضمونة تعطي أقصى درجات الشد والنضارة.</li>
                <li>• تقييم دقيق ودراسة متقدمة لاتجاهات الشد والجاذبية للوجه.</li>
                <li>• نتائج فورية طبيعية وناعمة تبرز جمال ملامحك بكل أناقة.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            مستعدة لاستعادة شباب ملامحك وإطلالتك المشدودة بكل ثقة؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي استشارتك الخاصة الآن ودعي الخبير الدكتور أحمد عبد الرحمن يمنحك النتائج المثالية التي تستحقينها.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة الآن لخدمة شد الوجه بالخيوط"
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