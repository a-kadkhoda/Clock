import { useEffect } from "react";
import { useState } from "react";

const Classic = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <>
      <div className="relative w-[300px] h-[300px] bg-white rounded-full border-4  border-black">
        <span className="absolute font-bold top-[2%] left-[47%]">12</span>
        <span className="absolute font-bold bottom-[2%] left-[48%]">6</span>
        <span className="absolute font-bold left-[2%] top-[46%]">9</span>
        <span className="absolute font-bold right-[2%] top-[46%]">3</span>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-800 shadow-xl z-50"></div>
        <div
          className="absolute top-[28%] left-[49.25%] -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-black rounded-tr-lg rounded-tl-lg transform origin-bottom "
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
        ></div>
        <div
          className="absolute top-[17%] left-[49.25%] -translate-x-1/2 -translate-y-1/2 w-1 h-24 bg-black rounded-tr-lg rounded-tl-lg transform origin-bottom "
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className="absolute top-[11%] left-[49.25%] -translate-x-1/2 -translate-y-1/2 w-1 h-28 bg-red-600 rounded-tr-lg rounded-tl-lg transform origin-bottom "
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Classic;
