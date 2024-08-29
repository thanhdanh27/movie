import Banner from '../../components/Banner';
import MoviePlayer from '../../components/MoviePlayer';
import Sidebar from '../../components/Sidebar';
import './Home.scss';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

function Home(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    const settings1 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 0,
        swipeToSlide: false,
        arrows: false,
    };

    const [singleMovie, setSingleMovies] = useState([]);

    useEffect(() => {
        setSingleMovies(props.listSingle);
    }, [props.listSingle]);
    return (
        <div className="wrapHome">
            <div className="wrapFilmsLayout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 part1">
                            <section className="outstandingFilms">
                                <div className="container-fluid">
                                    <h3>Phim lẻ HOT</h3>
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            {singleMovie !== undefined &&
                                                singleMovie.slice(0, 6).map((item, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <MoviePlayer data={item} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                    </div>
                                </div>
                            </section>
                            <Banner listTvShow={props.listTvShow} />

                            <section className="movieTheatersFilms ">
                                <div className="container-fluid">
                                    <h3>Phim bộ mới cập nhật</h3>
                                    <div className="seeMore notArrows">
                                        <a href="/phim-bo">Xem thêm </a>
                                    </div>
                                    <div className="slider-container">
                                        <Slider {...settings1}>
                                            {props.listSerie !== undefined &&
                                                props.listSerie.slice(0, 6).map((item, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <MoviePlayer data={item} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                        <Slider {...settings1}>
                                            {props.listSerie !== undefined &&
                                                props.listSerie.slice(6, 12).map((item, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <MoviePlayer data={item} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                        <Slider {...settings1}>
                                            {props.listSerie !== undefined &&
                                                props.listSerie.slice(20, 26).map((item, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <MoviePlayer data={item} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                    </div>
                                </div>
                            </section>
                            <section className="movieTheatersFilms ">
                                <div className="container-fluid">
                                    <h3>Phim lẻ mới cập nhật</h3>
                                    <div className="seeMore notArrows">
                                        <a href="/phim-le">Xem thêm </a>
                                    </div>
                                    <div className="slider-container">
                                        <Slider {...settings1}>
                                            {singleMovie !== undefined &&
                                                singleMovie.slice(6, 12).map((item, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <MoviePlayer data={item} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                        <Slider {...settings1}>
                                            {singleMovie !== undefined &&
                                                singleMovie.slice(12, 18).map((item, index) => {
                                                    return (
                                                        <div key={index} className="item">
                                                            <MoviePlayer data={item} />
                                                        </div>
                                                    );
                                                })}
                                        </Slider>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-3 part2">
                            <Sidebar data={props.listMovieUpdate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
