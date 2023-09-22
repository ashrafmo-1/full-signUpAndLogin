import NavgationBar from "../components/NavgationBar";
import {Link} from "react-router-dom";
import './home.css'
export const Home = () => {
    return (
        <div>
                <NavgationBar />
            <div className={'home-content'}>
                <div className={'home-information'}>
                    <h1 className={'header-text'}>register & login, users management</h1>
                    <p className={'desc-text'}>i'am used back-end php => laravel <br /> used some apis to make this site and we will update any problems, pugs</p>
                </div>
                {localStorage.getItem('email') ? <Link to={'/dashboard'} className={'dashboard-Link'}> go to  dashboard </Link> : null}
            </div>
        </div>
    )
}