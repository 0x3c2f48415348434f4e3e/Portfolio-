import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';
import Socials from "@/components/Socials";
import Animation from "@/components/Animation";
const Home = ()=> {
  return (
      <section className="h-full">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left">
              <span className="text-xl">Computer Science Student</span>
              <h1 className="h1 mb-6">Hello World,<br/> <span className="text-red-500">I'm Esosa</span></h1>
              <p className="max-w-[500px] mb-9 text-white/80">Crafting code with passion, paving paths to innovation, and fuelling my tech curiosity one commit at a time.</p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button varient="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                  </Button>

                  <div className="mb-8 xl:mb-0">
                    <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-red-500 rounded-full flex justify-center items-center text-red-500 text-base"/>
                  </div>
              </div>
            </div>
            <div className="h-full">
              <Animation /> 
              </div>
          </div>
        </div>
      </section>
  );
}

export default Home;
