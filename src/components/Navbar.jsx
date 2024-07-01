import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
    // dark and light mode 

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || 'light';
    });


    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };


    // dark and light mode end function 

    const { user } = useContext(AuthContext);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {

                toast.success('log out succesfully')
            })
    }

    const navLinks = <>
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/allart&craft">All Art & craft Items</NavLink></li>
        <li><NavLink to="/addcraftitem">Add Craft Item</NavLink></li>
        <li><NavLink to="/myart&craftlist">My Art & Craft List</NavLink></li>



    </>

    return (
        <div id="navbar" className="my-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Canvas Crafts</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">



                    {
                        user ? <button onClick={handleLogOut} className="btn btn-sm hover:bg-secondary hover:bg-opacity-30">Log Out</button>
                            :
                            <div className="space-x-4 flex items-center">
                                {/* <Link to='/register' className="btn hover:bg-secondary hover:bg-opacity-30">Register</Link> */}
                                <Link to='/login' className="btn btn-sm hover:bg-secondary hover:bg-opacity-30">Login</Link>
                                <Link to='/register' className="btn btn-sm hover:bg-secondary hover:bg-opacity-30 lg:flex hidden">Register</Link>
                            </div>
                    }
                    <div>

                    </div>
                    <div>
                        {
                            user &&
                            <div>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full hover:border-2 border-red-600 " >
                                        <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        }
                    </div>

                    <div>
                        <label className="cursor-pointer grid place-items-center">
                            <input
                                onChange={handleToggle}
                                type="checkbox"
                                checked={theme === 'dark'}
                                className="toggle lg:w-[70px] h-8 theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                            />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;