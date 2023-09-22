import {useEffect, useState} from "react";
import Form from "../../Form";

const EditUsers = () => {

const userID = +window.location.pathname.split('/').slice(-1)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${userID}`).then(response => response.json())
            .then(data => {
                setName(data[0].name)
                setEmail(data[0].email)
            });
    }, []);

    return (
        <div className={'form-edit-user'} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Form
                mainHeaderTitle={'update user information'}
                name={name}
                email={email}
                APIendPoint={`user/update/${userID}`}
                pathname={'/dashboard/users'}
                hasLocalStorage={false}
                BTNContent={'information update'}
            />
        </div>
    )
}
export default EditUsers