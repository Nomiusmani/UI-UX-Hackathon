import ProductCard from "./components/productcard";
import Editors from "./components/editorspick";
import FeaturedPosts from "./components/featuredposts";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero";
import Summer2020Section from "./components/addcart";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Editors/>
      <ProductCard/>
      <Summer2020Section/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
};