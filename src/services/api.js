import axios from "axios";
const fetchData = async (page, searchQuery) => {
  try {
    const response = await axios.get(
      `https://www.namava.ir/api/v3.0/search/advance?type=all&count=20&page=${page}&query=${searchQuery}`
    );
    const resultItems = response.data.result.result_items;
    const movieData = resultItems[0].groups.Media.items;

    return movieData;
  } catch (error) {
    console.error(error.response.data);
    return [];
  }
};

export default fetchData;
