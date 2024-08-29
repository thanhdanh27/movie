import './Banner.scss';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

function Banner(props) {
    const settingsBanner = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const [infoMovie, setInfoMovie] = useState([]);
    useEffect(() => {
        setInfoMovie(props.listTvShow);
    }, [props.listTvShow]);
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="slider-container">
                    <Slider {...settingsBanner}>
                        {infoMovie !== undefined &&
                            infoMovie.map((item, index) => {
                                return (
                                    <a key={index} href={`/play/${item.type}/${item.slug}`}>
                                        <div className="item">
                                            <img
                                                className="w-100"
                                                src={`https://phimimg.com/${item.thumb_url}`}
                                                alt="banner"
                                                height="180"
                                            />

                                            <span className="titleQuality">{item.time}</span>
                                        </div>
                                    </a>
                                );
                            })}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Banner;
