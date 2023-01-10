import Card from "../../components/Cards";
import Table from "../../components/Table";
import PoolChipFilter from "./PoolChipFilter";
import PoolSearchFilter from "./PoolSearchFilter";
import PoolDropdownFilter from "./PoolDropdownFilter";
import {desktopTableColumns, mobileTableColumns, dummyData} from "./PoolConstants";
import "./Pools.css";

export default function Pools(){
    return <section className="max-w-7xl mx-auto">
        <Card className="mx-auto my-7 bg-white">
            <Card.Header className="flex-col items-stretch px-3">
                <PoolSearchFilter/>
                <div className="flex flex-col md:flex-row md:items-center justify-between my-3">
                    <PoolChipFilter/>
                    <div className="flex items-center gap-x-1">
                        <input type={"checkbox"}/>
                        <span className="font-medium text-sm">Hide very small pods</span>
                    </div>
                    <PoolDropdownFilter/>
                </div>
            </Card.Header>
            <div className="hidden md:block">
                <Table 
                    cols={desktopTableColumns} 
                    data={dummyData}/>
            </div>
            <div className="block md:hidden">
                <Table 
                    cols={mobileTableColumns} 
                    data={dummyData}/>
            </div>
        </Card>
    </section>
}