function Card ({ children, heading }) {
    return (
        <div className={`flex flex-col break-inside-avoid-column break-after-column relative p-5 bg-primary-700`}>
            <div className={`grow text-white`}>
                <h3 className="text-lg text-center font-bold">{heading}</h3>
                {children}
            </div>
        </div>
    )
}

export default Card;