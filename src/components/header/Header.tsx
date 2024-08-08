import "./header.scss"
import shopImage from "../../assets/img/shop.png"
import user from "../../assets/img/user.png"
import search from "../../assets/img/search-interface-symbol.png"
export const Header = () => {

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
                        <img src={user} alt="" />
                    </div>
                    <div className="search-header"><img src={search} alt="" /></div>
                </div>
            </div>
            <div className="footer-header">
                <span>/////</span>
            </div>
        </div>
    </>
}