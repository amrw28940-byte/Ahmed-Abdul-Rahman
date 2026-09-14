'use client';

import Image from 'next/image';

const aboutData = [
  {
    title: "الأساس الأكاديمي والشهادات العالمية الفاخرة",
    subtitle: "المسيرة العلمية والاعتمادات الدولية",
    description: "تأسست مسيرة الدكتور أحمد عبد الرحمن العلمية على أسس رصينة ومعايير طبية عالمية لا تقبل المساومة. لقد حصل على درجاته العلمية المتقدمة وشهادات التخصص الدقيقة من أفضل الجامعات الأكاديمية والمراكز الطبية المعترف بها دولياً. هذا العمق الأكاديمي لا يعكس فقط تفوقاً دراسياً فريداً، بل يمثل درعاً وثيقاً يضمن للمرضى تقديم استشارات وتشخيصات مبنية على أحدث الأبحاث والدراسات العالمية في مجالات الجراحة والتجميل، مما يضع بين أيديكم حصيلة علمية لا تقدر بثمن.",
    image: "/aaa.webp",
    quote: "«العلم هو البوصلة الحقيقية لأي نجاح طبي مستدام، والالتزام بالتطوير المستمر هو واجبنا الأول تجاه كل مريض.»"
  },
  {
    title: "الخبرة الميدانية العميقة داخل أروقة المستشفيات الكبرى",
    subtitle: "الاحترافية الميدانية والممارسة اليومية",
    description: "إن السنوات الطويلة من الممارسة المكثفة والعمل الميداني المستمر داخل كبرى المستشفيات العالمية والمحلية قد صقلت مهارات الدكتور أحمد عبد الرحمن وجعلته قادراً على إدارة أدق الحالات وأكثرها تعقيداً بكفاءة وثبات تامين. كل خطوة داخل المستشفى كانت بمثابة اختبار حقيقي لقدرته على المزج بين السرعة والدقة، والتعامل بحرفية فائقة مع مختلف التحديات الجراحية والترميمية، مما يعزز ثقة المرضى المطلقة في قدرته على تحقيق أفضل النتائج الممكنة بأعلى معايير الأمان والسلامة.",
    image: "/bbb.webp",
    quote: "«غرفة العمليات والمستشفى هما ميدان الحقيقة، وفيهما يظهر الفرق الحقيقي بين التطبيق النظري والاحترافية العملية المطلقة.»"
  },
  {
    title: "دقة متناهية وعناية فائقة في علاج المرضى",
    subtitle: "اللمسة العلاجية الإنسانية والمهنية",
    description: "تتجسد فلسفة الدكتور أحمد عبد الرحمن في التعامل مع كل مريض كحالة فريدة تستحق الاهتمام الكامل والرعاية المخصصة. لا توجد حلول معلبة أو نمطية؛ بل يتم دراسة كل تفصيلة تشخيصية وعلاجية بعناية فائقة لضمان تلبية الاحتياجات الصحية والنفسية للمريض معاً. إن هذه اللحظات العلاجية المباشرة تبرز أقصى درجات الإتقان والحرص الدائم على توفير بيئة علاجية مريحة وآمنة، تذوب فيها مخاوف المريض وتتحول إلى طمأنينة وثقة كاملة بالنتائج المنتظرة.",
    image: "/ccc.webp",
    quote: "«الشفاء يبدأ حين يشعر المريض أن طبيبه يستمع إليه بصدق ويعالجه بعناية تفوق التوقعات.»"
  },
  {
    title: "لحظات الامتنان ونجاحات واقعية لا تنسى",
    subtitle: "شراكة الثقة وابتسامة الشفاء",
    description: "إن أجمل ما يميز مسيرة الدكتور أحمد عبد الرحمن هي تلك اللحظات الصادقة التي تعقب نجاح العمليات التجميلية أو العلاجية، حيث تتجدد الثقة وتنرسم ابتسامات الرضا الحقيقية على وجوه المرضى. هذه اللحظات المتبادلة من التقدير والامتنان تؤكد أن العلاقة بين الطبيب ومرضاه تتجاوز بكثير حدود العيادة الطبية التقليدية لتصبح شراكة إنسانية قائمة على الوفاء والمصداقية المطلقة والنتائج الباهرة التي تتحدث عن نفسها دون تحتاج لأي إعلانات.",
    image: "/ddd.webp",
    quote: "«ابتسامة مريض اطمأن على صحته واستعاد ثقته بنفسه هي المكافأة الأكبر التي لا تقدر بمال.»"
  },
  {
    title: "فريق عمل النخبة والدعم الطبي المتكامل",
    subtitle: "منظومة عمل احترافية متناغمة",
    description: "لا يكتمل النجاح الفردي إلا بوجود منظومة عمل جماعية متكاملة ومؤهلة لأعلى المستويات. يعمل الدكتور أحمد عبد الرحمن وسط فريق طبي وإداري وتمريضي من نخبة المتخصصين الذين يشاركونه نفس الشغف والرؤية في تقديم رعاية صحية وتجميلية استثنائية. يتميز الفريق بالتناغم التام، الدقة في المواعيد، السرية التامة، والترحيب الراقي بكل زائر للعيادة، لضمان تجربة متكاملة تبدأ من اللحظة الأولى لحجز الموعد وحتى تمام التعافي والاطمئنان.",
    image: "/eee.webp",
    quote: "«النجاح الحقيقي هو ثمرة جهد فريق متكامل يعمل بروح واحدة وهدف نبيل واحد.»"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-right text-slate-900 py-24 px-6" dir="rtl">
      
      {/* رأس الصفحة التعريفية */}
      <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
        <span className="text-[#0082a9] font-bold text-xs tracking-widest uppercase bg-[#5bc0de]/20 px-4 py-2 rounded-full border border-[#0082a9]/30 inline-block shadow-sm">
          من نحن - قصة نجاح وإتقان بلا حدود
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          الدكتور أحمد عبد الرحمن.. ريادة استثنائية في الجراحة والتجميل
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
          رحلة مهنية وأكاديمية متكاملة عنوانها الأبرز هو العلم الرصين، الأمانة الطبية المطلقة، والحرص الدائم على تقديم رعاية صحية وتجميلية تفوق كل التوقعات وتليق بثقتكم الغالية.
        </p>
      </div>

      {/* المحتوى التفصيلي الكامل مع ظهور الصور بالكامل بدون أزرار */}
      <div className="max-w-6xl mx-auto space-y-32">
        {aboutData.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-2xl p-8 md:p-14 overflow-hidden transition-all duration-500 hover:border-[#0082a9]/40 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* قسم الصورة الواضحة بالكامل */}
              <div className="lg:col-span-5 relative w-full flex justify-center">
                <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden bg-slate-900 border-4 border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={`صورة تفصيلية توضح ${item.title} للدكتور أحمد عبد الرحمن`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#0082a9] text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-md">
                    المحطة {index + 1} من المسيرة
                  </div>
                </div>
              </div>

              {/* قسم النصوص المكثفة والشاملة بدون أي أزرار */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0082a9] tracking-wider uppercase bg-[#5bc0de]/15 px-3.5 py-1 rounded-md inline-block">
                    {item.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-base md:text-lg leading-loose font-light text-justify">
                  {item.description}
                </p>

                {/* اقتباس معبر */}
                <blockquote className="border-r-4 border-[#0082a9] pr-4 py-1 text-slate-700 italic font-medium text-sm md:text-base bg-slate-50/80 rounded-l-xl">
                  {item.quote}
                </blockquote>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}