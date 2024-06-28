import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 input input-bordered bg-slate-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered bg-slate-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="inline-block mt-2 text-sm hover:underline hover:text-blue-600">
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="mt-2 btn btn-block btn-sm" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx=auto">
//       <div className="w-full h-full bg-green-400 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="p-2 label">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter Username" className="w-full h-10 input input-bordered bg-slate-200" />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full h-10 input input-bordered bg-slate-200" />
//           </div>
//           <a href="#" className="inline-block mt-2 text-sm hover:underline hover:text-blue-600">
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="mt-2 btn btn-block btn-sm">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default login;
