"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import { fadeInUp, scaleHover } from "@/lib/animations";

const services = [
  { name: "ওয়েব ডেভেলপমেন্ট", desc: "দ্রুত ও সুন্দর ওয়েবসাইট তৈরী" },
  { name: "ফেসবুক এডস", desc: "টার্গেটেড অডিয়েন্স রিচ" },
  { name: "ফেসবুক প্রোফাইল ফলোয়ার্স", desc: "বিশ্বস্ত ফলোয়ার বৃদ্ধি" },
  { name: "ফেসবুক পেজ ফলোয়ার্স", desc: "পেজ গ্রোথ ও এনগেজমেন্ট" },
  { name: "ফেসবুক পেজ লাইকস", desc: "অরগানিক ও পেইড লাইকস" },
  { name: "ইন্সটাগ্রাম এডস", desc: "ভিজ্যুয়াল স্টোরি টেলিং" },
  { name: "ইন্সটাগ্রাম প্রোফাইল ফলোয়ার্স", desc: "প্রফাইল অথরিটি বৃদ্ধি" },
  { name: "ইন্সটাগ্রাম পেজ ফলোয়ার্স", desc: "ব্র্যান্ড রিচ বাড়ান" },
];

export default function ServicesPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          আমাদের সার্ভিস সমূহ
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * idx }}
              className="card"
            >
              <motion.div
                variants={scaleHover}
                initial="initial"
                whileHover="hover"
              >
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
                <div className="mt-4">
                  <a href="/contact" className="btn btn-outline">
                    অর্ডার করুন
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}