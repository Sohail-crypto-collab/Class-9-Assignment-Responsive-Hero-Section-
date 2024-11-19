import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row md:flex-row xl:flex-row  mt-20 p-10 bg-gradient-to-t from-white to-red-400 ">
      <div className="hero-map" />

      <div className="  flex flex-1 flex-col ">
        <h1 className="text-center font-extrabold text-2xl  sm:font-extrabold sm:text-2xl md:text-start md:font-extrabold md:text-4xl lg:text-start lg:font-extrabold lg:text-6xl lg:max-w-md xl:font-extrabold xl:text-7xl xl:max-w-4xl ">
          Explorer The Finest <span className="text-red-700">Global</span>{" "}
          Offers
        </h1>
        <p className="text-sm mt-6 text-gray-30 sm:text-base  md:max-w-xs md:text-sm lg:max-w-sm lg:text-xl xl:max-w-2xl xl:text-2xl">
           Discover the perfect balance of power, efficiency, and style in our cars
        </p>

        <div className="my-11 flex flex-wrap gap-1 mt-3 sm:mt-3  ">
          <div className="flex items-center gap-1 fas fa-star text-yellow-500 text-lg ">
            {/* stars code */}
            <Image
              className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"
              src="/star.svg"
              alt="close"
              width={16}
              height={16}
            />
            <Image
              className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"
              src="/star.svg"
              alt="close"
              width={16}
              height={16}
            />
            <Image
              className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"
              src="/star.svg"
              alt="close"
              width={16}
              height={16}
            />
            <Image
              className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"
              src="/star.svg"
              alt="close"
              width={16}
              height={16}
            />
            <Image
              className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"
              src="/star.svg"
              alt="close"
              width={16}
              height={16}
            />
          </div>

          <p className=" text-sm sm:text-xs md:text-sm lg:text-lg xl:text-2xl font-bold  text-blue-70 xl:ml-3 ">
            500k
            <span className=" text-md sm:text-md  md:text-sm xl:text-2xl xl:ml-3 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center lg:flex-row xl:flex-row -mt-6 xl:mt-4 lg:mt-4 md:mt-2  ">
          <Link href="../">
            <button className="  text-sm text-red-500 font-extrabold py-2 px-6 sm:text-2xl sm:py-2 sm:px-9 sm:-mt-6 lg:py-3 lg:px-10 lg:text-2xl xl:py-4 xl:px-14 xl:text-3xl  rounded-full shadow-md hover:bg-red-500 hover:text-white transition duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      <div className=" mt-2 ">
        <Image
          className="sm:items-center  md:w-auto md:h-64 md:mt-10 lg:w-auto lg:h-72 lg:mt-10 xl:w-auto xl:h-96 transition duration-300 transform hover:scale-105  "
          src="/car.svg"
          alt="ok"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
