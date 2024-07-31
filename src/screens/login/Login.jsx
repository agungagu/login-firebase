const Login = () => {
  return (
    <main className="w-screen min-h-screen flex bg-gradient-to-br from-yellow-800 to-purple-500 mx-auto p-10 sm:items-center sm:justify-center md:justify-center lg:items-center lg:justify-center">
      <form
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-10 mx-auto"
        autoComplete="off"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-semibold text-blue-500">
          Login
        </h1>
      </form>
    </main>
  );
};

export default Login;
