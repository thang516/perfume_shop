import { useParams } from "react-router-dom";
import "./index.scss"
const Collection = () => {
    const { id } = useParams();
    return <>
        <div className="collection-wrapper">
            <div className="item-collection">
                <img src="https://product.hstatic.net/200000374707/product/no-30_66c586f715f54ae99ed29d9874f7fab1_grande.png" alt="" />
                <span>Nuoc hoa No.30</span>
                <div className="price">
                    <div className="discount-price">
                        354.000đ
                    </div>
                    <div className="original-price">
                        390.000đ
                    </div>
                </div>
                <div className="discount">
                    <span className="percent-discount">-9%</span>
                </div>
            </div>
            <div className="item-collection">
                <img src="https://product.hstatic.net/200000374707/product/no-30_66c586f715f54ae99ed29d9874f7fab1_grande.png" alt="" />
                <span>Nuoc hoa No.30</span>
                <div className="price">
                    <div className="discount-price">
                        354.000đ
                    </div>
                    <div className="original-price">
                        390.000đ
                    </div>
                </div>
                <div className="discount">
                    <span className="percent-discount">-9%</span>
                </div>
            </div>
            <div className="item-collection">
                <img src="https://product.hstatic.net/200000374707/product/no-30_66c586f715f54ae99ed29d9874f7fab1_grande.png" alt="" />
                <span>Nuoc hoa No.30</span>
                <div className="price">
                    <div className="discount-price">
                        354.000đ
                    </div>
                    <div className="original-price">
                        390.000đ
                    </div>
                </div>
                <div className="discount">
                    <span className="percent-discount">-9%</span>
                </div>
            </div>
        </div>
    </>;
}

export default Collection;