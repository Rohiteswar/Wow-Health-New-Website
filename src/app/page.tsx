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
      <div>
        <Journey />
      </div>
      <br />
      <div className="mt-10">
        <div className="mx-auto flex flex-col place-items-center">
          <div className="text-black text-4xl">Join Your Hands With Us 🤝</div>
          <div className="-mt-[160px]">
            <TypeWrite />
          </div>
        </div>
      </div>
    </>
  );
}
