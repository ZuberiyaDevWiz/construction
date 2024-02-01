export default function Sustainability() {
  return (
    <section className="mt-20 md:flex md:flex-row flex flex-col w-full">
      <div
        className="relative md:w-1/2 w-full bg-cover md:px-28 px-6 py-10"
        style={{ backgroundImage: 'url("qualityImg/plumbing-cons.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-65" />

        {/* <div className='flex w-1/2 flex-col bg-[#1a237e] px-28 py-10 text-white'> */}
        <h1 className="relative z-10 text-4xl font-bold text-white">
          Safety is an equal priority in construction.
        </h1>
        <p className="font-poppins relative z-10 my-10 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          porttitor accumsan consectetur adipiscing elit. Pellentesque in ipsum.
        </p>
        <button className="font-poppins relative z-10 w-fit bg-[#ffc107] px-5 py-2 text-sm font-semibold text-gray-900 hover:scale-105">
          GET IN TOUCH
        </button>
        {/* </div> */}
      </div>
      <div
        className="relative md:w-1/2  bg-cover md:px-28 px-6 py-10"
        style={{ backgroundImage: 'url("qualityImg/cons-img2.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-65" />
        <h2 className=" relative  z-10 text-4xl font-bold text-white">
          What We Do
        </h2>
        <p className="font-poppins relative z-10 mb-8 mt-4 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          porttitor accumsan consectetur adipiscing elit. Pellentesque in ipsum.
        </p>
        <ul className=" relative z-10 list-none space-y-2 text-white">
          <li>✓ Risk identification</li>
          <li>✓ Completion On Time</li>
          <li>✓ Perfect Execution</li>
          <li>✓ Landscape Design</li>
        </ul>
      </div>
    </section>
  );
}
