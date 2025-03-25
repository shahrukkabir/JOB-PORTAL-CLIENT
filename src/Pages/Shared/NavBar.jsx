import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost py-7 my-4 flex items-center">
                    <img className='w-12' src={logo} alt="Job Portal Logo" />
                    <h3 className="text-2xl">JOB-PORTAL</h3>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
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