import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieInner = () => {
  const { movieId } = useParams();
  
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: "8d08d31e1b08de961a19e2ae293de867",
          query: value,
        },
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data, "data");
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>


      {
          data ?
          <> 
             <img src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} alt=""/>
             {/* <img src={`https://image.tmdb.org/t/p/w500/${data?.belongs_to_collection?.backdrop_path}`} alt="" /> */}
             <a href={data?.homepage}>{data?.production_companies.logo_path}</a>
          </>
          :<p>F U</p>
      }
    </>
  )
}

export default MovieInner

