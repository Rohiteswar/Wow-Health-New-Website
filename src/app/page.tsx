import { Journey } from "./Components/Customerjourney";
import Hero from "./Components/Hero";
import { TypeWrite } from "./Components/Typewriter";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto text-center text-6xl p-6 text-black">
        Why <span>WOW</span> <span>Health</span>{" "}
        <span className="text-[#EB2227]"> ?</span>
      </div>
      <Journey />
      <TypeWrite />
    </>
  );
}
