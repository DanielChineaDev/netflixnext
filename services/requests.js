const API_KEY = '784e7de8157d2c9be7b217645ad25110'

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en`,
    fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=en`,
    fetchTrendingMovies: `/trending/tv/day?api_key=${API_KEY}&language=en`
}

export default requests