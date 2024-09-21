// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';



const CustomerReviews = () => {
    return (
        <div style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
            <Swiper
                breakpoints={{
                    640: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 2,
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
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                            <img src={`https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Tom-Cruise-1140x785.jpg`} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                        </div>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>Tom Cruise</h2>
                        <p style={{ textAlign: 'center', fontSize: '18px' }}>Fantastic service and top-quality products. I highly recommend this to everyone.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CustomerReviews;
