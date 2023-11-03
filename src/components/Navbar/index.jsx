import Image from "next/image";
import Link from "next/link";

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
          <div className="absolute p-3 items-center flex z-10 right-0 top-0 md:left-0 md:top-0 lg:left-0 lg:mb-[-18px] lg:top-[-1.9px]">
            <Link href="/">
              <div className="flex bg-red-600 text-white font-extrabold lg:text-sm text-[10px] p-2 lg:p-3 rounded-lg">
                <Image
                  src="/assets/phone.png"
                  alt="phone"
                  width={0}
                  height={0}
                  className="pr-1 w-4 h-3 mt-[1px] lg:w-5 lg:h-4 lg:mt-[2px]"
                />
                <span className=""> 034-336-034-31</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
