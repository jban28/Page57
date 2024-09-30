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

        <div className="p-8 mt-3 bg-yellow">
          <div className="md:w-10/12 mx-auto">
            <h2 className="text-3xl mx-auto px-5 mb-5 text-center font-bold">Workforce solutions tailored to your business</h2>
            <p className="text-center">
              I am Nicolas Percival, a Human Resources professional with over twenty years' experience working with a range of organisations on a variety of workforce assignments.
            </p>
          </div>
        </div>        
        
        {/* <div className="grow grid grid-rows-3 md:hidden mt-5 py-5 px-5">
          <Button color="blue" className="my-3">Human resources services</Button>
          <Button color="blue" className="my-3">People development services</Button>
          <Button color="blue" className="my-3">My story</Button>
        </div> */}
      
        <div className="grow xl:w-10/12 lg:w-full md:w-10/12 lg:grid lg:grid-cols-2 gap-5 mx-auto mb-3 mt-8 px-5 text-center">
          <div className="flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-blue">
            <div className="grow text-white">
              <h3 className="text-lg text-center font-bold">Human resources services</h3>
              <ul className="list-disc list-inside text-left">
                <li>Management investigations</li>
                <li>Restructuring</li>
                <li>Redundancies</li>
                <li>Workforce policies and procedures</li>
                <li>General HR advice and support</li>
              </ul>
            </div>
            {/* <Button color="yellow" className="mt-3 w-full rounded-full font-bold">See all my HR services</Button> */}
          </div>
          
          <div className="flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-blue">
            <div className="grow text-white">
              <h3 className="text-lg text-center font-bold">People development services</h3>
              <ul className="list-disc list-inside text-left">
                <li>Mediation [between individuals, ACAS trained]</li>
                <li>Management Coaching</li>
                {/*<li>Free 30 minute initial meeting</li>
                <li>Friendly and informal style</li>
  <li>Flexible support tailored to your needs</li>*/}
              </ul>
            </div>
            {/* <Button color="yellow" className="mt-3 w-full rounded-full font-bold">See all my people development services</Button> */}
          </div>

          {/* <div className="flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-blue">
            <div className="grow text-white">
              <h3 className="text-center font-bold">My story</h3>
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
          </div>   */}
        </div> 

        <h1 className="py-8 text-3xl text-center font-bold bg-yellow">Work history</h1>
        <div>{/* <div className="lg:grid lg:grid-cols-2"> */}
          <div className="md:w-10/12 lg:w-8/12 mx-auto order-last flex items-center p-8">
            <div>{/*</div><div className="border-4 rounded-lg border-yellow p-8">*/}
              {/* <h2 className="text-3xl text-center mb-3"><em>Work history</em></h2> */}
              <p className="mb-3">
                My HR career includes nearly twenty years working in a variety of HR roles with not for
                profit organisations. After working in social services and education departments at Kent
                County Council and Hammersmith &amp; Fulham Council, and a period with an HIV charity in
                West London, I joined the NHS in early 2001. The NHS is a complex and dynamic system and
                I worked in a number of different roles across community health, acute and mental health
                before deciding to work freelance in March 2016.
              </p>
              <p>
                Working freelance requires the ability to quickly build trust and to confidently explore with a
                client the presenting issues, and to uncover the underlying problems too. I enjoy this
                exploration with clients and analysing what's going on, and then moving to developing
                solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center h-full bg-hex bg-center p-8">
            <div className="md:w-10/12 mx-auto bg-white p-8 rounded-lg">
              <div className="border-4 rounded-lg border-yellow p-8">
                <p className="text-left text-2xl">
                  <em >"A quote from a client would look good here"</em><br/>
                </p>
                <p className="text-right">
                  <b className="text-base">- Firstname Surname</b><br/>
                  <span className="text-sm">Position @ Company</span>
                </p>
              </div>
            </div>
          </div>

          <h1 className="py-8 text-3xl text-center font-bold bg-yellow">How I work with you</h1>
          <div className="md:w-10/12 lg:w-8/12 mx-auto order-last flex items-center p-8">
            <div>{/*</div><div className="border-4 rounded-lg border-yellow p-8">*/}
              {/* <h2 className="text-3xl text-center mb-3"><em>How I work with you?</em></h2> */}
              <p className="mb-3">
                My belief is that to be effective HR interventions must be designed for the particular
                context, taking account of culture and business/service needs.
              </p>
              <p className="mb-3">
                Whilst valuing my professional experience and qualifications highly, my preference is to
                work in a friendly and relatively informal way. I like to work in partnership with clients to
                first clarify the issues or problems at hand.
              </p>
              <p className="mb-3">
                Depending on the issues we might then generate options for consideration. These can be
                tested for your environment, taking account of your preferred working style, company
                culture and relevant workforce data.
              </p>
              <p className="mb-3">
                I'm happy to generate a range of options for you to consider, with detailed analysis of the
                data together with recommendations. I am also comfortable with a less formal approach
                and the degree of detail provided will depend on the issues you are keen to address.
              </p>
              <p>
                Alternatively, you may have a project that needs implementing. I am comfortable to work
                flexibly with you to identify your needs and to provide as much or as little support as you
                need to deliver the project.
              </p>
            </div>
          </div>
          <div className="flex items-center h-full bg-hex bg-center p-8">
            <div className="md:w-10/12 mx-auto bg-white p-8 rounded-lg">
              <div className="border-4 rounded-lg border-yellow p-8">
                <p className="text-left text-2xl">
                  <em >"A quote from a client would look good here"</em><br/>
                </p>
                <p className="text-right">
                  <b className="text-base">- Firstname Surname</b><br/>
                  <span className="text-sm">Position @ Company</span>
                </p>
              </div>
            </div>
          </div>

          <h1 className="py-8 text-3xl text-center font-bold bg-yellow">Consultancy clients</h1>
          <div className="md:w-10/12 lg:w-8/12 mx-auto order-last flex items-center p-8">
            <div>{/*</div><div className="border-4 rounded-lg border-yellow p-8">*/}
              {/* <h2 className="text-3xl text-center mb-3"><em>How I work with you?</em></h2> */}
              <p className="mb-3">
                I have worked with clients including:
                <ul className="list-disc list-inside ml-5">
                  <li>IMECHE</li>
                  <li>Tower Hamlets GP Care Group</li>
                  <li>Moorfields Eye Hospital</li>
                  <li>Nobrow Ltd</li>
                  <li>Enable 2</li>
                  <li>SelfMadeHero</li>
                  <li>Ailsapress</li>
                  <li>Liminal11</li>
                  <li>LymphCareUK</li>
                  <li>East London Foundation NHS Trust</li>
                  <li>Skylark Literary</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="flex items-center h-full bg-hex bg-center p-8">
            <div className="md:w-10/12 mx-auto bg-white p-8 rounded-lg">
              <div className="border-4 rounded-lg border-yellow p-8">
                <p className="text-left text-2xl">
                  <em >"A quote from a client would look good here"</em><br/>
                </p>
                <p className="text-right">
                  <b className="text-base">- Firstname Surname</b><br/>
                  <span className="text-sm">Position @ Company</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App