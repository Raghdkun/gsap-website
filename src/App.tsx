import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            {/* <div className="h-lvh bg-black"></div> */}
            <Cocktails />
        </main>
    );
}

export default App;
