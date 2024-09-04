"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import {motion} from 'framer-motion'

const services = [
    {
    num:1,
    title:'Web Development',
    description:'To Do'
    },
    {
        num:2,
        title:'Mobile Development',
        description:'To Do'
    },
    {
        num:3,
        title:'Game Development',
        description:'To Do'
    },
    {
        num:4,
        title:'Embeeded system Development',
        description:'To Do'
    }
]

const Services = () =>{
    return(
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="coitainer mx-auto">
                <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.3, duration: 0.4, ease:"easeInOut"},}} className='grid grid-cols-1 md:gridd-col2 gap-[60px]'>
                    {services.map((service,index)=>{
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div>
                            </div>
                            <h2>Service: {service.title}</h2>
                            <p>Description: {service.description}</p>
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;