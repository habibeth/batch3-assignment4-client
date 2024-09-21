// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';


import brand1 from "../../../assets/brands/a4tech.png"
import brand2 from "../../../assets/brands/aula.png"
import brand3 from "../../../assets/brands/fantech.png"
import brand4 from "../../../assets/brands/ganmedius.png"
import brand5 from "../../../assets/brands/hp.png"
import brand6 from "../../../assets/brands/Lenovo_logo_2015.svg.png"
import brand7 from "../../../assets/brands/logitech.png"
import brand8 from "../../../assets/brands/nzxt.png"
import brand9 from "../../../assets/brands/rapoo.png"
import brand10 from "../../../assets/brands/Raser.png"
import brand11 from "../../../assets/brands/xpg.png"

const TopBrand = () => {
    return (
        <div style={{ maxWidth: "1280px", margin: 'auto', }}>
            <h2 style={{ textAlign: 'center', fontSize: '24px', margin: '20px 0' }}>Top Brands</h2>
            <Swiper
                breakpoints={{
                    640: {
                        // width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 6,
                    },
                }}
                // slidesPerView={6}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={brand1} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand2} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand3} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand4} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand5} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand6} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand7} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand8} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand9} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand10} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brand11} alt="brand" style={{ width: '100%', border: "1px solid", padding: '10px' }} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopBrand;