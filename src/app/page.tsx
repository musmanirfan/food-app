import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Counters from "./components/Counters";
import Menu from "./components/Menu";
import Chefs from "./components/Chefs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Blogs from "./components/Blogs";
import CTA2 from "./components/CTA2";
import Footer from "./components/Footer";
import HomeCategory from "./components/homeCategory";

export default function Home() {
  return (
    <div className="!bg-[#000]">
      <Header />
      <Hero />
      <About />
      <HomeCategory />
      <WhyChoose />
      <Counters />
      <Menu />
      <Chefs />
      <Testimonials />
      <CTA />
      <Blogs />
      <CTA2 />
      <Footer />
    </div>
  );
}
