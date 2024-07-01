import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import MyArtAndCraftCard from "./MyArtAndCraftCard";

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext);
    const loddedCrafts = useLoaderData();
    // console.log(loddedCrafts)
    const userEmail = user?.email;

    // const crafts = loddedCrafts.filter(crafts => crafts.email === userEmail);
    const crafts = loddedCrafts.filter(crafts => crafts.email === userEmail);

    // console.log(crafts)

    



    return (


        <div>
            {
                crafts.map(craft=><MyArtAndCraftCard craft={craft} key={craft._id}></MyArtAndCraftCard>)
            }
           



        </div>
    );
};

export default MyArtAndCraftList;