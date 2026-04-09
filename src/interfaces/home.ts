import { StaticImageData } from "next/image";

import { Product } from "@/types/product";

export type CategoryItem = {
  id: number;
  name: string;
  image: StaticImageData;
};

export type DailyBestSellItem = Product & {
  sold: number;
  total: number;
};

export type DealCountdown = {
  days: number;
  hours: number;
  mins: number;
  sec: number;
};

export type DealOfDayItem = Product & {
  brand: string;
  countdown: DealCountdown;
};

export type PromoTile = {
  title: string;
  cta: string;
  image: string;
  bgClass: string;
};

export type MiniProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
};

export type ProductColumn = {
  title: string;
  products: MiniProduct[];
};
