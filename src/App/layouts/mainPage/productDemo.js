import React, { useState, useContext } from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import { Button, notification } from 'antd';

import AppContext from '../../../AppContext';

import Heart from "../../../assets/images/heart.png";
import Reload from "../../../assets/images/reload.png";



const Information = (props) => {

    const { products, setProducts, cart, setCart } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)

    const settings = {
        arrows: true,
        asNavfor: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };


    const addProduct = (item, index) => {

        const newCart = [...cart];
        const indexCart = newCart.findIndex(c => c.id === item.id);

        if (indexCart < 1) {
            newCart.push({ ...item, count: 1});
        } else {
            const updatedItem = {
                ...newCart[indexCart]
            };
            updatedItem.count++;
            updatedItem.sumPrice = updatedItem.price * updatedItem.count;
            newCart[indexCart] = updatedItem;
        }
        setCart([...newCart]);


        localStorage.setItem('cart', JSON.stringify(cart));
        // notification.success({
        //     message: "Add product",
        //     description: "Add" + " " + item.name + " " + " success "
        // });
    }

    return (
        <>
            <div className="product-demo">
                <div className="product-text">
                    <div className="product-text-sanpham">
                        <p>Sản phẩm mới</p>
                        <p>Sản phẩm bán chạy</p>
                        <p>Sản phẩn đặc biệt</p>
                    </div>
                    <div className="line">
                        <div className="line-before"></div>
                        <div className="line-center">//////////////</div>
                        <div className="line-after"></div>

                    </div>
                    <div className="product-text-list">
                        <ul>
                            <li>Mỹ phẩm</li>
                            <li>Chăm sóc da</li>
                            <li>Dành cho tóc</li>
                            <li>Nước hoa</li>
                            <li>Trang sức</li>
                            <li>Quà tặng</li>
                        </ul>
                    </div>
                </div>

                <div className="products">
                    <Slider  {...settings}>
                        {products.map((item, index) => (
                            <div key={item.id} className="product-container">
                                <img src={item.img}></img>
                                <div className="table-price">
                                    <p className="product-title">{item.title}</p>
                                    <p className="product-name">{item.name}</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            {item.price}<span>$</span>
                                        </p>
                                        <p className="price2">
                                            {item.price}<span>$</span>
                                        </p>
                                    </div>
                                    <div
                                        className="button-"
                                    >
                                        <div className="button-price">
                                            <Button
                                                onClick={() => addProduct(item, index)}
                                                type="primary"
                                            >
                                                Mua hàng
                                                </Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>

    );
}
export default Information;