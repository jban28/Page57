import { useRef } from "react"
import { useState } from "react"

function Navbar () {
    const [showing, setShowing] = useState(false)

    const toggle = (value) => {
        setShowing(!showing)
    }
 
    return (
        <div className="grid lg:grid-cols-2 grid-cols-6 fixed z-10 text-white w-full bg-blue p-3">
            <nav className={`${showing && "h-48"} ${!showing && "h-0 "} transition-[height] motion-reduce:transition-none duration-700 overflow-hidden fixed top-12 w-full  bg-blue lg:h-auto lg:transition-none lg:relative lg:top-0 lg:block lg:relative`}>
                <span onClick={() => toggle(false)} className="block lg:inline">Home</span>
                <span onClick={() => toggle(false)} className="block lg:inline">Services</span>
                <span onClick={() => toggle(false)} className="block lg:inline">Approach</span>
                <span onClick={() => toggle(false)} className="block lg:inline">Qualifications</span>
                <span onClick={() => toggle(false)} className="block lg:inline">Pricing</span>
            </nav>
            <div className="lg:text-right lg:col-span-1 col-span-5">
                <span className="hidden sm:inline">Email: nicholas@page57.org&nbsp; &nbsp; </span><span>Tel: 07534 630712</span>
            </div>
            <div className="lg:hidden block text-right col-span-1">
                <span onClick={() => toggle(!showing)}>&nbsp;&equiv;&nbsp;</span>
            </div>
        </div>
    )
}

export default Navbar;