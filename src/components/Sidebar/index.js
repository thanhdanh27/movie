import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <h2 className="titleSidebar">Năm phát hành</h2>
            <ul className="listYears">
                <li className="listItemYear">
                    <a href="#!">2021</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2020</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2019</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2018</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2017</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2016</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2015</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2014</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2013</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2012</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2011</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2010</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2009</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2008</a>
                </li>
                <li className="listItemYear">
                    <a href="#!">2007</a>
                </li>
            </ul>
            <div className="recommendFilms">
                <h2 className="titleSidebar">Phim đề xuất</h2>
                <ul className="listRecommend">
                    {props.data !== undefined &&
                        props.data.map((item, index) => {
                            return (
                                <li key={index} className="itemRecommend">
                                    <a href={`/play/recommend/${item.slug}`}>
                                        <div className="wrapItemRecommend d-flex">
                                            <img src={item.poster_url} alt="Avatar" width="80" height="100" />
                                            <div className="wrapTitle">
                                                <span className="titleRecommendVi">{item.name}</span>
                                                <span className="titleRecommendEn d-block">{item.origin_name}</span>
                                                <div className="ratingRecommend">
                                                    <FontAwesomeIcon className="iconStar" icon={faStar} />
                                                    <span className="pointRecommend">
                                                        {(Math.random() * (10 - 5) + 5).toFixed(1)}
                                                    </span>
                                                </div>
                                                <span className="yearRecommend">{item.year}</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
