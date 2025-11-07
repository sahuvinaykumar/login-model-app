import React, { useState } from "react";

function Login() {
    const [formdata, setformdata] = useState({});
    const [show,setshow]=useState(false)
    // const [name,setname]=useState("");
    // const [email,setemail]=useState("");
    // const [password,setpassword]=useState("");
    // const [mobile,setmobile]=useState("");

    function handlechange(e) {
        const { name, value } = e.target
        // console.log(name,value);
        setformdata(values => ({ ...values, [name]: value }))

    }

    function getdata(e) {
        e.preventDefault();
        // console.log(name,email,password,mobile);
        console.log(formdata);
        setshow(true)

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#6A11CB]">
            <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl overflow-hidden w-11/12 max-w-5xl transform transition-all duration-300 hover:scale-[1.02]">

                {/* --- Left Side Image Section --- */}
                <div className="relative hidden md:block md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                        alt="Tech background"
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                        <h2 className="text-white text-3xl font-bold drop-shadow-lg">
                            Empower Your Journey 🚀
                        </h2>
                        <p className="text-gray-300 mt-2 text-sm">
                            Join our vibrant community of creators, developers, and dreamers.
                        </p>
                    </div>
                </div>

                {/* --- Right Side Signup Form --- */}
                <div className="w-full md:w-1/2 p-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 text-center drop-shadow-md">
                        Create Your Account
                    </h1>
                    <p className="text-center text-sm text-white/80 mb-6">
                        Get started with your personalized dashboard today.
                    </p>

                    <form onSubmit={(e) => { getdata(e) }} className="space-y-5">
                        <div>
                            <label className="block text-sm mb-1">Username</label>
                            <input
                                type="text" onChange={handlechange}
                                name="username"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email" onChange={handlechange}
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Mobile No</label>
                            <input
                                type="tel" onChange={handlechange}
                                name="mobile"
                                placeholder="Enter your mobile number"
                                className="w-full px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Password</label>
                            <input
                                type="password" onChange={handlechange}
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm mt-6 text-white/80">
                        Already have an account?{" "}
                        <a href="#" className="underline text-yellow-300 hover:text-yellow-200">
                            Login
                        </a>
                    </p>
                </div>
            </div>

            {
                show&&
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-8 w-11/12 max-w-md text-white animate-fadeIn">

                    {/* --- Close Icon --- */}
                    <div onClick={()=>{setshow(false)}} className="absolute top-4 right-4 cursor-pointer text-white/80 hover:text-red-400 text-xl font-bold">
                        ✖
                    </div>

                    {/* --- Modal Header --- */}
                    <h2 className="text-2xl font-bold text-center mb-6 drop-shadow-md">
                        User Details
                    </h2>

                    {/* --- User Info Section --- */}
                    <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg px-4 py-2">
                            <p className="text-sm text-gray-200">Username</p>
                            <p className="font-semibold text-lg">{formdata.username}</p>
                        </div>

                        <div className="bg-white/20 rounded-lg px-4 py-2">
                            <p className="text-sm text-gray-200">Email</p>
                            <p className="font-semibold text-lg">{formdata.email}</p>
                        </div>

                        <div className="bg-white/20 rounded-lg px-4 py-2">
                            <p className="text-sm text-gray-200">Mobile</p>
                            <p className="font-semibold text-lg">{formdata.mobile}</p>
                        </div>

                        <div className="bg-white/20 rounded-lg px-4 py-2">
                            <p className="text-sm text-gray-200">Password</p>
                            <p className="font-semibold text-lg">{formdata.password}</p>
                        </div>
                    </div>
                </div>
            </div>
            }

            
        </div>
    );
}

export default Login;
