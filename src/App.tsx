import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app" className="bg-slate-900 text-white h-screen w-screen p-4">
      <Outlet />
    </div>
  );
}

export default App;
