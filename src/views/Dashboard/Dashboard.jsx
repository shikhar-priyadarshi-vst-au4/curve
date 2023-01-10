import Card from "../../components/Cards";
import DashboardBalance from "./DashboardBalance";
import DashboardToken from "./DashboardToken";
import DashboardPool from "./DashboardPool";

export default function Dashboard(){
    return <section className="max-w-7xl mx-auto">
        <Card className="mx-auto my-7 bg-zinc-100 pb-4 pt-10">
            <DashboardBalance/>
            <DashboardToken/>
            <DashboardPool/>
        </Card>
    </section>
}