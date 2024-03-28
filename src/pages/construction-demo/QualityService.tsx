// import Image from "next/image";
// import { FC } from "react";
// import { useInView } from "react-intersection-observer";

// interface Props {
//   img: string;
//   title: string;
//   desc: string;
// }

// const QualityServiceSection: FC<Props> = ({ img, title, desc }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     rootMargin: "-100px 0px",
//   });

//   return (
//     <div className="font-poppins flex flex-col items-center">
//       <div
//         ref={ref}
//         className={`transition-opacity duration-500 ${
//           inView ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <Image src={img} alt="images" width={500} height={500} />
//       </div>
//       <h1 className="pt-5 text-lg font-bold text-center ">{title}</h1>
//       <p className="pt-3 text-center md:text-sm text-gray-500">{desc}</p>
//     </div>
//   );
// };

// const Arr = [
//   {
//     img: "/qualityImg/cons-img.jpg",
//     title: "TELECOMMUNICATIONS",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
//   },
//   {
//     img: "/qualityImg/cons-img2.jpg",
//     title: "DIRECTIONAL DRILLING",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
//   },
//   {
//     img: "/qualityImg/cons-img3.jpg",
//     title: "INTELLIGENT TRANSPORTATION SYSTEMS",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
//   },
//   {
//     img: "/qualityImg/cons-img4.jpg",
//     title: "LAND MINING",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
//   },
//   {
//     img: "/qualityImg/cons-img5.jpg",
//     title: "LAND MINING",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
//   },
//   {
//     img: "/qualityImg/cons-img6.jpg",
//     title: "LAND MINING",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
//   },
// ];

// function QualityService() {
//   return (
//     <div className="md:px-28 px-6 md:pt-[20rem] pt-[34rem]">
//       <div className="font-poppins pb-8 pl-2 font-bold">
//         <h1 className="text-lg">Build Your Dream</h1>
//         <p className="text-3xl pt-1">Quality Services</p>
//       </div>

//       <div className="md:grid md:grid-cols-3 md:gap-x-7 md:gap-y-10 flex flex-col space-y-8 md:space-y-0">
//         {Arr.map((x, index) => (
//           <QualityServiceSection key={index} {...x} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QualityService;

import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  img: string;
  title: string;
  desc: string;
  width: number;
  height: number;
}

const QualityServiceSection: FC<Props> = ({
  img,
  title,
  desc,
  width,
  height,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  return (
    <div className="font-poppins flex flex-col items-center relative">
      <div
        ref={ref}
        className={`transition-opacity duration-500 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          style={{ width: width, height: height, position: "relative" }}
          className="md:block hidden"
        >
          <Image src={img} alt="images" layout="fill" objectFit="cover" />
        </div>

        <Image
          src={img}
          alt="images"
          width={500}
          height={500}
          className="md:hidden"
        />
      </div>
      <h1 className="pt-5 text-lg font-bold text-center ">{title}</h1>
      <p className="pt-2 text-center md:text-sm text-gray-500">{desc}</p>
    </div>
  );
};

const Arr = [
  {
    img: "/qualityImg/cons-img.png",
    title: "TELECOMMUNICATIONS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
    width: 400,
    height: 300,
  },
  {
    img: "/qualityImg/cons-img2.jpg",
    title: "DIRECTIONAL DRILLING",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
    width: 400,
    height: 304,
  },
  {
    img: "/qualityImg/cons-img3.jpg",
    title: "INTELLIGENT TRANSPORTATION SYSTEMS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
    width: 400,
    height: 300,
  },
  {
    img: "/qualityImg/cons-img4.jpg",
    title: "LAND MINING",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
    width: 400,
    height: 300,
  },
  {
    img: "/qualityImg/cons-img5.jpg",
    title: "LAND MINING",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
    width: 400,
    height: 300,
  },
  {
    img: "/qualityImg/cons-img6.jpg",
    title: "LAND MINING",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
    width: 400,
    height: 300,
  },
  // Add more objects for other images with different dimensions
];

function QualityService() {
  return (
    <div className="md:px-28 px-6 md:pt-[20rem] pt-[34rem]">
      <div className="font-poppins pb-8 pl-2 font-bold">
        <h1 className="text-lg">Build Your Dream</h1>
        <p className="text-3xl pt-1">Quality Services</p>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-7 md:gap-y-10 flex flex-col space-y-8 md:space-y-0">
        {Arr.map((x, index) => (
          <QualityServiceSection key={index} {...x} />
        ))}
      </div>
    </div>
  );
}

export default QualityService;
