import {InfoSVG, GearSVG} from "../../assets/svg";

export default function SwapAssetInfo(){
    return <div className="text-sm grid grid-cols-2 gap-y-2 mb-2 mt-4">
        <div>Exchange rate (incl. fees):</div>
        <div className="grid grid-cols-1 place-items-end">
            <div className="flex flex-row justify-end items-end gap-x-2">
                <div className="text-xs">USDT/ETH</div>
                <div className="font-bold">0.00081223</div>
            </div>
            <div className="flex flex-row justify-end items-center gap-x-2">
                <div className="text-xs">ETH/USDT</div>
                <div className="font-bold">1,231.17182779</div>
            </div>
        </div>
        <div>Price Impact:</div>
        <div className="flex items-center gap-x-1 justify-self-end">
            <span>0%</span>
            <span className="w-4 fill-gray-500"><InfoSVG/></span>
        </div>
        <div>Trade routed through</div>
        <div className="col-span-full">
            <div className="swapasset-stepper">
                <div className="swapasset-step font-bold underline decoration-1 decoration-slate-800">4pool</div>
                <div className="swapasset-step font-bold underline decoration-1 decoration-slate-800">ETH/FRAX</div>
            </div>
        </div>
        <div>Slippage tolerance:</div>
        <div className="flex items-center gap-x-1 justify-self-end">
            <span>0.1%</span>
            <span className="w-4 fill-gray-500"><GearSVG/></span>
        </div>
    </div>
}