import { Menu } from "./components/menu";
import { Search } from "./components/search";
import { GettingStarted } from "./pages/getting-started";

function App() {
  return (
    <div className="flex relative">
      <div className="bg-dark w-96 h-screen p-4">
        <div className="font-medium text-2xl"><i className="fas fa-file-signature"></i> Docs</div>
        <div className="py-4">
          <Search/>
        </div>
        <Menu/>
      </div>
      <div className="w-full p-10">
        <div className="font-bold text-4xl mb-6">Getting Started</div>
        <GettingStarted/>
      </div>
      <div className="w-96 bg-gray-800">
        
      </div>
    </div>
  );
}

export default App;
