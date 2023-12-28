import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const users = useLoaderData()
    const {name, email, website, phone}=users
    const navigate = useNavigate()

    const handleGoBack =()=>{
        navigate(-1)

    }
    return (
        <div className='box'>
            <h2>our user detail: {name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default UserDetails;