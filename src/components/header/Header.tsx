import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import search from "../../assets/img/search-interface-symbol.png";
import shopImage from "../../assets/img/shop.png";
import user from "../../assets/img/user.png";
import cartShopping from "../../assets/img/shopping-cart.png";
import { Navbar } from "../content/navbar/Navbar";
import "./header.scss";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export const Header = () => {
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, right: open });
    };
    const list = () => (
        <Box
            sx={{ width: 450 }}
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={toggleDrawer(false)}
        >
            <div className="search-panel-wrap">
                <div className='header-search'>
                    <h2 className='search-panel'>TÌM KIẾM</h2>
                    <div onClick={toggleDrawer(false)}><CloseIcon /></div>
                </div>
                <TextField id="outlined-search" label="Tìm kiếm sản phẩm" type="search" />
            </div>
        </Box>
    );
    const cart = () => (
        <Box
            sx={{ width: 450 }}
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={toggleDrawer(false)}
        >
            <div className="cart-panel-wrap">
                <div className='header-cart'>
                    <h2 className='name-cart-panel'>GIỎ HÀNG</h2>
                    <div onClick={toggleDrawer(false)}><CloseIcon /></div>
                </div>
                <div className="cart-container">
                    <div className="item-cart">
                        <img src="https://product.hstatic.net/200000374707/product/22_20ml_b06670e9dfe34b11b871f2d6b3d814f3_small.png" alt="" />
                        <div className="wrap-content-cart">
                            <span className='name-product-in-cart'>Nước hoa No. 22</span>
                            <span className="variant">20ml</span>
                            <div className='pro-view'>
                                <span className="pro-quantity-view">1</span>
                                <span className="pro-price-view">850,000₫</span>
                            </div>
                        </div>
                        <div><CloseIcon /></div>
                    </div>
                    <span className='border-line'></span>

                    <div className='total-money'>
                        <span>TỔNG TIỀN:</span>
                        <span>2,600,00đ</span>
                    </div>
                </div>
                <div className="footer-cart-wrap">
                    <button className='button-detail'>
                        <span>XEM GIỎ HÀNG</span>
                    </button>
                    <button className='button-payment'>
                        <span>THANH TOÁN</span>
                    </button>
                </div>
            </div>
        </Box>
    );

    return <>
        <div className="header-wrapper">

            <div className="advertisement">
                <span>Miễn phí cho tất cả đơn hàng</span>
            </div>
            <div className="content-header">

                <div className="store">
                    <a href="https://morra.com.vn/pages/he-thong-cua-hang">
                        <img src={shopImage} alt="" />
                        CỬA HÀNG</a>
                </div>
                <div className="logo">
                    <a href="https://morra.com.vn/"><img src="//theme.hstatic.net/200000374707/1001102170/14/logo.png?v=1315" alt="Morra Signature Perfume" className="img-responsive logoimg ls-is-cached lazyloaded" /></a>
                </div>
                <div className="user-setting">
                    <div className="user">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} alt="" />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">User</a></li>
                                <li><a className="dropdown-item" href="#">Login</a></li>

                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-header">
                        <div>
                            <Button onClick={toggleDrawer(true)}><img src={search} alt="" /></Button>
                            <Drawer
                                anchor="right"
                                open={state.right}
                                onClose={toggleDrawer(false)}
                            >
                                {list()}
                            </Drawer>
                        </div>

                    </div>
                    <div className="cart">

                        <div>
                            <Button onClick={toggleDrawer(true)}><img src={cartShopping} alt="" /></Button>
                            <Drawer
                                anchor="right"
                                open={state.right}
                                onClose={toggleDrawer(false)}
                            >
                                {cart()}
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-header">
                <Navbar />
            </div>
        </div>
    </>
}