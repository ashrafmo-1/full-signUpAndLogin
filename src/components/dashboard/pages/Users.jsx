import {useEffect, useState} from "react";
import {FaPenToSquare, FaRegTrashCan} from "react-icons/fa6";
import {Link} from "react-router-dom";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [onFetch, setOnFetch] = useState(0);

   useEffect(() => {
       fetch('http://127.0.0.1:8000/api/user/show').then(response => response.json()).then(data => setUsers(data));
    }, [onFetch]);

    // edit and delete users
     function removeUser(id) {
        try {
        fetch(`http://127.0.0.1:8000/api/user/delete/${id}`, { method: 'DELETE'})
            .then((response) => {
                if (response.status === 200) {
                    setOnFetch((update) => { return update + 1 })
                }
            })
        }catch{
            console.log('error')
        }
    }

    return (
        <section className={'users-content'}>
        <div>
            <h2 className={'mainHeader'}>users data</h2>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>controls</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {/* remove user */}
                                <button className={'remove-user'} onClick={() => removeUser(user.id)}><FaRegTrashCan /></button>
                                {/* edit user info */}
                                <Link to={`${user.id}`} className={'edit-user'}><FaPenToSquare /></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </section>
    )
}
