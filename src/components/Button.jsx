function Button(props={children, color, href}) {
    const colors = {
        blue: 'bg-blue hover:bg-blue-dark text-white',
        yellow: 'bg-yellow hover:bg-yellow-dark',
      }
    return (
        <button href={props.href} className={`${colors[props.color]} rounded-full font-bold px-2 py-1 ${props.className}`}>{props.children}</button>
    )
}

export default Button;