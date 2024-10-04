function SectionHeader({children, sectionRef}) {
    return (
        <h1 ref={sectionRef} className="py-lg text-3xl text-center text-white font-bold bg-primary-700 scroll-mt-navh underline underline-offset-4 decoration-accent">{children}</h1>
    )
}

export default SectionHeader;