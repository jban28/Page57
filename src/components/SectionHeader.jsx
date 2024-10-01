function SectionHeader({children, sectionRef}) {
    return (
        <h1 ref={sectionRef} className="py-8 text-3xl text-center font-bold bg-yellow scroll-mt-navh">{children}</h1>
    )
}

export default SectionHeader;