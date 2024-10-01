import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.scss";
export const Footer = () => {
    return <>
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="introduce">
                    <h4>Giới thiệu</h4>
                    <p>CÔNG TY TNHH PERFUME VIỆT NAM</p>
                    <p>MST: 0317526377</p>
                    <p>Ngày cấp: 18/10/2022</p>
                    <p>Nơi cấp: Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh</p>
                    <div className="logo-footer">
                        <a href="http://online.gov.vn/Home/WebDetails/104890" target="_blank" rel="noreferrer" aria-label="Logo Bộ Công Thương">
                            <img src="//theme.hstatic.net/200000374707/1001102170/14/logo-bct.png?v=1315" alt="Bộ Công Thương" />
                        </a>
                    </div>
                    <div className="social-list">
                        <FacebookSharpIcon className="fa-icon-social-list" />
                        <GoogleIcon className="fa-icon-social-list"/>
                        <TwitterIcon className="fa-icon-social-list"/>
                        <YouTubeIcon className="fa-icon-social-list"/>
                    </div>
                </div>
                <div className="policy-footer">
                    <h4 className="footer-title">
                        CHÍNH SÁCH
                    </h4>
                    <div className="footer-content">
                        <ul>

                            <li className="item">
                                <a href="/pages/about" title="Về Morra">Về Morra</a>
                            </li>

                            <li className="item">
                                <a href="/pages/he-thong-cua-hang" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a>
                            </li>

                            <li className="item">
                                <a href="/pages/chinh-sach-thanh-vien" title="Chính sách thành viên">Chính sách thành viên</a>
                            </li>

                            <li className="item">
                                <a href="/pages/dich-vu-danh-rieng-khach-hang-thanh-vien" title="Dịch vụ Độc quyền">Dịch vụ Độc quyền</a>
                            </li>

                            <li className="item">
                                <a href="/pages/thanh-toan-qua-vnpay" title="Thanh toán qua VNPAY">Thanh toán qua VNPAY</a>
                            </li>

                            <li className="item">
                                <a href="/pages/chinh-sach-bao-mat-thong-tin" title="Chính sách bảo mật">Chính sách bảo mật</a>
                            </li>

                            <li className="item">
                                <a href="/pages/chinh-sach-van-chuyen-giao-hang" title="Chính sách giao hàng">Chính sách giao hàng</a>
                            </li>

                            <li className="item">
                                <a href="/pages/chinh-sach-bao-hanh" title="Chính sách bảo hành">Chính sách bảo hành</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="address-footer">
                    <h4 className="footer-title">
                        Thông tin liên hệ
                    </h4>
                    <div className="footer-content ">
                        <ul>
                            <li><span>Địa chỉ</span> Văn phòng Morra: 46 đường số 5, KDC Him Lam, Phường Tân Hưng, Quận 7, TP. HCM.</li><li><span>Điện thoại</span> 098 675 39 69</li><li><span>Fax</span> 098 675 39 69</li><li><span>Hộp thư</span> morravietnam@gmail.com</li>							</ul>
                    </div>

                </div>
                <div className="fanpage">
                    {/* <div className="item-fanpage">
                            <img src="" alt="" />
                    </div> */}
                    <h4>FANPAGE</h4>
                </div>
            </div>
            <div className="copy-right">
                <div className="main-footer--border">
                    <p>Copyright © 2024 <a href="https://morra.com.vn"> Morra Signature Perfume</a>. <a target="_blank" href="https://www.haravan.com" rel="noreferrer">Powered by Galip Nguyen</a></p>
                </div>

            </div>
        </div>
    </>
}