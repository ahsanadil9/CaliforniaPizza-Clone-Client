import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="w-full bg-white border-b-2">
        <div className="flex items-center px-4 py-2 h-14 lg:justify-center lg:h-24">
          <div className="relative bg-white rounded-full w-14 aspect-square mb-[-3.5rem] lg:w-24 border-b-2">
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
