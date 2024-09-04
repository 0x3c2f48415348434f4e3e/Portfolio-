"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, selectValue} from '@/components/ui/select';

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

import {motion} from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title:"Phone",
        description: "(+44) 7532751114"
    },
    {
        icon: <FaEnvelope />,
        title:"Email",
        description: "benjaminenadeba@gmail.com"
    }
]

const Contact = () =>{
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duratioon:0.4, ease:"easeIn"},}} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-red-500">Lets Collaborate</h3>
                            <p>Some description</p>
                            <div className="grid grid-cols-1 md:gridd-col-2 gap-6">
                                <Input type="firstname" placeholder="Firstname"/>
                                <Input type="lastname" placeholder="Lastname"/>
                                <Input type="email" placeholder="Email address"/>
                                <Input type="phone" placeholder="Phone number"/>
                                <Textarea className="h-[200px]" placeholder="Type your message here"/>
                                <Button className="max-w-40">Send</Button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item,index)=>{
                                return(
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-red-500 roundded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p>{item.title}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;