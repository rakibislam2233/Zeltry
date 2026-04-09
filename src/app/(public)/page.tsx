import DailyBestSells from "@/components/pages/home/DailyBestSells";
import FreshVegetables from "@/components/pages/home/FreshVegetables";
import Newsletter from "@/components/pages/home/Newsletter";
import PromotionBanner from "@/components/pages/home/PromotionBanner";
import TodayHotSale from "@/components/pages/home/TodayHotSale";

const HomePage = () => {
  return (
    <section className="w-full space-y-5 md:space-y-7">
      <PromotionBanner />
      <TodayHotSale />
      <DailyBestSells />
      <FreshVegetables />
      <Newsletter />
    </section>
  );
};

export default HomePage;
