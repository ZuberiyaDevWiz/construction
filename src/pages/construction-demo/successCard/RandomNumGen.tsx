import { useEffect, useState, FC } from "react";

interface RandomNumberGeneratorProps {
  finalNumber: number;
  desc: string;
}

const RandomNumberGenerator: FC<RandomNumberGeneratorProps> = ({
  finalNumber,
  desc,
}) => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 1000);
      setRandomNumber(newRandomNumber);
    }, 20);

    setTimeout(() => {
      clearInterval(intervalId);

      setRandomNumber(finalNumber);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [finalNumber]);

  return (
    <div className=" text-center ">
      <h1 className="text-5xl font-bold">{randomNumber}+</h1>
      <p className="w-40 pt-1 text-sm">{desc}</p>
    </div>
  );
};

const RandomNumberGeneratorContainer: FC = () => (
  <div className="grid grid-cols-2 gap-y-20 gap-x-7 md:bg-gray-100 bg-gray-300 px-8 py-[4.15rem]">
    <RandomNumberGenerator finalNumber={10} desc="Experience" />
    <RandomNumberGenerator finalNumber={103} desc="Awards" />
    <RandomNumberGenerator finalNumber={540} desc="Clients" />
    <RandomNumberGenerator finalNumber={700} desc="Projects" />
  </div>
);

export default RandomNumberGeneratorContainer;
