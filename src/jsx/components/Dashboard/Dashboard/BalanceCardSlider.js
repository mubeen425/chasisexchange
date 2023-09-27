import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper";

import "swiper/css";

import TotalBalanceArea from "./TotalBalanceArea";
import ProfitLossArea from "./ProfitLossArea";
import TotaldipositChart from "./TotaldipositChart";

const BalanceCardSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        speed={1500}
        slidesPerView={4}
        spaceBetween={20}
        loop={false}
        //autoplay= {{
        //delay: 1200,
        //}}
        //modules={[ Autoplay ]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          416: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1788: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="card card-height card-wiget">
            <div className="card-body">
              <div className="card-wiget-info">
                <h4 className="count-num">Customers</h4>
                <p>16 </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-wiget">
            <div className="card-body">
              <div className="card-wiget-info">
                <h4 className="count-num">Suppliers</h4>
                <p>14</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-wiget">
            <div className="card-body">
              <div className="card-wiget-info">
                <h4 className="count-num">Purchases</h4>
                <p className="sm-chart">10</p>
              </div>
              {/* <div id="TotaldipositChart"></div> */}
              {/* <TotaldipositChart /> */}
            </div>
            {/* <div className="back-icon">
              <svg
                width="138"
                height="113"
                viewBox="0 0 138 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <path
                    d="M119.285 -15.4771H113.59V4.77299H133.524V-1.23874C133.524 -9.08974 127.136 -15.4771 119.285 -15.4771Z"
                    fill="#9568FF"
                  />
                  <path
                    d="M99.3521 -49.0015H42.3988C39.7777 -49.0015 37.6527 -46.8765 37.6527 -44.2554V4.77188H104.098V-44.2554C104.098 -46.8765 101.973 -49.0015 99.3521 -49.0015Z"
                    fill="#9568FF"
                  />
                  <path
                    d="M28.1602 -15.4771H14.8711C10.898 -15.4771 7.16314 -13.9305 4.35502 -11.122C1.5466 -8.31391 0 -4.57905 0 -0.605927V4.77299H28.1602V-15.4771Z"
                    fill="#9568FF"
                  />
                  <path
                    d="M108.211 59.8423C108.211 66.8647 113.998 75.3463 121.183 75.3463H157.254C159.875 75.3463 162 73.2213 162 70.6002V49.0845C162 46.4634 159.875 44.3384 157.254 44.3384H121.183C113.998 44.3384 108.211 52.82 108.211 59.8423ZM128.777 59.8414C128.777 62.4628 126.652 64.5875 124.031 64.5875C121.41 64.5875 119.285 62.4628 119.285 59.8414C119.285 57.2203 121.41 55.0953 124.031 55.0953C126.652 55.0953 128.777 57.2203 128.777 59.8414Z"
                    fill="#9568FF"
                  />
                  <path
                    d="M105.012 76.6807C101.013 71.8922 98.719 65.7555 98.719 59.8437C98.719 53.932 101.013 47.7953 105.012 43.0068C109.406 37.7452 115.15 34.8476 121.184 34.8476H153.774V20.6093C153.774 19.8236 153.719 19.0516 153.615 18.2966C153.293 15.9761 151.277 14.2656 148.935 14.2656H0V96.7621C0 105.716 6.38731 113 14.2383 113H139.535C147.386 113 153.774 105.716 153.774 96.7621V84.8399H121.184C115.15 84.8399 109.406 81.9422 105.012 76.6807Z"
                    fill="#9568FF"
                  />
                </g>
              </svg>
            </div> */}
          </div>
        </SwiperSlide>
     
      </Swiper>
    </>
  );
};
export default BalanceCardSlider;
