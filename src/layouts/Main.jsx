import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Sidebar from "../components/Sidebars";

const browseLinks = [
    {
        label: 'Swap',
        url: '/curve/swap'
    },
    {
        label: 'Pools',
        url: '/curve/pools'
    },
    {
        label: 'Dashboard',
        url: '/curve/dashboard'
    }
]
export default function MainLayout(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return <>
        <Header browseLinks={browseLinks} onSidebar={setSidebarOpen}/>   
        <Sidebar isOpen={sidebarOpen} browseLinks={browseLinks} setOpen={setSidebarOpen}/>
        <Outlet/>
    </>
}