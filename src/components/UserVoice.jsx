import { TitleDot } from "./TitleDot";
import { useTranslation } from "react-i18next";
import Globe from '../assets/imgs/Globe.png'
import user from '../assets/imgs/user.png'
import Recommend from '../assets/imgs/recommend.png'
const articles = [
  {
    user: 'Amazonでご購入のお客様',
    title: 'この文章は一言です',
    content: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
    avatar: user,
    star: 4
  },
  {
    user: 'Amazonでご購入のお客様',
    title: 'この文章は一言です',
    content: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
    avatar: user,
    star: 5
  },
  {
    user: 'Amazonでご購入のお客様',
    title: 'この文章は一言です',
    content: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
    avatar: user,
    star: 3
  },
  {
    user: 'Amazonでご購入のお客様',
    title: 'この文章は一言です',
    content: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
    avatar: user,
    star: 0
  },
]

// Add new StarRating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {index < rating ? (
            // Filled star
            <path
              d="M10 0L13.06 6.3L20 7.26L14.94 12.11L16.18 19L10 15.7L3.81999 19L5.05 12.11L0 7.26L6.94 6.3L10 0Z"
              fill="#FFC157"
            />
          ) : (
            // Outlined star
            <path
              d="M11 1L14.06 7.3L21 8.26L15.94 13.11L17.18 20L11 16.7L4.81999 20L6.05 13.11L1 8.26L7.94 7.3L11 1Z"
              stroke="#FFC157"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-1 -1)"
            />
          )}
        </svg>
      ))}
    </div>
  );
};

const UserFeedback = () => {
  return (
    <div className="shadow-[10px_10px_6px_#0000001A] h-[500px] w-full border-4 border-[#F2F2F2] rounded-[20px] py-[26px] px-[40px]">
      <div className="flex flex-col gap-[30px] overflow-y-auto h-full pr-2 custom-scrollbar">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col gap-[10px] w-full">
            <div className="flex gap-[10px] w-full">
              <img src={article.avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full" />
              <div>
                <h2>{article.user}</h2>
                <StarRating rating={article.star} />
              </div>
            </div>
            <h4 className="text-[24px] leading-[35px]">{article.title}</h4>
            <p className="text-[15px] font-normal leading-[26px]">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const UserVoice = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full relative -translate-y-[540px]">
      <img src={Globe} alt="globe" className="absolute -top-[150px] right-[150px] w-[277px] z-10" />
      <div className="relative bg-white w-full flex flex-col items-center  pt-[115px] px-[250px] gap-[35px]"
        style={{ clipPath: "ellipse(123% 100% at 50% 100%)" }}
      >
        <TitleDot>
          {t('userVoice.title')}
        </TitleDot>
        <UserFeedback />
      </div>
      <img src={Recommend} alt="recommend" className="w-full mt-[140px]" />
    </div>
  );
};
