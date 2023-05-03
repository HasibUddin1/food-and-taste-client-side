import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer/Footer';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='allButFooter'>
                <Header></Header>
                <Outlet></Outlet>
                <ToastContainer></ToastContainer>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;