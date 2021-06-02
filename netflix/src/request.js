const apiKey = "5998ee2a7df62488c4524946bd29656f";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/trending/tv/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US&with_genres=10749`,
    fetchDocumnetariesMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US&with_genres=98`,
};

export default requests;