import client from "./client";

const endpoint = "accounts/";

const addReviews = (review_score, review_text, reviewee_id, reviewer_id) =>
  client.post(endpoint + reviewer_id + "/reviews/", {
    review_score,
    review_text,
    reviewee_id,
    reviewer_id,
  });

const getReviews = (reviewer_id) => client.get(endpoint + reviewer_id + "/");

export default {
  addReviews,
  getReviews,
};
