function QuoteBox ({ children, name, position }) {
    return (
        <div className="flex items-center h-full bg-hex bg-center p-8">
            <div className="md:w-10/12 mx-auto bg-white p-8 rounded-lg">
                <div className="border-4 rounded-lg border-yellow p-8">
                    <p className="text-left text-2xl">
                        <em>"{children}"</em><br/>
                    </p>
                    <p className="text-right">
                        <b className="text-base">- {name}</b><br/>
                        <span className="text-sm">{position}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;