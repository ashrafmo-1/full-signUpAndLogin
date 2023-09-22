import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Form = (props) => {
const [name, setName] = useState(props.name);
const [email, setEmail] = useState(props.email);
const [password, setPassword] = useState("");
const [passwordRepeat, setPasswordRepeat] = useState("");
const [click, setClick] = useState(false);
const [emailTaken, setEmailTaken] = useState('');
// handel get inputs value in update user information
    useEffect(() => {
        setName(props.name)
        setEmail(props.email)
    }, [props.name, props.email])
    async function submit(event) {
        // clicked up from all validation inputs
        let onSubmit = true;
        event.preventDefault();
        setClick(true);

        name === '' || password.length < 12 || passwordRepeat !== password ? onSubmit = false : onSubmit = true; // validation errors types inputs

        try {
            if( onSubmit ) {
                await axios.post(`http://127.0.0.1:8000/api/${props.APIendPoint}`, {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordRepeat,
                }).then((response) => {
                    console.log('status code' ,response.status);
                    // sent user to home page
                    if (response.status === 200) {
                       props.hasLocalStorage && window.localStorage.setItem('email', email);
                        window.location.pathname = `${props.pathname}`;
                    }
                });
            }
        } catch (err) {
            setEmailTaken(err.response.status);
        }
    }

    return (
    <div>
        <div className={props.formSTyle}>
        <div style={{display: 'block'}}>
        <h2 className={'mainHeader'}>{props.mainHeaderTitle}</h2>
            <form action="" onSubmit={submit}>
                <label htmlFor="name"> name </label>
                <input value={name} type="text" id="name" placeholder="enter name" onChange={(e) => setName(e.target.value)} required />
                { name.length <= 0 && click ? <p style={{ color: "red" }}> type your name </p> : null }
                <label htmlFor="email"> email </label>
                <input value={email} type="text" id="email" placeholder="enter email" onChange={(e) => { setEmail(e.target.value); }} />
                {emailTaken === 422 && click ? <p style={{ color: "red" }}>mail is taken</p> : null }
                <label htmlFor="password"> password </label>
                <input value={password} type="Password" id="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
                {password.length < 12 && click ? ( <p style={{ color: "red" }}> password must char 12 </p> ) : null}
                <label htmlFor="Password"> repeat password </label>
                <input value={passwordRepeat} type="Password" id="Password" placeholder="repeat Password" onChange={(e) => setPasswordRepeat(e.target.value)} />
                {passwordRepeat !== password && click ? ( <p style={{ color: "red" }}> password not match </p> ) : null}
                <button type="submit" className="subBtn"> {props.BTNContent} </button>
                {props.loginButton}
            </form>
        </div>
        </div>
    </div>
    )
}

export default Form;