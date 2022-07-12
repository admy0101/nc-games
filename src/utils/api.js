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
      return data.categories;
    });
};

export const getSingleReview = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const increaseDecreaseVotes = (review_id, inc_votes) => {
  return reviewsApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data;
    });
};

export const getReviewComments = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postReviewComment = (review_id, body) => {
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, body)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return reviewsApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};
