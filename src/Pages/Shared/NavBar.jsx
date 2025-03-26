import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import logo from '../../assets/logo.png'

const NavBar = () => {

    const { user, signOutUser, loading } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successfully SignOut');
            })
            .catch(e => {
                console.log("Failed to SignOut");
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myApplications">My Applications</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">
                    <img className='w-12' src={logo} alt="" />
                    <h3 className="text-3xl">Job Portal</h3>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {loading ? (<span>Loading...</span>) : user ?
                    <>
                        <span className="mr-3">{user.email}</span>
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </> :
                    <>
                        <Link className="hover:underline" to="/register">Register</Link>
                        <Link className="pl-5 hover:underline" to="/signin">Sign In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;