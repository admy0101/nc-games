const axios = require("axios");

const reviewsApi = axios.create({
  baseURL: "https://be-games-proj.herokuapp.com/api",
});

export const getReviews = () => {
  return reviewsApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};
