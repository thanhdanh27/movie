import './ListFilms.scss';

function ListFilms() {
    const settings1 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 0,
        swipeToSlide: false,
        arrows: false,
    };
    return (
        <section className="movieTheatersFilms ">
            <div className="container-fluid">
                <h3>Phim lẻ mới cập nhật</h3>
                <div className="seeMore notArrows">
                    <a href="#!">Xem thêm </a>
                </div>
                <div className="slider-container">
                    <Slider {...settings1}>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                    </Slider>
                    <Slider {...settings1}>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                    </Slider>
                    <Slider {...settings1}>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                    </Slider>
                    <Slider {...settings1}>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                        <div className="item">
                            <MoviePlayer />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}
export default ListFilms;
