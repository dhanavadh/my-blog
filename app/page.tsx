import Component1 from "./projects/component1";
import Component2 from "./projects/component2";
import Main from "./main/page";

export default function Home() {
  return (
    <>
    <Main />
      <div className='grid bg-black font-mono text-7xl text-[#f2f2f2]'>
        <a className='object-none object-left-bottom'>
          Projects
        </a>
      </div>
    <Component1 />
      
    <Component2 />
    </>
  );
}
