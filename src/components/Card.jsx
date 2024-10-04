function Card ({ heading, items }) {
    return (
        <div className={`flex flex-col break-inside-avoid-column break-after-column relative p-md bg-primary-700  border-accent border-4 rounded-3xl text-white text-center`}>
            <h3 className="text-2xl font-bold mb-sm">{heading}</h3>
            <ul>
                {Object.entries(items).map(([key, value]) => <li key={key} className="mb-sm last:mb-0">{value}</li>)}
            </ul>

        </div>
    )
}

export default Card;