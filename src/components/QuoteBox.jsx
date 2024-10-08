function QuoteBox ({ children, name, position }) {
    return (
        <div className="bg-primary">
            <div className="flex items-center h-full p-md sm:p-lg md:w-10/12 lg:w-8/12 mx-auto">
                <div className="bg-white text-primary-700 p-md rounded-lg w-full">
                    <div className="border-4 rounded-lg border-accent p-md">
                        <p className="text-left text-2xl mb-md">
                            <em>"{children}"</em><br/>
                        </p>
                        <p className="text-right">
                            <b className="text-base">- {name}</b><br/>
                            <span className="text-sm">{position}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;