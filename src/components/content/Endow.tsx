import "./endow.scss"

export const Endow = () => {

    return <>
        <div className="endow-wrapper">
            <h3>ƯU ĐÃI</h3>
            <div className="cart-endow">
                <div className="cart-endow-content">
                    <img src="https://product.hstatic.net/200000374707/product/no.34_66d2c7e71336486bb1cf57d6be50b09c_grande.png" alt="" />
                    <div className="price-and-name">
                        <div className="name-endow">
                            Nước hoa No.34
                        </div>
                        <div className="price-endow">
                            <span className="price-has-decreased">390,000đ</span>
                            <span className="original-price">450,000đ</span>
                        </div>
                    </div>
                    <div className="percent-decrease">
                        <span>-13%</span>
                    </div>
                </div>
                <div className="cart-endow-content-hover">
                    <img src="https://product.hstatic.net/200000374707/product/no.34-_nhom_huong_d5261d07c94e4937945070491d0f0009_grande.png" alt="" />
                    <div className="view-detail-cart-endow">
                        <span>XEM CHI TIẾT</span>
                    </div>
                </div>
            </div>
            <div className="view-detail-wrap"> <div className="view-detail">
                <span>XEM THÊM</span>

            </div></div>
        </div>

    </>

}