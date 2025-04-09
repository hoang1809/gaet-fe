import React from "react";

const Loading = () => {
  return (
    <div className="flex fixed top-0 right-0 z-50 bg-white justify-center items-center h-screen w-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gaet-600"></div>
    </div>
  );
};

export default Loading;
