import classes from "./FeatureSection.styles.module.scss";

import FeatureContainer from "../feature-container/FeatureContainer.component";

const FEATURES_LIST = [
  {
    id: 1,
    featureIcon: "assets/icon-access-anywhere.svg",
    title: "Access your files,anywhere",
    description:
      "The ability to use smartphone,tablet, or computer to access your account means your files follow you everywhere. ",
  },
  {
    id: 2,
    featureIcon: "assets/icon-security.svg",
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. ",
  },
  {
    id: 3,
    featureIcon: "assets/icon-collaboration.svg",
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. ",
  },
  {
    id: 4,
    featureIcon: "assets/icon-any-file.svg",
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

function FeatureSection() {
  return (
    <section id="features" className={classes.features_section}>
      {FEATURES_LIST.map((feature) => (
        <FeatureContainer key={feature.id} {...feature} />
      ))}
    </section>
  );
}

export default FeatureSection;
