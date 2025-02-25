

import Footer from './ProjectFiles/Footer.jsx';
 
import Hot_Hotel_Deal from './ProjectFiles/Hot_Hotel_Deal';

import Main_box from './ProjectFiles/Main_box.jsx';
import Navbar from './ProjectFiles/Navbar';
import Recently_View from './ProjectFiles/Recently_View.jsx';


import Popular_Searches from './ProjectFiles/Popular_Searchs.jsx';
import Search_Bar from './ProjectFiles/SearchBar';
import Top_Rated_Hotels from './ProjectFiles/Top_Rated_Hotels.jsx';
 
import {  BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Trivago from './ProjectFiles/Trivago.jsx';
import Fav from './ProjectFiles/Fav.jsx';
import LoginPage from './ProjectFiles/LoginPage.jsx';
import En from './ProjectFiles/En.jsx';
import Home from './ProjectFiles/Home.jsx';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/login',
      element:
      <div>
        <Navbar/>
        <LoginPage/>
        <Footer/>
        </div>,
    },
    // {
    //   path:'/login',
    //   element:
    //   <div>
    //     <Internal/>
    //     </div>,
    // },
 
  ])
 
  return (
     
    <div>
     <RouterProvider router={router}/> 
   
    </div>
   
  );
}

export default App;
