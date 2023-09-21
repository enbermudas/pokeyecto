import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app" className="bg-gray-700 text-white h-screen w-screen p-4">
      <Outlet />
    </div>
  );
}

export default App;
