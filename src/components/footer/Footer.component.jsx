import classes from "./Footer.styles.module.scss";

import { ReactComponent as FyloLogo } from "../../assets/logo.svg";
import LocationLogo from "../../assets/icon-location.svg";
import PhoneLogo from "../../assets/icon-phone.svg";
import EmailLogo from "../../assets/icon-email.svg";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.logo_container}>
        <FyloLogo className={classes.logo} />
      </div>

      <div className={classes.info_container}>
        <div
          className={`${classes.coord_container} ${classes.location_container}`}
        >
          <img src={LocationLogo} className={classes.icon} alt="location" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className={classes.contact_container}>
          <div className={classes.coord_container}>
            <img src={PhoneLogo} className={classes.icon} alt="phone" />
            <span>+1-543-123-4567</span>
          </div>
          <div className={classes.coord_container}>
            <img src={EmailLogo} className={classes.icon} alt="email" />
            <span>example@fylo.com</span>
          </div>
        </div>
        <div className={classes.pages_container}>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#jobs">Jobs</a>
          <a href="#terms">Terms</a>
          <a href="#press">Press</a>
          <a href="#privacy">Privacy</a>
          <a href="#blog">Blog</a>
        </div>
        <div className={classes.socials_list}>
          <div className={classes.social_container}>
            <img src={FacebookIcon} alt="facebook" />
          </div>
          <div className={classes.social_container}>
            <img src={TwitterIcon} alt="twitter" />
          </div>
          <div className={classes.social_container}>
            <img src={InstagramIcon} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
