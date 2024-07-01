
import ScrollIntoView from 'react-scroll-into-view'

const ReleventSection = () => {
    return (
        <div>
            <div className="text-center lg:my-10 my-8 space-y-5">

                <h1 data-aos="fade-down" data-aos-duration="1000" className="lg:text-7xl text-3xl font-bold font-sans bg-gradient-to-r from-primary via-red-600 to-secondary text-transparent bg-clip-text animate-gradient bg-300%" >Canvas Crafts</h1>
                <p data-aos="fade-up" data-aos-duration="1000" className="lg:text-3xl text-base font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">FIND YOUR PRODUCT, FOR YOUR ABAILITY</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-4 lg:mx-36 lg:my-20 md:mx-20 md:my-20 mx-20 my-14 md:grid-cols-3 grid-cols-2 items-center">
                <img data-aos="fade-right" data-aos-duration="1500" className="h-[200px]  w-full rounded-2xl" src="https://i.ibb.co/JsnksX3/card1.jpg" alt="" />

                <img data-aos="fade-right" data-aos-duration="1500" className="h-[200px] w-full rounded-2xl" src="https://i.ibb.co/G3dJfdx/card4-1.jpg" alt="" />

                <img data-aos="fade-left" data-aos-duration="1500" className="h-[200px] w-full rounded-2xl" src="https://i.ibb.co/QkMGN6r/card5.jpg" alt="" />

                <img data-aos="fade-left" data-aos-duration="1500" className="h-[200px] w-full rounded-2xl" src="https://i.ibb.co/yfxtXpT/card6.jpg" alt="" />

                <img data-aos="fade-right" data-aos-duration="1000" className="h-[200px] w-full rounded-2xl hidden md:flex" src="https://i.ibb.co/XkknF4t/4.jpg" alt="" />
                <img data-aos="fade-right" data-aos-duration="1000" className="h-[200px] w-full rounded-2xl hidden md:flex" src="https://i.ibb.co/MDkPPnM/3.jpg" alt="" />

                <img data-aos="fade-left" data-aos-duration="1000" className="h-[200px] w-full rounded-2xl hidden lg:flex" src="https://i.ibb.co/19Yg77X/2.jpg" alt="" />
                <img data-aos="fade-left" data-aos-duration="1000" className="h-[200px] w-full rounded-2xl hidden lg:flex" src="https://i.ibb.co/87By2f6/1-jpg.jpg" alt="" />

                <img data-aos="fade-right" data-aos-duration="500" className="h-[200px] w-full rounded-2xl hidden lg:flex" src="https://i.ibb.co/jvZZpZV/2-1.jpg" alt="" />
                <img data-aos="fade-right" data-aos-duration="500" className="h-[200px] w-full rounded-2xl hidden lg:flex" src="https://i.ibb.co/XkknF4t/4.jpg" alt="" />
                <img data-aos="fade-left" data-aos-duration="500" className="h-[200px] w-full rounded-2xl hidden lg:flex" src="https://i.ibb.co/9hFDFsY/6.jpg" alt="" />
                <img data-aos="fade-left" data-aos-duration="500" className="h-[200px] w-full rounded-2xl hidden lg:flex" src="https://i.ibb.co/jvZZpZV/2-1.jpg" alt="" />

            </div>

            <div className="text-center">


                <ScrollIntoView selector="#navbar" >
                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                        <button className="btn rounded-xl bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">Show All Products</button>
                    </button>
                </ScrollIntoView>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-2 my-5">
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">2200 <br /> Clients</p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">3050 <br /> Bookings</p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">120 <br /> Swimmings</p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">1500 <br /> Apartments</p>
                </div>


            </div>

            <div className='my-5'>

                <h1 className="text-3xl font-bold text-center my-8">Contact US</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' >
                    <div className="card card-compact  bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/QP3qR6m/autor-image-5-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Jhon</h2>
                            <p>Email : jhon1122@gmail.com</p>
                            <p>Phone : 017XXXXXXXX</p>
                            
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/YpB1R63/autor-image-4-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Rohan</h2>
                            <p>Email : rohan1122@gmail.com</p>
                            <p>Phone : 018XXXXXXXX</p>
                            
                        </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/B3JTD3f/autor-image-1-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bilton</h2>
                            <p>Email : bilton1122@gmail.com</p>
                            <p>Phone : 019XXXXXXXX</p>
                            
                        </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/HPnqjBJ/autor-image-3-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Deny</h2>
                            <p>Email : deny1122@gmail.com</p>
                            <p>Phone : 015XXXXXXXX</p>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ReleventSection;