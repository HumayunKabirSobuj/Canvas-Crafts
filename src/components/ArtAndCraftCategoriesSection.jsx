import { Link } from "react-router-dom";
import { Autoplay, Pagination } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

const ArtAndCraftCategoriesSection = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-4">Art & Craft Categories Section</h2>
            <div className="flex  items-center">

                   
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            350: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                      
                        <SwiperSlide>
                            <Link to='/CreativeExpressions' ><div className=" bg-base-100 border border-r-0 h-[220px] flex items-center">
                                <div>
                                    <figure className="">

                                        <img src="https://i.ibb.co/PGhQF8h/catagory2.jpg" alt="catagory" className="rounded-xl w-screen h-[150px]  " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-xl font-bold">Creative Expressions</h2>

                                    </div>
                                </div>
                            </div></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/HandcraftedWonders' ><div className=" bg-base-100 border border-r-0 h-[220px] flex items-center">
                                <div>
                                    <figure className="">

                                        <img src="https://i.ibb.co/7V2Cphq/catagory3.jpg" alt="catagory" className="rounded-xl w-screen h-[150px]  " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-xl font-bold">Handcrafted Wonders</h2>

                                    </div>
                                </div>
                            </div></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/HandcraftedWonders' ><div className=" bg-base-100 border border-r-0 h-[220px] flex items-center">
                                <div>
                                    <figure className="">

                                        <img src="https://i.ibb.co/47rzh96/catagory1.jpg" alt="catagory" className="rounded-xl w-screen h-[120px] " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-xl font-bold">Artisan Delights</h2>

                                    </div>
                                </div>
                            </div></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/MasterpieceCollections' ><div className=" bg-base-100 border border-r-0 h-[220px] flex items-center">
                                <div>
                                    <figure className="">

                                        <img src="https://i.ibb.co/GngXpHy/catagory4.jpg" alt="catagory" className="rounded-xl w-screen h-[150px]  " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-xl font-bold">Masterpiece Collections</h2>

                                    </div>
                                </div>
                            </div></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/ArtisticTreasures' ><div className=" bg-base-100 border border-r-0 h-[220px] flex items-center">
                                <div>
                                    <figure className="">

                                        <img src="https://i.ibb.co/ggNq4Js/catagory5.jpg" alt="catagory" className="rounded-xl w-screen h-[120px]  " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-xl font-bold">Artistic Treasures</h2>

                                    </div>
                                </div>
                            </div></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/CraftedElegance' ><div className=" bg-base-100 border border-r-0 h-[220px] flex items-center">
                                <div>
                                    <figure className="">

                                        <img src="https://i.ibb.co/yXR5z4J/catagory6.jpg" alt="catagory" className="rounded-xl w-screen h-[120px]  " />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-xl font-bold">Crafted Elegance</h2>

                                    </div>
                                </div>
                            </div></Link>
                        </SwiperSlide>
                        
                        
                        
                      
                       

                    </Swiper>
                   

                </div>
        </div>
    );
};

export default ArtAndCraftCategoriesSection;