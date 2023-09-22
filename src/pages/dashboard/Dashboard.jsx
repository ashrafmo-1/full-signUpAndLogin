import TopBar from "../../components/dashboard/TopBar";
import SideBar from "../../components/dashboard/SideBar";
import './dashboard.css'
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
           <TopBar />
            <div style={{display: 'flex'}}>
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard