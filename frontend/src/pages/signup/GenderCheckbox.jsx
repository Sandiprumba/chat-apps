const GenderCheckbox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//STARTER CODE FOR THE CECK BOX
// const GenderCheckbox = () => {
//   return (
//     <div className="flex mt-2">
//       <div className="form-control">
//         <label className="gap-2 cursor-pointer label">
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="gap-2 cursor-pointer label">
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
