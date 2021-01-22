import React from 'react';

import { AppProvider } from '../../AppContext'
import Menu from '../layouts/gioithieu/menu'
import Lienhe from '../layouts/lienhe/lienhe'
import Footer from '../layouts/gioithieu/footerAbout'



function Connect() {


    return (
        <div className="lienhe">
            <AppProvider>
                <Menu />
                <Lienhe />
                <Footer />
            </AppProvider>
        </div>
    );
}

export default Connect;