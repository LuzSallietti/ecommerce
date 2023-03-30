import React from "react";
import Example from "./components/Example";
import MenuNav from "./components/MenuNav";
import PromoSection from "./components/PromoSection";
import CategoriesPreview from "./components/CategoriesPreview";
import FeaturedProducts from "./components/FeaturedProducts";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

const App = () => {
  
  return (
   <div>
    <MenuNav/>
    <PromoSection/>
    <CategoriesPreview/>
    <CTABanner/>
    <FeaturedProducts/>
    <Footer/>   
   </div>  
  )
}

export default App;
