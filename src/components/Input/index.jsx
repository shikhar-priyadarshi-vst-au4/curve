export default function FormInput(props){
    const {children, className="", ...rest} = props;
    return <>
        <div className="relative flex flex-col">
            {/* {startIcon && <div className="w-1/2 absolute top-1/2 left-2 -translate-y-1/2">{startIcon}</div>} */}
            <input {...rest} className={`border border-gray-700 text-xl px-1 py-3 rounded-none outline-none ${className}`}/>
            {/* {endIcon && <div className="w-1/2 absolute top-1/2 right-2 -translate-y-1/2">{endIcon}</div>} */}
            {children}
        </div>
    </>
}

FormInput.StartIcon = function({children, className=""}){
    return <div className={`absolute top-1/2 left-2 -translate-y-1/2 ${className}`}>{children}</div>
}

FormInput.EndIcon = function({children, className=""}){
    return <div className={`absolute top-1/2 right-2 -translate-y-1/2 ${className}`}>{children}</div>
}