import NavBar from "./sections/NavBar.jsx"
import Home from "./sections/Home.jsx"
import WorkHistory from "./sections/WorkHistory.jsx"
import Method from "./sections/Method.jsx"
import Clients from "./sections/Clients.jsx"
import Qualifications from "./sections/Qualifications.jsx"
import SectionHeader from "./components/SectionHeader.jsx"
import QuoteBox from "./components/QuoteBox.jsx"
import Footer from "./sections/Footer.jsx"
import { useRef } from "react"

function App() {
  const sectHome = useRef(null);
  const sectHistory = useRef(null);
  const sectMethod = useRef(null);
  const sectClients = useRef(null);
  const sectQuals = useRef(null)
  return (
    <>  
      <NavBar sectionRefs={{home: sectHome, history: sectHistory, method: sectMethod, clients: sectClients, qualifications: sectQuals}}/>

      <Home sectionRef={sectHome}/>

      <SectionHeader sectionRef={sectHistory}>Work History</SectionHeader>
      <WorkHistory/>

      <SectionHeader sectionRef={sectMethod}>How I work with you</SectionHeader>
      <Method/>
      
      <SectionHeader sectionRef={sectClients}>Consultancy Clients</SectionHeader>
      <Clients/>

      {/* <QuoteBox name="Firstname Surname" position="Position @ Company">
        A quote from a client would look good here?
      </QuoteBox> */}

      <SectionHeader sectionRef={sectQuals}>Qualifications</SectionHeader>
      <Qualifications/>

      <Footer/>
    </>
  )
}

export default App