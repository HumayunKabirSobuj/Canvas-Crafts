import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyArtAndCraftCard = ({ craft }) => {
    const { _id, item_name,  price, rating, customization, stockStatus, image } = craft;
    
    

   
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-side-drab.vercel.app/crafts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Craft has been deleted.",
                                icon: "success"
                            });
                            window. location. reload();
                            // const remaining = crafts.filter(craft => craft._id !== id);
                            // setCrafts(remaining);
                        }

                    })

            }
        });



    }

   
    return (
        // <div >
        //     <div className="card card-side bg-base-100 shadow-xl my-5 flex lg:flex-row flex-col">
        //         <div className=' lg:w-1/3 w-full'>
        //             <figure><img className=' w-full h-[400px] lg:px-0 px-5  rounded-xl' src={image} alt="Craft" /></figure>
        //         </div>
        //         <div className="card-body flex-1 space-y-5">
        //             <h2 className='font-bold'><span className='text-2xl'>Item_Name :</span> {item_name} </h2>
        //             <h2 className='font-medium text-xl'><span >Customization :</span> <span className='text-xs'>{customization}</span> </h2>
        //             <div className='font-medium text-xl'><span >rating :</span> <span className='text-xs'>{rating}</span>

        //                 <div className="rating rating-sm rating-half">
        //                     <input type="radio" name="rating-10" className="rating-hidden" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
        //                     <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        //                 </div>
        //             </div>
        //             <h2 className='font-medium text-xl'><span >Stock Status :</span> <span className='text-xs'>{stockStatus}</span> </h2>

        //             <h2 className='font-medium text-xl'><span >Price :</span> <span className='text-lg font-bold  text-green-500'>{price} $</span> </h2>

        //             <div className='flex items-center lg:justify-start lg:gap-10 justify-between px-5'>
                        
        //                 <Link to={`/updateCraft/${_id}`} className="mt-5 btn rounded-xl bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 w-1/2">Update</Link>
        //                 <button onClick={() => handleDelete(_id)} className='mt-5 btn rounded-xl bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 w-1/2'>Delete</button>
        //             </div>



        //         </div>
        //     </div>
        // </div>

        <div className="mb-10">
            <div>
                <div className="hero mt-5 border-2 border-green-500 rounded-xl bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="">
                            <img src={image} className="lg:w-[270px] w-[500px] h-[270px] lg:h-[200px] rounded-lg shadow-2xl" />
                        </div>
                        <div className=" lg:w-[1000px]">
                            <h1 className="text-3xl font-bold">{item_name}</h1>
                            <p className="py-6"> </p>
                            <div className="lg:flex  gap-10">
                                <p className="flex gap-2 items-center"> <span className="font-bold">Price:</span> {price} $</p>
                                <p className="flex gap-2 items-center"> <span className="font-bold">Rating: </span>{rating}  </p>
                                <p> <span className="font-bold">Customaization: </span>{customization} </p>
                                <p> <span className="font-bold">Stock Status: </span>{stockStatus} </p>
                            </div>

                            <div className="lg:flex gap-8 justify-center md:flex md:gap-10 space-x-1 mt-5 ">
                                {/* <Link
                                    to={`/crafts/${_id}`}
                                    className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
                                >
                                    View Details
                                </Link> */}
                                <Link
                                    to={`/updateCraft/${_id}`}
                                    className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                                    Update
                                </Link>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn lg:w-[200px] w-20 bg-red-500 text-xl text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MyArtAndCraftCard.propTypes = {
    craft: PropTypes.object,

}
export default MyArtAndCraftCard;