import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="w-full bg-white border-b-2">
        <div className="flex items-center px-4 py-2 h-14 md:justify-center lg:justify-center lg:h-16">
          <div className="relative bg-white lg:rounded-full w-14 aspect-square lg:mb-[-3.5rem] lg:w-24 lg:border-b-2 z-10">
            <Image
              src="/assets/california-logo.webp"
              alt="California Pizza Logo"
              fill
            />
          </div>
        </div>
      </nav>
    </>
  );
}
