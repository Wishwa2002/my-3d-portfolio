import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full mt-20 md:mt-40 section-padding xl:px-0"
    >
      <div className="w-full h-full px-5 md:px-20">
        <TitleHeader
          title="Professional Work Experience"
          sub="My Career Overview"
        />

        <div className="relative mt-32">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <GlowCard card={card}>
                    <div>
                        <img src={card.imgPath} alt={card.title} />
                    </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;