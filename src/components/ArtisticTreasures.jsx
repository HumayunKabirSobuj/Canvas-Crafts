import { useLoaderData } from "react-router-dom";
import ArtisticTreasuresCards from "./ArtisticTreasuresCards";


const ArtisticTreasures = () => {
    const loddedCrafts = useLoaderData();
    // console.log(loddedCrafts)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loddedCrafts.map(craft => <ArtisticTreasuresCards key={craft._id} craft={craft}></ArtisticTreasuresCards>)
            }
        </div>
    );

};

export default ArtisticTreasures;