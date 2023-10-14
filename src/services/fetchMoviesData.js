import axios from "axios";
const fetchData = async (type, page, searchQuery) => {
  const typeParam = type.length > 0 ? type.join(",") : "all";
  try {
    const { data } = await axios.get(
      `https://www.namava.ir/api/v3.0/search/advance?type=${typeParam}&count=20&page=${page}&query=${searchQuery}`
    );
    const resultItems = data?.result?.result_items;
    if (!resultItems || resultItems.length === 0) return [];
    const movieData = resultItems[0]?.groups?.Media?.items;
    if (!movieData || movieData.length === 0) return [];

    return movieData.map((movie) => ({
      id: movie.id,
      name: movie.name,
      slug: movie.slug,
      url: movie.url,
      imageUrl: movie.image_url,
      type: movie.type,
    }));
  } catch (error) {
    console.error(error.response.data);
    return [];
  }
};


export default fetchData;
