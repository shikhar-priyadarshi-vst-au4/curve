export default function Button({
    className = "",
    startIcon,
    children,
    endIcon,
    onClick = () => {}
}){
    return <button className={`flex gap-x-2 justify-between items-center py-1 px-2 uppercase font-medium border border-gray-400 ${className}`} {...{onClick}}>
                {startIcon && <span>{startIcon}</span>}
                {children}
                {endIcon && <span>{endIcon}</span>}
            </button>
}