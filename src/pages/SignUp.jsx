import "./signUp.css";
import NavgationBar from "../components/NavgationBar";
import Form from "../components/Form";
import {Link} from "react-router-dom";
const SignUp = () => {

return (
    <>
         <NavgationBar />
         <div className={'sectionStartSignup'}>
             <Form
                mainHeaderTitle={'Sign Up'}
                formSTyle='signUp'
                name={''}
                email={''}
                APIendPoint={`register`}
                pathname={'/'}
                hasLocalStorage={true}
                BTNContent={'submit'}
                loginButton={<Link to={'/login'} className='btn-login'>login</Link>}
             />
         </div>
    </>
    );
};

export default SignUp;
