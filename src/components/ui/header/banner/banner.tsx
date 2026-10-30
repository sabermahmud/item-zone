import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
 
} from "lucide-react";



export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            

            <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              আপনার প্রয়োজনের সবকিছু,
              <span className="mt-2 block text-[#FF6B00]">এখন এক ঠিকানায়।</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-500 sm:text-lg">
              খুঁজে নিন আপনার পছন্দের পণ্য, ঘুরে দেখুন বিভিন্ন ক্যাটাগরি আর
              উপভোগ করুন আরও সহজ ও স্বাচ্ছন্দ্যময় কেনাকাটার অভিজ্ঞতা — সবকিছু
              এখন Item Zone-এ।
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#FF6B00] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:bg-orange-700 hover:shadow-orange-500/30"
              >
                কেনাকাটা শুরু করুন
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/categories"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-4 text-sm font-bold text-zinc-800 transition hover:border-orange-300 hover:text-[#FF6B00]"
              >
                ক্যাটাগরি দেখুন
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* Right Product Showcase */}
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* Main Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-50 via-orange-100/70 to-amber-50 p-5 sm:p-8">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/70" />

              <div className="absolute top-1/2 left-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60" />

              {/* Product Image */}
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <Image
                  src="/products/trimmer.jpeg"
                  alt="ইলেকট্রনিকস ও প্রযুক্তিপণ্যের সংগ্রহ"
                  width={800}
                  height={800}
                  priority
                  className="h-full w-full object-contain rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
