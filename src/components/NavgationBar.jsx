import {Link} from "react-router-dom";
const NavigationBar = () => {
     const clearStorage = () => {
         localStorage.removeItem('email');
         window.location.pathname = '/';
    }
    return (
        <header>
            <div className="container" style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                    <Link to={'/'} className={'nav-brand'}>full stack</Link>
                <nav className={'nav'}>
                    {localStorage.getItem('email') ?
                        <div className={'logoutBtn'} onClick={clearStorage}>log out</div> :
                        <>
                            <Link to={'/register'} className='login-register_btn'>login/register</Link>
                        </>
                    }
                </nav>
            </div>
        </header>
    )
}
export default NavigationBar