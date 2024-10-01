import "./index.scss"
const Blog = () => {
    return <>
        {/* <div className="blog-wrapper">
            <div className="item-blog">
                <h1>Về Morra</h1>
                <div className="description">
                    <span>Chúng tôi - Morra - là chuỗi cửa hàng nước hoa pha chế đầu tiên và lớn nhất ở Việt Nam, được ra đời vào năm 2019, đạt đầy đủ tiêu chuẩn IFRA.</span>
                    <span>Chúng tôi luôn đồng hành cùng bạn đi tìm dấu hương đặc trưng riêng - Signature perfume - một thứ không thể thiếu để "định nghĩa" chính xác về bản thân mình. Một dấu hương đặc trưng khiến bạn trở nên khó quên và không hòa lẫn, một mùi hương phù hợp với bạn nhất, và sẽ là sự khởi đầu tuyệt vời cho mỗi ngày mới của bạn.</span>
                    <span>Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu. Đó là lý do Morra không ngừng lắng nghe và liên tục tối ưu để mang đến cho bạn trải nghiệm tốt nhất về chất lượng và dịch vụ.</span>
                    <span>Chúng tôi là một Thương hiệu Việt nhưng luôn theo đuổi chất lượng sản phẩm tiêu chuẩn Quốc tế. Minh chứng cho điều đó là nguồn nguyên liệu đến từ “nhà hương” hàng đầu Thế giới cùng công thức tạo nên nước hoa thành phẩm theo chuẩn Chuyên gia.</span>
                    <span>We, Morra, are the first and largest chain of perfume lab shops in Vietnam, established in 2019, has fully IFRA certificate.</span>
                    <span>We accompany customers to find their signature scent, "signature perfume", that truly defines them and says exactly what they want to be.</span>
                    <span>We are a Vietnamese brand but pursued International standard product quality. Proof of that is the source of fragrance from the world's leading fragrance house and the formula from the Experts.</span>
                </div>
                <div className="formation-history">
                    <h3><span>LỊCH SỬ HÌNH THÀNH  </span>
                        <span> MORRA'S UNIQUES</span></h3>
                    <div className="item-content-wrap">
                        <div className="title-formation">
                            2019
                        </div>
                        <div className="content-formation">
                            <ul>
                                <li>Thương hiệu tiên phong về mô hình nước hoa pha chế tại Việt Nam</li>
                                <li>Khách hàng có thể tham gia quá trình pha chế “nước hoa tươi” tại Morra Lab</li>
                                <li>Nhãn chai được cá nhân hóa khi in kèm tên riêng của Khách hàng</li>
                                <li>A pioneering brand in perfume lab model in Vietnam</li>
                                <li>Customers could participate in the process of making “fresh perfume” in-store</li>
                                <li>Customize the label printing with the personal name</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-content-wrap">
                        <div className="title-formation">
                            2020
                        </div>
                        <div className="content-formation">
                            <ul>
                                <li>Thương hiệu tiên phong về mô hình nước hoa pha chế tại Việt Nam</li>
                                <li>Khách hàng có thể tham gia quá trình pha chế “nước hoa tươi” tại Morra Lab</li>
                                <li>Nhãn chai được cá nhân hóa khi in kèm tên riêng của Khách hàng</li>
                                <li>A pioneering brand in perfume lab model in Vietnam</li>
                                <li>Customers could participate in the process of making “fresh perfume” in-store</li>
                                <li>Customize the label printing with the personal name</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="manufacturing-proces">
                    <h3><span>QUY TRÌNH CHẾ TÁC NƯỚC HOA MORRA</span>
                        <span> HOW WAS MORRA'S PERFUME MADE?.</span>
                    </h3>
                    <div className="content-manufacturing-proces">
                        <div className="title-manufacturing">
                            <h3>Giai đoạn 1:</h3>
                            <div className="description-manufacturing">
                                Hàng năm, các Chuyên gia chế tác hương thơm hoạt động tự do trên thế giới sẽ gửi “tác phẩm” của họ cho những nhà hương hàng đầu (fragrance house). Chọn lọc từ những sáng tạo đó - thông qua danh mục cập nhật hàng năm của các nhà hương - Morra mang đến cho bạn hương thơm nhập khẩu 100% nguyên liệu từ Pháp.
                            </div>
                            <div className="version-english-manufacturing">
                                <h3>Part 1:</h3>
                                <div className="description-manufacturing">
                                    Annual, Perfumers freelance in the world submit their creations to the leading fragrance houses. By sifting from those creations - through a yearly updated samples from fragrance houses - Morra brings trending perfumes imported with 100% ingredients from France to you.
                                </div>
                            </div>
                        </div>
                        <div className="image-wrap">
                            <img src="https://file.hstatic.net/200000374707/file/01_cef73a1039fa416d9910fab5ed892840_grande.png" alt="" />
                        </div>

                        <div className="title-manufacturing">
                            <h3>Giai đoạn 2:</h3>
                            <div className="description-manufacturing">
                                Nước hoa, trà, hay rượu vang đều có điểm chung là cần rất nhiều thời gian và công sức để đạt đến chất lượng tốt nhất. Để nước hoa có độ lan tỏa và lưu hương hoàn hảo, Morra chuyển tinh dầu nguyên gốc đến nhà máy chưng cất đạt chuẩn IFRA (International Fragrance Association - Chứng nhận mùi hương an toàn)
                            </div>
                            <div className="version-english-manufacturing">
                                <h3>Part 2:</h3>
                                <div className="description-manufacturing">
                                    A perfect perfume as almost like a tea or fine wine, have a lot of work and time goes into producing. When original fragrance oils were import to Vietnam, they must spend the perfume manufacturing process in Morra's manufactory partner (IFRA certificate).
                                </div>
                            </div>
                        </div>
                        <div className="image-wrap">
                            <img src="https://file.hstatic.net/200000374707/file/02_b6a971933dfc4570a2c6a216ba159e8e_grande.png" alt="" />
                        </div>


                        <div className="title-manufacturing">
                            <h3>Giai đoạn 3:</h3>
                            <div className="description-manufacturing">
                                Khách hàng được đồng hành trong từng bước pha chế tại cửa hàng đã trở thành dịch vụ mang dấu ấn riêng trong từng chai nước hoa Morra. Không chỉ vậy, Morra còn cung cấp cho bạn nhiều dịch vụ không tính phí để tối đa sự cá nhân hóa theo tính cách, sở thích, hoặc chỉ đơn giản là ghi lại khoảnh khắc của riêng mỗi người.Khách hàng được đồng hành trong từng bước pha chế tại cửa hàng đã trở thành dịch vụ mang dấu ấn riêng trong từng chai nước hoa Morra. Không chỉ vậy, Morra còn cung cấp cho bạn nhiều dịch vụ không tính phí để tối đa sự cá nhân hóa theo tính cách, sở thích, hoặc chỉ đơn giản là ghi lại khoảnh khắc của riêng mỗi người.
                            </div>
                            <div className="version-english-manufacturing">
                                <h3>Part 3:</h3>
                                <div className="description-manufacturing">
                                    The favorite featured service at Morra's store is the process of customer participation in making "fresh perfume". We provided diverse engraving laser designs to help customers personalize labels according to personality, and hobbies, or simply help them tell their own story.
                                </div>
                            </div>
                        </div>
                        <div className="image-wrap">
                            <img src="https://file.hstatic.net/200000374707/file/03_dfc869cd90734d258fcc056eb6e6f7c9_grande.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}


        {/* <div className="signature-perfume-wrap">
            <h1>Signature Perfume</h1>
            <div className="content-perfume">
                <strong>"Signature perfume"</strong> là một thứ không thể thiếu để bạn "định nghĩa" chính xác về bản thân mình. “Signature perfume” giúp bạn thể hiện cá tính và phong cách. Đối với người khác, “signature perfume” là cách họ sẽ nhớ và cảm nhận về bạn. Còn với riêng mỗi người, “signature perfume” là một cách tinh tế và gần gũi để tiết lộ bạn là ai. “Signature perfume” không giới hạn rằng bạn chỉ nên có một hoặc hai chai nước hoa, mà bất cứ dấu hương nào thể hiện được những điều bạn muốn người khác nhớ về mình đều có thể trở thành “signature perfume” của riêng bạn.
                Bằng tất cả niềm đam mê và lòng chân thành, Morra mong sẽ được đồng hành cùng bạn trên hành trình khám phá <strong>“signature perfume”</strong>.
            </div>
            <div className="content-perfume">
                <div >
                    Bằng tất cả niềm đam mê và lòng chân thành, Morra mong sẽ được đồng hành cùng bạn trên hành trình khám phá <strong>“signature perfume”</strong>.
                </div>
            </div>
            <div className="content-perfume">
                <div >
                    A fragrance that truly defines you is a <strong>signature perfume</strong>. Signature perfume help other deeply understand your personality. It is precisely what others feel and says about you. On the other side, signature perfume is a subtle and close way to tell your story too… Signature perfume does not mean limiting your number of perfume bottles. Let feel free to try and discover your signature for special occasions.
                </div>
            </div>
            <div className="content-perfume"><div>With all passion and sincerity, Morra hopes to accompany you on the journey to discover your <strong>signature perfume</strong>.</div></div>
        </div>
 */}

        <div className="perfume-code">
            <h1>Danh mục chuyển đổi mã số nước hoa</h1>
            <div className="description-perfume-code">
                <div>
                    Không giống như những món phụ kiện thông thường, giá trị vĩnh cửu của một mùi hương nằm ở khả năng lưu giữ các tầng lớp ký ức. Nước hoa có thể khơi gợi lại những hình ảnh, câu chuyện và cả cột mốc đáng nhớ của riêng bạn bằng thứ hương thơm cuốn hút đa tầng, hoặc đôi khi chỉ bằng một cái tên mà từ lâu đã gắn liền với những kỉ niệm.
                </div>
                <div>
                    Từ tháng 6, để những trải nghiệm cùng hương thơm của bạn được cá nhân hóa một cách trọn vẹn, Morra sẽ chính thức sử dụng <strong>mã số</strong> để nhận diện các dấu hương. Bạn hoàn toàn quyết định tên riêng của dấu hương mà bạn sở hữu, đây sẽ là phiên bản nước hoa độc nhất và gắn liền với dấu ấn của riêng bạn.
                </div>
                <div>
                    Danh mục mã số chính thức đã được cập nhật đầy đủ tại đây để bạn có thể dễ dàng đối chiếu:
                </div>
            </div>
            <div className="content-perfume-code">
                <span>No.01 (Musk Mallow)</span>

                <span>No.02 (Lilybell)</span>

                <span>No.03 (Sandalwood)</span>

                <span>No.04 (Black Currant)</span>

                <span>No.05 (Osmanthus)</span>

                <span>No.10 (Peony Cedar)</span>

                <span>No.11 (Mandarina Aqua)</span>

                <span>No.12 (Gardenia)</span>

                <span>No.15 (Lemon Cedar)</span>

                <span>No 16 (Rose Quince)</span>

                <span>No.20 (Love At First Scent)</span>

                <span>No.21 (Breakfast In Bed)</span>

                <span>No.22 (2 A.M)</span>

                <span>No.23 (Chill With The Blue)</span>

                <span>No.24 (Harmony Of The Sea)</span>

                <span>No.25 (Lost Cherry)</span>

                <span>No.26 (Private Drug)</span>

                <span>No.27 (Mystic Weapon)</span>

                <span>No.28 (Amber Oud)</span>

                <span>No.29 (Base)</span>

                <span>No.91 (Iris)</span>

                <span>No.92 (Bergamot Vetiver)</span>

                <span>No.93 (Rose Cedar)</span>

                <span>No.94 (Camel Vanilla)</span>

                <span>No.95 (Oceania)</span>

                <span>No.008 (Clove Tonka)</span>
            </div>
            <div className="footer-perfume-code">
                <div>Morra hy vọng rằng thông tin vừa rồi sẽ cung cấp thêm nhiều điều thú vị cho các tín đồ yêu thích nước hoa. Đừng quên theo dõi Morra để biết thêm nhiều bí mật chưa được bật mí trong các chuyên mục lần sau nhé.</div>
                <div className="waiting-for-you">Morra chờ bạn!</div>
            </div>

        </div>


    </>;
}

export default Blog;