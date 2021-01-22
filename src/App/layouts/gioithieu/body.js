import React, { useState, useEffect } from 'react';

import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import About from '../../../assets/images/about.png';
import Logo from '../../../assets/images/logo.png';

const Body = () => {


  return (
    <>
        <div className="about">
          <div className="link">
            <NavLink className="NavLink" exact to="/" >Home</NavLink>
            <NavLink className="NavLink" exact to="/gioithieu" >Về chúng tôi</NavLink>
          </div>
          <div >
            <p className="about-uss">VỀ CHÚNG TÔI</p>
            <div className="row-about">
              <div
                className="col11-about"
                span={11}
              >
                <img src={About} />
              </div>
              <div
                className="col13-about"
                span={12}
              >
                <div className="text-about">
                  <div>
                    <img src={Logo} />
                  </div>
                  <div className="text-gioithieuu">
                    <p >GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</p>
                    <p>
                      Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                      quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                      bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào
                      các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại
                      hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi
                      mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các
                      nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm
                      nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà
                      dân tình xô nhau đi tắm Free để giải nhiệt.
                    </p>
                    <a className="xemthemm" href="#">Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Body;