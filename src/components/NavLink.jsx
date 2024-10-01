function NavLink ({ children, href, className="" }) {
    return (
        <a href={href} className={`${className} p-3 cursor-pointer`}>
            { children }
        </a>
    )
}

export default NavLink;