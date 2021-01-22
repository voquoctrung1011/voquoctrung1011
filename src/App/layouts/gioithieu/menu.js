import { Drawer,  notification } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../AppContext';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";
import Search from "../../../assets/images/search.png";
import Dropdown from "../../../assets/images/dropdown.png";
import Cart from "../../../assets/images/cart.png";
import MenuRepos from "../../../assets/images/menu-repos.png";
import Exit from "../../../assets/images/exit.png";



const Menu = () => {

  const { cart, setCart, products } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [visible, setVisible] = useState(false);


  const styleCount = {
    textAlign: "center",
    width: "17px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  }

  const showMenu = () => {
    if (!isOpenMenu)
      setIsOpenMenu(true);
    else
      setIsOpenMenu(false);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onDelete = (item) => {

    const indexProduct = cart.findIndex(p => p.id === item.id);
    if (indexProduct < 0) return;

    const newProduct = [...cart];
    newProduct.splice(indexProduct, 1);
    setCart(newProduct);
    notification.success({
      message: "Delete Table",
      description: "Deleted" + " " + item.name + " " + " success "
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const onPlus = (item, index) => {

    cart[index].count = cart[index].count + 1;
    cart[index].sumPrice = cart[index].price * cart[index].count;
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart([...cart]);
  }

  const onMinus = (item, index) => {
    if (item.count <= 0) {
      
      onDelete(item);
    }
    else {
      cart[index].count = cart[index].count - 1;
      cart[index].sumPrice = cart[index].sumPrice - cart[index].price;
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart([...cart])
    }
  }


  return (
    <>
      <div className="homess">
        <div className="menuu">
          <div className="menu-imgg">
            <NavLink exact to="/" >
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="menu-textt">
            <ul className="listt">
              <li className="list-itemm"><NavLink exact to="/" >Trang chủ</NavLink></li>
              <li className="list-itemm"><NavLink exact to="/gioithieu" >Giới thiệu</NavLink></li>
              <li
                className="list-item-sanphamm"
                onMouseOver={() => setIsOpen(true)}
              >
                <NavLink exact to="/sanpham" >Sản phẩm
                  <img src={Dropdown} />
                </NavLink>
              </li>
              <li className="list-itemm"><a href="#">Tin tức </a></li>
              <li className="list-itemm"><a href="#">Bản đồ </a></li>
              <li className="list-itemm"><NavLink exact to="/lienhe" >Liên hệ</NavLink></li>
            </ul>
          </div>
          <div className="menu-iconn">
            <img
              onClick={showDrawer}
              src={Cart} alt="Cart"
            />
            <img src={Search} alt="Searchh" />
            <img
              className="img-menu-reposs"
              src={MenuRepos}
              alt="MenuRepos"
              onClick={showMenu}
            />
            <img
              className="img-exitt"
              src={Exit}
              alt="Exit"
              onClick={showMenu}
            />
          </div>
        </div>
        {/* dropdown san pham */}
        {
          isOpen && (
            <>
              {/* <div className="hover-width"></div> */}
              {/* <div className="img-upp" /> */}
              <div
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
                className="item-sanpham-hoverr"
              >
                <div className="sanpham-displayy">
                  <ul>
                    <p>Dưỡng da</p>
                    <li className="list-itemm"><a href="#">Áo khoác </a></li>
                    <li className="list-itemm"><a href="#">Bộ áo liên quan </a></li>
                    <li className="list-itemm"><a href="#">Quần / váy</a></li>
                    <li className="list-itemm"><a href="#">Quần short</a></li>
                    <li className="list-itemm"><a href="#">Quần jean</a></li>
                    <li className="list-itemm"><a href="#">Đồ đan</a></li>
                    <li className="list-itemm"><a href="#">Áo ni</a></li>
                  </ul>

                  <ul>
                    <p>Nước hoa</p>
                    <li className="list-itemm"><a href="#">Áo cánh / Áo sơ mi </a></li>
                    <li className="list-itemm"><a href="#">Túi sách và balo</a></li>
                    <li className="list-itemm"><a href="#">Khăn quàng và Foulards</a></li>
                    <li className="list-itemm"><a href="#">Vớ và socks</a></li>
                    <li className="list-itemm"><a href="#">Bị bảo vệ</a></li>
                    <li className="list-itemm"><a href="#">Giày</a></li>
                    <li className="list-itemm"><a href="#">Jewery</a></li>
                  </ul>

                  <ul>
                    <p>Trang sức</p>
                    <li className="list-itemm"><a href="#">Túi sách và balo </a></li>
                    <li className="list-itemm"><a href="#">Khăn quàng và Foulards</a></li>
                    <li className="list-itemm"><a href="#">Vớ và socks</a></li>
                    <li className="list-itemm"><a href="#">Bị bảo vệ</a></li>
                    <li className="list-itemm"><a href="#">Giày</a></li>
                    <li className="list-itemm"><a href="#">Jewery</a></li>
                  </ul>

                </div>
              </div>
            </>
          )
        }

        {/* dropdown CART */}

        <Drawer
          title="Cart Items"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          width='410'
        >
          {
            cart.map((itemCart, index) => {
              return (
                <>
                  <div className="item-cart">
                    <div className="carts">
                      <div className="detail-cart">
                        <img src={itemCart.img} />
                        <div className="detail-cart-text">
                          <p style={{ fontSize: '25px', fontStyle: 'italic', fontFamily: 'utm-viceroyJF' }}>{itemCart.name}</p>
                          <p style={{ paddingLeft: '15px', color: '#e7e7e7', fontWeight: 'bold' }}>{itemCart.title}</p>
                          <p className="cart-price">
                            Price: {itemCart.price}
                            <span>{itemCart.price === "" ? "" : "$"}</span>
                          </p>
                          <p style={{ width: '70%', display: 'flex', justifyContent: 'space-evenly' }}>
                            Qty:
                              <span onClick={() => onPlus(itemCart, index)} style={styleCount}>+</span>
                            {itemCart.count}
                            <span onClick={() => onMinus(itemCart, index)} style={styleCount}>-</span>
                          </p>
                        </div>
                      </div>

                      <div className="sum-price">
                        <p style={{ fontWeight: 'bold', fontSize: '14px' }}>Total : </p>
                        <p className="cart-price">
                          {itemCart.price * itemCart.count}
                          <span>{itemCart.price === "" ? "" : "$"}</span>
                        </p>
                      </div>

                    </div>
                  </div>

                </>
              )
            })
          }
          <NavLink exact to="/cart" >
            <button className="btn-cart">
              Your Cart
            </button>
          </NavLink>
        </Drawer>
        {
          isOpenMenu && (
            <>
              <div className="menu-reposs">
                <div className="menu-containn">
                  <ul>
                    <li><a>Trang chủ</a></li>
                    <li><a>Giới thiệu</a></li>
                    <li
                      onMouseOver={() => setIsOpen(true)}>
                      <a>Sản phẩm</a>
                    </li>
                    <li><a>Tin tức</a></li>
                    <li><a>Bản đồ</a></li>
                    <li><a>Liên hệ</a></li>
                  </ul>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default Menu;