import Form from "../../Form";

const CreateUser = () => {
    return (
        <div className={'form-edit-user'} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Form
                mainHeaderTitle={'create new user'}
                name={''}
                email={''}
                APIendPoint='user/create'
                pathname={'/dashboard/users'}
                hasLocalStorage={false}
                BTNContent={'create user'}
            />
        </div>
    )
}
export default CreateUser