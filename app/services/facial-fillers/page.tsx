'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// الأسئلة الشائعة الخاصة بالفيلر
const faqs = [
  {
    question: "متى تظهر النتيجة النهائية لحقن الفيلر؟",
    questionEn: "When do filler results show?",
    answer: "تظهر النتائج الأولية فوراً بعد الانتهاء من الجلسة، بينما تظهر النتيجة النهائية والناعمة بعد حوالي أسبوع إلى أسبوعين، وذلك بعد زوال التورم البسيط واستقرار مادة الهيالورونيك في أنسجة الجلد."
  },
  {
    question: "كم تستمر مدة بقاء الفيلر في الوجه والشفايف؟",
    questionEn: "How long does filler last?",
    answer: "تتراوح مدة بقاء الفيلر عادةً بين 9 إلى 18 شهراً، وتختلف حسب المنطقة المحقونة، نوع المادة المستخدمة، ومعدل حرق الأيض (Metabolism) الخاص بالجسم."
  },
  {
    question: "هل إجراء حقن الفيلر مؤلم؟",
    questionEn: "Is filler procedure painful?",
    answer: "لا، الإجراء غير مؤلم تماماً؛ حيث نستخدم مخدر موضعي عالي الجودة وكريمات تخدير مخصصة قبل الجلسة، بالإضافة إلى أن بعض أنواع الفيلر تحتوي مسبقاً على مادة الليدوكائين المخدرة لراحة تامة."
  },
  {
    question: "هل يمكن إزالة الفيلر في حال لم تعجبني النتيجة؟",
    questionEn: "Can fillers be dissolved?",
    answer: "نعم، وبكل سهولة! الفيلر المصنوع من حمض الهيالورونيك يمكن إزالته في أي وقت وبشكل فوري وآمن تماماً باستخدام إنزيم خاص يسمى 'الهيالورونيداز' (Hyaluronidase)."
  }
];

