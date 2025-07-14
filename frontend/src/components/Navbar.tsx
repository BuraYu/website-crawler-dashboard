import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="shadow-sm border-b bg-white p-3">
      <div className="flex justify-start items-center gap-3 mb-3">
        <span>Q</span>
        <h1 className="text-3xl font-bold">Website analyzer</h1>
      </div>
      <h3 className="text-gray-600">Analyze websites for HTML structure, links, and technical details</h3>
    </header>
  );
};

export default Navbar;
