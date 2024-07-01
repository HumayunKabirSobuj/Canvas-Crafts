import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {

    const loddedCraft=useLoaderData();
    // console.log(loddedCraft)
    const {_id,item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, image }=loddedCraft;
    // console.log(item_name)

    const handleCraftUpdate=(e)=>{
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const image = form.image.value;
       
        const craftItem = {item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, image };
        console.log(craftItem)
        fetch(`https://assignment-10-server-side-drab.vercel.app/crafts/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(craftItem)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount >0){
                toast.success("Craft Information Updated Succesfully")
            }
        })

    }
    return (
        <div>
            <div className="bg-[#F4F3F0] rounded-xl">
                <h2 className="text-3xl text-center font-bold pt-5">Update Craft</h2>
                <form onSubmit={handleCraftUpdate} className=" pt-5 pb-5 px-5 md:px-0 space-y-5 " >
                    {/* user name and user email row */}
                   
                    {/* item name and Subcategory_Name row */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Item_Name</span>
                            </label>
                            <input type="text" name="item_name" defaultValue={item_name} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Subcategory_Name</span>
                            </label>
                            <input type="text" name="subcategory_Name" defaultValue={subcategory_Name} className="input input-bordered" required />
                        </div>

                    </div>
                    {/* short description and price*/}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="short_description" defaultValue={short_description} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input type="text" name="price" defaultValue={price} className="input input-bordered" required />
                        </div>


                    </div>
                    {/* rating and customization */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization" defaultValue={customization} className="input input-bordered" required />
                        </div>


                    </div>
                    {/* processing_time and stockStatus */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Processing_Time</span>
                            </label>
                            <input type="text" name="processing_time" defaultValue={processing_time} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" name="stockStatus" defaultValue={stockStatus} className="input input-bordered" required />
                        </div>


                    </div>
                    {/* Photo URL */}
                    <div className="md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image </span>
                            </label>
                            <input type="url" name="image" defaultValue={image} className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="md:w-3/4 gap-5 mx-auto">

                        <input type="submit" value="Update" className="btn bg-[#D2B48C] w-full" />

                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateCraft;