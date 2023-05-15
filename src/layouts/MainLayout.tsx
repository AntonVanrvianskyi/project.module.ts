import React from 'react';
import Header from "../components/header/Header";
import {Outlet} from "react-router-dom";

import './Layout.css'
const MainLayout = () => {
    return (
        <div className='layout'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;