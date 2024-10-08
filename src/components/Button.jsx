function Button(props={children, color, href}) {
    const colors = {
        blue: 'bg-primary hover:bg-primary-700 text-primary-100',
        yellow: 'bg-accent hover:bg-accent-700',
      }
    return (
        <button href={props.href} className={`${colors[props.color]} rounded-full font-bold px-2 py-1 ${props.className}`}>{props.children}</button>
    )
}

export default Button;