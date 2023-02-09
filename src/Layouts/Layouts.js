import React from "react";

import Nav from "../Pages/Nav";
import Hero from "../Pages/Hero";
import Tentang from "../Pages/Tentang";
import Testimonial from "../Pages/Testimonial";
import Benefit from "../Pages/Benefit";
import Rekomendasi from "../Pages/Rekomendasi";
import Question from "../Pages/Question";
import Footer from "../Pages/Footer";

export default function Layout() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Tentang/> 
    <Testimonial/>
    <Benefit/>
    <Rekomendasi/>
    <Question/>
    <Footer/>
    </>
  );
}
