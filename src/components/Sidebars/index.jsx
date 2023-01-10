import { Link } from "react-router-dom";
import Button from "../Buttons";
import config from "../../config";
import {CrossSVG, CurveSVG} from "../../assets/svg";
import "./sidebar.css";

export default function Sidebar(props){
    const {isOpen, setOpen, browseLinks} = props;
    const onOutsideClick = () => setOpen(false);

    if(isOpen) 
    return <>
        <div className="z-40 fixed bg-black/50 bg-blend-overlay select-none inset-0 overflow-hidden" onClick={onOutsideClick}/>
        <aside className="z-50 bg-white fixed w-3/4 inset-0 flex flex-col px-4 py-3 sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-2">
                    <img className="w-7" src={config.brandImg}/>
                    <div className="w-16 h-4"><CurveSVG/></div> 
                </div>
                <div className="w-6 fill-gray-400" onClick={onOutsideClick}>
                    <CrossSVG/>
                </div>
            </div>
            <ul className="flex flex-col mt-7 mb-5 pb-5 gap-y-2 font-bold text-lg border-b">
                <li className="cursor-pointer">
                    <Link to="/curve/swap" onClick={() => setOpen(false)}>Swap</Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/curve/pools" onClick={() => setOpen(false)}>Pools</Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="/curve/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                </li>
                <li>Visit Old UI</li>
                <li>Governance</li>
                <li>Community</li>
                <li>Resources</li>
                <li>Mode</li>        
            </ul>
            <div className="flex flex-col">
                <div className="font-bold text-xl">TVL</div>
                <div className="text-base">$3,585,398,116</div>
            </div>
            <div className="flex flex-col my-3">
                <div className="font-bold text-xl">Daily Volume</div>
                <div className="text-base">$182,645,430</div>
            </div>
            <Button className="my-3 shadow-md font-bold py-2 connect-btn hover:text-blue-700 hover:bg-blue-100 hover:border-blue-600">
                Connect Wallet
            </Button>
        </aside>
    </>
    return null;
}