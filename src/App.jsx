
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import { Children, Component } from "react";
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";
import Home from "./home/home";



const routes = createBrowserRouter([
  { path: '/', element: <Layout /> , children:[
    {index:true,element:<Home/>},
    {path:'port',element:<Portfolio/>},
    {path:'con',element:<Contact/>},
    {path:'about',element:<About/>}

]}]);

class App extends Component {
  render() {
    return (
      <>
      <RouterProvider router={routes}/>

      </>
    );
  }
}

export default App;
