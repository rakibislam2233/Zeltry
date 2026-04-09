import brownSugarImage from "@/assets/categories/brown-sugar.gif";
import cerealsImage from "@/assets/categories/cereals.gif";
import dairyFoodImage from "@/assets/categories/dairy-food.gif";
import datesImage from "@/assets/categories/dates.gif";
import foodImage from "@/assets/categories/food.gif";
import giftImage from "@/assets/categories/gift.gif";
import honeyImage from "@/assets/categories/honey.gif";
import nutsImage from "@/assets/categories/nuts.gif";
import oilImage from "@/assets/categories/oil.gif";
import peanutImage from "@/assets/categories/peanut.gif";
import riceImage from "@/assets/categories/rice-bowl.gif";
import sackImage from "@/assets/categories/sack.gif";
import saladImage from "@/assets/categories/salad.gif";
import spicesImage from "@/assets/categories/spices.gif";
import teaImage from "@/assets/categories/tea-leaves-powder.gif";

import { CategoryItem } from "@/interfaces/home";

export const categories: CategoryItem[] = [
  { id: 1, name: "Honey", image: honeyImage },
  { id: 2, name: "Nuts & Seeds", image: nutsImage },
  { id: 3, name: "Rice", image: riceImage },
  { id: 4, name: "Oil & Ghee", image: oilImage },
  { id: 5, name: "Dates", image: datesImage },
  { id: 6, name: "Flours", image: sackImage },
  { id: 7, name: "Functional Food", image: foodImage },
  { id: 8, name: "Dairy & Eggs", image: dairyFoodImage },
  { id: 9, name: "Herbal Tea & Drinks", image: teaImage },
  { id: 10, name: "Spices & Condiments", image: spicesImage },
  { id: 11, name: "Natural Sweeteners", image: brownSugarImage },
  { id: 12, name: "Dry Fruits", image: peanutImage },
  { id: 13, name: "Superfoods", image: saladImage },
  { id: 14, name: "Organic Protein", image: cerealsImage },
  { id: 15, name: "Gift & Bundles", image: giftImage },
  { id: 16, name: "Organic Atta", image: sackImage },
];
