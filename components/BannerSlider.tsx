"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Slide = {
  title: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

const slides: Slide[] = [
  {
    title: "BoostLab – আপনার ডিজিটাল গ্রোথ ল্যাব",
    subtitle: "ওয়েবসাইট, বিজ্ঞাপন ও সোশ্যাল মিডিয়া গ্রোথ – সব এক জায়গায়।",
    ctaPrimary: { label: "শুরু করুন", href: "/contact" },
    ctaSecondary: { label: "সার্ভিস দেখুন", href: "/services" },
  },
  {
    title: "ওয়েব ডেভেলপমেন্ট",
    subtitle: "দ্রুত, আধুনিক ও SEO Optimized ওয়েবসাইট সমাধান।",
    ctaPrimary: { label: "প্যাকেজ দেখুন", href: "/services#web-dev" },
    ctaSecondary: { label: "অর্ডার করুন", href: "/contact" },
  },
  {
    title: "ফেসবুক ও ইন্সটাগ্রাম গ্রোথ",
    subtitle: "টার্গেটেড ক্যাম্পেইনে রিয়াল রেজাল্ট।",
    ctaPrimary: { label: "এডস সার্ভিস", href: "/services#ads" },
    ctaSecondary: { label: "যোগাযোগ", href: "/contact" },
  },
];

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setIndex(i % slides.length);

  return (
    <div className="relative overflow-hidden bg-animated">
      <div className="container py-20 md:py-32 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center gap-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl">
              {slides[index].subtitle}
            </p>
            <div className="mt-2 flex items-center gap-4 justify-center">
              {slides[index].ctaPrimary && (
                <Link href={slides[index].ctaPrimary.href} className="btn">
                  {slides[index].ctaPrimary.label}
                </Link>
              )}
              {slides[index].ctaSecondary && (
                <Link href={slides[index].ctaSecondary.href} className="btn-outline">
                  {slides[index].ctaSecondary.label}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-2 w-2 rounded-full transition"
            style={{
              background: i === index ? "var(--foreground)" : "var(--muted-foreground)",
              opacity: i === index ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}