import { Route } from "react-router-dom";
import Edit from "./pages/Edit";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/edit" exact>
        <Edit />
      </Route>
    </div>
  );
}

export default App;
