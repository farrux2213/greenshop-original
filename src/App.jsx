import "./App.css";
import Logo from "/Logo.svg";
import Search from "/search.svg";
import Shop from "/shop.svg";
import { LoginOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
// import CarouselItem from "./CarouselItem/index.jsx";
import flower1 from "/flower1.svg";
import flower2 from "/flower2.svg";
import flower3 from "/flower3.svg";

function App() {
  return (
    <>
      <div className=" w-9/10 h-[78px] m-auto flex items-center justify-between border-b-[1.5px] border-lime-500  border-solid ">
        <div className="">
          <img src={Logo} className=" cursor-pointer" alt="no img" />
        </div>
        <div className="flex gap-[30px] m-auto">
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Home
          </h3>
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Shop
          </h3>
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Plant Care
          </h3>
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Blogs
          </h3>
        </div>
        <div className="flex gap-[30px]">
          <img src={Search} alt="no img" className="cursor-pointer" />
          <img src={Shop} alt="no img" className="cursor-pointer" />
          <button className="w-[100px] h-[35px] rounded-md bg-lime-600 flex gap-[6px] items-center justify-center">
            <LoginOutlined className="text-gray-50" />
            <p className="text-gray-50">Login</p>
          </button>
        </div>
      </div>
      <Carousel autoplay className="">
        <div className="flex flex-row h-[450px] mt-[20px]">
          <div className="w-2/5 h-full bg-yellow-300"></div>
          <div className="w-3/5 h-full bg-red-500">
            <img src={flower1} />
          </div>
        </div>
        <div className="flex flex-row h-[450px] mt-[20px]">
          <div className="w-2/5 h-full bg-yellow-300"></div>
          <div className="w-3/5 h-full bg-red-500">
            <img src={flower2} />
          </div>
        </div>
        <div className="flex flex-row h-[450px] mt-[20px]">
          <div className="w-2/5 h-full bg-yellow-300"></div>
          <div className="w-3/5 h-full bg-red-500">
            <img src={flower3} />
          </div>
        </div>
        \
      </Carousel>
    </>
  );
}

export default App;
