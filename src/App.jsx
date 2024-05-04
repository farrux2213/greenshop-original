import "./App.css";
import Logo from "/Logo.svg";
import Search from "/search.svg";
import Shop from "/shop.svg";
import { LoginOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { Cart, Goo } from "./Item";
import Paginationn from "./Pagination";
import { Mask } from "./Item";
import { Blog, Kaktus, Address, SocialMedia } from "./Item";

// import CarouselItem from "./CarouselItem/index.jsx";
// import flower1 from "/flower1.svg";
// import flower2 from "/flower2.svg";
// import flower3 from "/flower3.svg";

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

      <Carousel autoplay>
        <div>
          <Cart
            text="Let’s Make a Better"
            button="SHOP NOW"
            img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILMwYQqsYTucUF6Fdy9-pQGyxLaCRsejqeFyTU9C2tUnA9RaAqN5xKCBPBtF2j7Y~zUQV73xF6uNLWJiLAhZAxy29m6Ldh002Y9kfEa8IMIZl-iH9wZsnWjT8rGC3F1QTi0IQ354wKE7qkDYMSuG0EEB9KwKxIvqLKAWcGJkzal3cEB32bSVY3wxU2LeJwpUrnQkfZrQdALKEOqnKGrU8XNJ7ypnv2B3PNpsDNDwBWnE-3EB5iWLTeRVlaDREy-RR4AePrrEZSYZRBti7jx~saFs2UBZV0SeqYr8MCVsvtbujX5d9EnQtd93cKOX1a4pN62yLwz--gqrJhL2vdaO6w__"
          />
        </div>
        <div>
          <Cart
            text="Let’s Make a Better"
            button="LET'S START"
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d"
          />
        </div>
        <div>
          <Cart
            text="LET'S OBSERVE A BETTER "
            button="GET CRIDETS"
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662"
          />
        </div>
      </Carousel>

      <Goo></Goo>

      <div className="relative">
        <div className="inline-block absolute right-0 ">
          <Paginationn></Paginationn>
        </div>
      </div>
      <div className="w-9/10 h-[250px]"></div>
      <Mask></Mask>
      <div className="mt-[100px]">
        <h1 className="font-sans font-bold text-3xl">Our Blog Posts</h1>
        <p className="font-sans font-normal text-sm mt-[20px] text-gray-500">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <Blog></Blog>
      <Kaktus></Kaktus>
      <Address></Address>
      <SocialMedia></SocialMedia>
      <p className="font-sans font-normal m-auto text-sm mt-[10px]">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </>
  );
}

export default App;
