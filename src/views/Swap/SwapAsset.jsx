import Card from "../../components/Cards";
import {SettingsSVG, ExchangeSVG} from "../../assets/svg";
import SwapAssetInput from "./SwapInput";
import Button from "../../components/Buttons";
import SwapAssetInfo from "./SwapAssetInfo";
import "./SwapAsset.css";

export default function SwapAsset(){
    return <section className="max-w-7xl mx-auto swapasset">
        <Card className="mx-auto my-7 bg-zinc-100 swapasset-card">
            <Card.Header className={'py-2 bg-zinc-200'}>
                <div className="grow font-bold text-center text-lg">Swap</div>
                <div className="w-10 h-10 flex items-center"><SettingsSVG/></div>
            </Card.Header>
            <div className="flex flex-col py-3 px-4">
                <SwapAssetInput placeholder="1"/>
                <div className="w-7 mx-auto my-3 fill-gray-400">
                    <ExchangeSVG/>
                </div>
                <SwapAssetInput placeholder="0.000812234309965432"/>
                <SwapAssetInfo/>
            </div>
            
            <Card.Footer>
                <Button className="grow mx-4 my-2 px-2 py-2 bg-blue-600 text-white swapasset-footer-btn">
                    <div className="mx-auto capitalize text-xl">Connect Wallet</div>
                </Button>
            </Card.Footer>
        </Card>
    </section>
}