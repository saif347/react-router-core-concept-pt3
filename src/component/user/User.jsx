import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name, email,}= user
    const navigate = useNavigate()

    const handleNavigate= ()=>{
        navigate(`/users/${id}`)

    }
    return (
        <div className='box'>
            <h4>name: {name}</h4>
            <p>Email: {email} </p>
            <Link to={`/users/${id}`}>show details</Link>
            <button onClick={handleNavigate}>click me to see detail</button>
            
        </div>
    );
};

export default User;