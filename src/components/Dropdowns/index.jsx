import {DownArrowSVG} from "../../assets/svg"
export default function Dropdown({
    className = "",
    selected,
    children,
    onClick = () => {}
}){
    return <div className="relative">
        <button className={`flex gap-x-2 justify-between items-center py-1 px-2 uppercase font-medium border border-gray-400 ${className}`} {...{onClick}}>
                {selected.startIcon && <span>{selected.startIcon}</span>}
                {selected.label || "dropdown label"}
                <DownArrowSVG/>
        </button>
        <ul className="absolute w-full flex flex-col gap-y-2 bg-white">
            {children}
        </ul>
    </div>
}

Dropdown.Item = function DropdownItem(props){
    return <li className={`flex items-center gap-x-2 py-1 px-2 uppercase font-medium cursor-pointer ${props.className || ""}`}>
    {props.startIcon && <span>{props.startIcon}</span>}
    {props.children}
    {props.endIcon && <span>{props.endIcon}</span>}
</li>
}