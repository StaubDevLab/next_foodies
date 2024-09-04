import React from 'react';
import Link from "next/link";
import logoImg from '../../assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
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
                        <Link href={"/meals"}>Meals</Link>
                    </li>
                    <li>
                        <Link href={"/community"}>Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default MainHeader;
