// modules
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../globalTypesEnum";
import { useAppSelector } from "../../../app/hooks";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
// styles
import styles from "./_aboutBand.module.scss";
// static data
import staticText from "./staticData.json";

const AboutBand: React.FC = () => {
   const data = useAppSelector((state) => state.getAboutBand.data);
   const { refToogle } = useToggleActiveNavigation(EBlockID.ABOUT);

   return (
      <SectionWrapper className={styles.aboutBand} header={"Cool band"} id={EBlockID.ABOUT}>
         <div className={styles.about} ref={refToogle}>
            <article className={styles.article}>
               <p>{staticText.text1}</p>
               <p>{staticText.text2}</p>
               <p>{staticText.text3}</p>
            </article>
            <div className={styles.image}>
               <ImageLoader src={data?.image} bluer={data?.bluer && data.bluer} />
            </div>
         </div>
      </SectionWrapper>
   );
};

export default AboutBand;
