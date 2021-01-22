import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { Container } from 'reactstrap';
import { Input, Select, Button, Tabs, Rate } from 'antd';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Heart from "../../../assets/images/heart.png";
import Reload from "../../../assets/images/reload.png";
import Facebook from "../../../assets/images/facebook.png";
import Google from "../../../assets/images/google.png";
import Instagram from "../../../assets/images/instagram.png";
import Twitter from "../../../assets/images/twitter.png";
import Nhanbac from "../../../assets/images/nhanbac.png";
import Nhanbac1 from "../../../assets/images/nhanbac.png";
import Nhanhong from "../../../assets/images/nhanhong.png";
import Ring from "../../../assets/images/ring.png";
import Ring1 from "../../../assets/images/ring1.png";
import Ring3 from "../../../assets/images/ring3.png";
import Ring4 from "../../../assets/images/ring4.png";

const Products = [
    Nhanhong,
    Nhanbac,
    Nhanhong,
    Nhanbac,
    Ring,
];

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Body = () => {

    const [showImg, setShowImg] = useState(Nhanbac)

    const { Option } = Select;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    }


    return (
        <>
                <div className="productss">
                    <div className="productss-container">
                        <div className="link">
                            <NavLink className="NavLink" exact to="/" >Home</NavLink>
                            <NavLink className="NavLink" exact to="/lienhe" >Sản phẩm</NavLink>
                        </div>
                        <div className="body-productss">
                            <div className="img-productss">
                                <div className="slider-productss">
                                    <Slider  {...settings}>
                                        {
                                            Products.map(itemProducts => (
                                                <div>
                                                    <img
                                                        style={{ width: '80%', height: '60%' }}
                                                        src={itemProducts}
                                                        onMouseOver={() => setShowImg(itemProducts)}
                                                    />
                                                </div>
                                            ))}
                                    </Slider>
                                </div>
                                <div className="slider-img">
                                    <div className="slider-img-container">
                                        <img src={showImg} />
                                    </div>
                                </div>
                            </div>
                            <div className="detail-productss">
                                <div className="infomationDetail">
                                    <p>LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</p>
                                    <p>TYFFANY MS 3201</p>
                                    <p>950.000đ <span>999.000đ</span></p>
                                    <p>
                                        Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn” không lời mạnh mẽ nhất của mỗi
                                        người phụ nữ. Do đó, việc mua sắm thời trang trở thành niềm vui, và có khi là nguồn cảm hứng vô tận
                                        để phái đẹp sống vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ của mình trước
                                        những xu hướng ngày một đa dạng hơn trong thế giới thời trang, nhiều chị em không ngần ngại chi tiêu
                                        “mạnh tay” để sở hữu những món đồ yêu thích.
                                    </p>
                                    <p>
                                        Màu sắc
                                        <div className="input-Color">
                                            <Input.Group compact>
                                                <Select className="Select" style={{ width: '70%' }} defaultValue="Chọn màu">
                                                    <Option value="Home">Màu đòng</Option>
                                                    <Option value="Company">Màu bạc</Option>
                                                    <Option value="Company">Màu vàng</Option>
                                                </Select>
                                            </Input.Group>
                                        </div>
                                    </p>
                                    <p>
                                        Size
                                        <div className="input-Size">
                                            <Input.Group compact>
                                                <Select style={{ width: '70%' }} defaultValue="Chọn size">
                                                    <Option value="12">12</Option>
                                                    <Option value="13">13</Option>
                                                    <Option value="14">14</Option>
                                                </Select>
                                            </Input.Group>
                                        </div>
                                    </p>
                                    <p>
                                        Số lượng
                                        <div>
                                            <Input style={{ width: '70%' }} placeholder="0" />
                                        </div>
                                    </p>
                                    <div className="button--">
                                        <div className="button-pricee">
                                            <Button
                                                type="primary">
                                                Mua hàng
                                            </Button>
                                        </div>
                                        <div className="button-heartt">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reloadd">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="button-social">
                                        <p>
                                            Shipping & <span>Retuens</span>
                                        </p>
                                        <div>
                                            <img src={Facebook} />
                                            <img src={Google} />
                                            <img src={Instagram} />
                                            <img src={Twitter} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-productss">
                            <div className="tab-container">
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    <TabPane tab="ĐẶC ĐIỂM NỔI BẬT" key="1" >
                                        <div className="intro-productss">
                                            <div className="intro-productss-text">
                                                <p>THE MARK OF A LEGEND</p>
                                                <p>
                                                    Tự hào được ghi là năm mà Tiffany & Co
                                                    là thành lập, bộ sưu tập mang tính biểu
                                                    tượng này cung cấp cho một cái gật đầu
                                                    với qua trong khi thể hiện một cảm giác
                                                    hiện đại với kiểu dáng đẹp đường cong và
                                                    đường nét mượt mà.
                                                </p>
                                            </div>
                                            <img src={Ring} />
                                        </div>
                                        <div className="intro-productss" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                            <div className="intro-productss-text">
                                                <p>THE MARK OF A LEGEND</p>
                                                <p>
                                                    Tự hào được ghi là năm mà Tiffany & Co
                                                    là thành lập, bộ sưu tập mang tính biểu
                                                    tượng này cung cấp cho một cái gật đầu
                                                    với qua trong khi thể hiện một cảm giác
                                                    hiện đại với kiểu dáng đẹp đường cong và
                                                    đường nét mượt mà.
                                                </p>
                                            </div>
                                            <img src={Ring1} />
                                        </div>
                                        <div className="intro-productss">
                                            <div className="intro-productss-text">
                                                <p>THE MARK OF A LEGEND</p>
                                                <p>
                                                    Tự hào được ghi là năm mà Tiffany & Co
                                                    là thành lập, bộ sưu tập mang tính biểu
                                                    tượng này cung cấp cho một cái gật đầu
                                                    với qua trong khi thể hiện một cảm giác
                                                    hiện đại với kiểu dáng đẹp đường cong và
                                                    đường nét mượt mà.
                                                </p>
                                            </div>
                                            <img src={Ring3} />
                                        </div>
                                        <div className="intro-productss" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                            <div className="intro-productss-text">
                                                <p>THE MARK OF A LEGEND</p>
                                                <p>
                                                    Tự hào được ghi là năm mà Tiffany & Co
                                                    là thành lập, bộ sưu tập mang tính biểu
                                                    tượng này cung cấp cho một cái gật đầu
                                                    với qua trong khi thể hiện một cảm giác
                                                    hiện đại với kiểu dáng đẹp đường cong và
                                                    đường nét mượt mà.
                                                </p>
                                            </div>
                                            <img src={Ring3} />
                                        </div>
                                    </TabPane>
                                    <TabPane tab="THÔNG TIN SẢN PHẨM" key="2">
                                        <div className="info-productss">
                                            <img src={Nhanbac} />
                                            <p>
                                                Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn” không lời mạnh mẽ nhất của
                                                mỗi người phụ nữ. Do đó, việc mua sắm thời trang trở thành niềm vui, và có khi là nguồn cảm hứng
                                                vô tận để phái đẹp sống vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ của mình
                                                trước những xu hướng ngày một đa dạng hơn trong thế giới thời trang, nhiều chị em không ngần ngại chi
                                                tiêu “mạnh tay” để sở hữu những món đồ yêu thích.
                                            </p>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="ĐÁNH GIÁ" key="3">
                                        <div className="rate-productss">
                                            <p className="rate-title">HÃY ĐỂ LẠI NHẬN XÉT CỦA BẠN</p>
                                            <Rate allowHalf defaultValue={2.5} />
                                            <div className="rate-input">
                                                <p>Nội dung</p>
                                                <Input placeholder="" />
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                            <div className="another-productss">
                                <div className="another-productss-container">
                                    <p className="another-title">SẢN PHẨM BÁN CHẠY</p>
                                    <div className="descrip-productss">
                                        <img src={Ring4}/>
                                        <div className="descrip-info">
                                            <p>Mỹ phẩm châu âu</p>
                                            <div className="info-rate">
                                                <Rate 
                                                    style={{fontSize:'15px'}}
                                                    allowHalf defaultValue={2.5} 
                                                    count='4' 
                                                />
                                                <p>(4 lượt mua)</p>
                                            </div>
                                            <p className="info-price">355.000đ</p>
                                        </div>
                                    </div>
                                    <div className="descrip-productss">
                                        <img src={Ring4}/>
                                        <div className="descrip-info">
                                            <p>Mỹ phẩm châu âu</p>
                                            <div className="info-rate">
                                                <Rate 
                                                    style={{fontSize:'15px'}}
                                                    allowHalf defaultValue={2} 
                                                    count='4' 
                                                />
                                                <p>(4 lượt mua)</p>
                                            </div>
                                            <p className="info-price">355.000đ</p>
                                        </div>
                                    </div>
                                    <div className="descrip-productss">
                                        <img src={Ring4}/>
                                        <div className="descrip-info">
                                            <p>Mỹ phẩm châu âu</p>
                                            <div className="info-rate">
                                                <Rate 
                                                    style={{fontSize:'15px'}}
                                                    allowHalf defaultValue={1} 
                                                    count='4' 
                                                />
                                                <p>(4 lượt mua)</p>
                                            </div>
                                            <p className="info-price">355.000đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="another-productss-container">
                                    <p className="another-title">SẢN PHẨM MUA NHIỀU</p>
                                    <div className="descrip-productss">
                                        <img src={Ring4}/>
                                        <div className="descrip-info">
                                            <p>Mỹ phẩm châu âu</p>
                                            <div className="info-rate">
                                                <Rate 
                                                    style={{fontSize:'15px'}}
                                                    allowHalf defaultValue={3} 
                                                    count='4' 
                                                />
                                                <p>(4 lượt mua)</p>
                                            </div>
                                            <p className="info-price">355.000đ</p>
                                        </div>
                                    </div>
                                    <div className="descrip-productss">
                                        <img src={Ring4}/>
                                        <div className="descrip-info">
                                            <p>Mỹ phẩm châu âu</p>
                                            <div className="info-rate">
                                                <Rate 
                                                    style={{fontSize:'15px'}}
                                                    allowHalf defaultValue={4} 
                                                    count='4' 
                                                />
                                                <p>(4 lượt mua)</p>
                                            </div>
                                            <p className="info-price">355.000đ</p>
                                        </div>
                                    </div>
                                    <div className="descrip-productss">
                                        <img src={Ring4}/>
                                        <div className="descrip-info">
                                            <p>Mỹ phẩm châu âu</p>
                                            <div className="info-rate">
                                                <Rate 
                                                    style={{fontSize:'15px'}}
                                                    allowHalf defaultValue={1} 
                                                    count='4' 
                                                />
                                                <p>(4 lượt mua)</p>
                                            </div>
                                            <p className="info-price">355.000đ</p>
                                        </div>
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