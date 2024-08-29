import './MoviePlayer.scss';
import PlayIcon from '../../assets/play.png';
import { useEffect, useState } from 'react';

function MoviePlayer(props) {
    const [infoMovie, setInfoMovie] = useState([]);
    useEffect(() => {
        setInfoMovie(props.data);
    }, [props.data]);
    return (
        <div className="wrapPoster">
            {infoMovie !== undefined && (
                <a href={`/play/${infoMovie.type}/${infoMovie.slug}`} className="wrapLink">
                    <div className="posterMovie">
                        <div className="imgPoster">
                            <img
                                height="220"
                                className="imgThumb w-100"
                                src={`https://phimimg.com/${infoMovie.poster_url}`}
                                alt="poster"
                            />
                            <span className="tagPoster">{infoMovie.time}</span>

                            <div className="playHover">
                                <img className="playImg" src={PlayIcon} alt="playmovie" />
                            </div>
                        </div>

                        <div className="desPoster">
                            <h4 className="vieTitle">{infoMovie.name}</h4>
                            <h5 className="enTitle">{infoMovie.origin_name}</h5>
                        </div>
                    </div>
                </a>
            )}
        </div>
    );
}

export default MoviePlayer;
