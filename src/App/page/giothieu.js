import React from 'react';

import { AppProvider } from '../../AppContext'

import Menu from '../layouts/gioithieu/menu'
import BodyAbout from '../layouts/gioithieu/body'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'




function GioiThieu() {


    return (
        <div className="gioithieu">
            <AppProvider>
                <Menu />
                <BodyAbout />
                <Footer />
                {/* <Test/> */}
               
            </AppProvider>
           
        </div>
    );
}

export default GioiThieu;