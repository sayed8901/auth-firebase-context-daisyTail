import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  
  const {user, logOut} = useContext(AuthContext);
  // console.log(logOut);

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogOut = () => {
    setSuccessMsg('');
    setErrorMsg('');

    logOut()
    .then(() => (setSuccessMsg('Successfully signed out')))
  .catch(error => {
      setErrorMsg(error.message);
  })
  }

  return (
    <nav className="sticky top-0 z-10">
      <div className="navbar bg-primary text-primary-content justify-around">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Fire_Auth Home</Link>

        <div>
          <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
          <div>
            <Link to={'/login'} className="btn btn-ghost normal-case text-xl">Log in</Link>
            <Link to={'/register'} className="btn btn-ghost normal-case text-xl">Register</Link>
          </div>

          <div className="ms-8">
            {
              user ? 
                <>
                  <span className="mr-2 text-warning">{user.email}</span> 
                  <button onClick={logOut} className="btn btn-xs">Sign out</button>
                </> :
                <Link to={'/login'}><button className="btn btn-xs">Log in</button></Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
