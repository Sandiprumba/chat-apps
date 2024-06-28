import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="surprise here"
              className="w-full h-10 input input-bordered"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="surprise"
              className="w-full h-10 input input-brodered"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full h-10 input input-bordered"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full h-10 input input-bordered"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link to="/login" className="inline-block mt-2 text-sm hover:underline hover:text-blue-600 ">
            Already have an account?
          </Link>
          <div>
            <button className="mt-2 btn btn-block btn-sm" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

//STARTER SIGN UP CODE
// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center mx-auto min-w-96">
//       <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="p-2 label">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="surprise here" className="w-full h-10 input input-bordered" />
//           </div>

//           <div>
//             <label className="p-2 label">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="surprise" className="w-full h-10 input input-brodered" />
//           </div>
//           <div>
//             <label className="p-2 label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="password" className="w-full h-10 input input-bordered" />
//           </div>
//           <div>
//             <label className="p-2 label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="password" className="w-full h-10 input input-bordered" />
//           </div>
//           <GenderCheckbox />
//           <a href="#" className="inline-block mt-2 text-sm hover:underline hover:text-blue-600 ">
//             Already have an account?
//           </a>
//           <div>
//             <button className="mt-2 btn btn-block btn-sm">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
