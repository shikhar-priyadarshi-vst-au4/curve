import Button from "../../components/Buttons";
import {EthSVG} from "../../assets/svg"
export default function SwapAssetInput(props){
    return <>
        <div className="relative flex flex-col">
            <input {...props} className="border border-gray-700 text-xl px-1 py-3 rounded-none outline-none"/>
            <Button
                startIcon={<EthSVG/>} 
                className="absolute right-0 swapasset-btn py-2">
                <div className="mx-5 font-bold text-base">OXBTC</div>
            </Button>
        </div>
        <small>~ $1.00</small>
    </>
}