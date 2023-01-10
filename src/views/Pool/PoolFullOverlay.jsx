import { CrossSVG } from "../../assets/svg";

export default function PoolFullOverlay(props){
    return <div className="md:hidden fixed inset-0 z-50 bg-zinc-100 p-3">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{props?.heading}</div>
                <div className="w-8 fill-gray-500" onClick={props?.onClose}><CrossSVG/></div>
            </div>
            <div className="my-2">
                {props?.children}
            </div>
    </div>
}