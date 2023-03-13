import React from "react";
import KirbyStyle from "../../styles/Kirby.module.css";

const KirbyStyleTailWind = {
  eyeLeft: "w-20 h-10 bg-[#f1788d] rounded-full -rotate-3",
  eyeRight: "w-20 h-10 bg-[#f1788d] rounded-full rotate-6",
};

const Kirby = () => {
  return (
    <>
      <div className={KirbyStyle.bodyWrap}>
        <div className={KirbyStyle.body}>
          <div className={KirbyStyle.eyes}>
            <div className={KirbyStyle.eye}></div>
            <div className={KirbyStyle.eye}></div>
          </div>
          <div className={KirbyStyle.cheeks}>
            <div className={KirbyStyleTailWind.eyeLeft}></div>
            <div className={KirbyStyleTailWind.eyeLeft}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kirby;
