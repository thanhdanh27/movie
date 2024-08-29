import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterAlphabet from './components/FilterAlphabet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PlayMovies from './pages/PlayMovies';

function App() {
    const [listSingle, setListSingle] = useState();
    const [listTvShow, setListTvShow] = useState();
    const [listSerie, setListSerie] = useState();
    const [listMovieUpdate, setMovieUpadte] = useState();
    useEffect(() => {
        getMovies('https://phimapi.com/v1/api/danh-sach/phim-le?limit=50');
        getTvMovies('https://phimapi.com/v1/api/danh-sach/tv-shows');
        getSerie('https://phimapi.com/v1/api/danh-sach/phim-bo?limit=30');
        getMovieUpadte('https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1');
    }, []);

    const getMovies = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setListSingle(response.data.data.items);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getMovieUpadte = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setMovieUpadte(response.data.items);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getTvMovies = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setListTvShow(response.data.data.items);
            });
        } catch (error) {
            console.log(error);
        }
    };
    const getSerie = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setListSerie(response.data.data.items);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Router>
            <Header />
            <FilterAlphabet />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            listSingle={listSingle}
                            listTvShow={listTvShow}
                            listSerie={listSerie}
                            listMovieUpdate={listMovieUpdate}
                        />
                    }
                />
                <Route path="/:id1" element={<Movies listMovieUpdate={listMovieUpdate} single={true} />} />
                <Route path="/:id1/:id2" element={<Movies listMovieUpdate={listMovieUpdate} single={false} />} />
                <Route path="/play/:type/:slug" element={<PlayMovies listMovieUpdate={listMovieUpdate} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
