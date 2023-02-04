import React, { FC } from "react";

interface HeroProps {
  text: string;
}

const Hero: FC<HeroProps> = ({ text }: HeroProps) => {
  return (
    <div className="bg-primary-blue items-center flex pl-64 py-20 h-52">
      <p className="text-white  text-4xl font-normal leading-5 ">{text}</p>
    </div>
  );
};

Hero.defaultProps = {};
export default Hero;
