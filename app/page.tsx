"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, scaleHover } from "@/lib/animations";

export default function HomePage() {
  return (
    <div className="relative">
      <section className="bg-animated">
        <Container>
          <div className="py-24 md:py-36 text-center flex flex-col items-center gap-6">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              BoostLab – আপনার ডিজিটাল গ্রোথ ল্যাব
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-3xl"
            >
              ওয়েবসাইট, বিজ্ঞাপন ও সোশ্যাল মিডিয়া গ্রোথ – সব এক জায়গায়।
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.35 }}
              className="mt-4 flex items-center gap-4"
            >
              <Link href="/contact" className="btn">
                শুরু করুন
              </Link>
              <Link href="/services" className="btn btn-outline">
                সার্ভিস দেখুন
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
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
                  <p className="mt-2 text-white/70">{c.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}