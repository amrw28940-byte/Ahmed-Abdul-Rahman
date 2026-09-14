'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white font-sans relative overflow-hidden border-t-4 border-[#5bc0de]" dir="rtl">
      
      {/* خلفية جمالية مضيئة ومتناسقة مع ألوان الهيدر */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0082a9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5bc0de]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
          
          {/* العمود الأول: اللوجو ونبذة تعريفية عن العيادة */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#5bc0de]/40 shadow-xl bg-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.webp"
                  alt="دكتور أحمد عبد الرحمن"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-wide text-white">
                  عيادة الدكتور أحمد عبد الرحمن
                </span>
                <span className="text-xs font-light text-[#5bc0de]">
                  استشاري جراحة التجميل والليزر
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              نقدم أحدث تقنيات جراحات التجميل والليزر والعناية بالبشرة بأعلى معايير الأمان والجودة الطبية لتحقيق أفضل النتائج التي ترضيك.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة للأقسام */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5bc0de] font-bold text-base tracking-wide border-b border-slate-800 pb-2 inline-block">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#5bc0de] transition-colors flex items-center gap-2">
                  <span className="text-[#5bc0de]">■</span> الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#5bc0de] transition-colors flex items-center gap-2">
                  <span className="text-[#5bc0de]">■</span> خدماتنا الطبية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#5bc0de] transition-colors flex items-center gap-2">
                  <span className="text-[#5bc0de]">■</span> من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التواصل الاجتماعي ورقم الهاتف */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#5bc0de] font-bold text-base tracking-wide border-b border-slate-800 pb-2 inline-block">
              تواصل معنا
            </h3>
            
            {/* رقم الهاتف */}
            <a 
              href="tel:01020347956" 
              className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors font-bold text-sm bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-800 shadow-sm"
            >
              <span className="text-[#5bc0de]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28.5-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-18.9-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 333.6 178.4 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              </span>
              <span>01020347956</span>
            </a>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-3 pt-2">
              {/* واتساب */}
              <a 
                href="https://wa.me/2001020347956" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow-sm border border-slate-800 group"
                title="واتساب"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>

              {/* فيسبوك */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center transition-all shadow-sm border border-slate-800 group"
                title="فيسبوك"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 121.08-43.5 134.18-121.36 134.18V195.3h-60.14v92.66h60.14v224h100.16v-224z"/></svg>
              </a>

              {/* يوتيوب */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-red-600 text-white flex items-center justify-center transition-all shadow-sm border border-slate-800 group"
                title="يوتيوب"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.585l142.739 61.942-142.739 62.064z"/></svg>
              </a>
            </div>

          </div>

        </div>

        {/* خط الفاصل وحقوق النشر */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} عيادة الدكتور أحمد عبد الرحمن. جميع الحقوق محفوظة.</p>
          <p>تصميم وتطوير واجهات المستخدم الطبية الاحترافية</p>
        </div>

      </div>
    </footer>
  );
}