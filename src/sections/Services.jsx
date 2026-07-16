import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import TitleHeader from "../components/TitleHeader";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-5 pt-10 md:px-20 md:pt-16"
    >
      <TitleHeader
        title="What I Do"
        sub="💻 My Services"
      />

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="mb-20"/>
    </section>
  );
};

export default Services;