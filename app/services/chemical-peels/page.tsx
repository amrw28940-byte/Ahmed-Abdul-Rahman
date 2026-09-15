import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// 1. إعدادات الـ SEO والميتا ديسكربشن (تعمل على السيرفر)
export const metadata: Metadata = {
  title: 'جلسات التقشير الكيميائي للوجه ونضارة البشرة | عيادة د. أحمد عبد الرحمن',
  description: 'احجزي جلستك الآن مع الدكتور أحمد عبد الرحمن لأفضل أنواع التقشير الكيميائي الطبي لعلاج البقع، تصبغات الجلد، آثار الحبوب، وإعادة النضارة للبشرة بمعايير VIP.',
  keywords: ['تقشير كيميائي', 'تقشير الوجه', 'علاج التصبغات', 'آثار حب الشباب', 'نضارة البشرة', 'دكتور أحمد عبد الرحمن'],
  openGraph: {
    title: 'جلسات التقشير الكيميائي للوجه | د. أحمد عبد الرحمن',
    description: 'تجديد خلايا البشرة، إزالة البقع والتصبغات، واستعادة الإشراقة بأحدث الأحماض الطبية الآمنة.',
    url: 'https://yourdomain.com/services/chemical-peels',
    siteName: 'عيادة الدكتور أحمد عبد الرحمن',
    images: [{ url: '/v.webp', width: 1200, height: 630, alt: 'جلسات التقشير الكيميائي للوجه' }],
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function ChemicalPeelsPage() {
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
          <source src="/chemicalpeels.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-[#5bc0de] font-bold text-xs md:text-sm tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#5bc0de]/35 backdrop-blur-md shadow-lg">
            إشراقة وتجديد خلايا البشرة الطبيعي - VIP
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            جلسات التقشير الكيميائي الطبي للوجه
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            تخلصي من البقع الداكنة والتصبغات، وجددي خلايا بشرتك لتستعيدي صفاءها وبريقها مع الدكتور أحمد عبد الرحمن.
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
              سر النضارة والصفاء
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              ما هو التقشير الكيميائي الطبي وكيف يعمل؟
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              التقشير الكيميائي هو إجراء علاجي يتم فيه تطبيق تركيبات مدروسة من الأحماض الطبية على الجلد لإزالة الطبقات التالفة والميتة، وتحفيز نمو طبقة جديدة أكثر نعومة، توحيداً للون، وأكثر إشراقاً وحيوية.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/v.webp" alt="جلسات التقشير الكيميائي للوجه" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* 3. السكشن الثالث: الحالات التي يعالجها التققير الكيميائي */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#0082a9] font-semibold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نتائج علاجية متكاملة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ما هي المشاكل الجلدية التي يعالجها التقشير الكيميائي؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">☀️</div>
              <h3 className="text-xl font-bold text-slate-900">التصبغات والبقع الداكنة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">إزالة بقع الشمس، الكلف، والتصبغات الناتجة عن التقدم في السن أو التغيرات الهرمونية.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">🌱</div>
              <h3 className="text-xl font-bold text-slate-900">آثار حب الشباب البسيطة</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تحسين ملمس الجلد وتقليل الآثار الحمراء والبنفسجية المتبقية بعد التئام الحبوب.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0082a9] text-white flex items-center justify-center font-bold text-xl shadow-md">✨</div>
              <h3 className="text-xl font-bold text-slate-900">الباهتة وفاقدة الحيوية</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">تجديد خلايا السطح ومنح الوجه بريقاً وإشراقة فورية تظهر بوضوح بعد تقشير الطبقة الميتة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. السكشن الرابع: أنواع التقشير مع الصورة الثانية */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/vv.webp" alt="أنواع التقشير الكيميائي الطبي" fill className="object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              تخصص ودقة طبية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              أعماق مختلفة للتقشير تتناسب خصيصاً مع طبيعة بشرتك
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              لا توجد جلسة تقشير واحدة تناسب الجميع؛ لذلك يحدد الدكتور أحمد عبد الرحمن النوع المناسب (السطحي، المتوسط، أو العميق) واختيار الأحماض الملائمة (مثل الجليكوليك، الساليسيليك، أو اللاكتيك) لضمان أعلى فاعلية وأمان تام.
            </p>
          </div>
        </div>
      </section>

      {/* 5. السكشن الخامس: خطوات الجلسة المريحة */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py.1.5 rounded-full border border-[#0082a9]/20 inline-block">
              خطوات الإجراء
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              خطوات جلسة التقشير الكيميائي بعناية فائقة
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">1</span>
              <h3 className="font-bold text-slate-900 text-lg">التقييم والتنظيف</h3>
              <p className="text-slate-600 text-sm font-light">تحديد نوع البشرة وتنظيفها بعمق لإزالة أي زيوت أو شوائب.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">2</span>
              <h3 className="font-bold text-slate-900 text-lg">تطبيق محلول الحمض</h3>
              <p className="text-slate-600 text-sm font-light">توزيع المادة المقشرة بدقة وحساب الوقت المناسب حسب استجابة الجلد.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">3</span>
              <h3 className="font-bold text-slate-900 text-lg">المعادلة والهدوء</h3>
              <p className="text-slate-600 text-sm font-light">معادلة تأثير الحمض وتبريد البشرة وتطبيق المستحضرات المهدئة.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-3 text-center">
              <span className="w-10 h-10 mx-auto rounded-full bg-[#0082a9] text-white flex items-center justify-center font-bold">4</span>
              <h3 className="font-bold text-slate-900 text-lg">إرشادات التعافي</h3>
              <p className="text-slate-600 text-sm font-light">منحك روتين العناية المنزلي البسيط لضمان فترة تقشير آمنة وناجحة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. السكشن السادس: فوائد وإشراقة مع الصورة الثالثة */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0082a9] text-xs font-bold tracking-widest uppercase bg-[#5bc0de]/10 px-3.5 py-1.5 rounded-md inline-block">
              النتائج المتوقعة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              بشرة جديدة متألقة، ناعمة كالحرير
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-loose font-light">
              مع تساقط الطبقة التالفة خلال الأيام التالية للجلسة، تكتشفين بشرة جديدة تحتها تتمتع بلون موحد، مسام أضيق، وملمس ناعم للغاية يخلو من العيوب والشوائب الظاهرة.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
            <Image src="/vvv.webp" alt="نتائج التقشير الكيميائي للوجه" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. السكشن السابع: تعليمات ما بعد التقشير */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/15 px-4 py-1.5 rounded-full border border-[#0082a9]/20 inline-block">
              نصائح ذهبية
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              تعليمات هامة خلال فترة التقشير والتعافي
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">☀️</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">حماية صارمة من الشمس</h3>
                <p className="text-slate-600 text-sm font-light mt-1">الالتزام التام بواقي الشمس الطبي وتجديده بانتظام لحماية الطبقة الجديدة الرقيقة.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">🛑</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">عدم قشر الجلد بالأصابع</h3>
                <p className="text-slate-600 text-sm font-light mt-1">ترك الجلد المتقشر يتساقط تلقائياً وعدم جذبه نهائياً لتجنب ظهور أي تصبغات أو علامات.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">💧</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">الترطيب المكثف</h3>
                <p className="text-slate-600 text-sm font-light mt-1">استخدام الكريمات المهدئة والمرطبة الموصوفة من العيادة لتسريع التئام وترطيب الجلد.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <span className="text-[#0082a9] font-bold text-xl">🚫</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">إيقاف المواد الفعالة</h3>
                <p className="text-slate-600 text-sm font-light mt-1">الابتعاد عن استخدام الريتينول، أحماض الفواكه المنزلية، أو المقشرات القوية لعدة أيام.</p>
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
              الأسئلة الشائعة حول جلسات التقشير الكيميائي
            </h2>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">هل يتقشر الوجه بشكل كبير بعد الجلسة؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">تختلف درجة التقشير باختلاف قوة ونوع الحمض المستخدم؛ فبعض الأنواع تسبب تقشيراً خفيفاً بالكاد يُلاحظ، بينما تسبب أنواع أخرى تقشيراً ملحوظاً يستمر لعدة أيام.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">كم عدد الجلسات اللازمة للحصول على نتيجة مثالية؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">عادةً يوصى بسلسلة تتراوح بين 3 إلى 6 جلسات يفصل بينها عدة أسابيع، حسب المشكلة المراد علاجها (تصبغات أو ندبات أو نضارة عامة).</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">هل الإجراء آمن لجميع أنواع البشرة؟</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">نعم، مع التقييم الطبي الدقيق واختيار نوع الحمض والتركيز المناسب لكل لون ونوع بشرة، يكون الإجراء آمناً تماماً وتحت السيطرة الطبية الكاملة.</p>
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
          <h2 className="text-3xl md:text-4xl font-extrabold">ماذا تقول مريضاتنا بعد تجربة التقشير الكيميائي؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4">
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                &ldquo;كان عندي تصبغات مزعجة نتيجة آثار الشمس، وبعد جلسات التقشير الكيميائي مع الدكتور أحمد عبد الرحمن، لون بشرتي بقى موحد ومضيء جداً! شكراً للاحترافية.&rdquo;
              </p>
              <div className="font-bold text-[#5bc0de] text-sm">- ميادة ع.</div>
            </div>
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4">
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                &ldquo;العيادة مستواها فخم ومعايير الـ VIP واضحة في كل تفصيلة. التقشير جاب نتيجة مذهلة معايا من أول جلستين وبشرتي بقت ناعمة وصافية.&rdquo;
              </p>
              <div className="font-bold text-[#5bc0de] text-sm">- دينا م.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. السكشن العاشر: الختام والدعوة للحجز */}
      <section className="py-20 px-6 bg-[#0082a9] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            استعيدي نضارة بشرتك ونقاءها اليوم بكل ثقة وأمان
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-light max-w-xl mx-auto">
            احجزي موعد استشارتك الخاصة الآن وابدئي رحلة العلاج والتجديد مع الدكتور أحمد عبد الرحمن.
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