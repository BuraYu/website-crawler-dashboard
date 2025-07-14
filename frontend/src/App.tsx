import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import UrlInput from "./components/UrllInput";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-100 h-screen">
        <Filters />
        <UrlInput />
      </div>
    </div>
  );
}

export default App;
