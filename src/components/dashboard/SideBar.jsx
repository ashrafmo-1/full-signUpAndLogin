import {NavLink, Link} from "react-router-dom";
const SideBar = () => {
    return (
        <div className={'sideBar'}>
            <NavLink activeClassName={'active'} to={'/dashboard/users'}  className={'side-links-item'} > users </NavLink>
            <NavLink to={'/dashboard/user/create'}  className={'side-links-item'}> new users </NavLink>
        </div>
    )
}
export default SideBar