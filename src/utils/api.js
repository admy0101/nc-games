const axios = require("axios");

const reviewsApi = axios.create({
  baseURL: "https://be-games-proj.herokuapp.com/api",
});


export const getReviews = (category) => {
  return reviewsApi
    .get("/reviews", { params: { category: category } })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getCategories = (category) => {
  return reviewsApi
    .get("/categories", { params: { category: category } })
    .then(({ data }) => {
      return data.categories
    });

};
