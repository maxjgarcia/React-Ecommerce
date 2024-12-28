import { useState } from "react";
import Category from "../../Components/Category/Category";
import Hero from "../../Components/Hero/Hero";
import ProductList from "../../Components/ProductList/ProductList";
import Footer from "../../Components/Footer/Footer";
import useScroll from "../../Components/hooks/useScroll";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  const { scrollToCategory, contentRef } = useScroll();
  return (
    <div>
      <Hero scrollToCategory={scrollToCategory} />
      <Category
        category={category}
        setCategory={setCategory}
        contentRef={contentRef}
      />
      <ProductList category={category} />
      <Footer />
    </div>
  );
};

export default HomePage;
