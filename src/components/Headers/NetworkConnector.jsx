import { useState } from "react";
import Button from "../Buttons";
import Dropdown from "../Dropdowns";
import {EthSVG} from "../../assets/svg"

const blockchainNetworks = new Array(10).fill({
    label: 'Ethereum',
    startIcon: <EthSVG/>
});

const NetworkConnectors = ({
        // onSwitchProtocol = () => {}, 
        onConnectVolume = () => {}
    }) => {

    const [selected, setSelected] = useState({
        id: null,
        isOpen: false,
        value: blockchainNetworks[0],
        options: blockchainNetworks
    });

    const onDropdown = () => setSelected({...selected, isOpen: !selected.isOpen});

    return <div className="text-sm flex gap-x-3">
    <Dropdown className="py-2 font-bold hover:text-blue-700 hover:bg-blue-100 hover:border-blue-600" selected={selected.value} onClick={onDropdown}>
        {selected.isOpen && 
         selected?.options?.map((network, index) => 
            <Dropdown.Item
                key={index} 
                className="px-3 py-2 font-bold hover:text-blue-700 hover:bg-blue-100" 
                startIcon={network.startIcon}>
                    {network.label}
            </Dropdown.Item>)}
    </Dropdown>
    <Button 
        className="hidden md:inline-flex shadow-md font-bold py-2 connect-btn hover:text-blue-700 hover:bg-blue-100 hover:border-blue-600" 
        onClick={onConnectVolume}>
            Connect Wallet
    </Button>
</div>
}

export default NetworkConnectors;
