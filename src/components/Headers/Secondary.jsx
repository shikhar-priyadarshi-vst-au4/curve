import CurvePageLinks from "./CurvePageLinks";
import NetworkConnectors from "./NetworkConnector";
export default function SecondaryHeader({
    browseLinks = [],
    onSidebar = () => {},
    onSwitchProtocol = () => {}, 
    onConnectVolume = () => {}
}){ 
    return <div className="flex max-w-1272-px mx-auto justify-between items-center p-5 border-b border-gray-400">
        <CurvePageLinks {...{browseLinks, onSidebar}}/>            
        <NetworkConnectors {...{onSwitchProtocol, onConnectVolume}}/>
    </div>
}