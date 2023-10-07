import axios from "axios";
const fetchData = async (page, searchQuery) => {
  if (searchQuery) {
  }
  try {
    const response = await axios.get(
      `https://www.namava.ir/api/v3.0/search/advance?type=all&count=20&page=${page}&query=${searchQuery}`
    );
    const resultItems = response.data.result.result_items;
    if (resultItems.length === 0) return [];
    const movieData = resultItems[0].groups.Media.items;
    if (movieData.length === 0) return [];

    return movieData.map((movie) => ({
      id: movie.id,
      name: movie.name,
      slug: movie.slug,
      url: movie.url,
      imageUrl: movie.image_url,
      type: movie.type,
      contentPlayAccessType: movie.contentPlayAccessType,
    }));
  } catch (error) {
    console.error(error.response.data);
    return [];
  }
};
console.log(fetchData(1, "f"));

export default fetchData;
