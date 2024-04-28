import "./App.css";
import Logo from "/Logo.svg";

function App() {
  return (
    <>
      <div className="flex w-[78px] m-auto items-center justify-between border-b-[0.3] border-emerald-500 ">
        <div className="">
          <img src={Logo} />
        </div>
        <div className="flex gap-[30px]">
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
        <div className="flex gap-[30px]"></div>
      </div>
    </>
  );
}

export default App;
