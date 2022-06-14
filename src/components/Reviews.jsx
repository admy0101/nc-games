import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      owner: "tickle122",
      title: "Kerplunk; Don't lose your marbles",
      review_id: 13,
      category: "dexterity",
      designer: "Avery Wunzboogerz",
      review_body:
        "Don't underestimate the tension and supsense that can be brought on with a round of Kerplunk! You'll feel the rush and thrill of not disturbing the stack of marbles, and probably utter curse words when you draw the wrong straw. Fanily friendly, and not just for kids! ",
      review_img_url:
        "https://images.pexels.com/photos/278888/pexels-photo-278888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      created_at: "2021-01-25T00:00:00.000Z",
      votes: 9,
      comment_count: 3,
    },
  ]);

  useEffect(() => {
    getReviews().then((response) => {
      setReviews(response);
    });
  }, []);

  return (
    <div>
      <ul className="allReviews">
        {reviews.map((review) => {
          return (
            <li className="reviewsList" key={review.review_id}>
              <h3>{review.title}</h3>
              <img src={review.review_img_url} alt={review.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
