import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Supertitle } from "components/Supertitle";

import photo1 from "static/images/photo1.png";
import photo2 from "static/images/photo2.png";
import photo3 from "static/images/photo3.png";
import photo4 from "static/images/photo4.jpg";
import photo5 from "static/images/photo5.jpg";

import "swiper/scss";
import "swiper/scss/pagination";
import "./styles.scss";

export const Reviews = () => {
   return (
      <section className="reviews">
         <div className="container">
            <div className="reviews__hat">
               <Supertitle color="#171B1B" text="Testimonials" />
               <h2>People Say About Our Bakery</h2>
            </div>
            <div className="reviews__slider">
               <Swiper
                  grabCursor={true}
                  pagination={{
                     clickable: true,
                  }}
                  slideToClickedSlide={true}
                  modules={[Pagination]}
                  breakpoints={{
                     300: {
                        slidesPerView: 1,
                        centeredSlides: false,
                        initialSlide: 0,
                     },
                     767: {
                        slidesPerView: 2,
                        centeredSlides: false,
                        initialSlide: 0,
                     },
                     1199: {
                        slidesPerView: 3,
                        centeredSlides: true,
                        initialSlide: 1,
                     }
                  }}
                  className="reviewsSwiper"
               >
                  <SwiperSlide>
                     <div className="reviewsPhotos">
                        <div className="stars"></div>
                        <img src={photo1} alt="" />
                     </div>
                     <h4 className="reviewsTitle">Very, Very Delicious</h4>
                     <p className="reviewsText">"Nothing the copy said could convince her and so it didn’t take long. A small river named Duden flows by their"</p>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="reviewsPhotos">
                        <div className="stars"></div>
                        <img src={photo2} alt="" />
                     </div>
                     <h4 className="reviewsTitle">Best Bakery in Town</h4>
                     <p className="reviewsText">"Copy Writers ambushed her, made her drunk with Longe and Parole. A small river named Duden flows by their place"</p>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="reviewsPhotos">
                        <div className="stars"></div>
                        <img src={photo3} alt="" />
                     </div>
                     <h4 className="reviewsTitle">Well Organized</h4>
                     <p className="reviewsText">«And if she hasn’t been rewritten, then they are still using her. A small river named Duden flows by their place"</p>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="reviewsPhotos">
                        <div className="stars"></div>
                        <img src={photo4} alt="" />
                     </div>
                     <h4 className="reviewsTitle">Tasty like grandma's</h4>
                     <p className="reviewsText">"Blue and purple clouds rushed over the earth. Pigeons in the squares were busy in the treetops dropping twigs."</p>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="reviewsPhotos">
                        <div className="stars"></div>
                        <img src={photo5} alt="" />
                     </div>
                     <h4 className="reviewsTitle">Good service</h4>
                     <p className="reviewsText">"The peasants looked at the fields with alarm. The spring was uneven, the weather changed constantly."</p>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </section>
   )
};