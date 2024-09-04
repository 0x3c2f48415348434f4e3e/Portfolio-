import Link from "next/link";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/0x3c2f48415348434f4e3e'},
    {icon: <FaLinkedinIn />, path: 'www.linkedin.com/in/esosa-enadeba-9b5474304'},
    {icon: <SiLeetcode />, path: 'https://leetcode.com/u/Hashcon/'},

]
const Socials = ({containerStyles, iconStyles})=>{
    return(
        <div className={containerStyles}>
            {socials.map((item, index) =>{
                return (<Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Socials;