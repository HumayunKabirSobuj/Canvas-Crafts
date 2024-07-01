
const TermsAndCondition = () => {
    return (
        <div>
            <div>
                <div className="space-y-5 lg:mb-10 mb-6 ">
                    <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center lg:text-6xl text-3xl font-bold font-sans bg-gradient-to-r from-primary via-red-600 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">About Us</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" className="text-center lg:text-3xl text-base font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">WELCOME TO OUR COMPANY WEBSITE</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:items-center">

                    <div className="lg:hidden flex items-center">
                        <img className="w-1/2 mx-auto" src="https://i.ibb.co/4SrFn6w/logo.png" alt="" />
                    </div>
                    <div className="lg:col-span-2 space-y-4">

                        <p className=" lg:text-3xl text-2xl font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300% ">About our Company & Terms :</p>

                        {/* acordian start here */}

                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Privacy Policy
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        Please review our Privacy Policy, which governs the manner in which we collect, use, and disclose information.                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Intellectual Property
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Canvas Crafts and is protected by copyright and other intellectual property laws.


                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Client ResponsibilitiesProduct Information
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        We strive to provide accurate descriptions and images of our products. However, we do not warrant that product descriptions or other content on this site are accurate, complete, reliable, current, or error-free.

                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Pricing and Payment
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        All prices displayed on our website are in [currency] and are subject to change without notice. We reserve the right to refuse or cancel any orders placed for products listed at the incorrect price.

                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Shipping and Delivery
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        Please review our Shipping Policy for information on shipping rates, delivery times, and international orders.

                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Returns and Exchanges

                                </div>
                                <div className="collapse-content">
                                    <p>
                                        Please review our Return Policy for information on returns, exchanges, and refunds.

                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* acordian start here */}

                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="3000" className=" lg:flex hidden items-center">
                        <img className="w-full" src="https://i.ibb.co/4SrFn6w/logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndCondition;