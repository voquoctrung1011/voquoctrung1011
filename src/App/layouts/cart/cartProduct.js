import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppContext from '../../../AppContext';

import { Container, Table } from 'reactstrap';
import { Tag, notification, Button } from 'antd';


import Plus from "../../../assets/images/add.png";
import Minus from "../../../assets/images/minus.png"
import Heart from "../../../assets/images/heart.png";
import Reload from "../../../assets/images/reload.png";



const Cart = (props) => {

    const { cart, setCart, products, setProducts } = useContext(AppContext);
    
    
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
        if (item.count <= 0){
            return;
            onDelete(item);
        }
        else{
            cart[index].count = cart[index].count - 1;
            cart[index].sumPrice = cart[index].sumPrice - cart[index].price;
            localStorage.setItem('cart', JSON.stringify(cart));
            setCart([...cart])
        }
    }


    return (
        <>
            <Container>
                <div className="cartt">
                    <div className="cartt-container">
                        <div className="link">
                            <NavLink className="NavLink" exact to="/" >Home</NavLink>
                            <NavLink className="NavLink" exact to="/cart" >Cart</NavLink>
                        </div>
                        <div className="table-carts">
                            <p className="giohang">GIỎ HÀNG</p>
                            <Table bordered >
                                <thead style={{ backgroundColor: '#dee2e6' }}>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Number</th>
                                        <th>Sum Of Price</th>
                                        <th>Delect</th>
                                    </tr>
                                </thead>
                                <tbody style={{ overflowY: 'auto', height: '300px' }}>
                                    {cart.map((itemProduct, index) => (
                                        <>
                                            <tr key={itemProduct.id}>
                                                <th
                                                >
                                                    <img
                                                        style={{ width: '150px', height: '150px' }}
                                                        src={itemProduct.img} />
                                                </th>
                                                <td>{itemProduct.name}</td>
                                                <td><Tag color='purple'>{itemProduct.price}$</Tag></td>
                                                <td>
                                                    <img
                                                        style={{ width: '20px', height: '20px' }}
                                                        src={Plus}
                                                        onClick={() => onPlus(itemProduct, index)}
                                                    />
                                                    <p
                                                        style={{ paddingTop: '5px' }}
                                                    >
                                                        {itemProduct.count}
                                                    </p>

                                                    <img
                                                        style={{ width: '20px', height: '20px', marginBottom: '5px' }}
                                                        src={Minus}
                                                        onClick={() => onMinus(itemProduct, index)}
                                                    />
                                                </td>
                                                <td>{itemProduct.sumPrice}$</td>
                                                <td>
                                                    <Button
                                                        onClick={() => onDelete(itemProduct)}
                                                        danger
                                                    >Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </Table>
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
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Cart;