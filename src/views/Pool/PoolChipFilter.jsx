import Button from "../../components/Buttons"

export default function PoolChipFilter(){
    return <div className="hidden md:flex items-center gap-x-2">
        <Button className="bg-gray-400 text-gray-500 text-sm font-bold">ALL</Button>
        <Button className="bg-blue-600 text-white text-sm font-bold shadow-btn">USD</Button>
        <Button className="bg-blue-600 text-white text-sm font-bold shadow-btn">BTC</Button>
        <Button className="bg-blue-600 text-white text-sm font-bold shadow-btn">ETH</Button>
        <Button className="bg-blue-600 text-white text-sm font-bold shadow-btn">CRYPTO</Button>
        <Button className="bg-blue-600 text-white text-sm font-bold shadow-btn">OTHERS</Button>
    </div>
}