import { Link, useNavigate } from "react-router-dom";

const Country = ({country}) => {
    // console.log(country);
    const {name, flags}= country
    const commonName = name.common
    // console.log(commonName)
    const navigate = useNavigate()

    const handleShowDetail=()=>{
        navigate(`/country/${commonName}`)

    }
    return (
        <div className="box">
            <img src={flags.png} alt="" />
            <h3>name:{name.common}</h3>
            {/* <Link to={`/country/${commonName}`}>show detail</Link>s */}
            <button onClick={handleShowDetail}>show details</button>
        </div>
    );
};

export default Country;