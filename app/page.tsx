import Component1 from "./projects/component1";
import Component2 from "./projects/component2";
import Main from "./main/page";

export default function Home() {
  return (
    <>
    <Main />
      <div className='grid bg-black font-mono xl:text-7xl text-5xl text-[#f2f2f2]'>
        <p className='object-none object-left-bottom'>
          <a className='text-pink-500 font-mono mx-2'>*</a>Projects
        </p>
      </div>
    <Component1 />
      
    <Component2 />
    </>
  );
}
