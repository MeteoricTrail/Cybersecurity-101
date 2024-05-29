import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import Home from "./pages/Home"
import Roadmap from "./pages/Roadmap"
import Game from "./pages/Game"
import Resources from "./pages/Resources"
import About from "./pages/About"
import Navbar from "./components/Navbar";
import "./style.scss"


const Layout = ()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/roadmap",
        element: <Roadmap/>
      },
      {
        path: "/game",
        element: <Game/>
      },
      {
        path: "/resources",
        element: <Resources/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ]
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
    
  );
}



export default App;