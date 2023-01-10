import { useState } from "react";
import Button from "../../components/Buttons";
import { DownArrowSVG, RadioButtonSVG, UpArrowSVG, DownArrow2SVG } from "../../assets/svg";
import PoolFullOverlay from "./PoolFullOverlay";

const popupState = {
    all: 'ALL',
    volume: 'VOLUME'
}

export default function PoolDropdownFilter(){
    const [popup, setPopup] = useState(null);
    return <div className="flex md:hidden flex-row gap-x-2 mt-3 mb-2">
        <Button endIcon={<DownArrowSVG/>} onClick={() => setPopup(popupState.all)}>ALL</Button>
        <Button endIcon={<DownArrowSVG/>} onClick={() => setPopup(popupState.volume)}>Volume (desc)</Button>
        {popup == popupState.all && 
        <PoolFullOverlay heading={'Filter By'} onClose={() => setPopup(false)}>
            <div className="flex flex-col gap-y-3 my-3">
                <div className="flex flex-row items-center gap-x-2">
                    <RadioButtonSVG/>
                    <span>ALL</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <RadioButtonSVG/>
                    <span>USD</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <RadioButtonSVG/>
                    <span>BTC</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <RadioButtonSVG/>
                    <span>ETH</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <RadioButtonSVG/>
                    <span>Crypto</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <RadioButtonSVG/>
                    <span>Others</span>
                </div>
            </div>
        </PoolFullOverlay>}
        {popup == popupState.volume && 
        <PoolFullOverlay heading={'Type'} onClose={() => setPopup(false)}>
            <div className="flex flex-row items-center justify-end gap-x-2 mb-2 mt-6">
                <div>ASC</div>
                <div>DESC</div>
            </div>
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Pool</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Base vAPY</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Factory</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Type</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Rewards tAPR (CRV)</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Rewards tAPR (Incentives)</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">TVL</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="font-bold text-lg">Volume</div>
                    <div className="flex flex-row items-center">
                        <div className="w-10 border border-gray-400 p-1"><UpArrowSVG/></div>
                        <div className="w-10 border border-gray-400 p-1"><DownArrow2SVG/></div>
                    </div>
                </div>
            </div>
        </PoolFullOverlay>}
    </div>
}