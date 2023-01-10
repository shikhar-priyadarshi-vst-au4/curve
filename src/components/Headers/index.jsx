import PrimaryHeader from "./Primary";
import SecondaryHeader from "./Secondary";
import "./Header.css";

export default function Header({
    totalDeposits,
    dailyVolume,
    browseLinks = [],
    onSidebar = () => {},
    onSwitchProtocol = () => {},
    onConnectVolume = () => {}
}){

    return <nav className="header sticky top-0 z-30 bg-white font-sans">
        <PrimaryHeader {...{totalDeposits, dailyVolume}}/>        
        <SecondaryHeader {...{browseLinks, onSidebar, onSwitchProtocol, onConnectVolume}}/>
    </nav>
}