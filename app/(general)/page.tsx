import Faq from "@/components/landing/Faq";
import Hero from "@/components/general/Hero";
import Summary from "@/components/landing/Summary";


export default function Home() {
  return (
    <div className="min-h-screen text-black">
        <Hero 
            title="Build, Learn, and Grow with Me" 
            subtitle="Practical tech blogs, real-world projects, and beginner-friendly courses." 
            action={[{title: "Read Blogs", location: "/blogs"}, {title: "View Projects", location: "/projects"}]}
            heightClass="md:min-h-150" 
        />
        <Summary />
        <Faq />
    </div>
  );
}
