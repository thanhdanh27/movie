import './PlayerMovies.scss';
import SideBar from '../../components/Sidebar/index.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function PlayMovies(props) {
    const [infoMovie, setInfoMovie] = useState();
    const { slug } = useParams();
    useEffect(() => {
        getMovies(`https://phimapi.com/phim/${slug}`);
    }, [slug]);

    const getMovies = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setInfoMovie(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const [openBox, setOpenBox] = useState(0);
    return (
        <div className="wrapPlayMovies">
            <div className="row">
                <div className="col-9">
                    <div className="borderMovie">
                        <iframe
                            src={infoMovie !== undefined && infoMovie.episodes[0].server_data[0].link_embed}
                            frameborder="0"
                            allowfullscreen="true"
                            title="phim"
                            width="1070px"
                            height="600px"
                        ></iframe>
                        <div className="boxInfo">
                            <div className="container-fluid d-flex">
                                <img
                                    className="posterimg"
                                    src={infoMovie !== undefined && infoMovie.movie.poster_url}
                                    alt="poster"
                                />
                                <div className="boxTitle">
                                    <h2 className="vieTitle">{infoMovie !== undefined && infoMovie.movie.name}</h2>
                                    <h3 className="enTitle">
                                        {infoMovie !== undefined && infoMovie.movie.origin_name}
                                    </h3>
                                    <h4 className="time">{infoMovie !== undefined && infoMovie.movie.time}</h4>
                                    <div className="quality">
                                        <span>{infoMovie !== undefined && infoMovie.movie.lang}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="desMoive d-flex">
                        <li
                            onClick={() => {
                                setOpenBox(0);
                            }}
                            className={openBox === 0 ? 'active' : ''}
                        >
                            Thông tin
                        </li>
                        <li
                            onClick={() => {
                                setOpenBox(1);
                            }}
                            className={openBox === 1 ? 'active' : ''}
                        >
                            Diễn viên
                        </li>
                    </ul>
                    <div className={openBox === 0 ? 'boxDirector' : 'd-none'}>
                        <span
                            className="d-block"
                            style={{
                                color: '#fff',
                                fontSize: '1.8rem',
                                fontWeight: '500',
                                marginTop: '20px',
                                marginBottom: '20px',
                            }}
                        >
                            Tóm tắt
                        </span>
                        <p className="param">
                            <span style={{ color: '#ffffff99', fontWeight: '600' }}>
                                {infoMovie !== undefined && infoMovie.movie.name}:{' '}
                            </span>
                            {infoMovie !== undefined && infoMovie.movie.content}
                        </p>
                    </div>
                    <div className={openBox === 1 ? 'boxActor' : 'd-none'}>
                        <span
                            className="d-block"
                            style={{
                                color: '#fff',
                                fontSize: '1.8rem',
                                fontWeight: '500',
                                marginTop: '20px',
                                marginBottom: '20px',
                            }}
                        >
                            Đạo diễn
                        </span>
                        <div>{infoMovie !== undefined && infoMovie.movie.director}</div>
                        <span
                            className="d-block"
                            style={{
                                color: '#fff',
                                fontSize: '1.8rem',
                                fontWeight: '500',
                                marginTop: '20px',
                                marginBottom: '20px',
                            }}
                        >
                            Diễn viên
                        </span>
                        <div>
                            {infoMovie !== undefined &&
                                infoMovie.movie.actor.map((item, index) => {
                                    return <div key={index}>{item}</div>;
                                })}
                        </div>
                    </div>
                </div>
                <div className="col-3 part2">
                    <SideBar data={props.listMovieUpdate} />
                </div>
            </div>
        </div>
    );
}

export default PlayMovies;
