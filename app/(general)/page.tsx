import Faq from "@/components/landing/Faq";
import Hero from "@/components/general/Hero";
import Summary from "@/components/landing/Summary";
import Value from "@/components/landing/Value";
import FeaturedBlogs from "@/components/blogs/FeaturedBlogs";
import { blogs } from "@/data/blogs";


export default function Home() {
  return (
    <div className="min-h-screen text-black">
        <Hero />
        <Value />
        <FeaturedBlogs blogs={blogs} />
        <Summary />
        <Faq />
    </div>
  );
}
