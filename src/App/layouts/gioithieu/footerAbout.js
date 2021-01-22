import React, { useState } from 'react';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import { Row, Col } from 'antd';
import imgFooter from "../../../assets/images/footer_extend.png";
import Map from "../../../assets/images/map.png";
import Phone from "../../../assets/images/phone.png";
import Phoneban from "../../../assets/images/phoneban.png";
import Email from "../../../assets/images/email.png";



const footer = () => {

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

    const settings = {  
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

    return (
        <>
                <div className="footerr">
                    <div className="containerr">
                        <Row className="row-containerr">
                            <Col className="col11" span={8}>
                                <p className="titlee">LIÊN HỆ VỚI CHÚNG TÔI</p>
                                <div className="vitrii">
                                    <div className="vitri-titlee">
                                        <img className="img-itemm" src={Map} />
                                        <p>Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,
                                     P.Cống Vị, Q. Ba Đình, Hà Nội
                                     </p>
                                    </div>
                                    <div className="ul-lienhee">
                                        <ul>
                                            <li>
                                                <img className="img-itemm" src={Phone} />
                                                <a>(04) 6674 2332</a>
                                            </li>
                                            <li>
                                                <img className="img-itemm" src={Phone} />
                                                <a>(04) 6674 2332</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <img className="img-itemm" src={Phoneban} />
                                                <a>(04) 6674 2332</a>
                                            </li>
                                            <li>
                                                <img className="img-itemm" src={Email} />
                                                <a>Support@bizweb.vn</a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col22" span={4}>
                                <p className="titlee">CHUYỂN HÀNG</p>
                                <ul className="listt">
                                    <li>mua sắm trực tuyến</li>
                                    <li>Đến từ chúng tôi gửi đến</li>
                                    <li>Chính sách vận chuyển</li>
                                    <li>Vận chuyển thông tin</li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <p className="titlee">HỖ TRỢ</p>
                                <ul className="listt">
                                    <li>Câu chuyện của chúng tôi</li>
                                    <li>Thanh toán an toàn</li>
                                    <li>Tùy chọn vận chuyển</li>
                                    <li>Chính sách vận chuyển</li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <p className="titlee">THÔNG TIN</p>
                                <ul className="listt">
                                    <li>về Chúng Tôi</li>
                                    <li>Điều khoản & điều kiện</li>
                                    <li>Chính Sách Riêng Tư</li>
                                    <li>Vận chuyển thông tin</li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <p className="titlee">MY ACCOUNT</p>
                                <ul className="listt">
                                    <li>mua sắm trực tuyến</li>
                                    <li>Đến từ chúng tôi gửi đến</li>
                                    <li>Chính sách vận chuyển</li>
                                    <li>Theo dõi đặt hàng của tôi</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-imagee">
                        <p>c© Copyright 2008-2014 DKT Technology JSC</p>
                        <img className="imgFooterr" src={imgFooter} />
                    </div>
                </div>
        </>

    );
}
export default footer;