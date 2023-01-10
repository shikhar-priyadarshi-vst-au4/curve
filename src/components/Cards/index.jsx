export default function Card({className= "", children}){
    return <div className={`flex flex-col bg-white ${className}`}>
        {children}
    </div>
}

Card.Header = function CardHeader({className="", children}){
    return <div className={`flex items-center ${className}`}>{children}</div>
}

Card.Footer = function CardFooter({className="", children}){
    return <div className={`flex flex-column ${className}`}>
        {children}
    </div>
}