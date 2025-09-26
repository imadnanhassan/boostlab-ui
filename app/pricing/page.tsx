"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import { bounceIn } from "@/lib/animations";

const plans = [
  {
    name: "Basic",
    target: "ছোট ব্যবসা",
    features: ["বেসিক ওয়েব পেজ", "ফেসবুক পেজ সেটআপ", "বেসিক বিজ্ঞাপন"],
    price: "৳৫,০০০ – ৳১০,০০০",
  },
  {
    name: "Standard",
    target: "মাঝারি ব্যবসা",
    features: ["ওয়েবসাইট + সোশ্যাল মিডিয়া গ্রোথ", "৫০০+ ফলোয়ার্স", "মাসিক রিপোর্ট"],
    price: "৳১৫,০০০ – ৳২৫,০০০",
  },
  {
    name: "Premium",
    target: "বড় ব্যবসা",
    features: ["ফুল ওয়েব ডেভেলপমেন্ট", "অ্যাডস ক্যাম্পেইন ম্যানেজমেন্ট", "২,০০০+ ফলোয়ার্স", "২৪/৭ সাপোর্ট"],
    price: "৳৩০,০০০+",
  },
];

export default function PricingPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          আমাদের সার্ভিসের মূল্য তালিকা
        </h1>
        <p className="text-center text-white/70 mt-3">
          আপনার বাজেট অনুযায়ী সঠিক প্যাকেজ বেছে নিন।
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * i }}
              className="card flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{p.name} Plan</h3>
                <p className="text-sm text-white/60">{p.target}</p>
                <ul className="mt-4 space-y-2 text-white/80">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold">{p.price}</span>
                <a href="/contact" className="btn btn-outline">অর্ডার করুন</a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}