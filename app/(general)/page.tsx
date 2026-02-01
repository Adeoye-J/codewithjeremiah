import Faq from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";
import Summary from "@/components/landing/Summary";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
        <Hero />
        <Summary />
        <Faq />
        Home Page Content
    </div>
  );
}
