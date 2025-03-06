import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import SwiperCover from "../assets/imgs/swiper-cover.png";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const cards = [
  {
    id: 1,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 2,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 3,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 4,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 5,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 6,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 7,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 8,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  },
  {
    id: 9,
    image: SwiperCover,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き"
  }
]