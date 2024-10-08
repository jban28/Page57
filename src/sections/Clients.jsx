function Clients () {
    const clientList = {
        1: "IMECHE",
        2: "Tower Hamlets GP Care Group",
        3: "Moorfields Eye Hospital",
        4: "Nobrow Ltd",
        5: "Enable 2",
        6: "SelfMadeHero",
        7: "Ailsapress",
        8: "Liminal11",
        9: "LymphCareUK",
        10: "East London Foundation NHS Trust",
        11: "Skylark Literary"
    }

    return (
        <section className="md:w-10/12 lg:w-8/12 mx-auto p-md sm:p-lg flex justify-center text-primary-700">
            <ul className="text-center list-inside md:columns-2 lg:columns-3 gap-x-lg">
                {Object.entries(clientList).map(([key, value]) => <li key={key} className="mb-sm last:mb-0">{value}</li>)}
            </ul>
        </section>
    )
}

export default Clients;