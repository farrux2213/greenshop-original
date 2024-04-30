import {
  ArrowRightOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Sliderr from "./Slider.jsx";
import skidkaFlower from "/skidkaFlower.svg";
import krug1 from "/krug1.svg";
import krug2 from "/krug2.svg";
import krug3 from "/krug3.svg";

const Cart = (props) => {
  return (
    <div className="flex font-sans bg-gradient-to-r from-slate-50 to-slate-100 mt-[20px]">
      <div className="flex-2 w-3/5 px-11 py-16">
        <p className="text-left font-sans">WELCOME TO GREENSHOP</p>
        <h1 className="uppercase scroll-my-2 text-left font-sans pt-[20px] text-6xl font-bold">
          {props.text} <span className="text-lime-700">Planet</span>
        </h1>
        <p className="w-4/5 text-left font-sans pt-[20px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button
          className="mt-11 relative right-[260px] bg-lime-700"
          type="primary"
        >
          {props.button}
        </Button>
      </div>
      <div className="flex-1 w-2/5 relative">
        <img src={props.img} alt="flover img" />
        <img
          className="w-32 absolute bottom-0"
          src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
          alt="flover img"
        />
      </div>
    </div>
  );
};

const Goo = (props) => {
  return (
    <div className="flex w-9/10 h-[1270px] mt-[40px] gap-10">
      <div className="w-1/3 h-[1270px]">
        <div className="w-full bg-gradient-to-r from-slate-50 to-slate-100 h-[415px]">
          <h2 className="font-sans font-bold text-lg text-left pl-5 pt-3.5">
            Categories
          </h2>
          <div className="w-[330px] h-full m-auto mt-3.5">
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-semibold text-base text-green-600">
                House Plants
              </p>
              <p className="font-sans font-semibold text-base text-green-600">
                (33)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Potter Plants
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (12)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Seeds
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (65)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Small Plants
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (39)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Big Plants
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (23)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Succulents
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (12)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Trerrariums
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (19)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Gardening
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (13)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Accessories
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (18)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-slate-50 to-slate-100 h-[240px]">
          <h2 className="font-sans font-bold text-lg text-left pl-5 pt-3.5">
            Price Range
          </h2>
          <Sliderr></Sliderr>
          <p className="font-sans relative left-[-105px]">
            Price: <span className="text-green-600 font-sans">$39 - $1230</span>
          </p>
          <Button className="w-[90px] h-[35px] bg-green-700 border-none relative left-[-122px] top-[12px]">
            <span className="font-sans text-white hover:text-green-700">
              Filter
            </span>
          </Button>
        </div>
        <div className="w-full h-[180px] bg-gradient-to-r from-slate-50 to-slate-100">
          <h2 className="font-sans font-bold text-lg text-left pl-5 pt-3.5">
            Size
          </h2>
          <div className="w-[330px] m-auto h-auto mt-1.5">
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Small
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (119)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Medium
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (86)
              </p>
            </div>
            <div className="flex-1 flex justify-between w-full h-[40px]">
              <p className="font-sans font-normal text-base text-neutral-800">
                Large
              </p>
              <p className="font-sans font-normal text-base text-neutral-800">
                (78)
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[440px] bg-gradient-to-b from-green-100 to-white-500">
          <h1 className="font-sans font-normal text-5xl text-green-500 pt-2">
            Super Sale
          </h1>
          <h1 className="font-mono font-bold text-2xl relative top-4 text-zinc-800">
            UP TO 75% OFF
          </h1>
          <img
            src={skidkaFlower}
            alt="no img"
            className="cursor-pointer m-auto"
          />
          <img
            src={krug1}
            alt="no img"
            className="relative top-[-365px] left-[80px]"
          />
          <img
            src={krug2}
            alt="no img"
            className="relative left-[290px] top-[-145px]"
          />
          <img
            src={krug3}
            alt="no img"
            className="relative top-[-220px] left-[45px]"
          />
        </div>
      </div>
      <div className="w-2/3 bg-slate-700 h-[1275px]"></div>
    </div>
  );
};

// const Categorie = (props) => {
//   return (
//     <div className="flex mt-6 justify-between">
//       <p>{props.p}</p>
//       <p>{props.n}</p>
//     </div>
//   );
// };

// const Find = (props) => {
//   return (
//     <div class="flex-1 flex bg-slate-100 gap-28">
//       <div className="flex-1">
//         <img src={props.img} alt="find flower" />
//       </div>
//       <div className="flex-1 flex flex-col items-end pr-5 pt-9">
//         <strong>{props.text}</strong>
//         <p>
//           We are an online plants shop offering a wide ranger of cheap and
//           trendy plants
//         </p>
//         <Button className="button items-center" type="primory">
//           Find More <ArrowRightOutlined />
//         </Button>
//       </div>
//     </div>
//   );
// };
export { Cart, Goo };
