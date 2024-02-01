import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  img: string;
  title: string;
  desc: string;
}

const QualityServiceSection: FC<Props> = ({ img, title, desc }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  return (
    <div className="font-poppins flex flex-col items-center">
      <div
        ref={ref}
        className={`transition-opacity duration-500 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image src={img} alt="images" width={400} height={500} />
      </div>
      <h1 className="pt-5 md:text-lg text-xl font-bold ">{title}</h1>
      <p className="pt-2 text-center md:text-sm text-gray-500">{desc}</p>
    </div>
  );
};

const Arr = [
  {
    img: "/qualityImg/cons-img.jpg",
    title: "Land Mining",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    img: "/qualityImg/cons-img2.jpg",
    title: "Land Mining",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    img: "/qualityImg/cons-img3.jpg",
    title: "Land Mining",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    img: "/qualityImg/cons-img4.jpg",
    title: "Land Mining",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    img: "/qualityImg/cons-img5.jpg",
    title: "Land Mining",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    img: "/qualityImg/cons-img6.jpg",
    title: "Land Mining",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
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

// const QualityServiceSection: FC<Props> = ({ img, title, desc }) => {
//   return (
//     <div className='font-poppins flex flex-col  items-center '>
//       <Image src={img} alt='images' width={400} height={500} />
//       <h1 className='pt-5 text-lg font-bold'>{title}</h1>
//       <p className='   pt-2 text-center text-sm text-gray-500'>{desc}</p>
//     </div>
//   );
// };

// const Arr = [
//   {
//     img: '/qualityImg/cons-img.jpg',
//     title: 'Land Mining',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
//   },
//   {
//     img: '/qualityImg/cons-img2.jpg',
//     title: 'Land Mining',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
//   },
//   {
//     img: '/qualityImg/cons-img3.jpg',
//     title: 'Land Mining',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
//   },
//   {
//     img: '/qualityImg/cons-img4.jpg',
//     title: 'Land Mining',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
//   },
//   {
//     img: '/qualityImg/cons-img5.jpg',
//     title: 'Land Mining',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
//   },
//   {
//     img: '/qualityImg/cons-img6.jpg',
//     title: 'Land Mining',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
//   },
// ];

// function QualityService() {
//   return (
//     <div className='px-28 pt-28'>
//       <div className='font-poppins pb-10  font-bold'>
//         <h1 className=' text-lg'>Build Your Dream</h1>
//         <p className='text-3xl '>Quality Services</p>
//       </div>

//       <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
//         {Arr.map((x) => (
//           <QualityServiceSection {...x} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QualityService;
