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
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finalNumber]);

  return (
    <>
      <h1 className="text-4xl font-bold">{randomNumber}+</h1>
      <p className="w-40 pt-1 text-sm">{desc}</p>
    </>
  );
};

const RandomNumberGeneratorContainer: React.FC = () => (
  <>
    <RandomNumberGenerator finalNumber={492} desc="kdmkamsd" />
    <RandomNumberGenerator finalNumber={20} desc="asmdkasdm" />
    <RandomNumberGenerator finalNumber={10} desc="asmdksad" />
  </>
);

export default RandomNumberGeneratorContainer;
