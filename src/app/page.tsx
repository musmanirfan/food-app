import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Counters from "./components/Counters";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Blogs from "./components/Blogs";
import CTA2 from "./components/CTA2";
import Footer from "./components/Footer";
import HomeCategory from "./components/homeCategory";
import ChefCarousel2 from "./components/Chefs";
import { chefs } from "./components/chef-arrow";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="!bg-[#000] !overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <HomeCategory />
      <WhyChoose />
      <Counters />
      <Menu />
      <ChefCarousel2 chefs={chefs} />
      <Testimonials />
      <CTA />
      <Blogs />
      <CTA2 />
      <Footer />
    </div>
  );
}
