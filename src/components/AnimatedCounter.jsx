import React from "react";
import CountUpImport from "react-countup";
import { counterItems } from "../constants/index.js";

const CountUp = CountUpImport?.default ?? CountUpImport;

const AnimatedCounter = () => {
  return (
    <section id="counter" className="padding-x-lg mt-32 xl:mt-0">
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-10"
          >
            <div className="counter-number mb-2 text-5xl font-bold text-white">
              <CountUp
                start={0}
                end={Number(item.value)}
                duration={2.5}
                delay={0}
                suffix={item.suffix ?? ""}
                separator=","
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </div>

            <p className="text-center text-lg text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;