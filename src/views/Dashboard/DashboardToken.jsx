import {useState} from "react";
export default function DashboardToken(){
    const [selectType, setSelectType] = useState(true);
    return <section className="bg-zinc-200 my-5 px-5 md:px-10">
        <div className="hidden md:grid grid-cols-2 mx-10 px-4 pt-7 pb-4">
            <div className="font-bold">Total Daily Profits</div>
            <div className="font-bold">Claimable Tokens</div>
            <div className="grid grid-cols-2">
                <div>Base</div>
                <div>0</div>
                <div>CRV</div>
                <div>0</div>
                <div>USD Total</div>
                <div>$0</div>
            </div>
            <div className="grid grid-cols-2">
                <div>CRV</div>
                <div>0</div>
                <div>USD Total</div>
                <div>$0</div>
            </div>
        </div>
        <div className="grid md:hidden grid-cols-2 gap-y-2 py-3 text-base">
            <div className="col-span-full font-bold">Total Summary</div>
            <div className={`font-semibold text-gray-700 ${selectType ? 'underline underline-offset-4 decoration-2 decoration-gray-500' : ''}`}
                 onClick={() => setSelectType(true)}>
                Total Daily Profits
            </div>
            <div className={`font-semibold text-gray-700 ${!selectType ? 'underline underline-offset-4 decoration-2 decoration-gray-500' : ''}`}
                 onClick={() => setSelectType(false)}>
                 Claimable Tokens
            </div>
            {
                selectType ? 
                <div className="grid col-span-full grid-cols-2">
                    <div>Base</div>
                    <div className="justify-self-end">0</div>
                    <div>CRV</div>
                    <div className="justify-self-end">0</div>
                    <div>USD Total</div>
                    <div className="justify-self-end">$0</div>
                </div> :
                <div className="grid col-span-full grid-cols-2">
                    <div>CRV</div>
                    <div className="justify-self-end">0</div>
                    <div>USD Total</div>
                    <div className="justify-self-end">$0</div>
                </div>
            }
        </div>
    </section>
}