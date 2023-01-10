import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import {CurveSVG, HamburgerSVG} from "../../assets/svg";
import config from "../../config";

const CurvePageLinks = ({browseLinks = [], onSidebar = () => {}}) => {
    const location = useLocation();
    return <div className="flex gap-x-3 items-center">
        <div className="inline-flex md:hidden w-8" 
             onClick={() => onSidebar(true)}>
                <HamburgerSVG/>
        </div>
        <img className="w-7" src={config.brandImg}/>
        <div className="w-16 h-4"><CurveSVG/></div>
        {browseLinks.map((link, index) => 
        <Link key={index} to={link.url}>
            <div className={classNames(
                "hidden",
                "md:inline-flex",
                "text-sm",  
                "font-bold", 
                "py-2", 
                "px-2", 
                "rounded-sm", 
                "uppercase",
                "hover:text-blue-700", 
                "hover:bg-blue-100",
                {
                    "bg-blue-100": location.pathname == link.url,
                    "text-blue-700": location.pathname == link.url,
                })}>
                {link.label}
            </div>
        </Link>
        )}
    </div>
}
export default CurvePageLinks;