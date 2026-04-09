import DailyBestSells from "@/components/pages/home/DailyBestSells";
import DealsOfTheDay from "@/components/pages/home/DealsOfTheDay";
import HomeProductColumns from "@/components/pages/home/HomeProductColumns";
import PopularProduct from "@/components/pages/home/PopularProduct";
import PromotionBanner from "@/components/pages/home/PromotionBanner";
import ServiceHighlights from "@/components/pages/home/ServiceHighlights";
import ShopByCategories from "@/components/pages/home/ShopByCategories";

const HomePage = () => {
  return (
    <section className=" space-y-5 md:space-y-7">
      <PromotionBanner />
      <ServiceHighlights />
      <ShopByCategories />
      <PopularProduct />
      <DailyBestSells />
      <DealsOfTheDay />
      <HomeProductColumns />
    </section>
  );
};

export default HomePage;
