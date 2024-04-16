import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/ourpractice";
import OurServices from "../../components/ourservices";
import Footer from "../../components/footer";



export default function Homepage() {
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <OurServices/>
        <Footer />
        </>
    )
}