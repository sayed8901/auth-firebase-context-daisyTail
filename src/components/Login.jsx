import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext);
    // console.log(signIn);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    }


    const handelLoginSubmit = (event) => {

        setSuccessMsg('');
        setErrorMsg('');

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccessMsg('Login Successful');

            form.reset();
        })
        .catch(error => {
            console.log(error.message);
            setErrorMsg(error.message);
        })
    }


    const HandleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccessMsg('Login Successful');
        })
        .catch(error => {
            console.log(error.message);
            setErrorMsg(error.message);
        })
    }


    return (
        <div className="hero min-h-screen -mt-16 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold p-5">Please Login!</h1>

                    <br /> <br />
                    <p className={`ms-4 text-2xl font-semibold ${errorMsg ? 'text-primary' : 'text-success'}`}>
                        {errorMsg ? errorMsg : successMsg}
                    </p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handelLoginSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className='flex justify-between items-center'>
                            <input 
                            type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            
                            <span className='btn btn-sm w-20'
                            onClick={handleToggle}>
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>

                        <label className="label mt-4 mx-auto">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>

                        <br />
                        <label className="label inline mx-auto">
                            New to this site?
                            <Link to={'/register'} className="link link-hover ps-2 text-info font-bold">Register</Link>
                        </label>
                        </div>
                    </form>

                    <div className='mx-auto mb-8'>
                        <h2 className='text-center mb-4'>Additional <b>Sign in</b> options:</h2>
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-2">
                            <button onClick={HandleGoogleSignIn} className="btn btn-active">Google</button>
                            <button className="btn">Github</button>
                            <button className="btn">Twitter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;