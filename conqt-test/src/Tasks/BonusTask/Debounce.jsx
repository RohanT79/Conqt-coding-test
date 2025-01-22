import React, { useEffect, useState } from "react";
import "./Debounce.css";

const Debounce = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [debounceData, setDebounceData] = useState("");
  const [error, setError] = useState("");

  const fetchMovie = async (movieName) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${movieName}&apikey=7567ece8`
      );
      const data = await response.json();
      console.log(data, "data");
      if (data) {
        setMovieData(data?.Search);
      } else {
        setError(data?.Error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    fetchMovie(movieName);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceData(movieName);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [movieName]);

  useEffect(() => {
    if (movieName) {
      fetchMovie(movieName);
    }
  }, [debounceData]);

  return (
    <>
      <div className="main-div-debounce">
        <h3>Debounce App</h3>
        <div className="input-div-debounce">
          <input
            type="text"
            placeholder="Enter Movie name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button onClick={() => handleSubmit(movieName)}>Submit</button>
        </div>
        {movieName && (
          <div className="results-div">
            {movieData?.map((data) => (
              <p className="results-title">{data?.Title}</p>
            ))}
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default Debounce;
