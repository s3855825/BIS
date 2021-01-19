import client from "./client";

const endpoint = "accounts/";

const addReviews = (review_score, review_text, reviewee, receiver_id) =>
  client.post(endpoint + receiver_id + "/reviews/", {
    reviewee,
    review_score,
    review_text,
  });

export default {
  addReviews,
};
