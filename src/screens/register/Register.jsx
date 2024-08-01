import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase";

const Register = () => {
  const handleGoogleRegister = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider(); // membuat instance dari penyedia otentikasi google

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <main className="w-screen min-h-screen flex bg-gradient-to-br from-yellow-800 to-purple-500 mx-auto p-10 sm:items-center sm:justify-center md:justify-center lg:items-center lg:justify-center">
      <form
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-10 mx-auto"
        autoComplete="off"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-semibold text-blue-500">
          Register
        </h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            className="h-10 px-3 rounded-md border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            className="h-10 px-3 rounded-md border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password2">ulangi password</label>
          <input
            type="password"
            id="password2"
            className="h-10 px-3 rounded-md border border-gray-300"
          />
        </div>
        <div className="flex mt-4 flex-col gap-2">
          <button className="h-10 w-full bg-gray-500 text-white rounded-lg font-semibold">
            Register
          </button>
          <button
            className="h-10 w-full bg-yellow-500 text-white rounded-lg font-semibold"
            type="button"
            onClick={handleGoogleRegister}
          >
            Login with Google
          </button>
          <Link
            to={"/"}
            className="h-10 w-full bg-blue-500 text-white rounded-lg font-semibold flex justify-center items-center"
          >
            Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Register;
