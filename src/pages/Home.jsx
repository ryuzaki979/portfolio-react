import React from "react";
import About from "../component/About";
import Skills from "../component/Skills";
const Home = ()=>{
    return <>
        <div className=" wrapper home">
            <div className="flex home__component">
            <About/>
            <Skills/>
            </div>
        </div>
    </>
}


export default Home;