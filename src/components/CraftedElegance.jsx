import { useLoaderData } from "react-router-dom";
import CraftedEleganceCards from "./CraftedEleganceCards";


const CraftedElegance = () => {
    const loddedCrafts = useLoaderData();
    console.log(loddedCrafts)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loddedCrafts.map(craft => <CraftedEleganceCards key={craft._id} craft={craft}></CraftedEleganceCards>)
            }
        </div>
    );
};

export default CraftedElegance;