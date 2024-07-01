// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllArtCraftItems = () => {
    const loddedCrafts = useLoaderData();
    // console.log(loddedCrafts)
    // const [crafts, setCrafts] = useState(loddedCrafts);
    // console.log(crafts)
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden lg:flex">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th >Item_Name</th>
                            <th>Subcategory_Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loddedCrafts.map(craft =>
                                <tr key={craft._id}>
                                    <th className="hidden lg:flex">
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3 lg:flex ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12 ">
                                                    <img src={craft.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{craft.item_name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <div className="font-bold">{craft.subcategory_Name}</div>
                                    </td>
                                    <td>{craft.price} $</td>
                                    <th className="flex lg:flex-row flex-col">
                                        <Link to={`/crafts/${craft._id}`} className="btn  btn-sm hover:bg-secondary">Details</Link>

                                    </th>
                                </tr>
                            )
                        }
                        {/* row 1 */}

                        {/* row 2 */}

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default AllArtCraftItems;