import {Link} from "react-router-dom";
const TopBar = () => {
    return (
        <div className={'NavgationTop'}>
            <div className={'top-bar container'}>
                <h4>Dashboard</h4>
                <Link className={'goingSiteBtn'} to={'/'} >Home</Link>
            </div>
        </div>
    )
}
export default TopBar;