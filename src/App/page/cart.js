import React, {useContext} from 'react';

import {AppProvider} from '../../AppContext'
import {  BackTop } from 'antd';

import Menu from '../layouts/gioithieu/menu'
import Cart from '../layouts/cart/cartProduct'
import Footer from '../layouts/gioithieu/footerAbout'
// import Test from '../layouts/mainPage/test'




function CartProducts() {

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
        <div className="cart">
            <AppProvider>
                <Menu />
                <Cart />
                <Footer />
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
            </AppProvider>
           
        </div>
    );
}

export default CartProducts;