import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SidebarComponent from "../components/SidebarComponent";

export default function DefaultLayout() {
    return (<>
        <HeaderComponent />
        <div className="d-flex">
            <SidebarComponent />
            <Outlet />
        </div>
        <FooterComponent />
    </>)
}