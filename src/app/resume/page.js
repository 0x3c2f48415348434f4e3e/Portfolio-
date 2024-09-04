"use client"
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';
const Resume = () =>{
    return(
        <div className="flex justify-center mt-12">
                <Button varient="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                  </Button>
        </div>
    )
}

export default Resume;