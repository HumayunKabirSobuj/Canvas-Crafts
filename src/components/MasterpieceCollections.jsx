import { useLoaderData } from "react-router-dom";
import MasterpieceCollectionsCards from "./MasterpieceCollectionsCards";


const MasterpieceCollections = () => {
    const loddedCrafts = useLoaderData();
    console.log(loddedCrafts)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loddedCrafts.map(craft => <MasterpieceCollectionsCards key={craft._id} craft={craft}></MasterpieceCollectionsCards>)
            }
        </div>
    );

};

export default MasterpieceCollections;