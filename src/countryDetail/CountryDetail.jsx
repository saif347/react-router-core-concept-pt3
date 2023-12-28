import { useLoaderData, useNavigate } from "react-router-dom";


const CountryDetail = () => {
    const country = useLoaderData()
    const {flags}= country
    console.log(flags)
    const navigate = useNavigate()
    const handleBack= ()=>{
        navigate(-1)

    }
    return (
        <div>
            {
                country.map(countryDetail => <div className="box" key={countryDetail.cca3}>
                    <h3>name: {countryDetail.name.common}</h3>
                    <img src={countryDetail.flags.png} alt="" />
                    <p>area:{countryDetail.area}</p>
                    <p>population: {countryDetail.population}</p>
                    <p>independent: {countryDetail.independent? 'yes': 'no'}</p>
                    <button onClick={handleBack}>Go back</button>
                </div>)
            }
        </div>
    );
};

export default CountryDetail;