import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Sliderr from "./Slider.jsx";
import skidkaFlower from "/skidkaFlower.png";
import krug1 from "/krug1.svg";
import krug2 from "/krug2.svg";
import krug3 from "/krug3.svg";
import Selectt from "./Select.jsx";
import gridFlower1 from "/gridFlower1.png";
import gridFlower2 from "/gridFlower2.png";
import gridFlower3 from "/gridFlower3.png";
import gridFlower4 from "/gridFlower4.png";
import gridFlower5 from "/gridFlower5.png";
import gridFlower6 from "/gridFlower6.png";
import gridFlower7 from "/gridFlower7.png";
import gridFlower8 from "/gridFlower8.png";
import gridFlower9 from "/gridFlower9.png";
import ellipsGreen1 from "/ellipsGreen1.svg";
import ellipsGreen2 from "/ellipsGreen2.svg";
import room1 from "/room1.svg";
import room2 from "/room2.svg";
import room3 from "/room3.svg";
import room4 from "/room4.svg";
import kaktus1to1 from "/kaktus1to1.svg";
import kaktus1to2 from "/kaktus1to2.svg";
import kaktus1to3 from "/kaktus1to3.svg";
import kaktus2to2 from "/kaktus2to2.svg";
import kaktus2to3 from "/kaktus2to3.svg";
import kaktus3to2 from "/kaktus3to2.svg";
import kaktus3to3 from "/kaktus3to3.svg";
import boder from "/border.svg";
import Inputt from "./input.jsx";
import Logo from "/Logo.svg";
import VisaKarta from "/VisaKarta.svg";

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

