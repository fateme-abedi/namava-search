import axios from "axios";
const fetchBriefData = async (id) => {
  try {
    const { data } = await axios.get(
      `https://www.namava.ir/api/v1.0/medias/${id}/brief-preview`
    );

    const resultItems = data?.result;
    if (!resultItems || resultItems.length === 0) return {};

    return resultItems;
  } catch (error) {
    console.error(error.response.data);
    return [];
  }
};
export default fetchBriefData;
