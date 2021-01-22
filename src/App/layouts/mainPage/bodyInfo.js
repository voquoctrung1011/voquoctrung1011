import React, { useState } from 'react';

import Plane from "../../../assets/images/plane.png";
import Gift from "../../../assets/images/gift.png";
import Star from "../../../assets/images/star.png";
import Tinhdau from "../../../assets/images/tinhdau.png";
import Nuochoa from "../../../assets/images/nuochoa.png";
import Gold from "../../../assets/images/gold.png";
import Tamtrang from "../../../assets/images/tamtrang.png";
import Trangsuc from "../../../assets/images/trangsuc.png";
import Daisy from "../../../assets/images/daisy.png";


function Information() {


    return (
        <>
                <div className="bodyinfo">
                    <div className="bodyinfo-container">
                        <div className="bodyinfo-items">
                            <img className="icons" src={Plane} />
                            <p>Miễn phí vận chuyển trên toàn quốc </p>
                        </div>
                        <div className="bodyinfo-items">
                            <img className="icons" src={Gift} />
                            <p>Nhận ngay quà tặng trị giá 350.000đ</p>
                        </div>
                        <div className="bodyinfo-items">
                            <img className="icons" src={Star} />
                            <p>Giảm 30% cho đơn hàng trên 5.000.000đ</p>
                        </div>
                    </div>

            {/* Image */}

                    <div className="bodyinfo-imgs">
                        <div className="imgs-container1">
                            <div className="imgs-container1-child">
                                <img src={Tinhdau} />
                                <img src={Nuochoa} />
                            </div>
                            <div >
                                <img src={Gold} />
                            </div>
                        </div>
                        <div className="imgs-container2">
                            <img src={Tamtrang} />
                            <div className="imgs-container2-child">
                                <img src={Trangsuc} />
                                <img src={Daisy} />
                            </div>
                        </div>
                    </div>
                </div>
        </>

    );
}
export default Information;