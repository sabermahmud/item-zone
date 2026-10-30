"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShoppingBag,
  UserRound,
} from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-xl shadow-zinc-200/50 lg:grid-cols-2">
          {/* বাম পাশ */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-orange-100 p-10 text-white lg:flex">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative z-10 flex items-center gap-3">
              <Image
                src="/itemzone.png"
                alt="আইটেম জোন লোগো"
                width={300}
                height={100}
              />
            </div>

            <div className="relative z-10 max-w-sm">
              <span className="mb-5 inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-orange-600">
                স্মার্ট কেনাকাটা • সুন্দর জীবন
              </span>

              <h1 className="text-4xl font-bold leading-tight text-zinc-900 xl:text-5xl">
                কেনাকাটার নতুন অভিজ্ঞতা,
                <span className="text-[#FF6B00]"> শুরু হোক আজই!</span>
              </h1>

              <p className="mt-6 leading-7 text-zinc-600">
                Item Zone-এ আপনার নিজস্ব অ্যাকাউন্ট তৈরি করুন। পছন্দের পণ্য
                খুঁজুন এবং উপভোগ করুন আরও সহজ ও স্বাচ্ছন্দ্যময় কেনাকাটার
                অভিজ্ঞতা।
              </p>
            </div>

            <p className="relative z-10 text-sm text-zinc-500">
              © {new Date().getFullYear()} Item Zone. সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>

          {/* ডান পাশ - Signup Form */}
          <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="w-full max-w-md">
              {/* মোবাইল লোগো */}
              <div className="mb-8 lg:hidden">
                <Link href="/" className="inline-flex items-center gap-3">
                  <Image
                    src="/itemzone.png"
                    alt="আইটেম জোন লোগো"
                    width={300}
                    height={100}
                  />
                </Link>
              </div>

              {/* শিরোনাম */}
              <div className="mb-7">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">
                  আমাদের সঙ্গে যুক্ত হোন
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  নতুন অ্যাকাউন্ট{" "}
                  <span className="text-[#FF6B00]">তৈরি করুন</span>
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  আপনার তথ্য দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন এবং Item Zone-এর
                  সঙ্গে কেনাকাটা শুরু করুন।
                </p>
              </div>

              {/* Signup Form */}
              <form className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    আপনার পূর্ণ নাম
                  </label>

                  <div className="relative">
                    <UserRound
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="আপনার নাম লিখুন"
                      autoComplete="name"
                      required
                      className="h-13 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-12 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#FF6B00] focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    ইমেইল ঠিকানা
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="আপনার ইমেইল লিখুন"
                      autoComplete="email"
                      required
                      className="h-13 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-12 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#FF6B00] focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    মোবাইল নম্বর{" "}
                    <span className="font-normal text-zinc-400">(ঐচ্ছিক)</span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="আপনার মোবাইল নম্বর লিখুন"
                      autoComplete="tel"
                      className="h-13 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-12 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#FF6B00] focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    পাসওয়ার্ড
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="একটি পাসওয়ার্ড তৈরি করুন"
                      autoComplete="new-password"
                      minLength={8}
                      required
                      className="h-13 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-12 pr-12 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#FF6B00] focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400">
                    কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড ব্যবহার করুন।
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    পাসওয়ার্ড নিশ্চিত করুন
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="আবার পাসওয়ার্ড লিখুন"
                      autoComplete="new-password"
                      minLength={8}
                      required
                      className="h-13 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-12 pr-12 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#FF6B00] focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "পাসওয়ার্ড লুকান"
                          : "পাসওয়ার্ড দেখুন"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 active:scale-[0.98]"
                >
                  অ্যাকাউন্ট তৈরি করুন
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-zinc-200" />

                <span className="text-xs font-medium text-zinc-400">অথবা</span>

                <div className="h-px flex-1 bg-zinc-200" />
              </div>

              {/* Google Signup */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.18 13.22l7.98 6.19C13.07 13.72 18.11 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.27 5.64c4.25-3.92 7.51-9.73 7.51-17.29z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M11.16 28.59A14.4 14.4 0 0 1 10.4 24c0-1.59.27-3.12.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 3.18 10.78l7.98-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.47 0 11.9-2.13 15.87-5.8l-7.27-5.64c-2.02 1.35-4.6 2.14-8.6 2.14-5.89 0-10.93-3.98-12.84-9.35l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                Google দিয়ে রেজিস্ট্রেশন করুন
              </button>

              {/* Login Link */}
              <p className="mt-8 text-center text-sm text-zinc-500">
                ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#FF6B00] transition hover:text-orange-700"
                >
                  লগইন করুন
                </Link>
              </p>

              {/* Terms and Privacy */}
              <p className="mt-6 text-center text-xs leading-6 text-zinc-400">
                অ্যাকাউন্ট তৈরি করার মাধ্যমে আপনি Item Zone-এর{" "}
                <Link
                  href="/terms"
                  className="font-medium underline hover:text-zinc-600"
                >
                  ব্যবহারের শর্তাবলি
                </Link>{" "}
                এবং{" "}
                <Link
                  href="/privacy"
                  className="font-medium underline hover:text-zinc-600"
                >
                  গোপনীয়তা নীতি
                </Link>{" "}
                মেনে নিচ্ছেন।
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
