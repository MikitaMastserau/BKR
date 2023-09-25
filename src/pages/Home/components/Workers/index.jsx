import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Supertitle } from "components/Supertitle";

import baker1 from "static/images/baker1.png";

import "swiper/scss";
import "swiper/scss/navigation";
import "./styles.scss";

export const Workers = () => {
   return (
      <section className="workers">
         <div className="container">
            <div className="workers__content">
               <div className="workers__hat">
                  <Supertitle color="#171B1B" text="Our Baker" />
                  <h2>Meet Our Professional Baker</h2>
               </div>
               <div className="about__slider">
                  <Swiper
                     direction={"vertical"}
                     navigation={true}
                     modules={[Navigation]}
                  >
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="Baker" />
                        <h4 className="sliderTitle">Peter Johannes</h4>
                        <p className="sliderText">He fell softly, but tirelessly, sobbing and gurgling as he endured the ditch.</p>
                        <div className="sliderDiv">
                           <p>Superior</p>
                           <p>From Munster</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="Сonfectioner" />
                        <h4 className="sliderTitle">Stina Gunnarsdottir</h4>
                        <p className="sliderText">She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                        <div className="sliderDiv">
                           <p>Сake maker</p>
                           <p>From Essen</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="Сhief-cooker" />
                        <h4 className="sliderTitle">Lothar Stumpf</h4>
                        <p className="sliderText">Only the rustling of leaves and the sound of rain broke the silence.</p>
                        <div className="sliderDiv">
                           <p>Professional</p>
                           <p>From Hannover</p>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
            <div className="workers__photo">
               <img src={baker1} alt="" />
            </div>
         </div>
      </section>
   )
};