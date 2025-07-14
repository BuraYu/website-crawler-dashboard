import React, { useEffect, useState } from "react";

const UrlInput: React.FC = () => {
  const [inputLink, setInputLink] = useState<string>("");

  useEffect(() => {
    console.log(inputLink);
  }, [inputLink]);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("URL is submitted:", inputLink);
  };

  return (
    <div className="p-3">
      <div className="bg-white p-4">
        <h2 className="text-xl font-bold mb-2">Add Website to Analyze</h2>
        <form onSubmit={handleClick} className="flex">
          <input
            type="text"
            placeholder="example.com"
            className="p-2 border rounded-xl mr-2 w-full"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputLink(event.target.value)
            }
          />
          <button
            type="submit"
            className={` text-white px-4 py-2 rounded-xl ${
              inputLink === "" ? "bg-blue-300" : "bg-blue-600"
            }`}
          >
            <span className="mr-2">+</span>
            <span>Analyze</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UrlInput;
