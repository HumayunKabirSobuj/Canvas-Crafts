import { useLoaderData } from "react-router-dom";
import CreativeExpressionsCards from "./CreativeExpressionsCards";


const CreativeExpressions = () => {
    const loddedCrafts=useLoaderData();
    console.log(loddedCrafts)
    
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loddedCrafts.map(craft=><CreativeExpressionsCards key={craft._id} craft={craft}></CreativeExpressionsCards>)
            }
        </div>
    );
};

export default CreativeExpressions;