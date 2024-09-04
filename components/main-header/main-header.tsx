import React from 'react';
import Link from "next/link";
import logoImg from '../../assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "@/components/main-header/nav-link";

const MainHeader = () => {

    return (
        <>
            <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href={"/public"}>
                <Image src={logoImg} alt={"A plate with food on it"}/>
                Nextlevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink pathName={"/meals"}>Meals</NavLink>
                    </li>
                    <li>
                        <NavLink pathName={"/community"}>Community</NavLink>                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default MainHeader;
