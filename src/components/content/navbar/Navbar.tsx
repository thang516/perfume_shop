
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./navbar.scss";

export const Navbar = () => {
    return <>
        <ul className="list-mainmenu">
            <li className="has-submenu active">
                <a href="/" title="ƯU ĐÃI">
                    ƯU ĐÃI
                    <span className="icon-wrapper">
                        <KeyboardArrowUpIcon className="icon icon-up" />
                        <KeyboardArrowDownIcon className="icon icon-down" />
                    </span>

                </a>
                <ul className="list-submenu">
                    <li>
                        <a href="/pages/dich-vu-danh-rieng-khach-hang-thanh-vien" title="Dịch vụ dành riêng Thành viên">
                            Dịch vụ dành riêng Thành viên
                        </a>
                    </li>
                    <li>
                        <a href="/product/6-years-of-love" title="6 Years of Love">
                            6 Years of Love
                        </a>
                    </li>
                </ul>
            </li>
            <li className="has-submenu">
                <a href="/product/nuoc-hoa" title="Nước hoa">
                    Nước hoa
                    <span className="icon-wrapper">
                        <KeyboardArrowUpIcon className="icon icon-up" />
                        <KeyboardArrowDownIcon className="icon icon-down" />
                    </span>
                </a>
                <ul className="list-submenu">
                    <li>
                        <a href="/product/amber-ho-phach" title="Amber (hổ phách)">
                            Amber (hổ phách)
                        </a>
                    </li>
                    <li>
                        <a href="/product/chypre-huong-vi-dao-chypre" title="Chypre (hương đảo Chypre)">
                            Chypre (hương đảo Chypre)
                        </a>
                    </li>
                    <li>
                        <a href="/product/floral-huong-hoa-co" title="Floral (hương hoa cỏ)">
                            Floral (hương hoa cỏ)
                        </a>
                    </li>
                    <li>
                        <a href="/product/fresh-huong-tuoi-mat" title="Fresh (hương tươi mát)">
                            Fresh (hương tươi mát)
                        </a>
                    </li>
                    <li>
                        <a href="/product/fruity-huong-trai-cay" title="Fruity (hương trái cây)">
                            Fruity (hương trái cây)
                        </a>
                    </li>
                    <li>
                        <a href="/product/musk-xa-huong" title="Musk (xạ hương)">
                            Musk (xạ hương)
                        </a>
                    </li>
                    <li>
                        <a href="/product/leather-huong-da-thuoc" title="Leather (hương da thuộc)">
                            Leather (hương da thuộc)
                        </a>
                    </li>
                    <li>
                        <a href="/product/woody-huong-go" title="Woody (hương gỗ)">
                            Woody (hương gỗ)
                        </a>
                    </li>
                    <li>
                        <a href="/product/oriental-huong-phuong-dong-1" title="Oriental (hương Phương Đông)">
                            Oriental (hương Phương Đông)
                        </a>
                    </li>
                    <li>
                        <a href="/product/fougere-huong-reu-phong" title="Fougere (hương rêu phong)">
                            Fougere (hương rêu phong)
                        </a>
                    </li>
                </ul>
            </li>
            <li className="has-submenu">
                <a href="/product/san-pham-khac" title="Sản phẩm khác">
                    Sản phẩm khác
                    <span className="icon-wrapper">
                        <KeyboardArrowUpIcon className="icon icon-up" />
                        <KeyboardArrowDownIcon className="icon icon-down" />
                    </span>
                </a>
                <ul className="list-submenu">
                    <li>
                        <a href="/product/sua-tam-nuoc-hoa-lumin" title="Sữa tắm nước hoa">
                            Sữa tắm nước hoa
                        </a>
                    </li>
                    <li>
                        <a href="/product/nen-thom" title="Nến thơm">
                            Nến thơm
                        </a>
                    </li>
                </ul>
            </li>
            <li className="has-submenu">
                <a href="/pages/about" title="Giới thiệu">
                    Giới thiệu
                    <span className="icon-wrapper">
                        <KeyboardArrowUpIcon className="icon icon-up" />
                        <KeyboardArrowDownIcon className="icon icon-down" />
                    </span>
                </a>
                <ul className="list-submenu">
                    <li>
                        <a href="/pages/signature-perfume" title="Signature Perfume">
                            Signature Perfume
                        </a>
                    </li>
                    <li>
                        <a href="/pages/perfume-experience-center-pec" title="Perfume Experience Center (PEC)">
                            Perfume Experience Center (PEC)
                        </a>
                    </li>
                    <li>
                        <a href="/pages/about" title="Về Morra">
                            Về Morra
                        </a>
                    </li>
                    <li>
                        <a href="/pages/he-thong-cua-hang" title="Hệ thống cửa hàng">
                            Hệ thống cửa hàng
                        </a>
                    </li>
                    <li>
                        <a href="/pages/danh-muc-ma-so-nuoc-hoa" title="Danh mục mã số nước hoa">
                            Danh mục mã số nước hoa
                        </a>
                    </li>
                </ul>
            </li>
            <li className="has-submenu">
                <a href="/blogs/news" title="Blog">
                    Blog
                    <span className="icon-wrapper">
                        <KeyboardArrowUpIcon className="icon icon-up" />
                        <KeyboardArrowDownIcon className="icon icon-down" />
                    </span>
                </a>
                <ul className="list-submenu">
                    <li>
                        <a href="/blogs/tu-dien-thanh-phan" title="Từ điển thành phần">
                            Từ điển thành phần
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/pages/lien-he" title="Liên hệ">
                    Liên hệ
                </a>
            </li>
        </ul>
    </>
}