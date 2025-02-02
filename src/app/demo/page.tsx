import React from "react";

const DemoPage = () => {
  return (
    <div className="grid sm:grid-cols-12 m-5 gap-5">
      <div className="min-h-[5rem] bg-teal-500 rounded-md sm:col-span-6 sm:row-span-2"></div>
      <div className="min-h-[5rem] bg-red-500 rounded-md sm:col-span-6"></div>
      <div className="min-h-[5rem] bg-yellow-500 rounded-md sm:col-span-6 bg-gradient-to-tr from-red-300 via-green-300 to-yellow-300"></div>
    </div>
  );
};

export default DemoPage;
