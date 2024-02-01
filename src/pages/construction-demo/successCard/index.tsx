import RandomNumberGeneratorContainer from "./RandomNumGen";

function SuccessCard() {
  return (
    <main className="md:flex md:flex-row flex flex-col items-center justify-center md:pt-40 pt-[27rem] h-[400px] font-poppins">
      <div className="flex ">
        <div className=" flex flex-col space-y-4 bg-[#ffc107] md:p-8 p-6">
          <span className=" md:text-lg text-xl font-bold">
            Build Your Dream
          </span>
          <h1 className="text-4xl font-bold font-poppins">
            25 Years of Undefeated <br /> Success
          </h1>
          <span className="md:w-80 md:text-sm text-gray-700 py-2 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            voluptatum iusto officiis eum consequuntur doloribus, at enim
            necessitatibus corporis. Iure ad minus.
          </span>
          <button className=" w-fit bg-black px-4 py-2 font-poppins text-white hover:scale-105">
            Work With Us
          </button>
        </div>
      </div>
      <RandomNumberGeneratorContainer />
    </main>
  );
}

export default SuccessCard;
