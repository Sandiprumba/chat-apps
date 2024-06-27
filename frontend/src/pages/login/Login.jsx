const login = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full h-10 input input-bordered bg-slate-200" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full h-10 input input-bordered bg-slate-200" />
          </div>
          <a href="#" className="inline-block mt-2 text-sm hover:underline hover:text-blue-600">
            {"Don't"} have an account?
          </a>
          <div>
            <button className="mt-2 btn btn-block btn-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;

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