const Goo = () => {
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
      <div className="flex flex-col w-2/3 h-[1275px] gap-10">
        <div className="flex justify-between w-full h-[50px]">
          <div className="w-full h-full flex">
            <div className="w-[270px] h-full flex justify-between p-[10px]">
              <h2 className="font-sans font-normal text-base text-gray-800 border-solid hover:text-green-600 ">
                All Plants
              </h2>
              <h2 className="font-sans font-normal text-base text-gray-800 hover:text-green-600">
                New Arrivals
              </h2>
              <h2 className="font-sans font-normal text-base text-gray-800 hover:text-green-600">
                Sale
              </h2>
            </div>
          </div>
          <div className="w-[350px] h-full flex p-[8px]  ">
            <h3 className="p-[5px] font-mono font-normal text-gray-800">
              Short by:
            </h3>
            <Selectt></Selectt>
          </div>
        </div>
        <div className="flex flex-col gap-9 w-full h-[1185px]">
          <div className="w-full flex flex-1 gap-9">
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower1}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Barberton Daisy
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $119.00
                </h1>
              </div>
            </div>
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower2}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Angel Wing Begonia
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $169.00
                </h1>
              </div>
            </div>
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower3}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  African Violet
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $199.00{" "}
                  <span className="text-gray-800 opacity-40">
                    <s>$299.00</s>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-1 gap-9">
            <div className="h-full flex-1 flex flex-col gap-4">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower4}
                  alt="no img"
                  className="mb-3 cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Beach Spider Lily
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $129.00
                </h1>
              </div>
            </div>
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower5}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Blushing Bromeliad
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $139.00
                </h1>
              </div>
            </div>
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower6}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Aluminum Plant
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $179.00
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-1 gap-9">
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower7}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Birds Nest Fern
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $99.00
                </h1>
              </div>
            </div>
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower8}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Broadleaf Lady Palm
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $59.00
                </h1>
              </div>
            </div>
            <div className="h-full flex-1">
              <div className="w-full h-[270px] bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                  src={gridFlower9}
                  alt="no img"
                  className="flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="w-full h-[100px]">
                <h2 className="font-sans font-normal text-base text-left">
                  Chinese Evergreen
                </h2>
                <h1 className="font-mono font-bold text-lg text-green-600 text-left">
                  $39.00
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mask = () => {
  return (
    <div className="flex gap-6 w-9/10 h-[250px]">
      <div className="flex flex-1 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="h-full w-[250px] relative">
          <img
            src={gridFlower5}
            alt="no grid img"
            className="absolute left-[15px] top-[-20px]"
          />
          <img
            src={ellipsGreen1}
            alt="no img ellipsGreen"
            className="relative top-[142px]"
          />
          <img
            src={ellipsGreen2}
            alt="no img ellipsGreen"
            className="relative top-[26px]"
          />
        </div>
        <div className="h-full w-[350px]">
          <h1 className="font-black font-sans text-right text-2xl w-[224px] relative left-[120px] pt-3 pr-3">
            SUMMER CACTUS & SUCCULENTS
          </h1>
          <p className="font-normal font-sans text-sm w-[292px] text-right relative left-12 pt-3 pr-3">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <Button className="w-[140px] h-[40px] rounded-md bg-lime-700 border-none relative top-[20px] left-[190px] flex gap-[5px] hover:bg-fuchsia-600 ">
            <p className="text-white hover:text-black relative left-[19px] top-[3px]">
              Find More
            </p>
            <ArrowRightOutlined className="text-white hover:text-black relative top-[8px] left-[17px]" />
          </Button>
        </div>
      </div>
      <div className="flex flex-1 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="h-full w-[250px] relative">
          <img
            src={gridFlower3}
            alt="no grid img"
            className="absolute left-[15px] top-[-20px]"
          />
          <img
            src={ellipsGreen1}
            alt="no img ellipsGreen"
            className="relative top-[142px]"
          />
          <img
            src={ellipsGreen2}
            alt="no img ellipsGreen"
            className="relative top-[26px]"
          />
        </div>
        <div className="h-full w-[350px]">
          <h1 className="font-black font-sans text-right text-2xl w-[224px] relative left-[120px] pt-3 pr-3">
            STYLING TRENDS & MUCH MORE
          </h1>
          <p className="font-normal font-sans text-sm w-[292px] text-right relative left-12 pt-3 pr-3">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <Button className="w-[140px] h-[40px] rounded-md bg-lime-700 border-none relative top-[20px] left-[190px] flex gap-[5px] hover:bg-fuchsia-600 ">
            <p className="text-white hover:text-black relative left-[19px] top-[3px]">
              Find More
            </p>
            <ArrowRightOutlined className="text-white hover:text-black relative top-[8px] left-[17px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="flex gap-[47px] w-9/10 h-[365px] mt-[35px]">
      <div className="flex-1">
        <div className="w-full h-1/2">
          <img src={room1} />
        </div>
        <div className=" w-full relative h-1/2 bg-gradient-to-r from-slate-50 to-slate-100 pt-[20px]">
          <div className="w-[240px] m-auto">
            <p className="font-sans font-madium text-sm text-green-500 text-left">
              September 12 I Read in 6 minutes
            </p>
            <h1 className="font-sans font-bold text-xl relative left-0 w-[197px] text-left">
              Cactus & Succulent Care Tips
            </h1>
            <p className="font-sans font-normal text-sm text-gray-600 text-left">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <div className="flex">
              <h2 className="font-sans font-medium text-left text-gray-900">
                Read More
              </h2>
              <ArrowRightOutlined className="relative left-[2px] top-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full h-1/2">
          <img src={room2} />
        </div>
        <div className=" w-full relative h-1/2 bg-gradient-to-r from-slate-50 to-slate-100 pt-[20px]">
          <div className="w-[240px] m-auto">
            <p className="font-sans font-madium text-sm text-green-500 text-left">
              September 13 I Read in 2 minutes
            </p>
            <h1 className="font-sans font-bold text-xl relative left-0 w-[197px] text-left">
              Top 10 Succulents for Your Home
            </h1>
            <p className="font-sans font-normal text-sm text-gray-600 text-left">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <div className="flex">
              <h2 className="font-sans font-medium text-left text-gray-900">
                Read More
              </h2>
              <ArrowRightOutlined className="relative left-[2px] top-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full h-1/2">
          <img src={room3} />
        </div>
        <div className=" w-full relative h-1/2 bg-gradient-to-r from-slate-50 to-slate-100 pt-[20px]">
          <div className="w-[240px] m-auto">
            <p className="font-sans font-madium text-sm text-green-500 text-left">
              September 15 I Read in 3 minutes
            </p>
            <h1 className="font-sans font-bold text-xl relative left-0 w-[197px] text-left">
              Cacti & Succulent Care Tips
            </h1>
            <p className="font-sans font-normal text-sm text-gray-600 text-left">
              Cacti and succulents thrive in containers and because most are..
            </p>
            <div className="flex">
              <h2 className="font-sans font-medium text-left text-gray-900">
                Read More
              </h2>
              <ArrowRightOutlined className="relative left-[2px] top-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full h-1/2">
          <img src={room4} />
        </div>
        <div className=" w-full relative h-1/2 bg-gradient-to-r from-slate-50 to-slate-100 pt-[20px]">
          <div className="w-[240px] m-auto">
            <p className="font-sans font-madium text-sm text-green-500 text-left">
              September 15 I Read in 2 minutes
            </p>
            <h1 className="font-sans font-bold text-xl relative left-0 w-[197px] text-left">
              Best Houseplants Room by Room
            </h1>
            <p className="font-sans font-normal text-sm text-gray-600 text-left">
              The benefits of houseplants are endless. In addition to..
            </p>
            <div className="flex">
              <h2 className="font-sans font-medium text-left text-gray-900">
                Read More
              </h2>
              <ArrowRightOutlined className="relative left-[2px] top-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Kaktus = () => {
  return (
    <div className="flex w-9/10 h-[250px] mt-[100px] p-[20px] bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="h-full w-[240px]">
        <div className="flex">
          <img
            src={kaktus1to1}
            alt="no img kaktus1to1"
            className="cursor-pointer relative top-[17px]"
          />
          <img
            src={kaktus1to2}
            alt="no img kaktus1to1"
            className="cursor-pointer relative left-[-55px] top-[27px]"
          />
          <img
            src={kaktus1to3}
            alt="no img kaktus1to1"
            className="cursor-pointer relative left-[-110px] top-[-19px]"
          />
        </div>
        <h1 className="font-sans font-bold text-lg text-left mt-[20px]">
          Garden Care
        </h1>
        <p className="font-sans font-normal text-sm text-left w-[204px] mt-[7px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="h-full w-[70px]">
        <img src={boder} alt="no img border" />
      </div>
      <div className="h-full w-[240px]">
        <div className="flex">
          <img
            src={kaktus1to1}
            alt="no img kaktus1to1"
            className="cursor-pointer relative top-[17px]"
          />
          <img
            src={kaktus2to2}
            alt="no img kaktus1to1"
            className="cursor-pointer relative left-[-60px] top-[27px]"
          />
          <img
            src={kaktus2to3}
            alt="no img kaktus1to1"
            className="cursor-pointer relative left-[-110px] top-[-16px]"
          />
        </div>
        <h1 className="font-sans font-bold text-lg text-left mt-[20px]">
          Plant Renovation
        </h1>
        <p className="font-sans font-normal text-sm text-left w-[204px] mt-[7px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="h-full w-[70px]">
        <img src={boder} alt="no img border" />
      </div>
      <div className="h-full w-[240px]">
        <div className="flex">
          <img
            src={kaktus1to1}
            alt="no img kaktus1to1"
            className="cursor-pointer relative top-[17px]"
          />
          <img
            src={kaktus3to2}
            alt="no img kaktus1to1"
            className="cursor-pointer relative left-[-65px] top-[30px]"
          />
          <img
            src={kaktus3to3}
            alt="no img kaktus1to1"
            className="cursor-pointer relative left-[-123px] top-[-11px]"
          />
        </div>
        <h1 className="font-sans font-bold text-lg text-left mt-[20px]">
          Watering Graden
        </h1>
        <p className="font-sans font-normal text-sm text-left w-[204px] mt-[7px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="h-full w-[340px] flex flex-col gap-[15px] mt-[13px]">
        <h1 className="font-sans font-bold text-lg">
          Would you like to join newsletters?
        </h1>

        <Inputt></Inputt>
        <p className="font-sans font-normal text-sm text-gray-600 w-[354px] text-left">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  );
};
const Address = () => {
  return (
    <div className="w-9/10 h-[88px] bg-green-100 flex gap-[14px] p-[15px] border-y-2 border-opacity-20 border-green-500  ">
      <div className="flex-1">
        <img src={Logo} alt="no img Logo" className="mt-[10px]" />
      </div>
      <div className="flex-1 flex">
        <EnvironmentOutlined />
        <p className="font-sans font-normal text-sm w-[185px] mt-[10px]">
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
      </div>
      <div className="flex-1 flex gap-[13px]">
        <MailOutlined />
        <p className="font-sans font-normal text-sm mt-[15px]">
          contact@greenshop.com
        </p>
      </div>
      <div className="flex-1 flex gap-[10px]">
        <PhoneOutlined />
        <p className="font-sans font-normal text-sm mt-[17px]">
          +88 01911 717 490
        </p>
      </div>
    </div>
  );
};
const SocialMedia = () => {
  return (
    <div className="w-9/10 h-[236px] flex justify-around bg-gradient-to-r from-slate-50 to-slate-100 border-b border-green-200">
      <div className="w-[106px] h-[114px] relative top-[40px] left-[-115px] flex flex-col gap-[10px]">
        <h1 className="font-sans font-bold text-lg text-left">My Account</h1>
        <p className="font-sans font-normal text-sm text-left">My Account</p>
        <p className="font-sans font-normal text-sm text-left">Address</p>
        <p className="font-sans font-normal text-sm text-left">Wishlist</p>
      </div>
      <div className="w-[101px] h-[174px] relative top-[40px] left-[-15px] flex flex-col gap-[10px] ">
        <h1 className="font-sans font-bold text-lg text-left">Categories</h1>
        <p className="font-sans font-normal text-sm text-left">House Plants</p>
        <p className="font-sans font-normal text-sm text-left">Potter Plants</p>
        <p className="font-sans font-normal text-sm text-left">Seeds</p>
        <p className="font-sans font-normal text-sm text-left">Small Plants</p>
        <p className="font-sans font-normal text-sm text-left">Accessories</p>
      </div>
      <div className="w-[224px] h-[154px] relative top-[40px] left-[82px]">
        <h1 className="font-sans font-bold text-lg text-left">Social Media</h1>
        <div className="flex gap-[5px] h-[35px]">
          <FacebookOutlined />
          <InstagramOutlined />
          <TwitterOutlined />
          <LinkedinOutlined />
          <YoutubeOutlined />
        </div>
        <h1 className="font-sans font-bold text-lg text-left mt-[18px]">
          We accept
        </h1>
        <div className="inline-block mt-[5px] ">
          <img
            src={VisaKarta}
            alt="mo img VisaKarta"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export { Cart, Goo, Mask, Blog, Kaktus, Address, SocialMedia };
