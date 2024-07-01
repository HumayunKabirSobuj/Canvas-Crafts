import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser, GoogleLogin , GithubLogin } = useContext(AuthContext);
    // console.log( GithubLogin)

    const navigate = useNavigate();
    // console.log(loginUser)

    const handleLogIn = (e) => {
        e.preventDefault();
        // console.log('connected')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        loginUser(email, password)
            .then(() => {
                toast.success('Login with Email and Password Succesfully')
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(() => {
                toast.success('Google Login Succesfully')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubLogin =()=>{
        GithubLogin()
        .then(() => {
            toast.success('Github Login Succesfully')
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <div className="my-5 lg:px-0 px-5">
                <div className="lg:w-3/4 w-full mx-auto ">
                    <form onSubmit={handleLogIn} className="space-y-3">



                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" className="grow" name="email" placeholder="Email" required />


                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>

                            <div className="flex items-center justify-between w-full">

                                <input type={showPassword ? "text" : "password"} className="grow w-full " placeholder="Password" name="password" required />
                                <p className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </p>
                            </div>

                        </label>

                        <input type="submit" value="Login" className="btn btn-secondary w-full" />
                    </form>
                    <div className="grid grid-cols-3 items-center px-4 my-2">
                        <p className="border border-blue-600"></p>
                        <h2 className="text-xl text-center">OR</h2>
                        <p className="border border-blue-600"></p>
                    </div>

                    <div className='space-y-5 px-4'>
                        <button onClick={handleGoogleLogin} className='btn  w-full bg-white border'><FcGoogle /> <span>Login With Google</span> </button>
                        <button onClick={handleGithubLogin} className='btn  w-full bg-white border'><FaGithub /> <span>Login With Github</span> </button>
                    </div>
                    <p className=' w-full text-center  mt-5 text-xl'> Dont have any Account ? Please <Link to="/register" className='text-green-500 font-semibold hover:btn ' >Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;