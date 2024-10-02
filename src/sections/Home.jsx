import Card from "../components/Card.jsx"
import Logo from "../assets/logo.png" 

function Home ({sectionRef}) {
    return (
        <section ref={sectionRef} className="flex flex-col scroll-mt-navh bg-blue">
            <div className="flex flex-col md:grid md:grid-cols-header gap-2 md:justify-items-center items-center p-8 md:w-10/12 mx-auto pt-20">
                <div className="flex rounded-full bg-white aspect-square">
                    <img className="justify-self-end self-center px-8" src={Logo}></img>
                </div>
                <div>
                <h1 className="text-center md:text-left text-5xl text-white font-bold font-helvetica mx-8">Workforce solutions tailored to your business</h1>
                </div>
            </div>

            <p className="text-center md:text-left text-xl text-white font-helvetica mx-8 mt-16" >
                    Hi, my name is Nicholas Percival and I am a Human Resources professional 
                    with over twenty five years' experience working with a range of organisations 
                    on a variety of workforce assignments.
                </p>

            
            {/* <div className="flex items-center w-52 h-20 px-5 mx-auto">
                <img src={Logo}></img>
            </div> */}

            {/* <div className="p-8 mt-3 bg-yellow">
                <div className="md:w-10/12 mx-auto">
                    <h2 className="text-3xl mx-auto px-5 mb-5 text-center font-bold">Workforce solutions tailored to your business</h2>
                    <p className="text-center">
                    Hi, my name is Nicholas Percival and I am a Human Resources professional 
                    with over twenty five years' experience working with a range of organisations 
                    on a variety of workforce assignments.
                    </p>
                </div>
            </div>    */}

        
            <div className="grow xl:w-10/12 lg:w-full md:w-10/12 lg:grid lg:grid-cols-2 gap-5 mx-auto mb-3 mt-8 px-5 text-center">
                <Card color="black" bgColor="yellow" heading="Human resources services">
                    <ul className="list-disc list-inside text-left">
                        <li>Management investigations</li>
                        <li>Restructuring</li>
                        <li>Redundancies</li>
                        <li>Workforce policies and procedures</li>
                        <li>General HR advice and support</li>
                    </ul>
                </Card>
            
                <Card color="black" bgColor="yellow" heading="People development services">
                    <ul className="list-disc list-inside text-left">
                        <li>Mediation [between individuals, ACAS trained]</li>
                        <li>Management Coaching</li>
                    </ul>
                </Card>
            </div> 
        </section>
    )
}

export default Home;