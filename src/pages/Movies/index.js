import React, { useState } from 'react';
import SideBar from '../../components/Sidebar';
import Slider from 'react-slick';
import './Movies.scss';
import FilterSearch from '../../components/FilterSearch';
import MoviePlayer from '../../components/MoviePlayer';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Movies(props) {
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

    const { id1, id2 } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(6);
    // const arrNumPages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const arrNumPages = [];
    for (let i = 0; i <= 150; i++) {
        arrNumPages.push(i);
    }
    const [infoMovies, setInfoMovies] = useState();
    useEffect(() => {
        getMovies(`https://phimapi.com/v1/api/danh-sach/${id1}?limit=30&page=${id2 !== undefined ? id2 : 1}`);
    }, [id1, currentPage, id2]);
    const getMovies = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setInfoMovies(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };
    // infoMovies !== undefined && console.log(infoMovies.data.params.pagination.currentPage);

    return (
        <div className="wrapMovies">
            <div className="row">
                <div className="col-9 part1">
                    <FilterSearch />
                    <h3 className="titleMovies">{infoMovies !== undefined && infoMovies.data.breadCrumb[0].name}</h3>
                    <section className="outstandingFilms">
                        <div className="container-fluid">
                            <h3>{infoMovies !== undefined && infoMovies.data.breadCrumb[0].name} HOT</h3>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {infoMovies !== undefined &&
                                        infoMovies.data.items.slice(0, 6).map((item, index) => {
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
                            <h3>{infoMovies !== undefined && infoMovies.data.breadCrumb[0].name} mới </h3>
                            <div className="slider-container">
                                <Slider {...settings1}>
                                    {infoMovies !== undefined &&
                                        infoMovies.data.items.slice(6, 12).map((item, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    <MoviePlayer data={item} />
                                                </div>
                                            );
                                        })}
                                </Slider>
                                <Slider {...settings1}>
                                    {infoMovies !== undefined &&
                                        infoMovies.data.items.slice(12, 18).map((item, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    <MoviePlayer data={item} />
                                                </div>
                                            );
                                        })}
                                </Slider>
                                <Slider {...settings1}>
                                    {infoMovies !== undefined &&
                                        infoMovies.data.items.slice(18, 24).map((item, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    <MoviePlayer data={item} />
                                                </div>
                                            );
                                        })}
                                </Slider>
                                <Slider {...settings1}>
                                    {infoMovies !== undefined &&
                                        infoMovies.data.items.slice(24, 30).map((item, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    <MoviePlayer data={item} />
                                                </div>
                                            );
                                        })}
                                </Slider>
                            </div>
                        </div>
                        <ul className="listPagination d-flex">
                            <li
                                onClick={(e) => {
                                    if (currentPage - 1 > 0) {
                                        setCurrentPage(currentPage - 1);
                                        setNextPage(nextPage - 1);
                                    }
                                }}
                            >
                                <Link to={`/${id1}/${currentPage - 1 === 0 ? 1 : currentPage - 1}`}>
                                    <FontAwesomeIcon className="iconDirec" icon={faChevronLeft} />
                                </Link>
                            </li>
                            {arrNumPages.slice(currentPage, nextPage).map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={currentPage === item ? 'active' : ''}
                                        onClick={(e) => {
                                            const selectedPage = +e.target.textContent;
                                            if (selectedPage - currentPage === 1) {
                                                setCurrentPage(selectedPage);
                                                setNextPage(nextPage + 1);
                                            } else if (selectedPage - currentPage > 1) {
                                                setCurrentPage(selectedPage);
                                                setNextPage(nextPage + (selectedPage - currentPage));
                                            }
                                        }}
                                    >
                                        <Link to={`/${id1}/${item}`}>{item}</Link>
                                    </li>
                                );
                            })}
                            <li
                                onClick={(e) => {
                                    setCurrentPage(currentPage + 1);
                                    setNextPage(nextPage + 1);
                                }}
                            >
                                <Link to={`/${id1}/${currentPage + 1}`}>
                                    <FontAwesomeIcon className="iconDirec" icon={faChevronRight} />
                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="col-3 part2">
                    <SideBar data={props.listMovieUpdate} />
                </div>
            </div>
        </div>
    );
}

export default Movies;
