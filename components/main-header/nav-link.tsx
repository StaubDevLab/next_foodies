'use client'
import React from 'react';
import classes from "@/components/main-header/nav-link.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";


const NavLink = ({pathName, children}: {pathName: string, children: React.ReactNode}) => {
    const  path = usePathname()
    return (
        <Link href={pathName} className={`${path.startsWith(pathName)? classes.active : ''}`}>{children}</Link>
    );
};

export default NavLink;
