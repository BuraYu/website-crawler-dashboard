import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import UrlInput from "./components/UrllInput";

function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <Navbar />
      <Filters />
      <UrlInput />
    </div>
  );
}

export default App;
