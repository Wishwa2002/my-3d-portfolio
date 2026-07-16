import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".timeline-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          xPercent: -100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,

            // Trigger as soon as the card enters the viewport
            start: "top bottom-=50",

            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      scaleY: 0,
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.fromTo(
        text,
        {
          opacity: 0,
          xPercent: 10,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top bottom-=100",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    // Recalculate trigger positions after images and layout load
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 pb-40"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img
                        src={card.imgPath}
                        alt={card.title}
                      
                      />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt={`${card.title} logo`} />
                      </div>

                      <div>
                        <h1 className="font-semibold text-3xl">
                          {card.title}
                        </h1>

                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>

                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, responsibilityIndex) => (
                              <li
                                key={responsibilityIndex}
                                className="text-lg"
                              >
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;