"use client"

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from '@/components/MobileNav'
import { TypeAnimation } from "react-type-animation";
const Header = () =>{
    return(
        <header className="py-8 xl:py12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h3 className="text-4xl  font-semibold">I AM </h3>
                    <TypeAnimation
                        sequence={[
                            'Esosa',
                            1000,
                            '0x3c2f48415348434f4e3e',
                            1000
                        ]}
                        wrapper="h4"
                        speed={25}
                        style={{fontSize:'2.75rem', color:'rgb(248 113 113 / var(--tw-text-opacity))'}}
                        repeat={Infinity}
                        />
                </Link>


                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                    <Button>
                        Hire me
                    </Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>

        </header>
    )
}

export default Header;