function NavButton ({ children, className="", onClick}) {

    return (
        <nav 
            onClick={onClick}
            className={`${className} p-sm cursor-pointer hover:text-accent active:text-accent-600`}
            tabIndex="0"
        >
            { children }
        </nav>
    )
}

export default NavButton;