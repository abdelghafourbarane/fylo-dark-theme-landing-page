import classes from "./SpecialButton.styles.module.scss";

function SpecialButton({ children }) {
  return (
    <button className={classes.special_button}>
      <span>{children}</span>
    </button>
  );
}

export default SpecialButton;
