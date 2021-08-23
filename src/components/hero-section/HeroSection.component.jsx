import classes from "./HeroSection.styles.module.scss";

import FolderIllustration from "../../assets/illustration-intro.png";
import SpecialButton from "../special-button/SpecialButton.component";
import DesktopCurv from "../../assets/bg-curvy-desktop.svg";

function HeroSection() {
  return (
    <section id="hero" className={classes.hero_section}>
      <img
        src={FolderIllustration}
        className={classes.img_illustration}
        alt="folder illustration"
      />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <SpecialButton className={classes.btn}>Get Started</SpecialButton>
      <img className={classes.curv_img} alt="curv" src={DesktopCurv} />
    </section>
  );
}

export default HeroSection;
