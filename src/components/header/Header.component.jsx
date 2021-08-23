import classes from "./Header.styles.module.scss";

import fyloLogo from "../../assets/logo.svg";

function Header() {
  return (
    <div className={classes.header}>
      <img src={fyloLogo} className={classes.logo} alt="fylo logo" />
      <ul className={classes.links_list}>
        <li className={classes.list_item}>
          <a href="#features">Features</a>
        </li>
        <li className={classes.list_item}>
          <a href="#team">Team</a>
        </li>
        <li className={classes.list_item}>
          <a href="#signin">Sign In</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
