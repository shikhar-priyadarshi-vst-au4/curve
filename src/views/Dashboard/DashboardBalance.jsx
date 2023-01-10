import { ChrevonDownSVG, InfoSVG } from "../../assets/svg";
import FormInput from "../../components/Input";
import Button from "../../components/Buttons";

export default function DashboardBalance(){
    return <section className="px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-x-3 gap-y-4">
            <div className="col-span-full order-2 md:order-1 md:col-span-2 font-bold">Total Balances</div>
            <div className="col-span-full order-3 md:order-2 md:col-span-3 px-0 md:px-3 border-0 md:border-x border-gray-400 flex flex-col">
                <div className="font-bold">Total veCRV</div>
                <div>veCRV <span className="font-bold">0</span></div>
                <div className="mb-3">Locked for <span className="font-bold">0</span> days</div>
                <div className="mb-1">veCRV rewards: <span className="font-bold">0.00</span> 3crv <span className="inline-block w-5 fill-gray-400"><InfoSVG/></span></div>
                <Button className="bg-gray-400/70 text-gray-500 border-transparent">
                    <span className="mx-auto text-base font-bold capitalize">Claim LP rewards</span>
                </Button>
            </div>
            <div className="col-span-full order-1 md:order-3 md:col-span-7">
                <FormInput className="w-full md:w-3/4 ml-auto" placeholder="0X...">
                    <FormInput.EndIcon className="w-5 h-5"><ChrevonDownSVG/></FormInput.EndIcon>
                </FormInput>
            </div>
        </div>
    </section>
}