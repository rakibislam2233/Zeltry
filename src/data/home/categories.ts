import almondImage from "@/assets/categories/almond.png";
import dairyImage from "@/assets/categories/dairy-products.png";
import datesImage from "@/assets/categories/dates.png";
import flourImage from "@/assets/categories/flour.png";
import teaImage from "@/assets/categories/green-tea.png";
import honeyImage from "@/assets/categories/honey.png";
import nutsImage from "@/assets/categories/nuts.png";
import oilImage from "@/assets/categories/olive-oil.png";
import organicImage from "@/assets/categories/organic.png";
import riceImage from "@/assets/categories/rice.png";
import spiceImage from "@/assets/categories/salad.png";

import { CategoryItem } from "@/interfaces/home";

export const categories: CategoryItem[] = [
  { id: 1, name: "Honey", image: honeyImage },
  { id: 2, name: "Nuts & Seeds", image: nutsImage },
  { id: 3, name: "Rice", image: riceImage },
  { id: 4, name: "Oil & Ghee", image: oilImage },
  { id: 5, name: "Dates", image: datesImage },
  { id: 6, name: "Flours", image: flourImage },
  { id: 7, name: "Functional Food", image: organicImage },
  { id: 8, name: "Dairy & Eggs", image: dairyImage },
  { id: 9, name: "Herbal Tea & Drinks", image: teaImage },
  { id: 10, name: "Spices & Condiments", image: spiceImage },
  { id: 11, name: "Natural Sweeteners", image: honeyImage },
  { id: 12, name: "Dry Fruits", image: almondImage },
  { id: 13, name: "Superfoods", image: organicImage },
  { id: 14, name: "Organic Protein", image: nutsImage },
  { id: 15, name: "Gift & Bundles", image: datesImage },
  { id: 16, name: "Organic Atta", image: flourImage },
];