export default function FacialFillersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) مع تشغيل فيديو facialfillers.mp4 */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        >
          <source src="/facialfillers.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            إجراءات النحت وتحديد الملامح - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            فلير الشفايف والوجه لتحديد الملامح واستعادة النضارة
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            استعادة الامتلاء الطبيعي، رسم خط الفك، وتحديد الشفايف بلمسات فنية دقيقة مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة لخدمة فلير الشفايف والوجه"
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
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا فلير الوجه والشفايف؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              السر وراء الإطلالة المتناسقة والشباب الساحر
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              يُعد الفيلر (حمض الهيالورونيك) الحل المثالي لاستعادة الحجم المفقود في الوجه، ملء الفراغات، وتحديد تفاصيل الجمال بتركيز عالٍ على التناغم والتناسق بين ملامحك لتبدو في أهيب طلة طبيعية.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">تحديد فوري للملامح</h3>
                <p className="text-xs text-slate-600 font-light">إبراز جمال الخدود والشفايف وخط الفك بمهارة فائقة.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">ترطيب عميق ونضارة</h3>
                <p className="text-xs text-slate-600 font-light">تحفيز خلايا الجلد على الاحتفاظ بالماء والنضارة الدائمة.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image
              src="/fillers.webp"
              alt="صورة توضيحية لخدمة فلير الشفايف والوجه مع الدكتور أحمد عبد الرحمن"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. المناطق المستهدفة بالحقن */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نحت وتناسق مخصص
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي أبرز المناطق المستهدفة بحقن الفيلر؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نصمم جلسات الفيلر لتناسب هيكل وجهك الفريد وتبرز جمالك الطبيعي في أماكن محددة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                💋
              </div>
              <h3 className="text-xl font-bold text-slate-900">فيلر الشفايف (Lips)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تحديد إطار الشفايف، إضافة امتلاء ناعم ومتناسق، والتخلص من الجفاف والخطوط الرفيعة بلمسة جذابة.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900">فيلر الخدود والوجنات</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                رفع الخدود المترهلة، استعادة الامتلاء الشبابي، ومنح الوجه مظهراً مرفوعاً ومشرقاً بشكل طبيعي.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">
                📐
              </div>
              <h3 className="text-xl font-bold text-slate-900">خط الفك والذقن (Jawline)</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تحديد زوايا الوجه السفلية، رسم خط الفك بحدة أنيقة، وتصحيح شكل الذقن لإبراز تناغم الملامح.
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
              كيف يتم إجراء جلسة الفيلر بخطوات مدروسة؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              نضمن لك تجربة مريحة وآمنة تدار بمعايير عالمية دقيقة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">التحليل الجمالي والاستشارة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                دراسة مقاسات وتناغم الوجه وتحديد الكميات بدقة لضمان نتيجة متوازنة ومبهرة.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">التخدير الدقيق والحقن</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                تخدير موضعي مريح واستخدام تقنيات الكانيولا المتطورة لتوزيع المادة بسلاسة وبدون أي تكتلات.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">التعليمات والمتابعة المستمرة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                توجيهات مابعد الجلسة لضمان استقرار الفيلر بأفضل شكل ممكن والمتابعة الدورية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ليه الدكتور أحمد عبد الرحمن هو الأفضل في الفيلر؟ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              التميز والخبرة المطلقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              لماذا دكتور أحمد عبد الرحمن هو الخيار الأفضل لفلير الوجه والشفايف؟
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              الفن يكمن في معرفة أين تحقن وبأي كمية لتحقيق نتيجة طبيعية لا تبدو مصطنعة أبداً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                🎨
              </div>
              <h3 className="text-xl font-bold text-slate-900">رؤية فنية وتشريحية متقدمة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                فهم عميق لتشريح الأوعية الدموية وعضلات الوجه لضمان أعلى معايير الأمان وتفادي أي مخاطر.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                💎
              </div>
              <h3 className="text-xl font-bold text-slate-900">أجود أنواع الفيلر العالمي</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                نعتمد حصرياً على الفيلر العالمي المرخص الحاصل على تصديقات الجودة العالمية لضمان الديمومة والنقاء.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold text-2xl">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-slate-900">التوازن والبعد عن المبالغة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                نؤمن بالجمال الهادئ المتناسق الذي يبرز ملامحك الأصلية بأسلوب راقي وناعم يبعث على الثقة.
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
              معايير الأمان الفائقة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              أمانك وصحتك على رأس أولوياتنا دائمًا
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نلتزم في عيادتنا بأعلى معايير التعقيم الطبي واستخدام الإبر الدقيقة المرنة (Cannulas) لتقليل الكدمات والتورم إلى أدنى حد ممكن، مما يمنحك فترة تعافي سريعة ومريحة للغاية تمكنك من العودة لحياتك اليومية فوراً.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-bold text-slate-900">تعقيم فائق</h4>
              <p className="text-xs text-slate-600 font-light">أدوات أحادية الاستخدام بالكامل.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">⚡</span>
              <h4 className="font-bold text-slate-900">تعافي سريع</h4>
              <p className="text-xs text-slate-600 font-light">بدون فترة تعافي طويلة أو تعطيل.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">✨</span>
              <h4 className="font-bold text-slate-900">نتائج متناغمة</h4>
              <p className="text-xs text-slate-600 font-light">مظهر طبيعي بعيد عن التكلف.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-2">
              <span className="text-2xl">🎯</span>
              <h4 className="font-bold text-slate-900">دقة بالحقن</h4>
              <p className="text-xs text-slate-600 font-light">توزيع متساوي للمادة في الطبقات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. إرشادات ما بعد جلسة الفيلر */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              عناية منزلية ذكية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              إرشادات هامة للحفاظ على نتائج الفيلر لفترة أطول
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              اتباع هذه التعليمات البسيطة يضمن لك استقراراً مثالياً وشكلاً متألقاً يدوم طويلاً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">تجنب الضغط المباشر</h4>
                <p className="text-xs text-slate-600 font-light">تجنب النوم على الوجه أو الضغط على المناطق المحقونة خلال الـ 48 ساعة الأولى.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">الابتعاد عن الحرارة العالية</h4>
                <p className="text-xs text-slate-600 font-light">تجنب الساونا، حمامات البخار، والتعرض المباشر لأشعة الشمس القوية لأول أيام.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">شرب كميات كافية من الماء</h4>
                <p className="text-xs text-slate-600 font-light">حمض الهيالورونيك يمتص الماء، لذا شرب السوائل يعزز نضارة وامتلاء المنطقة.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-4 space-x-reverse">
              <span className="w-8 h-8 rounded-full bg-[#0082a9]/10 text-[#0082a9] flex items-center justify-center font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">تجنب التمارين الشاقة</h4>
                <p className="text-xs text-slate-600 font-light">إيقاف التمارين الرياضية العنيفة لمدة 24-48 ساعة لمنع زيادة تدفق الدم المفاجئ.</p>
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
              الأسئلة الشائعة حول فلير الشفايف والوجه
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto">
              كل ما تحتاجي معرفته حول الإجراء، المواد المستخدمة، وفترة الاستشفاء.
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

      {/* 9. قسم مقارنة سريعة (لماذا الفيلر معنا مختلف) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              الفرق الواضح
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              الفرق بين الإجراء التقليدي وعيادة الدكتور أحمد عبد الرحمن
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                <span>❌</span> الأماكن العشوائية أو غير المختصة
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li>• استخدام كميات مبالغ فيها تؤدي لتكتل الوجه (Overfilled Face).</li>
                <li>• مواد مجهولة المصدر قد تسبب التهابات ومشاكل مزمنة.</li>
                <li>• عدم دراسة تشريح الوجه مما يتسبب في تغير شكل الملامح تماماً.</li>
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
                <li>• توزيع دقيق يحافظ على هويتك وملامحك الطبيعية الساحرة.</li>
                <li>• مواد أصلية معتمدة عالمياً 100% وبأعلى درجات الأمان.</li>
                <li>• تقييم فني شامل قبل الحقن لضمان نتائج متناغمة ومبهرة.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            جاهزة لإبراز جاذبية ملامحك وإطلالتك بلمسة فنية سامية؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن ودعي الخبير الدكتور أحمد عبد الرحمن يمنحك الشكل المثالي الذي يليق بك.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة الآن لخدمة فلير الشفايف والوجه"
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