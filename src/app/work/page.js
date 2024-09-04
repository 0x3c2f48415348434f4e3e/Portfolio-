"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import {motion} from 'framer-motion'

const projects = [
    {
        num:1,
        category:'Miscellaneous',
        title:"Bencoder Parser",
        description:"Header-only bendcoder parser writtrn in C",
        language:["C"],
        github:"https://github.com/0x3c2f48415348434f4e3e/HashConParser",
        hasLink: false,
        link:''
    }
]
const Work = () =>{

    return(
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="coitainer mx-auto">
                <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.3, duration: 0.4, ease:"easeInOut"},}} className='grid grid-cols-1 md:gridd-col2 gap-[60px]'>
                    {projects.map((project,index)=>{
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <h2>Category: {project.category}</h2>
                            <h2>Title: {project.title}</h2>
                            <p>Description: {project.description}</p>
                            <p>Programming Languages: {project.language}</p>
                            <p>Github: <Link href={project.github} className='text-red-500'>Github</Link></p>
                            {project.hasLink && <><p>Link: </p><Link href={project.link}>Link</Link> </>}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Work;