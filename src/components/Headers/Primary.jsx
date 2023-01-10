import {TwitterSVG, GithubSVG, DiscordSVG, TelegramSVG, SunSVG} from "../../assets/svg";
export default function PrimaryHeader({
    totalDeposits = '$3,613,715,490',
    dailyVolume = '$165,288,253'
}){
    return <div className="hidden md:block border-b border-gray-400">
        <div className="max-w-1272-px mx-auto py-3 px-5 text-sm flex justify-between items-center antialiased">
            <div className="flex gap-x-2 font-bold">
                <div>Total Deposits:&nbsp;<span className="font-bold tracking-tighter">{totalDeposits}</span></div>
                <div className="mx-2">Daily Volume:&nbsp;<span className="font-bold tracking-tighter">{dailyVolume}</span></div>
            </div>
            <div className="flex gap-x-3 items-center font-bold text-sm">
                <div className="hover:text-blue-700 cursor-pointer">Visit Old UI</div>
                <div className="hover:text-blue-700 cursor-pointer">Governance</div>
                <div className="w-5 mx-3 hover:fill-blue-700 hover:bg-blue-100 cursor-pointer"><SunSVG/></div>
                <div className="w-4 mx-3 hover:fill-blue-700 hover:bg-blue-100 cursor-pointer"><TwitterSVG/></div>
                <div className="w-4 hover:fill-blue-700 hover:bg-blue-100 cursor-pointer"><TelegramSVG/></div>
                <div className="w-4 mx-3 hover:fill-blue-700 hover:bg-blue-100 cursor-pointer"><GithubSVG/></div>
                <div className="w-4 hover:fill-blue-700 hover:bg-blue-100 cursor-pointer"><DiscordSVG/></div>
            </div>
        </div>
    </div>
}