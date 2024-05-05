import { useState } from "react";
import { Slider, Button } from "antd";

const Sliderr = () => {
  const [range, setRange] = useState([0, 1500]);
  const [defaultRange, setDefaultRange] = useState([0, 1500]);

  const onChange = (range) => {
    setRange(range);
  };
  const resetRange = () => {
    // setRange([0, 1500]);
    setRange(defaultRange);
    // <Slider/>
  };
  return (
    <>
      <Slider onChange={onChange} range defaultValue={range} />
      <p className="font-sans relative left-[-105px]">
        Price:{" "}
        <span className="text-green-600 font-sans">
          {range[0] + " $"} - {range[1] + " $"}
        </span>
      </p>
      <Button
        onClick={resetRange}
        className="w-[90px] h-[35px] bg-green-700 border-none relative left-[-122px] top-[12px]"
      >
        <span className="font-sans text-white hover:text-green-700">
          Filter
        </span>
      </Button>
      {/* Price: {range[0] + " $"}
      Price: {range[1] + " $"} */}
    </>
  );
};
export { Sliderr };
