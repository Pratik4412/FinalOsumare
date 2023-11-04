import React from "react";
import Slider from "react-slick";
import { carData } from "./cardData";

export default function Cars() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    spaceBetween: 20,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialslide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
    <div className="cars">
      <h2>Hour Work</h2>
      <Slider {...settings}>
        {carData.map((item) => (
          <div className="car">
            <div className="car-top">
              <img src={item.Image} alt="main" />
            </div>
          </div>
        ))}
      </Slider>
      <div className="btn-button">
        <a href="/"><button>View All</button></a>
      </div>
    </div>
    </>
  );
}

// import React from "react";
// import lofo from "../Images/services/Frame.png";
// import { carData } from "./cardData";

// const Cars = () => {
//   var swiper = new Swiper(".vihicles-slider", {
//     slidesPerView: 1,
//     spaceBetween
//   })
//   return (
//     <>
//       <section className="featured" id="featured">
//         <h1>
//           Hour Work <img src={lofo} alt="" />
//         </h1>
//         <div className="swiper featured-slider">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide box">
//               {carData.map((item) => (
//                 <div className="car">
//                   <div className="car-top">
//                     <img src={item.Image} alt="main" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cars;
