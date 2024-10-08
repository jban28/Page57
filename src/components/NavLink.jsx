function NavLink ({ children, href, className="" }) {
    return (
        <a href={href} className={`${className} p-sm cursor-pointer hover:text-accent active:text-accent-600`}>
            { children }
        </a>
    )
}

export default NavLink;