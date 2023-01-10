import Table from "../../components/Table";
import {desktopTableColumns, data} from "./DashboardConstants";
export default function DashboardPool(){
    return <section className="my-2 px-4 md:my-8 md:px-8 overflow-auto">
        <Table cols={desktopTableColumns} {...{data}}/>
    </section>
}