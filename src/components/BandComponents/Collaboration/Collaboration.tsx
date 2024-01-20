import styles from "./_collaboration.module.scss";
import cardsData from "../../../tempData/getCollabData";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CollabCard from "../../../UI/Cards/CollabCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import icon from "../../../assets/icons/teamArrow.png"
import { useCallback, useRef } from "react";


type Cards = {
   src: Promise<typeof import("*.png")>;
   alt: string;
   firstName: string;
   lastName: string;
}[];


const Collaboration = () => {

   const [cards, setCards] = useState<Cards>();
   useEffect(() => {
      const loadCards = async () => {
         await new Promise(cardsData).then((imported) => setCards(imported));
      };

      loadCards();
   }, []);

   const sliderRef = useRef(null);

   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      // @ts-ignore
      sliderRef.current.swiper.slidePrev();
   }, []);
   
   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      // @ts-ignore
      sliderRef.current.swiper.slideNext();
   }, []);

   return (
      <SectionWrapper header={"Коллаборации"} id={styles.collabWrapper}>
         <div className={styles.collabCardsContainer}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
               <img src={icon} alt=""/>
            </button>
            <Swiper
            ref={sliderRef}
            className={styles.collabSwiper} 
            breakpoints={{
               1440: {
                 slidesPerView: 4,
                 spaceBetween: -200
               },
               1200: {
                 slidesPerView: 3,
                 spaceBetween: -270
               },
               1024: {
                 slidesPerView: 3,
                 spaceBetween: -265
               },
               1000: {
                  slidesPerView: 4,
                  spaceBetween: -20
               },
               892: {
                 slidesPerView: 3,
                 spaceBetween: -140
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: -220
               },
               658: {
                 slidesPerView: 2,
                 spaceBetween: -140
               },
               576: {
                 slidesPerView: 2,
                 spaceBetween: -20
               },
               482: {
                 slidesPerView: 2,
                 spaceBetween: -75
               },
               390: {
                 slidesPerView: 2,
                 spaceBetween: -10
               }
            }}
            >
            {cards?.map((card, i) => (
               <SwiperSlide key={i}>
                  <CollabCard
                     src={card.src}
                     alt={card.alt}
                     firstName={card.firstName}
                     lastName={card.lastName}
                  ></CollabCard>
               </SwiperSlide>
            ))}
            </Swiper>
            <button className={styles.buttonNext} onClick={handleNext}>
               <img src={icon} alt=""/>
            </button>
            <div className={styles.lastCardPadding}></div>
         </div>
      </SectionWrapper>
   );
};


export default Collaboration;