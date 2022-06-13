const axios = require("axios");

const reviewsApi = axios.create({
  baseURL: "https://be-games-proj.herokuapp.com/api",
});

export const getReviews = () => {
  return reviewsApi.get("/reviews").then(( {data} ) => {
    console.log("in api utils");
    console.log(data);
    console.log(data.reviews)
    return data.reviews;

  });
};
