import { useLoaderData } from "react-router-dom";
import ArtisianDelightsCards from "./ArtisianDelightsCards";


const ArtisianDelights = () => {
    const loddedCrafts = useLoaderData();
    console.log(loddedCrafts)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loddedCrafts.map(craft => <ArtisianDelightsCards key={craft._id} craft={craft}></ArtisianDelightsCards>)
            }
        </div>
    );

};


export default ArtisianDelights;