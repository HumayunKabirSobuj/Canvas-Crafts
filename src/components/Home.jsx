import { useLoaderData } from "react-router-dom";
import ArtAndCraftCategoriesSection from "./ArtAndCraftCategoriesSection";
import SwiperSlider from "./SwiperSlider";
import CraftItemsSections from "./CraftItemsSections";
import TermsAndCondition from "./TermsAndCondition";
import Footer from "./Footer";
import ReleventSection from "./ReleventSection";

const Home = () => {
    const loddedCrafts = useLoaderData();
    console.log(loddedCrafts)
    return (
        <div>
            <SwiperSlider></SwiperSlider>
            <div className="my-5">
                <h2 className="font-bold text-3xl text-center">Craft Items Section</h2>

                <div id="catagories" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5 " >
                    {
                        loddedCrafts.slice(0, 6).map(craft => <CraftItemsSections key={craft._id} craft={craft}></CraftItemsSections>)
                    }

                </div>
            </div>

            <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>

            <TermsAndCondition></TermsAndCondition>
            <ReleventSection></ReleventSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;