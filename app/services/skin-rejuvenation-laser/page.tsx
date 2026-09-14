import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ليزر نضارة وتجديد الجلد في الإسكندرية | الدكتور أحمد عبد الرحمن',
  description: 'احصل على جلسات ليزر نضارة وتجديد الجلد وتفتيح البشرة وتحفيز الكولاجين بأحدث التقنيات العالمية مع الدكتور أحمد عبد الرحمن استشاري جراحة التجميل.',
  keywords: ['ليزر نضارة', 'تجديد الجلد', 'نضارة البشرة', 'شد الوجه بالليزر', 'الدكتور أحمد عبد الرحمن'],
  alternates: {
    canonical: '/services/skin-rejuvenation-laser',
  },
  openGraph: {
    title: 'ليزر نضارة وتجديد الجلد | الدكتور أحمد عبد الرحمن',
    description: 'استعيدي إشراقة بشرتك الطبيعية وحفزي الكولاجين العميق بأحدث تقنيات الليزر المتطورة.',
    url: '/services/skin-rejuvenation-laser',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-right text-slate-900 font-sans" dir="rtl">
      
      {/* 1. الهيرو سكشن (Hero Section) */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <Image
          src="/p.webp"
          alt="ليزر نضارة وتجديد الجلد في عيادة الدكتور أحمد عبد الرحمن"
          title="ليزر نضارة وتجديد الجلد"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/30 backdrop-blur-md shadow-lg">
            إجراءات النضارة الفاخرة - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            ليزر نضارة وتجديد الجلد لإطلالة شبابية مشعة بالحيوية
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            استعيدي إشراقة بشرتك الطبيعية، وحفزي الكولاجين العميق بأحدث تقنيات الليزر المتطورة مع الدكتور أحمد عبد الرحمن.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة لليزر النضارة"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0082a9] text-white font-bold text-base shadow-xl hover:bg-[#5bc0de] transition-all duration-300"
            >
              احجز استشارتك الخاصة الآن
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم نظرة عامة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
            <Image
              src="/pp.webp"
              alt="تجديد ونضارة البشرة وعلاج البهتان"
              title="تجديد ونضارة البشرة"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              لماذا ليزر النضارة؟
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              السر المتكامل لشباب الجلد وتوحيد اللون
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              مع مرور الوقت وعوامل التلوث والإجهاد، يفقد الجلد حيويته ونضارته الطبيعية. تعمل جلسات ليزر التجديد على اختراق طبقات الجلد بلطف لتنشيط الدورة الدموية، وإزالة التصبغات السطحية، وتحفيز خلايا الكولاجين.
            </p>
          </div>
        </div>
      </section>

      {/* 3. مميزات التقنية والفوائد */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              فوائد متقدمة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ماذا تقدم لك جلسات ليزر تجديد الجلد؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">تحفيز الكولاجين المستمر</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">إرسال طاقة ليزر دقيقة تحفز الأنسجة الداخلية على إنتاج ألياف شبابية.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">استعادة الحيوية والترطيب</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تحسين قدرة الجلد على الاحتفاظ بالترطيب الداخلي.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">مكافحة الخطوط الدقيقة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">إخفاء التجاعيد التعبيرية الخفيفة وحماية البشرة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. التقنيات والنتائج */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              تقنيات ذكية مصممة خصيصاً لنوع بشرتك
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نعتمد في عيادة الدكتور أحمد عبد الرحمن على معايرة أجهزة الليزر بدقة متناهية تتناسب مع لون وطبيعة بشرتك.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
            <Image
              src="/ppp.webp"
              alt="نتائج ليزر النضارة والوجه المشرق"
              title="نتائج ليزر النضارة"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. معايير الأمان */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
            <Image
              src="/pppp.webp"
              alt="العناية بالبشرة والنضارة المتقدمة"
              title="العناية المتقدمة بالبشرة"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              بيئة علاجية فاخرة تعتني بتفاصيل جمالك
            </h2>
            <p className="text-slate-600 text-base leading-loose font-light">
              نلتزم بتطبيق أعلى معايير النظافة والتعقيم الطبي لضمان راحتك وسلامتك طوال الجلسة.
            </p>
          </div>
        </div>
      </section>

      {/* 6. خطوات الجلسة (السكشن السادس) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">خطوات جلسة ليزر النضارة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div className="p-6 rounded-2xl bg-slate-50 border">
              <h3 className="font-bold text-lg mb-2">1. الاستشارة والتقييم</h3>
              <p className="text-sm text-slate-600">فحص نوع البشرة وتحديد درجات الطاقة المناسبة.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border">
              <h3 className="font-bold text-lg mb-2">2. التنظيف والتحضير</h3>
              <p className="text-sm text-slate-600">تنظيف البشرة بعمق وتطبيق كريم مخدر عند اللزوم.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border">
              <h3 className="font-bold text-lg mb-2">3. تطبيق الليزر والعناية</h3>
              <p className="text-sm text-slate-600">تمرير نبضات الليزر وتطبيق مرطبات مهدئة بعد الجلسة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. مميزات عيادة الدكتور أحمد عبد الرحمن (السكشن السابع) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">لماذا تختارين عيادتنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-[#0082a9]">خبرة استشارية متخصصة</h3>
              <p className="text-slate-600 text-sm">إشراف مباشر ومتابعة دقيقة من الدكتور أحمد عبد الرحمن في كافة الإجراءات.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-[#0082a9]">أحدث التقنيات المعتمدة</h3>
              <p className="text-slate-600 text-sm">استخدام أحدث أجهزة الليزر العالمية الحاصلة على اعتماد الجودة والأمان.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. إرشادات ما بعد الجلسة (السكشن الثامن) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">تعليمات العناية بعد الجلسة</h2>
          <ul className="space-y-4 text-slate-700 bg-slate-50 p-8 rounded-3xl border">
            <li className="flex items-center gap-3">✅ استخدام واقي الشمس بانتظام وبدرجة حماية عالية يومياً.</li>
            <li className="flex items-center gap-3">✅ الالتزام بكريمات الترطيب والمهدئات الموصوفة من العيادة.</li>
            <li className="flex items-center gap-3">✅ الابتعاد عن مقشرات البشرة القوية خلال الأيام الأولى بعد الجلسة.</li>
          </ul>
        </div>
      </section>

      {/* 9. الأسئلة الشائعة (السكشن التاسع) */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">الأسئلة الشائعة حول ليزر النضارة</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer">
              <summary className="font-bold text-slate-900">متى تظهر نتائج جلسة ليزر النضارة؟</summary>
              <p className="mt-3 text-sm text-slate-600">تظهر النضارة الفورية خلال أيام قليلة، بينما تتحسن ملمس البشرة وتحفيز الكولاجين تدريجياً خلال الأسابيع التالية.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer">
              <summary className="font-bold text-slate-900">هل الجلسة مؤلمة؟</summary>
              <p className="mt-3 text-sm text-slate-600">الجلسة مريحة جداً وغالباً لا تتطلب تخديراً، وقد يشعر المريض بوخز خفيف يتم التعامل معه بكل سهولة.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 10. سكشن الختام والدعوة للحجز النهائي (السكشن العاشر) */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            مستعدة لتألق دائم وبشرة مشعة بالحيوية والنضارة؟
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي استشارتك الخاصة الآن ودعي الخبير الدكتور أحمد عبد الرحمن يمنحك الإشراقة الساحرة التي تستحقينها.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              title="احجز استشارتك الخاصة الآن لليزر النضارة"
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