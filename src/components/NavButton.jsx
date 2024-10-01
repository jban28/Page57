function NavButton ({ children, className="", onClick}) {

    return (
        <nav 
            onClick={onClick}
            className={`${className} p-3 cursor-pointer`}
            tabIndex="0"
        >
            { children }
        </nav>
    )
}

export default NavButton;