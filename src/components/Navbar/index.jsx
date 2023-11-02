import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="relative w-full bg-white">
        <div className="">
          <div className="flex items-center px-4 py-2 h-14 md:justify-center lg:justify-center lg:h-16">
            <div className="relative z-10 w-16 aspect-square  md:w-20 lg:bg-white lg:rounded-full lg:mb-[-3.5rem] lg:w-24 lg:border-b-2">
              <Image
                src="/assets/california-logo.webp"
                alt="California Pizza Logo"
                fill
              />
            </div>
          </div>
          <div className="absolute p-3 items-center flex z-10 right-0 top-0 md:left-0 md:top-0 lg:left-0 lg:top-1">
            <div className="bg-red-600 text-white font-bold text-xs p-2 rounded-lg">
              034-336-034-31
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
