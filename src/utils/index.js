import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import SwiperCover1 from "../assets/imgs/swiper-cover.png";
import SwiperCover2 from "../assets/imgs/swiper-cover2.png";
import SwiperCover3 from "../assets/imgs/swiper-cover3.png";
import SwiperCover4 from "../assets/imgs/swiper-cover4.png";
import SwiperCover5 from "../assets/imgs/swiper-cover5.png";
import SwiperCover6 from "../assets/imgs/swiper-cover6.png";
import SwiperCover7 from "../assets/imgs/swiper-cover7.png";
import SwiperCover8 from "../assets/imgs/swiper-cover8.png";
import SwiperCover9 from "../assets/imgs/swiper-cover9.png";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const cards = [
  {
    id: 1,
    image: SwiperCover1,
    title: "韓国eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725686070"
  },
  {
    id: 2,
    image: SwiperCover2,
    title: "台湾eSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725653302"
  },
  {
    id: 3,
    image: SwiperCover3,
    title: "中国・香港・マカオeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725718838"
  },
  {
    id: 4,
    image: SwiperCover4,
    title: "ヨーロッパeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725751606"
  },
  {
    id: 5,
    image: SwiperCover5,
    title: "アメリカeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725784374"
  },
  {
    id: 6,
    image: SwiperCover6,
    title: "タイeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725817142"
  },
  {
    id: 7,
    image: SwiperCover7,
    title: "シンガポールeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725849910"
  },
  {
    id: 8,
    image: SwiperCover8,
    title: "インドネシアeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725882678"
  },
  {
    id: 9,
    image: SwiperCover9,
    title: "ベトナムeSIM / 3日間 / 完全無制限",
    desc: "テストサービス付き",
    url: "https://jp.shop.desim.tech/products/esim-test-service-line?variant=51409725915446"
  }
]