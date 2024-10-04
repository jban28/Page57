import Card from "../components/Card.jsx"
import Logo from "../assets/page57-logo-alt.png" 

function Home ({sectionRef}) {
    return (
        <section className="bg-gradient-to-b from-primary from 50% to-primary-700">
            <div ref={sectionRef} className="flow-root scroll-mt-navh lg:max-w-screen-lg w-fit mx-auto">
                <img className="sm:max-w-screen-sm my-lg px-lg" src={Logo} />
                <div className="md:max-w-screen-md my-lg px-lg ">
                    <h1 className="text-left text-white text-5xl font-bold font-helvetica">Workforce solutions tailored to your business</h1>
                </div>
                <p className="text-left md:text-left text-xl text-white font-helvetica my-lg px-lg" >
                        Hi, my name is Nicholas Percival and I am a Human Resources professional 
                        with over twenty five years' experience working with a range of organisations 
                        on a variety of workforce assignments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg m-lg">
                    <Card 
                        heading="Human Resources Services"
                        items={{
                            1: 'Management investigations',
                            2: 'Restructuring',
                            3: 'Redundancies',
                            4: 'Workforce policies and procedures',
                            5: 'General HR advice and support'
                        }}
                        >
                    </Card>
                
                    <Card 
                        heading="People Development Services"
                        items={{
                            1: 'Mediation [between individuals, ACAS trained]',
                            2: 'Management Coaching'
                        }}>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Home;