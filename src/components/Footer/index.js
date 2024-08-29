import './Footer.scss';
import Logo from '../../assets/logoSvg.svg';
function Footer() {
    return (
        <footer className="wrapFooter">
            <div className="row">
                <div className="col-5">
                    <img className="logo" src={Logo} alt="logo" />
                    <p className="desFooter">
                        **<a href="#!">Dovies</a>** - nơi bạn có thể xem hàng ngàn bộ phim mới từ khắp nơi trên thế
                        giới. Với giao diện thân thiện, dễ sử dụng và phù hợp với mọi lứa tuổi, Dovies.net mang đến cho
                        bạn trải nghiệm xem phim mượt mà, nhanh chóng và chất lượng HD.
                    </p>
                </div>
                <div className="col-7">
                    <ul className="listFooter">
                        <li className="listItemFooter">
                            Dovies.net
                            <ul>
                                <li className="listSubItemFooter">Phim mới</li>
                                <li className="listSubItemFooter">Phim lẻ</li>
                                <li className="listSubItemFooter">Phim bộ</li>
                                <li className="listSubItemFooter">Phim vietsub</li>
                                <li className="listSubItemFooter">Phim thuyết minh</li>
                                <li className="listSubItemFooter">Phim lồng tiếng</li>
                            </ul>
                        </li>
                        <li className="listItemFooter">
                            Phim hay
                            <ul>
                                <li className="listSubItemFooter">Phim Trung Quốc</li>
                                <li className="listSubItemFooter">Phim Âu Mỹ</li>
                                <li className="listSubItemFooter">Phim Nhật Bản</li>
                                <li className="listSubItemFooter">Phim Hàn Quốc</li>
                                <li className="listSubItemFooter">Phim Thái Lan</li>
                                <li className="listSubItemFooter">Phim Việt Nam</li>
                            </ul>
                        </li>
                        <li className="listItemFooter">
                            Thông tin
                            <ul>
                                <li className="listSubItemFooter">Liên hệ</li>
                                <li className="listSubItemFooter">Giới thiệu</li>
                                <li className="listSubItemFooter">Khiếu nại bản quyền</li>
                                <li className="listSubItemFooter">Chính sách bảo mật</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
