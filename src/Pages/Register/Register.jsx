import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerLottieData from '../../assets/lottie/register-lottie.json';
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

export default function Register() {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters long, contain at least one uppercase letter, and one number.");
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);

            })
            .catch(error => {
                console.log(error.message);

            })
        const formData = { name, email, password };
        console.log("Form submitted:", formData);
    };

    return (
        <div className="lg:flex items-center px-10 justify-center min-h-screen bg-gray text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Register</button>
                </form>
                <p className="mt-4 text-center text-gray-300">
                    Already have an account? <Link to="/signin" className="text-blue-400 hover:underline">Sign in</Link>
                </p>
            </div>
            <div className="w-96">
                <Lottie animationData={registerLottieData} />
            </div>
        </div>
    );
}
