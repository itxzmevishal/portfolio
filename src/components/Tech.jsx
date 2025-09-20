import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper"; // updated wrapper
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
      {technologies.map(({ name, icon }) => (
        <div key={name} className="w-24 h-24 sm:w-28 sm:h-28">
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
