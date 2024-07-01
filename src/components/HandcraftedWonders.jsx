import { useLoaderData } from "react-router-dom";
import HandcraftedWondersCards from "./HandcraftedWondersCards";

const HandcraftedWonders = () => {

    const loddedCrafts = useLoaderData();
    // console.log(loddedCrafts)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loddedCrafts.map(craft => <HandcraftedWondersCards key={craft._id} craft={craft}></HandcraftedWondersCards>)
            }
        </div>
    );

};

export default HandcraftedWonders;