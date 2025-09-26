"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import { fadeInUp, bounceIn } from "@/lib/animations";
import Link from "next/link";

type Tier = {
  name: string;
  price: string;
  features: string[];
};

type Service = {
  id: string;
  name: string;
  desc: string;
  tiers: Tier[];
};

const services: Service[] = [
  {
    id: "web-dev",
    name: "ওয়েব ডেভেলপমেন্ট",
    desc: "দ্রুত, আধুনিক ও SEO-ফ্রেন্ডলি ওয়েবসাইট",
    tiers: [
      {
        name: "Blog",
        price: "৳১০,০০০",
        features: ["১-৩ পেজ", "ব্লগ পোস্ট সেটআপ", "বেসিক SEO", "রেসপনসিভ ডিজাইন"],
      },
      {
        name: "Services",
        price: "৳২০,০০০",
        features: ["সার্ভিস পেজসমূহ", "কন্ট্যাক্ট ফর্ম", "অন-পেজ SEO", "পারফরম্যান্স অপ্টিমাইজেশন"],
      },
      {
        name: "E-commerce",
        price: "৳৫০,০০০+",
        features: ["প্রোডাক্ট লিস্টিং", "অর্ডার ম্যানেজমেন্ট", "পেমেন্ট ইন্টিগ্রেশন", "অ্যাডভান্সড SEO"],
      },
    ],
  },
  {
    id: "ads",
    name: "ফেসবুক এডস",
    desc: "টার্গেটেড ক্যাম্পেইনে রিয়াল রেজাল্ট",
    tiers: [
      { name: "Basic", price: "৳৫,০০০", features: ["১টি ক্যাম্পেইন", "বেসিক টার্গেটিং", "রিপোর্ট"] },
      { name: "Standard", price: "৳১২,০০০", features: ["২টি ক্যাম্পেইন", "A/B টেস্টিং", "সাপ্তাহিক রিপোর্ট"] },
      { name: "Premium", price: "৳২৫,০০০", features: ["৪+ ক্যাম্পেইন", "রিটার্গেটিং", "মাসিক স্ট্র্যাটেজি কল"] },
    ],
  },
  {
    id: "fb-profile-followers",
    name: "ফেসবুক প্রোফাইল ফলোয়ার্স",
    desc: "বিশ্বস্ত ফলোয়ার বৃদ্ধি",
    tiers: [
      { name: "Basic", price: "৳৩,০০০", features: ["৫০০+ ফলোয়ার", "অর্গানিক মিক্স"] },
      { name: "Standard", price: "৳৬,০০০", features: ["১,০০০+ ফলোয়ার", "টার্গেটেড সোর্স"] },
      { name: "Premium", price: "৳১২,০০০", features: ["২,৫০০+ ফলোয়ার", "কোয়ালিটি অডিয়েন্স"] },
    ],
  },
  {
    id: "fb-page-followers",
    name: "ফেসবুক পেজ ফলোয়ার্স",
    desc: "পেজ গ্রোথ ও এনগেজমেন্ট",
    tiers: [
      { name: "Basic", price: "৳২,৫০০", features: ["১,০০০+ ফলোয়ার", "বেসিক এনগেজমেন্ট"] },
      { name: "Standard", price: "৳৫,০০০", features: ["২,৫০০+ ফলোয়ার", "কনটেন্ট সাজেশন"] },
      { name: "Premium", price: "৳১০,০০০", features: ["৫,০০০+ ফলোয়ার", "কনটেন্ট ও ক্যালেন্ডার"] },
    ],
  },
  {
    id: "fb-page-likes",
    name: "ফেসবুক পেজ লাইকস",
    desc: "অরগানিক ও পেইড লাইকস",
    tiers: [
      { name: "Basic", price: "৳২,০০০", features: ["১,০০০+ লাইক", "রিজিয়ন টার্গেট"] },
      { name: "Standard", price: "৳৪,৫০০", features: ["২,৫০০+ লাইক", "ইন্টারেস্ট টার্গেটিং"] },
      { name: "Premium", price: "৳৯,০০০", features: ["৫,০০০+ লাইক", "ব্র্যান্ড-ফিট অডিয়েন্স"] },
    ],
  },
  {
    id: "ig-ads",
    name: "ইন্সটাগ্রাম এডস",
    desc: "ভিজ্যুয়াল স্টোরি টেলিং",
    tiers: [
      { name: "Basic", price: "৳৫,০০০", features: ["১টি ক্যাম্পেইন", "স্টোরি/রিল এডস", "রিপোর্ট"] },
      { name: "Standard", price: "৳১২,০০০", features: ["২টি ক্যাম্পেইন", "ক্রিয়েটিভ গাইডেন্স", "সাপ্তাহিক রিপোর্ট"] },
      { name: "Premium", price: "৳২৫,০০০", features: ["৪+ ক্যাম্পেইন", "ইনফ্লুয়েন্সার টাচপয়েন্ট", "স্ট্র্যাটেজি কল"] },
    ],
  },
  {
    id: "ig-profile-followers",
    name: "ইন্সটাগ্রাম প্রোফাইল ফলোয়ার্স",
    desc: "প্রফাইল অথরিটি বৃদ্ধি",
    tiers: [
      { name: "Basic", price: "৳৩,৫০০", features: ["৫০০+ ফলোয়ার", "অডিয়েন্স মিক্স"] },
      { name: "Standard", price: "৳৭,০০০", features: ["১,২০০+ ফলোয়ার", "রিজিয়ন টার্গেট"] },
      { name: "Premium", price: "৳১৪,০০০", features: ["৩,০০০+ ফলোয়ার", "হাই-ইনটেন্ট অডিয়েন্স"] },
    ],
  },
  {
    id: "ig-page-followers",
    name: "ইন্সটাগ্রাম পেজ ফলোয়ার্স",
    desc: "ব্র্যান্ড রিচ বাড়ান",
    tiers: [
      { name: "Basic", price: "৳৩,০০০", features: ["১,০০০+ ফলোয়ার", "বেসিক কন্টেন্ট প্ল্যান"] },
      { name: "Standard", price: "৳৬,৫০০", features: ["২,৫০০+ ফলোয়ার", "কনটেন্ট সাজেশন"] },
      { name: "Premium", price: "৳১২,০০০", features: ["৫,০০০+ ফলোয়ার", "কন্টেন্ট স্ট্র্যাটেজি"] },
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <Container>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          আমাদের সার্ভিস সমূহ
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              id={s.id}
              variants={bounceIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 * idx }}
              className="card-glass"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                  <p className="text-muted mt-1">{s.desc}</p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {s.tiers.map((t) => (
                    <div key={t.name} className="card">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted">{t.name}</span>
                        <span className="text-sm font-semibold">{t.price}</span>
                      </div>
                      <ul className="mt-3 space-y-1 text-sm text-muted">
                        {t.features.map((f) => (
                          <li key={f}>• {f}</li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Link href="/contact" className="btn-gradient w-full inline-flex">
                          অর্ডার করুন
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}