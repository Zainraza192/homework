

import React from "react";
import "./page.css";

import { Header } from "../component/Header";
import { Dashboad } from "../component/Dashboad";
import { About } from "../component/About";
import { Knowledgebase } from "../component/Knowledgebase";
import { Knowledgebase2 } from "../component/Knowledgebase2";
import { Ourteam } from "../component/ourteam";
import { Testimonial } from "../component/testimonial";
import { PricingPlane } from "../component/PricingPlane";
import { GetInTouch } from "../component/Get-In-Touch";
import { Footer } from "../component/footer";

export default function App(){
    return (
        <div id="main-b">
        
        <Header />
        <Dashboad />
        <About />
        <Knowledgebase />
        <Knowledgebase2 />
        <Ourteam />
        <Testimonial />
        <PricingPlane />
        <GetInTouch />
        <Footer />

        </div>
    )
}
