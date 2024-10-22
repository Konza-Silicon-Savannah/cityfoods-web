import Nav from "@/components/ui/home/nav";
import Hero from "@/components/ui/home/hero";
import Steps from "@/components/ui/home/steps";
import Mobile from "@/components/ui/home/mobile";
import Testimonial from "@/components/ui/home/testimonial";
import Footer from "@/components/ui/home/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-black">
        <Nav />
      </header>
      <Hero />
      <Steps />
      <Mobile />
      <Testimonial />
      <Footer />
    </div>
  );
}
