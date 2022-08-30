import { useEffect, useState } from "react";
import axios from "axios";
import './main.scss'
import MovieCard from "./components/movie-card";
const Home = () => {
    const [value, setValue] = useState(null)
    const [search, setSearch] = useState(null)
    const [movie, setMovie] = useState(null)
    console.log(value);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: '8d08d31e1b08de961a19e2ae293de867',
                query: value,
                // include_adult: true,
            }
        })
            .then(data => {
                setMovie(data.data)
                console.log(data.data.results, "data");
            })
            .catch(err => {
                console.log(err);
            })

    }, [value])

    return (
        <>
            <div className="movies">
                <MovieCard data={movie} />
            </div>
        </>
    )
}

export default Home


