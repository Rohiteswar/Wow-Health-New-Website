import Link from "next/link";
import Logo from "../../../public/Logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
    
    <div className="bg-white p-6">
      <div className="space-y-16 mt-16 md:mt-10">
        <div className="p-10 space-y-6 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 xl:gap-16">
          <div className="flex flex-col justify-center space-y-3 md:col-span-6 xl:col-span-5">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Join the <span className="text-[#EB2227]">WOW</span> Health
              Nutrition Club
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Experience the power of good nutrition. Our club offers a
              transformational journey to a healthier you.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Link
                className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#3BB34A] hover:text-white transition duration-200 text-black"
                href="/Join"
              >
                Join Now
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:col-span-6 xl:col-span-7">
          <div style={{ position: 'relative', width: '500px', height: '300px' }}>
      <Image
        src={Logo}
        alt="Picture of the author"
        sizes="500px"
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
