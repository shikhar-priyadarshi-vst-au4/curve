import FormInput from "../../components/Input";
import {SearchSVG, CrossSVG} from "../../assets/svg";

export default function PoolSearchFilter(){
    return <section className="grow py-3">
        <FormInput 
            className="pl-9 md:pl-14" 
            placeholder="Search by pool name, pool address, token name or token address">
            <FormInput.StartIcon className="w-6 fill-gray-400">
                <SearchSVG/>
            </FormInput.StartIcon>
            <FormInput.EndIcon className="w-6 fill-gray-400">
                <CrossSVG/>
            </FormInput.EndIcon>
        </FormInput>
    </section>
}