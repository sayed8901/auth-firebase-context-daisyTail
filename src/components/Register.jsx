import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {

    const {user , createUser} = useContext(AuthContext);
    // console.log(user, createUser);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    
    const handelRegisterSubmit = (event) => {

        setSuccessMsg('');
        setErrorMsg('');

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser);
            setSuccessMsg('New User has been Created Successfully');

            form.reset();
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
                    <h1 className="text-5xl font-bold p-5">Please Register!</h1>

                    <br /> <br />
                    <p className={`ms-4 text-2xl font-semibold ${errorMsg ? 'text-primary' : 'text-success'}`}>
                        {errorMsg ? errorMsg : successMsg}
                    </p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handelRegisterSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

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

                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        <label className="label mt-4 mx-auto">
                            <a href="#" className="label-text-alt link link-hover">Verify Account info!</a>
                        </label>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>

                        <br />
                        <label className="label inline mx-auto">
                            Already have an account?
                            <Link to={'/login'} className="link link-hover ps-2 text-info font-bold">log in</Link>
                        </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;