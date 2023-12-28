// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../header/Header';
import './home.css'


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
             <h1>this is nav bar</h1>
            <Header></Header>
            {
                navigation.state === 'loading'? <p>Loading...</p> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;