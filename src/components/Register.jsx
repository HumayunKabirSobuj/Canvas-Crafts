import { MdAddAPhoto } from "react-icons/md";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
    const navigate =useNavigate();

    const { registerUser } = useContext(AuthContext);



    const [passError, setPassError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, photo, password } = data



        if (password.length < 6) {
            setPassError('Password must be 6 character or longer')
            return;


        }

        if (!/[A-Z]/.test(password)) {
            setPassError('At Least One Upper Case Carracter Need')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPassError('At Least One Lower Case Carracter Need')
            return;
        }

        registerUser(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                console.log(user)
                navigate('/')
                toast.success('Register with Email and Password Succesfully')
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        console.error(error)
                    });

            })
            .catch(error => {
                // console.error(error)
                toast.error(error.message)

            })

    }
    return (
        <div className="my-5 lg:px-0 px-5">
            <div className="lg:w-3/4 w-full mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name"

                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </label>

                    <label className="input input-bordered flex items-center gap-2">

                        <MdAddAPhoto />
                        <input type="url" className="grow" placeholder="Photo URL"
                            {...register("photo", { required: true })}
                        />
                        {errors.photo && <span className="text-red-500">This field is required</span>}

                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" className="grow" placeholder="Email"

                            {...register("email", { required: true })}

                        />

                        {errors.email && <span className="text-red-500">This field is required</span>}

                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>

                        <div className="flex items-center justify-between w-full">

                            <input type={showPassword ? "text" : "password"} className="grow w-full " placeholder="Password"
                                {...register("password", { required: true })}

                            />
                            <p className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </p>
                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        {passError && <span className="text-red-500">{passError}</span>}

                    </label>

                    <input type="submit" value="Register" className="btn btn-secondary w-full" />
                </form>
                <p className=' w-full text-center  mt-5 text-xl'> Already Have An Account ? Please <Link to="/login" className='text-green-500 font-semibold hover:btn ' >Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;