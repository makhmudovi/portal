import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import './main.scss'
const Header = () => {
    const [value, setValue] = useState(null)
    const [movie, setMovie] = useState(null)
    console.log(value);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/search/movie', {
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
            <div className="header">
                {
                    movie?.results.map((item, key) => (
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
                    ))
                }
                <div className="logo">
                    <Link className='header-link' to="/">CARNAGE</Link>
                </div>
                <div className="navgation">
                    <Link className='header-link' to="/">HOME</Link>
                    <Link className='header-link' to="/product">ABOUT US</Link>
                    <Link className='header-link' to="/support">MENU</Link>
                    <Link className='header-link' to="/movie">CONTACT</Link>
                </div>
                <input onChange={(e) => setValue(e.target.value)} value={value} type="search" />
            </div>
        </>
    )
}
export default Header