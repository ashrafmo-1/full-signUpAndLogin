import { useState, } from "react";
import axios from "axios";
import NavgationBar from "../components/NavgationBar";
import {Link} from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [click, setClick] = useState(false); // click on btn submit
    const [emailTaken, setEmailTaken] = useState(''); // if mail is taken

    // clicked up from all validation inputs
    async function submit(event) {
        let onSubmit = true
        event.preventDefault();
        setClick(true);

        // validation errors types inputs
         password.length < 12 ? onSubmit = false : onSubmit = true;

        try {
            if( onSubmit ){
                await axios.post('http://127.0.0.1:8000/api/login', {
                    email: email,
                    password: password,
                }).then((response) => {
                    // condition login success
                    if (response.status === 200) {
                        window.localStorage.setItem('email', email)
                        console.log('login successful', response)
                    }
                });
            }
        }catch (err) {
            setEmailTaken(err.response.status)
        }
    }

    return (
        <>
        <NavgationBar />
        <div className={'sectionStartSignup'}>
            <div className="signUp">
                <form action="" onSubmit={submit}>
                    <label htmlFor="email"> email </label>
                    <input value={email} type="text" id="email" placeholder="enter email" onChange={(e) => { setEmail(e.target.value); }} />
                    {emailTaken === 422 && click ? <p style={{ color: "red" }}>mail is taken</p> : null }

                    <label htmlFor="password"> password </label>
                    <input value={password} type="Password" id="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 12 && click ? ( <p style={{ color: "red" }}> password must char 12 </p> ) : null}

                    <button type="submit" className="subBtn"> submit </button>
                    <Link to={'/register'} className='btn-register'> you'r have't any account </Link>
                </form>
            </div>
        </div>
        </>
            );
}

export default Login