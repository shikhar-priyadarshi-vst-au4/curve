import { useState } from "react";
import { ChrevonDownSVG, InfoSVG } from "../../assets/svg";

export const PoolMobileColumn = ({row}) => {
    const [show, setShow] = useState(false);
    return <div>
    <div className="flex justify-between items-center">
        <div className="flex items-center">
            <div className="grid grid-cols-2 auto-rows-min place-content-center p-3">
                {row?.pool?.poolList?.map((pool, index) => 
                    <img key={index} src={pool.src} className="w-5 h-5"/>)}
            </div>
            <div className="flex flex-col gap-y-1">
                <div className="text-sm">USD</div>
                <div className="font-bold text-xl">{row?.pool?.poolName}</div>
                <div className="flex flex-row gap-x-1 text-sm">{row?.pool?.poolList.map((pool, index) => <div key={index}>{pool.name}</div>)}</div>
            </div>
        </div>
        <div className="w-4 mr-3" onClick={() => setShow(!show)}>
            <ChrevonDownSVG/>
        </div>
    </div>
    {show && <div className="grid grid-cols-2 gap-y-3 px-3 py-2">
        <div>
            <div className="text-sm font-medium">Volume</div>
            <div className="text-gray-500">{row?.volume}</div>
        </div>
        <div>
            <div className="text-sm font-medium">TVL</div>
            <div className="text-gray-500">{row?.tvl}</div>
        </div>
        <div className="col-span-full">
            <div>
                <div className="text-sm font-medium">Base vARY <span className="inline-block w-4 fill-gray-400"><InfoSVG/></span></div>
                <div className="text-gray-500">{row?.baseRewards?.basevAPY}</div>
            </div>
            <div>
                <div className="text-sm font-medium">Rewards tAPR <span className="inline-block w-4 fill-gray-400"><InfoSVG/></span> (CRV + Incentives)</div>
                <div className="flex flex-row items-center">
                    <div className="text-gray-500">{row?.baseRewards?.rewardstAPR}</div>
                    <div className="text-gray-500">{row?.baseRewards?.crv}</div>
                </div>
            </div>
        </div>
    </div>}
</div>
}