import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './page/mainpage';
import Gioithieu from './page/giothieu';
import Lienhe from './page/lienhe';
import Sanpham from './page/sanpham';
import Cartt from './page/cart';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage() {
  return (
    <div className="home">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <MainPage />} />
          </Switch>
          <Switch>
            <Route exact path="/gioithieu" render={() => <Gioithieu />} />
          </Switch>
          <Switch>
            <Route exact path="/lienhe" render={() => <Lienhe />} />
          </Switch>
          <Switch>
            <Route exact path="/sanpham" render={() => <Sanpham />} />
          </Switch>
          <Switch>
            <Route exact path="/cart" render={() => <Cartt />} />
          </Switch>
        </Router>
    </div>
  );
}

export default HomePage;