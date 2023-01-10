import { ArrowDownSVG, InfoSVG } from "../../assets/svg";
// import { PoolMobileColumn } from "./PoolMobileColumn";
 
export const desktopTableColumns = [
    {
        columnLabel: <div className="text-left font-medium m-3" style={{minWidth: "250px"}}>Pool</div>,
        render: (row) => <div className="flex">
            <div className="grid grid-cols-2 auto-rows-min place-content-center p-3">
                {row?.pool?.poolList?.map((pool, index) => 
                    <img key={index} src={pool.src} className="w-5 h-5"/>)}
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">{row.pool.poolName}</div>
                <div className="text-sm">{row.pool.poolAddress}</div>
                <div className="flex flex-row gap-x-1 text-sm">{row.pool.poolList.map((pool, index) => <div key={index}>{pool.name}</div>)}</div>
            </div>
        </div>
    },
    {
        columnLabel: <div className="flex flex-col text-left mx-3 md:mx-0">
            <div className="flex items-end gap-x-1">Base vAPY <span className="inline-block w-4 fill-gray-400"><InfoSVG/></span></div>
            <div className="flex items-end gap-x-1 whitespace-nowrap">Rewards tAPR <span className="inline-block w-4 fill-gray-400"><InfoSVG/></span> (CRV+ Incentives)</div>
        </div>,
        render: (row) => <div>
            <div>{row.baseRewards.basevAPY}</div>
            <div className="flex flex-row items-center">
                <div>{row.baseRewards.rewardstAPR}</div>
                <div>{row.baseRewards.crv}</div>
            </div>
        </div>
    },
    {
        columnLabel: "Balance",
        render: (row) => <div className="text-center">{row.balance}</div>
    },
    {
        columnLabel: <div className="flex flex-col mx-3 md:mx-0">
            <div className="whitespace-nowrap">USD Profits</div>
            <div className="whitespace-nowrap">CRV Profits</div>
        </div>,
        render: (row) => <div className="text-center">{row.profits}</div>
    },
    {
        columnLabel: <div className="text-right pr-3 whitespace-nowrap mx-3 md:mx-0">Claimable Tokens</div>,
        render: (row) => <div className="text-right pr-3">{row.tokens}</div>
    },
]

// export const mobileTableColumns = [{
//     columnLabel: "",
//     render: (row) => <PoolMobileColumn row={row}/>
// },]

export const data = new Array(2).fill({
    pool: {
        poolName: "3pool",
        poolAddress: "0xbe...f1c7",
        poolList: [{
            name: "DAI",
            src: "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        }, {
            name: "USDC", 
            src: "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
        },{
            name: "USDT",
            src: "https://cdn.jsdelivr.net/gh/curvefi/curve-assets/images/assets/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
        }],
    },
    baseRewards: {
        basevAPY: "0.28%",
        rewardstAPR: "0.32%",
        crv: "0.80% CRV"
    },
    balance: "$45.8m",
    profits: "$545.8m",
    tokens: "$545.8m"
});