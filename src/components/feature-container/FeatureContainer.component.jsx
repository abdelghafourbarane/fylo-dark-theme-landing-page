import classes from "./FeatureContainer.styles.module.scss";

function FeatureContainer({ featureIcon, title, description }) {
  return (
    <div className={classes.feature_container}>
      <img src={featureIcon} alt={title} className={classes.image} />
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  );
}

export default FeatureContainer;
