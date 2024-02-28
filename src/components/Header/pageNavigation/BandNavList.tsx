import { HashLink } from "react-router-hash-link";
import { useAppSelector } from "../../../app/hooks";
import { EBlockID } from "../../../globalTypesEnum";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import styles from "./_NavList.module.scss";
import { useLocation } from "react-router-dom";

const BandNavList: React.FC<Prop.Header.NavListProps> = ({ lyrics, setIsMenuOpen }) => {
   const activeNavigation = useAppSelector((state) => state.getActiveNavigationState);
   const { pathname } = useLocation();

   const handleFunction = () => {
      !pathname.includes("studio") && mainElementAnimation();
      setIsMenuOpen(false);
   };

   return (
      <ul
         className={styles.navigation}
         data-navigation="band"
      >
         {/* <li>
            <HashLink
               to="/"
               onClick={() => {
                  handleFunction();
                  window.scroll(0, 0);
               }}
               className={activeNavigation.focusOn === EBlockID.MAIN ? styles.active : ""}
            >
               Главная
            </HashLink>
         </li> */}
         <li className="rotateNavigation">
            <HashLink
               to={`/#${EBlockID.ABOUT}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.ABOUT ? styles.active : ""}
            >
               О нас
            </HashLink>
         </li>

         <li className="rotateNavigation">
            <HashLink
               to={`/#${EBlockID.TEAM}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.TEAM ? styles.active : ""}
            >
               Наша команда
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <HashLink
               to={`/#${EBlockID.COLLAB}`}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.COLLAB ? styles.active : ""}
            >
               Коллаборация
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <HashLink
               to={`/${EBlockID.GALLERY}`}
               onClick={() => {
                  handleFunction();
                  window.scroll(0, 0);
               }}
               className={activeNavigation.focusOn === EBlockID.GALLERY ? styles.active : ""}
            >
               Галерея
            </HashLink>
         </li>
         <li className="rotateNavigation">
            <a
               href={lyrics}
               target="_blank"
               rel="noopener noreferrer"
            >
               Репертуар
            </a>
         </li>
      </ul>
   );
};

export default BandNavList;
