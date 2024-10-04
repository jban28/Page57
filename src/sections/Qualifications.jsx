function Qualifications () {
    const qualList = {
        1: "MCIDP",
        2: "Greenwich University MA Personal & Development",
        3: "ACAS one-to-one Mediation",
        4: "Level 5 Diploma in Transformational Coaching",
        5: "Aston University High Performing Teams trained",
        6: "NHS Agenda for Change job evaluation trained",
        7: "Hay Job evaluation trained"
    }

    return (
        <section className="p-md sm:p-lg mx-auto md:w-10/12 lg:w-8/12 text-primary-700">
            <ul className="text-center list-inside gap-x-lg">
                {Object.entries(qualList).map(([key, value]) => <li key={key} className="mb-sm last:mb-0">{value}</li>)}
            </ul>
        </section>
    )
}

export default Qualifications;