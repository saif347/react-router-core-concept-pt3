import { useLoaderData } from 'react-router-dom';
import Country from '../component/country/Country';

const Countries = () => {
    const countries = useLoaderData()
    // console.log(countries)
    return (
        <div>
            <h2>world countries: {countries.length}</h2>
            <div className='container'>
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;