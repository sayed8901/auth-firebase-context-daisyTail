import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user);


    return (
        <div className='my-container'>
            <h2>Home page for: 
                {user && <span> {user.displayName} </span>}
            </h2>
        </div>
    );
};

export default Home;