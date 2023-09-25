import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Supertitle } from "components/Supertitle";

import bread1 from "static/images/bread1.png";
import bread2 from "static/images/bread2.png";

import "swiper/scss";
import "swiper/scss/navigation";
import "./styles.scss";

export const About = () => {
   return (
      <section className="about" id="about">
         <div className="container">
            <div className="about__images">
               <img src={bread1} alt="" />
               <img src={bread2} alt="" />
            </div>
            <div className="about__content">
               <div className="about__hat">
                  <Supertitle color="#171B1B" text="About Us" />
                  <h2>Baking Special Moments</h2>
               </div>
               <div className="about__slider">
                  <Swiper
                     direction={"vertical"}
                     navigation={true}
                     modules={[Navigation]}
                  >
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="01" />
                        <h4 className="sliderTitle">Last view back</h4>
                        <p className="sliderText">She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic.</p>
                        <div className="sliderDiv">
                           <p>On the skyline</p>
                           <p>Pityful a rethoric</p>
                           <p>On her way she</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="02" />
                        <h4 className="sliderTitle">The spring was uneven</h4>
                        <p className="sliderText">The weather changed constantly, blue and purple clouds rushed over the earth. The peasants looked at the fields with alarm.</p>
                        <div className="sliderDiv">
                           <p>In London</p>
                           <p>Opened umbrellas</p>
                           <p>Weather in April</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="03" />
                        <h4 className="sliderTitle">Then Colonel Abel</h4>
                        <p className="sliderText">Suddenly the youngest and most dapper of the three leaned forward. Yesterday he had lunch. Speaker lowered his voice.</p>
                        <div className="sliderDiv">
                           <p>With a short wave</p>
                           <p>Sat back in chair</p>
                           <p>Gray heads</p>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <Supertitle color="#171B1B" text="04" />
                        <h4 className="sliderTitle">The spark of curiosity</h4>
                        <p className="sliderText">A certain thought came to him, and the words of those around him lost all interest for him. Moreover, they began to irritate him.</p>
                        <div className="sliderDiv">
                           <p>Major Elkins</p>
                           <p>Kindled in the eyes</p>
                           <p>Story now completely</p>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   )
};