import React from 'react';

import { AppProvider } from '../../AppContext'
import {  BackTop } from 'antd';

import HeaderMenu from '../layouts/mainPage/HeaderMenu'
import Bodyinfo from '../layouts/mainPage/bodyInfo'
import Slide from '../layouts/mainPage/slider'
import ProductDemo from '../layouts/mainPage/productDemo'
import RateUs from '../layouts/mainPage/rateus'
import Footer from '../layouts/mainPage/footeMainpage'
import Test from '../layouts/mainPage/test'



function MainPage() {

    const style = {
        height: 40,
        width: 100,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold'
      };
    return (
        <div className="mainpage">
            <AppProvider>
                <HeaderMenu />
                <Bodyinfo />
                <Slide />
                <ProductDemo />
                <RateUs />
                <Footer />
                {/* <Test/> */}
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
            </AppProvider>

        </div>
    );
}

export default MainPage;