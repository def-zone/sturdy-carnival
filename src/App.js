import { Link, Route, Switch } from "react-router-dom";
import { Menu } from "./components/menu";
import { Search } from "./components/search";
import { GettingStarted } from "./pages/getting-started";
import { ReleaseNotes } from "./pages/release-notes";

function App() {
  return (
    <div className="md:flex relative">
      <div className="bg-dark w-1/6 h-screen p-4 hidden md:block">
        <Link to="/" className="font-medium text-2xl"><i className="fas fa-file-signature"></i> Docs</Link>
        <div className="py-4">
          <Search/>
        </div>
        <Menu/>
      </div>
      <div className="w-4/6 p-10">
        <div className="md:hidden flex items-center border-b mb-4 pb-3">
          <div className="font-bold flex-grow text-3xl">Docs</div>
          <button><i className="fas fa-bars fa-2x"></i></button>
        </div>
        <Switch>
          <Route exact path="/release-notes"><ReleaseNotes/></Route>
          <Route exact path="/"><GettingStarted/></Route>
        </Switch>
      </div>
      <div className="w-1/6 bg-gray-800">
        
      </div>
    </div>
  );
}

export default App;
