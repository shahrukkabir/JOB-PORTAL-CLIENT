import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottieJson from '../../assets/lottie/login-lottie.json';
import Lottie from "lottie-react";
import { useContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";

export default function SignIn() {

    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    
    const navigate = useNavigate();
    const from = location.state || '/';


    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Google Sign-In Successful:", result.user);
                navigate(from);
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log('sign in', result)
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
        // const formData = { email, password };
        // console.log("Form submitted:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Sign In</button>
                </form>
                <button onClick={handleGoogleSignIn} className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2">
                    <FaGoogle /> Sign In with Google
                </button>
                <p className="mt-4 text-center text-gray-300">
                    Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register</Link>
                </p>
            </div>
            <div className="w-80 ml-10">
                <Lottie animationData={loginLottieJson} className="filter invert brightness-75" />
            </div>
        </div>
    );
}
