function Card ({ children, heading, bgColor, color }) {
    return (
        <div className={`flex flex-col break-inside-avoid-column break-after-column relative p-5 mb-5 bg-${bgColor}`}>
            <div className={`grow text-${color}`}>
                <h3 className="text-lg text-center font-bold">{heading}</h3>
                {children}
            </div>
        </div>
    )
}

export default Card;