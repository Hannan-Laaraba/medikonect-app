import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/ourpractice";
import OurServices from "../../components/ourservices";
import Footer from "../../components/footer";
import CallToAction from "../../components/calltoaction";
import Specialties from "../../components/specialties";
import OurAdvantages from "../../components/ouradvantages";
import OurExperts from "../../components/ourexperts";



export default function Homepage() {
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <OurServices/>
        <CallToAction />
        <Specialties/>
        <OurAdvantages/>
        <OurExperts />
        <Footer />
        </>
    )
}