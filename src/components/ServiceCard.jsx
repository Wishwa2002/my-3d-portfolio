import React from "react";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 p-[2px]">
      <div className="flex min-h-[350px] w-full flex-col items-center justify-center rounded-3xl bg-[#151030] px-8 py-10">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10">
          <img
            src={icon}
            alt={title}
            className="h-20 w-20 object-contain"
          />
        </div>

        <h3 className="mt-8 text-center text-xl font-bold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;