const MovieCard = ({ data }) => {
    console.log(data, 'data');
    return (
        <div>
            <h1>{data.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
        </div>
    )
}
export default MovieCard