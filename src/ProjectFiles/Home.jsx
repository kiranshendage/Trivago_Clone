import React  from "react";


import Footer from "./Footer.jsx";
 
import Hot_Hotel_Deal from "./Hot_Hotel_Deal.jsx";

import Main_box from './Main_box.jsx';
import Navbar from './Navbar';
import Recently_View from './Recently_View.jsx';


import Popular_Searches from './Popular_Searchs.jsx';
import Search_Bar from './SearchBar';
import Top_Rated_Hotels from './Top_Rated_Hotels.jsx';
 
import {  createBrowserRouter, RouterProvider} from 'react-router-dom';
import Trivago from './Trivago.jsx';
import Fav from './Fav.jsx';
import LoginPage from './LoginPage.jsx';
import En from './En.jsx';


const Home = () =>{
    return(
        <div>
             <Navbar/>
      <Search_Bar/>
      <Recently_View/>
      <Hot_Hotel_Deal/>
      <Top_Rated_Hotels/>
      <Popular_Searches/>
      <Main_box/>
      <Footer/>   
        </div>
    )
}
export default Home;