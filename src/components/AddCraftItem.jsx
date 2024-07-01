import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const AddCraftItem = () => {
    const { user } = useContext(AuthContext);
    const UserEmail = user?.email;
    const UserName = user?.displayName;

    const handleAddCraftItem = (e) => {
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
        const name = UserName;
        const email = UserEmail;

        const craftItem = { name, email, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, image };
        console.log(craftItem)





        fetch('https://assignment-10-server-side-drab.vercel.app/crafts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craftItem)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("New Craft Added Succesfully")
                form.reset();
            })
    }

    return (
        <div>

            <div className="bg-[#F4F3F0] rounded-xl">
                <h2 className="text-3xl text-center font-bold pt-5">Add Craft Item</h2>
                <form onSubmit={handleAddCraftItem} className=" pt-5 pb-5 px-5 md:px-0 space-y-5 " >
                    {/* user name and user email row */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} disabled className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Email </span>
                            </label>
                            <input type="text" name="quantity" defaultValue={user?.email} disabled className="input input-bordered" required />
                        </div>


                    </div>
                    {/* item name and Subcategory_Name row */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Item_Name</span>
                            </label>
                            <input type="text" name="item_name" placeholder="Clay-made,Terra Cotta,Ceramics ETC" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Subcategory_Name</span>
                            </label>
                            <input type="text" name="subcategory_Name" placeholder=" Pots, Plates, Vases,Bowls, Figurines, ETC" className="input input-bordered" required />
                        </div>

                    </div>
                    {/* short description and price*/}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>


                    </div>
                    {/* rating and customization */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization" placeholder="Example- yes, no" className="input input-bordered" required />
                        </div>


                    </div>
                    {/* processing_time and stockStatus */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Processing_Time</span>
                            </label>
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" name="stockStatus" placeholder="Example- In stock, Made to Order" className="input input-bordered" required />
                        </div>


                    </div>
                    {/* Photo URL */}
                    <div className="md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image </span>
                            </label>
                            <input type="url" name="image" placeholder="Image_URL" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="md:w-3/4 gap-5 mx-auto">

                        <input type="submit" value="Add" className="btn bg-[#D2B48C] w-full" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;