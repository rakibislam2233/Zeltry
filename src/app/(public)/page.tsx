import DailyBestSells from "@/components/pages/home/DailyBestSells";
import FreshVegetables from "@/components/pages/home/FreshVegetables";
import HomeProductColumns from "@/components/pages/home/HomeProductColumns";
import PromotionBanner from "@/components/pages/home/PromotionBanner";
import ShopByCategories from "@/components/pages/home/ShopByCategories";
import TodayHotSale from "@/components/pages/home/TodayHotSale";

const HomePage = () => {
  return (
    <section className=" space-y-5 md:space-y-7">
      <PromotionBanner />
      <ShopByCategories />
      <TodayHotSale />
      <DailyBestSells />
      <FreshVegetables />
      <HomeProductColumns />
    </section>
  );
};

export default HomePage;
