import { FC, ReactNode, useEffect } from "react";
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

  const splitDesc = desc.split("North American Information Systems");

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "md:flex md:flex-row flex flex-col w-full p-3 shadow-xl hover:scale-105 transform group"
      )}
    >
      <div className="flex justify-center items-center">
        <img
          src={img}
          alt="image"
          width={200}
          height={200}
          className="hidden md:block"
        />
      </div>
      <img
        src={img}
        alt="image"
        width={200}
        height={200}
        className="md:hidden mx-auto"
      />
      <div className="font-poppins flex flex-col pl-3 md:w-96">
        <RiDoubleQuotesL className="text-5xl text-yellow-500" />
        <p className="py-4 text-sm text-gray-800">
          {splitDesc[0]}
          <strong>North American Information Systems</strong>
          {splitDesc[1]}
        </p>
        <h1 className="text-lg font-bold ">{title}</h1>
        <p className="md:text-sm pb-5  font-semibold">{desg}</p>
      </div>
    </motion.div>
  );
};

function ClientFeedback() {
  return (
    <div className="md:px-28 px-3 md:py-20 py-10">
      <div className="md:flex md:flex-row flex flex-col">
        <div>
          <h1 className="font-poppins md:text-5xl text-4xl font-bold pt-2 md:pb-40 pb-10">
            What Our Clients Say
          </h1>
          {/* <p className="font-poppins md:pb-14 md:pt-10 py-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            <br className="md:block hidden" />
            eum illum esse voluptatibus, perspiciatis ut eum illum esse
          </p> */}

          <ClientCard
            desc="I have worked with North American Information Systems
for 18 months and the experience has exceeded my highest expectations. The entire team is
professional, trustworthy, respectful of others and property, and highly skilled with a strong
work ethic and can do attitude.

"
            desg="Real Estate Developer"
            img="/lady-1.jpg"
            title="Marie luther"
          />
        </div>
        <div className="flex flex-col pt-10 md:pt-0 space-y-10 md:pl-32">
          <ClientCard
            desc="We hired North American Information Systems to completely transform both our backyard
and front yard. We put in a pool, changed hardscapes (driveway and backyard), and new
landscaping. It provided a complete end-to-end service
starting with design through finished product. We had a fantastic experience working with
Warren and the entire team. The results are stunningly
beautiful and they were very professional and easy to work with.
"
            desg="Development Company"
            img="/men-2.jpg"
            title="Curtis Magherritia"
          />
          <ClientCard
            desc="After meeting with 4 different contractors, Warren at North American Information Systems got
the job for more than one reason. The main reason was he knew what he was looking at and
talking about, no guessing or saying let me look into /check on this, that and the other Second,
he put in writing a start and completion date, which further showed his experience and
confidence in how he runs his jobs. Third, he was the best quote of the four and did more than
he was supposed to without hesitation. This was a good size job, a three month project and
these guys never skipped a beat. Working with them was the
most pleasant construction experience I have ever had, and I have had a few.
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
