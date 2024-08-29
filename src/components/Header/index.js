import './Header.scss';
import Logo from '../../assets/logoSvg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';

function Header() {
    return (
        <div className="wrapHeader">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 part1">
                        <ul className="headerMenu">
                            <li className="listMenu">
                                <a href="/">
                                    <img className="logo" src={Logo} alt="logo" />
                                </a>
                            </li>
                            <li className="listMenu">
                                <a href="/">Phim mới</a>
                            </li>
                            <li className="listMenu">
                                {' '}
                                <a href="/phim-le">Phim lẻ</a>
                            </li>
                            <li className="listMenu">
                                <a href="/phim-bo">Phim bộ</a>
                            </li>
                            <li className="listMenu">
                                Thể loại <FontAwesomeIcon className="dropdownIcon" icon={faChevronDown} />
                            </li>
                            <li className="listMenu">
                                Quốc gia <FontAwesomeIcon className="dropdownIcon" icon={faChevronDown} />
                            </li>
                            <li className="listMenu">Ds phim yêu thích</li>
                        </ul>
                    </div>
                    <div className="col-4 part2 text-end">
                        <div className="boxSearch">
                            <input type="text" className="inputSearch" placeholder="Tìm kiếm phim..." />
                            <button className="btnSearch">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <div className="user">
                            <FontAwesomeIcon className="iconUser" icon={faCircleUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
