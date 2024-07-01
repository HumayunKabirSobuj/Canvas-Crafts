
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperSlider = () => {


    return (
        <div className='lg:mt-5 mt-4'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide><div id="slide1" className="carousel-item relative w-full h-[500px] ">
                    {/* <img src="https://i.ibb.co/ZTmnL8F/slider1.jpg" className="w-full rounded-2xl" /> */}
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/ZTmnL8F/slider1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[ ' Artisan', ' Design',' Canvas', ' Crafts',]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>

                                
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div id="slide2" className="carousel-item relative w-full h-[500px] ">
                    {/* <img src="https://i.ibb.co/SXSdpv9/slider2.jpg" className="w-full rounded-2xl" /> */}
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/SXSdpv9/slider2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[' Design', 'Canvas', ' Crafts', ' Artisan']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>

                              

                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide ><div id="slide3" className="carousel-item relative w-full h-[500px]">
                    {/* <img src="https://i.ibb.co/K9wHf2V/slider3.jpg" className="w-full rounded-2xl" /> */}
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/K9wHf2V/slider3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[' Canvas', ' Artisan', ' Design', ' Crafts']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>
                                
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide  > <div id="slide4" className="carousel-item relative w-full h-[500px]">
                    {/* <img src="https://i.ibb.co/Lr6jCcP/slider4.jpg" className="w-full rounded-2xl" /> */}
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/Lr6jCcP/slider4.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[' Canvas', ' Crafts', ' Artisan', ' Design']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>

                               
                            </div>
                        </div>
                    </div>

                </div></SwiperSlide>


            </Swiper>

        </div>
    );
};

export default SwiperSlider;