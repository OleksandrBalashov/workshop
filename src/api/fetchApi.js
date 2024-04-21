import axios from "axios";
axios.defaults.baseURL =
  "https://661a1d27125e9bb9f29b589a.mockapi.io/api/adverts";

export const getAll = async () => {
  try {
    const { data } = await axios.get("/");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAdvert = async (id, body) => {
  try {
    const { data } = await axios.put(`/${id}`, body);

    return !!data;
  } catch (error) {
    console.log(error);
  }
};

export const findAdvertById = async (id) => {
  try {
    const { data } = await axios.get(`/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
