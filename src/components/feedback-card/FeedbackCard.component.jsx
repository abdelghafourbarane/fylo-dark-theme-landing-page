import classes from "./FeedbackCard.styles.module.scss";

function FeedbackCard({ feedback, authorName, authorImage, authorRole }) {
  return (
    <div className={classes.feedback_card}>
      <p>{feedback}</p>
      <div className={classes.profile_container}>
        <img src={authorImage} alt={authorName} />
        <div className={classes.profile_info}>
          <span className={classes.profile_name}>{authorName}</span>
          <span className={classes.profile_role}>{authorRole}</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
