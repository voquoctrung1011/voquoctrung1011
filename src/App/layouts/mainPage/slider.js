import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import Mauanh from "../../../assets/images/person-mau.png";



const Slide = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <div className="slide-container">
                    <Slider {...settings}>
                        <div className="bodyinfo-slides">
                            <div className="bodyinfo-person">
                                <div className="person-mau">
                                    <img src={Mauanh} />
                                    <div className="person-text">
                                        <p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    dạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                                    công nghệ cải tiến mới nhất, hảng Rohto."
                                </p>
                                        <p>
                                            TUTILE
                                    <span>_Giảm đốc phát trển sản phẩm</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bodyinfo-slides">
                            <div className="bodyinfo-person">
                                <div className="person-mau">
                                    <img src={Mauanh} />
                                    <div className="person-text">
                                        <p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    dạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                                    công nghệ cải tiến mới nhất, hảng Rohto."
                                </p>
                                        <p>
                                            TUTILE
                                    <span>_Giảm đốc phát trển sản phẩm</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bodyinfo-slides">
                            <div className="bodyinfo-person">
                                <div className="person-mau">
                                    <img src={Mauanh} />
                                    <div className="person-text">
                                        <p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    dạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                                    công nghệ cải tiến mới nhất, hảng Rohto."
                                </p>
                                        <p>
                                            TUTILE
                                    <span>_Giảm đốc phát trển sản phẩm</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Slider>
            </div>
        </>
    );
}

export default Slide;