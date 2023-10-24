import Logo from "./assets/logo.png" 
import Button from "./components/Button.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>  
      <Navbar/>   
      <div className="min-h-screen flex flex-col pt-14">
        <div className="flex items-center w-52 h-20 px-5 mx-auto">
          <img src={Logo}></img>
        </div>

        <div className="p-5 mt-3 bg-yellow">
          <div className="md:w-10/12 mx-auto">
            <h2 className="text-3xl mx-auto px-5 mb-5 text-center font-bold">Workforce solutions tailored to your business</h2>
            <p className="text-center">
              I am Nicolas Percival, a Human Resources professional with over twenty years' experience working with a range of organisations on a variety of workforce assignments.
            </p>
          </div>
        </div>
        

        <div className="grow grid grid-rows-3 md:hidden mt-5 py-5 px-5">
          <Button color="blue" className="my-3">My Services</Button>
          <Button color="blue" className="my-3">Style and Approach</Button>
          <Button color="blue" className="my-3">Qualifications and Experience</Button>
        </div>
      
        <div className="grow hidden md:block xl:w-10/12 lg:w-full md:w-10/12 lg:grid lg:grid-cols-3 gap-5 mx-auto mb-3 mt-8 px-5 text-center">
          <div className="flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-blue">
            <div className="grow text-white">
              <h3 className="text-center font-bold">My Services</h3>
              <ul className="list-disc list-inside text-left">
                <li>Mediation</li>
                <li>Management investigations</li>
                <li>Restructuring</li>
                <li>Redundancies</li>
                <li>Workforce policies and procedures</li>
                <li>Management Coaching</li>
                <li>General HR advice and support</li>
              </ul>
            </div>
            <Button color="yellow" className="mt-3 w-full rounded-full font-bold">See all my services</Button>
          </div>
          
          <div className="flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-blue">
            <div className="grow text-white">
              <h3 className="text-center font-bold">Style and Approach</h3>
              <ul className="list-disc list-inside text-left">
                <li>Free 30 minute initial meeting</li>
                <li>Friendly and informal style</li>
                <li>Flexible support tailored to your needs</li>
              </ul>
            </div>
            <Button color="yellow" className="mt-3 w-full rounded-full font-bold">How I work</Button>
          </div>
          
          <div className="flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-blue">
            <div className="grow text-white">
              <h3 className="text-center font-bold">Qualifications</h3>
              <ul className="list-disc list-inside text-left">
                <li>MCIPD</li>
                <li>MA Personal &amp; Development</li>
                <li>ACAS mediation entry level</li>
                <li>NHS Agenda for Change job evaluation</li>
                <li>Hay Job evaluation</li>
                <li>Aston University High Performing Teams</li>
                <li>Transformational Coaching diploma</li>
              </ul>
            </div>
            <Button color="yellow" className="mt-3 w-full rounded-full font-bold">My Experience</Button>
          </div>
          
        </div>
      </div>
      <div>
        <h1 className="py-8 text-5xl text-center font-bold bg-yellow">Style and Approach</h1>
        <div className="lg:grid lg:grid-cols-2">
          <div className="md:w-10/12 lg:w-full mx-auto order-last flex items-center p-8">
            <div className="border-4 rounded-lg border-yellow p-8">
              <p className="mb-3">
                Whilst valuing my professional experience and qualifications highly, my preference is to work in a friendly and relatively informal way. I like to work in partnership with clients to first clarify the issues or problems at hand.
              </p>
              <p className="mb-3">
                Depending on the presenting issues we might then generate options for consideration. These can be tested for your environment, taking account of your preferred working style, company culture and relevant workforce data.
              </p>
              <p className="mb-3">
                I'm happy to generate a range of options for you to consider, with detailed analysis of the data together with recommendations. I am also comfortable with a less formal approach and the degree of detail provided will depend on the issues you are keen to address.
              </p>
              <p>
                Alternatively, you may have a project that needs implementing. I am comfortable to work flexibly with you to identify your needs and to provide as much or as little support as you need to deliver the project.
              </p>
            </div>
          </div>
          <div className="flex items-center h-full bg-hex bg-center p-8 text-2xl text-center">
            <div className="md:w-10/12 mx-auto bg-white p-8 rounded-lg">
              <p className="border-4 rounded-lg border-yellow p-8">
                My belief is that to be effective any HR process or intervention must be designed for the particular context, taking account of culture and business/service needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App