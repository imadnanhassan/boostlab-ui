import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center">আমাদের সম্পর্কে</h1>
        <div className="mt-6 max-w-3xl mx-auto text-center text-white/80 space-y-4">
          <p>
            BoostLab হল আপনার ডিজিটাল গ্রোথের পরীক্ষাগার – যেখানে আমরা চেষ্টা করি আপনার
            ব্যবসাকে পরবর্তী ধাপে নিয়ে যেতে।
          </p>
          <p>
            আমাদের মিশন হলো আধুনিক প্রযুক্তি ও স্ট্র্যাটেজির মাধ্যমে ব্যবসার অনলাইন উপস্থিতি
            বৃদ্ধি করা, এবং ভিশন হলো দেশের সকল উদ্যোক্তাকে ডিজিটাল মাধ্যমে আরও
            শক্তিশালী করা।
          </p>
        </div>
      </Container>
    </section>
  );
}