import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* خلفية الفيديو المحلي من مجلد public */}
      <div className="absolute inset-0 z-0 opacity-45">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* تدرج لوني فخم من ألوان الهوية */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-dark/95 via-medical-light/40 to-transparent z-10" />

      {/* محتوى الهيرو */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
        <span className="inline-block py-1.5 px-5 mb-6 rounded-full bg-medical-light/20 backdrop-blur-md border border-medical-light/40 text-sm font-medium tracking-wide uppercase shadow-lg">
          استعادة الجمال الطبيعي بأحدث التقنيات
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          د. أحمد عبد الرحمن <br />
          <span className="text-medical-light drop-shadow-md">استشاري جراحات التجميل والترميم</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-8 font-light leading-relaxed">
          نقدم معايير عالمية في نحت القوام، تجميل الوجه، وإجراءات التجميل الدقيقة لتحقيق نتائج طبيعية تعزز ثقتك بنفسك.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* الانتقال لصفحة الحجز المستقلة الفخمة */}
          <Link
            href="/booking"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-medical-light text-white font-semibold shadow-xl hover:bg-medical-dark transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer"
          >
            احجز استشارتك الآن
          </Link>
          
          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300 text-center"
          >
            استكشف الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}