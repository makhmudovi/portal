import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <>
      {data?.results.map((item, key) => (
        <>
          <Link to={`/movie/${item?.id}`}>
            <div className="movie-card">
              <div className="topper">
                <p>{item.title}</p>
                <div class="bar">
                  <div class="emptybar"></div>
                  <div class="filledbar"></div>
                </div>
              </div>

              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt=""
              />
            </div>
          </Link>
        </>
      ))}
    </>
  );
};

export default MovieCard;
