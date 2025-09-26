"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, scaleHover, bounceIn } from "@/lib/animations";
import BannerSlider from "@/components/BannerSlider";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1) Banner Slider */}
      <section>
        <BannerSlider />
      </section>

      {/* 2) Why Choose Us */}
      <section className="section bg-surface-1">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            কেন BoostLab বেছে নিবেন?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "সহজ সার্ভিস", desc: "আপনার প্রয়োজন অনুযায়ী সহজ সমাধান" },
              { title: "দ্রুত ডেলিভারি", desc: "সময়মতো কাজ ডেলিভারি" },
              { title: "সাশ্রয়ী মূল্য", desc: "বাজেট ফ্রেন্ডলি প্যাকেজ" },
              { title: "প্রফেশনাল সাপোর্ট", desc: "অভিজ্ঞ টিমের সাপোর্ট" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 * i }}
                className="card"
              >
                <motion.div
                  variants={scaleHover}
                  initial="initial"
                  whileHover="hover"
                >
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-muted">{c.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3) Featured Services */}
      <section className="section">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">ফিচার্ড সার্ভিস</h2>
            <Link href="/services" className="navlink">সব সার্ভিস দেখুন →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "ওয়েব ডেভেলপমেন্ট", href: "/services#web-dev" },
              { title: "ফেসবুক এডস", href: "/services#ads" },
              { title: "ইন্সটাগ্রাম গ্রোথ", href: "/services#instagram" },
            ].map((s, i) => (
              <motion.a
                key={s.title}
                href={s.href}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 * i }}
                className="card-glass block"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <span className="btn-outline">ডিটেইলস</span>
                </div>
                <p className="mt-2 text-muted">
                  প্রফেশনাল গ্রেড সলিউশন ও ROI-ফোকাসড স্ট্র্যাটেজি।
                </p>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* 4) Pricing preview */}
      <section className="section bg-surface-1">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            জনপ্রিয় প্যাকেজ
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Basic", price: "৳৫,০০০ – ৳১০,০০০" },
              { name: "Standard", price: "৳১৫,০০০ – ৳২৫,০০০" },
              { name: "Premium", price: "৳৩০,০০০+" },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                variants={bounceIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 * i }}
                className="card"
              >
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-muted mt-1">সর্বাধিক বিক্রিত</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">{p.price}</span>
                  <Link href="/pricing" className="btn-outline">ডিটেইলস</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5) CTA */}
      <section className="section">
        <Container>
          <div className="card-glass text-center py-12">
            <h3 className="text-2xl md:text-3xl font-bold">আপনার প্রজেক্ট শুরু করতে প্রস্তুত?</h3>
            <p className="text-muted mt-2">
              আপনার প্রয়োজন অনুযায়ী কাস্টম প্যাকেজ তৈরি করে দিবো।
            </p>
            <div className="mt-5 flex items-center justify-center gap-4">
              <Link href="/contact" className="btn">অর্ডার করুন</Link>
              <Link href="/services" className="btn-outline">সার্ভিস দেখুন</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}