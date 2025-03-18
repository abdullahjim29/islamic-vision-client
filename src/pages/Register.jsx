import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../layout/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const { createNewUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);


  const handleCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const newUser = { name, email };
    const userInfo = {name, photo}

    setError("");

    if (password.length < 6) {
      setError("Length must be at least 6 character");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    } else if (!/.*[a-z].*/.test(password)) {
      setError("Must have a Lowercase letter in the password ");
      return;
    } else if (!/.*[0-9].*/.test(password)) {
      setError("Must have a number in the password");
      return;
    } else if (!/.*[@$!%*?&].*/.test(password)) {
      setError("Must have a Special Charecter in the password ");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success('Registerd Succsessfull!')
        navigate('/');

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        })
        .then(() => {})
        .catch(() => {})

        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            
          });
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-lg">
              <h1 className="text-3xl font-bold text-center">
                Create an Account & Explore!
              </h1>
              <form onSubmit={handleCreateUser} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-600">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-600">Photo URL</label>
                  <input
                    type="url"
                    name="photo"
                    id="photo"
                    placeholder="Photo URL"
                    className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm relative">
                  <label className="block dark:text-gray-600">Password</label>
                  <input
                    type={`${isShow ? 'text' : 'password'}`}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                  <div className="flex justify-end text-xs dark:text-gray-600"></div>
                  <p className="text-red-500">{error}</p>
                  {
                    isShow ? <IoMdEye onClick={() => setIsShow(false)} className="absolute top-10 right-4 text-lg"/> : <IoMdEyeOff onClick={() => setIsShow(true)} className="absolute top-10 right-4 text-lg" />
                  }
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                  Register
                </button>
              </form>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                onClick={handleGoogleLogin}
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm flex gap-3 items-center btn w-full"
                >
                  Create Account With
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-center sm:px-6 dark:text-gray-600">
                Already have an account?
                <Link to={"/login"} className="underline dark:text-gray-800">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
