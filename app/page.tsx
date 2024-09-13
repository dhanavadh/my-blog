import Image from "next/image";
import TestImg from "../app/resources/test.jpeg";
import "@/app/components/global-style.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows min-h-screen items-center justify-items-center">
      <main className="flex flex-col items-center mx-6">
      <div className="grid">
        <div className="grid">
          <Image className="object-cover ssa"
            src={TestImg}
            alt="Test Image"   
          />
        </div>
      </div>
        <div className="mx-2 sm:w-64">
          <h1 className="sm:text-5xl text-4xl font-mono font-medium">Dhanavadh Saito</h1>
          <h1 className="mb-3 text-3xl font-mono font-medium">(Teruyuki)</h1>
          <p className="text-md font-mono">I am a 3rd-year student currently majoring in Japanese language at <a className="underline underline-thickness-1 underline-offset-4 hover:underline hover:decoration-pink-500" href="https://www.arts.chula.ac.th/th/" target="_blank">the Faculty of Arts, Chulalongkorn University.</a></p>
        </div>
        <div className="mt-10">
          <Link href="https://www.linkedin.com/in/dhanav" target="_blank" className="font-mono underline-thickness-1 underline-offset-4 hover:underline mx-2">
           Linkedin
          </Link>
          <Link href="https://github.com/dhanavadh" target="_blank" className="font-mono underline-thickness-1 underline-offset-4 hover:underline mx-2 ">
           GitHub
          </Link>
        </div>

      </main>
    </div>
    
  );
}
