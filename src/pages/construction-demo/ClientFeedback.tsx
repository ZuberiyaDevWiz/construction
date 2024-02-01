import { FC, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/clx";

// const ClientCard: FC<{
//   img: string;
//   desc: string;
//   title: string;
//   desg: string;
// }> = ({ desc, desg, img, title }) => {
//   return (
//     <div className="flex w-fit  p-3 shadow-xl hover:scale-105">
//       <img src={img} alt="image" width={200} height={200} />
//       <div className="font-poppins flex flex-col pl-3">
//         <RiDoubleQuotesL className="text-5xl text-yellow-500" />
//         <p className="w-64 py-4 text-sm text-gray-700">{desc}</p>
//         <h1 className=" text-lg font-bold">{title}</h1>
//         <p className="text-sm font-semibold">{desg}</p>
//       </div>
//     </div>
//   );
// };

const ClientCard: FC<{
  img: string;
  desc: string;
  title: string;
  desg: string;
}> = ({ desc, desg, img, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "md:flex md:flex-row flex flex-col w-fit p-3 shadow-xl hover:scale-105 transform group"
      )}
    >
      <img
        src={img}
        alt="image"
        width={200}
        height={200}
        className="hidden md:block"
      />
      <img
        src={img}
        alt="image"
        width={200}
        height={200}
        className="md:hidden mx-auto"
      />
      <div className="font-poppins flex flex-col pl-3">
        <RiDoubleQuotesL className="text-5xl text-yellow-500" />
        <p className="md:w-64  py-4 text-sm text-gray-700">{desc}</p>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="md:text-sm pb-5 md:pb-0 font-semibold">{desg}</p>
      </div>
    </motion.div>
  );
};

function ClientFeedback() {
  return (
    <div className="md:px-40 px-3 md:py-20 py-10">
      <div className="md:flex md:flex-row flex flex-col">
        <div>
          <h1 className="font-poppins text-4xl font-bold ">
            What Our Clients Say
          </h1>
          <p className="font-poppins md:pb-14 md:pt-10 py-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            <br className="md:block hidden" />
            eum illum esse voluptatibus, perspiciatis ut eum illum esse
          </p>
          <ClientCard
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        voluptatibus, perspiciatis ut eum illum ipsum dolor sit amet consectetur adipisicing esse voluptatibus ipsum dolor sit amet consectetur adipisicing,
"
            desg="Real Estate Developer"
            img="/lady-1.jpg"
            title="Marie luther"
          />
        </div>
        <div className="flex flex-col pt-10 md:pt-0 space-y-10 md:pl-32">
          <ClientCard
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        voluptatibus, perspiciatis ut eum illum ipsum dolor sit amet consectetur adipisicing esse voluptatibus ipsum dolor sit amet ,
"
            desg="Development Company"
            img="/men-2.jpg"
            title="Curtis Magherritia"
          />
          <ClientCard
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        voluptatibus, perspiciatis ut eum illum ipsum dolor sit amet consectetur adipisicing esse voluptatibus ipsum dolor sit amet consectetur adipisicing,
"
            desg="Architect"
            img="/lady-2.jpg"
            title="Emily Ninka"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback;
