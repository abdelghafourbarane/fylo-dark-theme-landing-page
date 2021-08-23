import classes from "./ProductiveSection.styles.module.scss";
import productiveIllustration from "../../assets/illustration-stay-productive.png";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";
import FeedbackCard from "../feedback-card/FeedbackCard.component";
import QuoteImage from "../../assets/bg-quotes.png";
import SpecialButton from "../special-button/SpecialButton.component";

const FEEDBACKS_LIST = [
  {
    id: 1,
    feedback:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    authorImage: "assets/profile-1.jpg",
    authorName: "Satish Patel",
    authorRole: "Founder & CEO,Huddle",
  },
  {
    id: 2,
    feedback:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ",
    authorImage: "assets/profile-2.jpg",
    authorName: "Bruce McKenzie",
    authorRole: "Founder & CEO,Huddle",
  },
  {
    id: 3,
    feedback:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    authorImage: "assets/profile-3.jpg",
    authorName: "Iva Boyd",
    authorRole: "Founder & CEO,Huddle",
  },
];

function ProductiveSection() {
  return (
    <section id="productive" className={classes.productive_section}>
      <div className={classes.illustration_container}>
        <img
          src={productiveIllustration}
          alt="stay productive illustration"
          className={classes.illustration}
        />
        <div className={classes.text_container}>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            <br /> Securely share files and folders with friends, family and
            colleagues for live collaboration. No email attachments required.
          </p>
          <div className={classes.link_container}>
            <a href="#howitworks">See how Fylo works</a>
            <ArrowIcon className={classes.arrow_icon} />
          </div>
        </div>
      </div>
      <div className={classes.feedbacks_list}>
        {FEEDBACKS_LIST.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
      <img src={QuoteImage} alt="quotes" className={classes.quotes_image} />
      <div className={classes.subscription_container}>
        <h2>Get early accesss today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. Of you have any questions, our support team would
          be happy to help you.
        </p>
        <div className={classes.input_container}>
          <input type="email" name="email" placeholder="email@example.com" />
          <SpecialButton className={classes.spec_button}>
            Get Started For Free
          </SpecialButton>
        </div>
      </div>
    </section>
  );
}

export default ProductiveSection;
