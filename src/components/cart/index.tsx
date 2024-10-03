
import "./index.scss";
import trashPin from "../../assets/img/trash-bin.png"
export const Cart = () => {
    return <>
            <h1>GIỎ HÀNG CỦA BẠN</h1>

        <div className="cart-shopping-wrap">
            <div className="item-cart-container">
                <span className="title-item">Bạn đang có 6 sản phẩm trong giỏ hàng</span>
                <div className="content-cart">
                    <div className="sub-content">
                        <img src="https://product.hstatic.net/200000374707/product/91_73d0c2c9d1e84be89450228ec1ea02fa_medium.png" alt="" />
                        <div className="name-and-capacity"> 
                            <span className="name-product-cart">Nước hoa No.91</span>
                            <div className="capacity-product">
                                10ml
                            </div>
                        </div>
                    </div>
                    <div className="amount-and-price">
                        <div className="amount">
                            <div className="decrease">-</div>
                            <div className="display-quantity">5</div>
                            <div className="increase">+</div>
                        </div>
                        <div className="price-product">
                            34,000,000đ
                        </div>
                    </div>

                    <div className="total-money-wrap">
                        <span className="title-total-money">Thành tiền:</span>
                        <span className="money">1,700,000đ</span>
                        <img src={trashPin} alt="" />
                    </div>

                </div>
             
            </div>
            <div className="footer-cart-shopping">
                    <div className="note-order">
                        <span>Ghi chú đơn hàng</span>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div className="policy-guarantee">
                        <span>Chính sách bảo hành</span>
                        <ul>
                            <li>Bảo hành trọn thời gian sử dụng sản phẩm đối với các phụ kiện: tem, khoen, vòi, nắp.</li>
                            <li>Bảo hành bất kỳ lỗi kỹ thuật sản xuất không bao gồm rơi vỡ.</li>
                            <li>Bảo hành không bao gồm các lỗi do bất cẩn trong quá trình sử dụng.</li>
                        </ul>
                    </div>
                </div>
        </div>

    </>
}