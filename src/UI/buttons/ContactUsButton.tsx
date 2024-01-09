import { FC } from "react";
import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";
type whatsapp = {
  whatsapp: string;
};
const ContactUsButton: FC<whatsapp> = ({ whatsapp }) => {
  return (
    <a href={whatsapp} target="blank" className={styles.buttonContainer}>
      <button className={styles.button}>
        Связаться с нами
        {phone}
      </button>
    </a>
  );
};

export default ContactUsButton;
