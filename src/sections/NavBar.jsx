import { useState, useRef } from "react"
import NavButton from "../components/NavButton.jsx"
import NavLink from "../components/NavLink.jsx"

function NavBar ({sectionRefs}) {
    const [height, setHeight] = useState(0);
    const [expanded, setExpanded] = useState(false)
    const navExpand = useRef(null)

    const toggle = () => {
        const actualHeight = navExpand.current.offsetHeight
        const fullHeight = navExpand.current.scrollHeight
        const isFullHeight = actualHeight == fullHeight
        setHeight(isFullHeight ? 0 : fullHeight)
        setExpanded(!isFullHeight)
    }

    const scrollTo = (sect) => {
        return () => {
            toggle();
            sectionRefs[sect].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            });
        }
    }
 
    return (
        <nav className={`w-full p-2 text-white bg-blue flex flex-col-reverse xl:flex-row fixed top-0 z-10`}> 
            <nav 
                ref={navExpand} 
                style={{ height: height + 'px' }} 
                className="xl:min-h-min max-h-max xl:h-auto xl:flex xl:flex-row xl:flex-wrap xl:grow-0 overflow-hidden transition-height duration-300"
            >
                <NavButton onClick={scrollTo("home")}>Home</NavButton>
                <NavButton onClick={scrollTo("history")}>Work history</NavButton>
                <NavButton onClick={scrollTo("method")}>How I work with you</NavButton>
                <NavButton onClick={scrollTo("clients")}>Consultancy clients</NavButton>
                <NavButton onClick={scrollTo("qualifications")}>Qualifications</NavButton>
            </nav>
            <nav className="flex flex-wrap grow xl:justify-end whitespace-nowrap">
                <NavLink className="hidden xs:block grow-0" href="mailto:nicholas@page57.org">Email: nicholas@page57.org</NavLink>
                <NavLink className="grow-0" href="tel:07534630712">Tel: 07534 630712</NavLink>
                <nav className="grow p-3 text-right xl:hidden cursor-pointer" >
                    <button
                        tabIndex="0" 
                        onClick={toggle}
                    >
                        { expanded ? '\u00D7' : '\u2261' }
                    </button>
                </nav>
            </nav> 

        </nav>
        // <div className="flex fixed z-10 text-white w-full bg-blue p-3">

        //     <div className="grow">
                
        //     </div>
        //     <div className="lg:hidden block text-right col-span-1">
        //         <span onClick={() => toggle(!showing)}>&nbsp;&equiv;&nbsp;</span>
        //     </div>
        // </div>
    )
}

export default NavBar;