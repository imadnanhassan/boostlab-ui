"use client";

import Container from "@/components/Container";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center">যোগাযোগ করুন</h1>

        <form onSubmit={onSubmit} className="mt-8 max-w-2xl mx-auto space-y-4">
          <div>
            <label className="block text-sm mb-1">নাম</label>
            <input
              required
              type="text"
              className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">ইমেইল</label>
            <input
              required
              type="email"
              className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">সার্ভিস নির্বাচন</label>
            <select
              required
              className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
              defaultValue=""
            >
              <option value="" disabled>
                একটি সার্ভিস নির্বাচন করুন
              </option>
              <option>ওয়েব ডেভেলপমেন্ট</option>
              <option>ফেসবুক এডস</option>
              <option>ফেসবুক প্রোফাইল ফলোয়ার্স</option>
              <option>ফেসবুক পেজ ফলোয়ার্স</option>
              <option>ফেসবুক পেজ লাইকস</option>
              <option>ইন্সটাগ্রাম এডস</option>
              <option>ইন্সটাগ্রাম প্রোফাইল ফলোয়ার্স</option>
              <option>ইন্সটাগ্রাম পেজ ফলোয়ার্স</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">বার্তা</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="btn">পাঠান</button>

            <div className="flex items-center gap-4">
              <a className="navlink" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="navlink" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="navlink" href="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>

          {status === "sent" && (
            <p className="text-green-400 text-sm">ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করবো।</p>
          )}
        </form>
      </Container>
    </section>
  );
}